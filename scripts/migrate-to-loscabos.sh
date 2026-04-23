#!/usr/bin/env bash
# Migración FICC → Loscabos
# Uso:
#   ./migrate-to-loscabos.sh           → migración real
#   ./migrate-to-loscabos.sh --test    → prueba: pushea test HTML a rama test-migration

set -euo pipefail

MODE="${1:-real}"
SRC="/Users/fernandotrejo/Developer/FICC"
REPO_URL="https://github.com/fercho159-aq/Loscabos.git"
LOG_DIR="$SRC/logs"
TS="$(date +%Y%m%d-%H%M%S)"
LOG="$LOG_DIR/migracion-$MODE-$TS.log"
WORK="$(mktemp -d -t loscabos-migration-XXXX)"

mkdir -p "$LOG_DIR"
exec > >(tee -a "$LOG") 2>&1

cleanup() {
  local code=$?
  echo "--- Cleanup (exit=$code) ---"
  rm -rf "$WORK"
  exit $code
}
trap cleanup EXIT

echo "=========================================="
echo "Migración FICC → Loscabos"
echo "Modo  : $MODE"
echo "Inicio: $(date)"
echo "Src   : $SRC"
echo "Repo  : $REPO_URL"
echo "Work  : $WORK"
echo "Log   : $LOG"
echo "=========================================="

# Pre-check: src dir
[[ -d "$SRC/.git" ]] || { echo "ERROR: $SRC no es repo git"; exit 1; }

# Clone destino
echo ">>> Clonando $REPO_URL ..."
git clone "$REPO_URL" "$WORK/Loscabos"
cd "$WORK/Loscabos"

# Identity para commits (no toca config global)
git config user.email "fernandotrejo159@gmail.com"
git config user.name "Fernando Trejo"

ORIGINAL_HEAD="$(git rev-parse HEAD)"
echo ">>> Loscabos HEAD actual: $ORIGINAL_HEAD"

# ======== MODO TEST ========
if [[ "$MODE" == "--test" ]]; then
  echo ">>> MODO TEST: creando rama test-migration"
  git checkout -b "test-migration-$TS"
  cat > test-migration.html <<HTML
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><title>Test migración</title></head>
<body>
  <h1>Prueba de migración FICC → Loscabos</h1>
  <p>Timestamp: $TS</p>
  <p>Si ves este archivo en GitHub, el push funciona.</p>
</body>
</html>
HTML
  git add test-migration.html
  git commit -m "test: verificar push migración ($TS)"
  echo ">>> Pushing test branch..."
  git push origin "test-migration-$TS"
  echo ">>> OK. Rama test-migration-$TS publicada."
  echo ">>> Verificar en: https://github.com/fercho159-aq/Loscabos/tree/test-migration-$TS"
  exit 0
fi

# ======== MODO REAL ========
echo ">>> MODO REAL: migración completa"

# 1. Conservar estado anterior en tag + rama
LEGACY_TAG="legacy-site-pre-ficc"
LEGACY_BRANCH="legacy-site"

if git rev-parse -q --verify "refs/tags/$LEGACY_TAG" >/dev/null; then
  echo "ADVERTENCIA: tag $LEGACY_TAG ya existe, usando sufijo fecha"
  LEGACY_TAG="legacy-site-pre-ficc-$TS"
fi

echo ">>> Creando tag $LEGACY_TAG en $ORIGINAL_HEAD"
git tag -a "$LEGACY_TAG" -m "Sitio Loscabos anterior a migración FICC ($(date +%F))"

if git show-ref --verify --quiet "refs/heads/$LEGACY_BRANCH"; then
  echo "ADVERTENCIA: rama $LEGACY_BRANCH ya existe, usando sufijo fecha"
  LEGACY_BRANCH="legacy-site-$TS"
fi

echo ">>> Creando rama $LEGACY_BRANCH en $ORIGINAL_HEAD"
git branch "$LEGACY_BRANCH" "$ORIGINAL_HEAD"

# 2. Limpiar main (preservar .git)
echo ">>> Limpiando contenido actual de main..."
git rm -rfq . || true
# Asegurar que no queden archivos no trackeados de versión anterior
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# 3. Copiar FICC (excluye build, deps, env, logs)
echo ">>> Copiando contenido FICC..."
rsync -a \
  --exclude='.git/' \
  --exclude='node_modules/' \
  --exclude='.next/' \
  --exclude='.DS_Store' \
  --exclude='.env' \
  --exclude='.env.local' \
  --exclude='.env.*.local' \
  --exclude='logs/' \
  --exclude='scripts/migrate-to-loscabos.sh' \
  --exclude='*.log' \
  --exclude='.vercel/' \
  --exclude='coverage/' \
  --exclude='out/' \
  --exclude='build/' \
  --exclude='*.tsbuildinfo' \
  "$SRC/" ./

# 4. Commit
git add -A
if git diff --cached --quiet; then
  echo "ERROR: no hay cambios para commit. Abort."
  exit 1
fi

echo ">>> Creando commit de migración..."
git commit -m "Migración sitio FICC Los Cabos

Reemplaza contenido anterior del repositorio con el nuevo sitio FICC
desarrollado en Next.js 15 + Tailwind v4 + GSAP.

Estado previo conservado en:
  - tag: $LEGACY_TAG
  - rama: $LEGACY_BRANCH

Origen: $SRC
Fecha: $(date -u +%FT%TZ)"

# 5. Push main + legacy branch + tag
echo ">>> Pushing legacy branch ($LEGACY_BRANCH)..."
git push origin "$LEGACY_BRANCH"

echo ">>> Pushing legacy tag ($LEGACY_TAG)..."
git push origin "$LEGACY_TAG"

echo ">>> Pushing main..."
git push origin main

echo "=========================================="
echo "Migración completa $(date)"
echo "Main    : https://github.com/fercho159-aq/Loscabos"
echo "Legacy  : https://github.com/fercho159-aq/Loscabos/tree/$LEGACY_BRANCH"
echo "Tag     : https://github.com/fercho159-aq/Loscabos/releases/tag/$LEGACY_TAG"
echo "=========================================="
