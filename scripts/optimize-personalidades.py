#!/usr/bin/env python3
"""
Optimiza las fotos de personalidades por año para /ediciones-anteriores.

Origen:  ~/Downloads/TImeline/<año>/<archivo original>
Destino: public/images/personalidades/<año>/<slug>.jpg

Las fotos llegan por tandas. Al recibir un año nuevo:
  1. agrega su bloque a MAPPING (nombre real -> archivo de origen tal cual),
  2. corre `python3 scripts/optimize-personalidades.py`,
  3. descomenta el `image` de esas personas en src/lib/personalidades-data.ts.

Requiere Pillow (`pip3 install Pillow`).
"""

import os
import re
import sys
import unicodedata

from PIL import Image, ImageFilter, ImageOps

SRC_ROOT = os.path.expanduser("~/Downloads/TImeline")
OUT_ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                        "public", "images", "personalidades")

# Formato de salida: 2:3 vertical (el de la tarjeta en la timeline).
# Nunca se hace upscale: un original de 400x600 se queda en 400x600.
MAX_W, MAX_H = 600, 900
RATIO = MAX_W / MAX_H
QUALITY = 82

# nombre real -> archivo dentro de SRC_ROOT/<año>/
MAPPING = {
    "2012": {
        "Edward Norton": "Edward_Norton.jpg",
        "Diego Luna": "Diego_Luna.png",
        "Gael García Bernal": "Gael_GarcíaBernal.png",
        "Matt Dillon": "Matt_Dillon.png",
        "Octavia Spencer": "Allison Janney, Tate Taylor and Octavia Spencer .jpg",
    },
    "2013": {
        "Julieta Venegas": "JulietaVenegas.png",
        "Gael García Bernal": "GaelGarciBernal.png",
        "Ana De la Reguera": "AnaDelaReguera.jpg",
        "Daniel Jiménez Cacho": "DanielJimenezCacho.png",
        "Paola Núñez": "PaolaNuñez.png",
    },
    "2014": {
        "Reese Witherspoon": "Reese Witherspoon3.jpg",
        "Rosario Dawson": "Rosario Dawson.jpg",
        "Natalia Tena": "NataliaTena.jpg",
        "Eiza González": "EizaGonzalez.png",
        "Johanna Murillo": "JohannaMurillo.png",
    },
    "2015": {
        "Liam Neeson": "Liam Neeson.png",
        "Jared Leto": "JaredLeto.jpg",
        "Manolo Caro": "ManoloCaro.png",
        "Humberto Busto": "HumbertoBusto.png",
        "Alosian Vivancos": "Alosian Vivancos.png",
    },
    # Pendientes de foto — misma convención al llegar:
    # "2016": {"Monica Bellucci": "MonicaBelucci.jpg", ...}
    # "2017", "2018", "2019", "2022", "2025"
}


def slugify(name: str) -> str:
    """Misma convención que public/images/comunidad: sin acentos, ñ->n, kebab-case."""
    ascii_name = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-zA-Z0-9]+", "-", ascii_name).strip("-").lower()


def to_portrait(im: Image.Image) -> Image.Image:
    """Devuelve la imagen en 2:3 vertical, sin ampliar."""
    im = ImageOps.exif_transpose(im).convert("RGB")
    w, h = im.size

    if w > h:
        # Apaisada (p. ej. 2012/Gael_GarcíaBernal.png, 1024x595): en vez de recortar
        # a ciegas, se monta sobre un lienzo 2:3 con su propio fondo desenfocado.
        cw = min(MAX_W, w)
        ch = round(cw / RATIO)
        bg = ImageOps.fit(im, (cw, ch), Image.LANCZOS, centering=(0.5, 0.5))
        bg = bg.filter(ImageFilter.GaussianBlur(radius=max(8, cw * 0.06)))
        bg = bg.point(lambda p: int(p * 0.5))
        fg = im.copy()
        fg.thumbnail((cw, ch), Image.LANCZOS)
        bg.paste(fg, ((cw - fg.width) // 2, (ch - fg.height) // 2))
        return bg

    # Vertical: recorte 2:3 sesgado hacia arriba para no decapitar a nadie.
    out_w = min(MAX_W, w)
    out_h = round(out_w / RATIO)
    if out_h > h:
        out_h = h
        out_w = round(h * RATIO)
    return ImageOps.fit(im, (out_w, out_h), Image.LANCZOS, centering=(0.5, 0.22))


def convert(src_path: str, out_path: str) -> int:
    with Image.open(src_path) as im:
        out = to_portrait(im)
    out.save(out_path, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    return os.path.getsize(out_path)


def main() -> int:
    if not os.path.isdir(SRC_ROOT):
        print(f"No existe el origen: {SRC_ROOT}", file=sys.stderr)
        return 1

    total = count = missing = 0
    for year, people in sorted(MAPPING.items()):
        src_dir = os.path.join(SRC_ROOT, year)
        out_dir = os.path.join(OUT_ROOT, year)
        if not os.path.isdir(src_dir):
            print(f"[{year}] carpeta de origen ausente, se omite")
            continue
        os.makedirs(out_dir, exist_ok=True)

        for name, filename in people.items():
            src = os.path.join(src_dir, filename)
            if not os.path.isfile(src):
                print(f"[{year}] FALTA: {filename} ({name})", file=sys.stderr)
                missing += 1
                continue
            out = os.path.join(out_dir, f"{slugify(name)}.jpg")
            size = convert(src, out)
            total += size
            count += 1
            print(f"[{year}] {name:32s} -> {os.path.basename(out):34s} {size // 1024:4d} KB")

    print(f"\n{count} fotos, {total / 1024 / 1024:.2f} MB en {OUT_ROOT}")
    if missing:
        print(f"{missing} archivo(s) de origen no encontrados.", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
