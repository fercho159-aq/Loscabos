#!/usr/bin/env python3
"""
Optimiza las fotos de personalidades por año para /ediciones-anteriores.

Origen:  ~/Downloads/TImeline/<año>/ o ~/Downloads/<año>/
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

from PIL import Image, ImageOps

# El cliente manda las carpetas por año en cualquiera de estas raíces.
SRC_ROOTS = [os.path.expanduser("~/Downloads/TImeline"), os.path.expanduser("~/Downloads")]
OUT_ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                        "public", "images", "personalidades")

# Formato de salida: 2:3 vertical (el de la tarjeta en la timeline).
# Nunca se hace upscale: un original de 400x600 se queda en 400x600.
MAX_W, MAX_H = 600, 900
RATIO = MAX_W / MAX_H
QUALITY = 82

# nombre real -> archivo dentro de <año>/, o (archivo, cx, cy[, zoom]) para reencuadrar.
# cx/cy son 0..1 sobre el original: 0.5 = centro, 0 = izquierda/arriba.
# zoom > 1 recorta más cerrado (para sujetos lejanos en planos generales).
# Solo se especifican cuando el recorte 2:3 por defecto pierde al sujeto
# (típico en fotos apaisadas de alfombra roja con el logo ocupando media foto).
MAPPING = {
    "2012": {
        "Edward Norton": "Edward_Norton.jpg",
        "Diego Luna": "Diego_Luna.png",
        "Gael García Bernal": ("Gael_GarcíaBernal.png", 0.5, 0.3),  # apaisada
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
    "2016": {
        "Monica Bellucci": "MonicaBelucci.jpg",
        "Jacob Tremblay": ("JacobTremblay.jpg", 0.46, 0.6, 1.9),
        "Lyn May": ("LynMay.jpg", 0.2, 0.2),
        "Natalia Lafourcade": "NataliaLafourcade.jpg",
        "Tony Dalton": ("TonyDalton.jpg", 0.72, 0.5),
    },
    "2017": {
        "Nicole Kidman": "NicoleKidman.png",
        "Dolores Heredia": "Dolores_Heredia.png",
        "Sophie Alexander": "Sophie_Alexander.png",
        "Michel Franco": "Michel_Franco.png",
        "Zuria Vega y Alberto Guerra": "ZuriaVegayAlbertoGuerra.png",
    },
    "2018": {
        "Adam Driver": "AdamDriver.jpg",
        "Rebecca Jones": "Rebecca Jones.jpg",
        "Martha Higareda": "MartaHiagerda.jpg",
        "Terry Gilliam": ("TerryGilliam.jpg", 0.55, 0.5),
        "Spike Lee": "SpikeLee.jpg",
    },
    "2019": {
        "Robert De Niro": "RobertDeniro.jpg",
        "Yalitza Aparicio": "YalitzaAparicio.jpg",
        "Cassandra Sánchez Navarro": "CassandraSanchezNavarro.jpg",
        "Ludwika Paleta": "LudwikaPaleta.jpg",
        "Ira Sachs": "IraSachs.jpg",
    },
    "2022": {
        "Karla Souza": "KarlaSouza.png",
        "Ana Valeria Becerril": "AnaValeriaBecerril.png",
        "Christian Chávez": "Christian Chávez.png",
        "Michelle Renaud": "MichelleRenaud.png",
        "Marian Mathias y Joy Jorgensen": ("Marian Mathias y Joy Jorgensen.png", 0.46, 0.45),
    },
    "2025": {
        "Ed Maverick": ("EdMaverick.jpg", 0.52, 0.55, 1.9),
        "Eugenio Caballero": ("EugenioCaballero.JPG", 0.42, 0.755, 3.6),
        "Fernando Cattori": "Fernando Cattori.JPG",
        "Alejandro Puente": "AlejandroPuente.JPG",
        "Tessa Ia y Naian González Norvind": "TessaIayNaian.JPG",
        "Andrea Chaparro": "AndreaChaparro.JPG",
        "Lizeth Selene": "LizethSelene.JPG",
    },
}


def slugify(name: str) -> str:
    """Misma convención que public/images/comunidad: sin acentos, ñ->n, kebab-case."""
    ascii_name = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-zA-Z0-9]+", "-", ascii_name).strip("-").lower()


def to_portrait(im: Image.Image, centering, zoom: float) -> Image.Image:
    """Recorta a 2:3 vertical alrededor de `centering`, sin ampliar."""
    im = ImageOps.exif_transpose(im).convert("RGB")
    w, h = im.size

    if zoom <= 1:
        out_w = min(MAX_W, w)
        out_h = round(out_w / RATIO)
        if out_h > h:
            out_h = h
            out_w = round(h * RATIO)
        return ImageOps.fit(im, (out_w, out_h), Image.LANCZOS, centering=centering)

    # Zoom: se recorta a mano una ventana 2:3 más chica alrededor de (cx, cy)
    # y se deja al tamaño nativo del recorte (nunca se amplía).
    box_w = min(w, h * RATIO) / zoom
    box_h = box_w / RATIO
    cx, cy = centering
    left = min(max(cx * w - box_w / 2, 0), w - box_w)
    top = min(max(cy * h - box_h / 2, 0), h - box_h)
    crop = im.crop((round(left), round(top), round(left + box_w), round(top + box_h)))
    if crop.width > MAX_W:
        crop = crop.resize((MAX_W, round(MAX_W / RATIO)), Image.LANCZOS)
    return crop


def convert(src_path: str, out_path: str, centering, zoom: float) -> int:
    with Image.open(src_path) as im:
        if centering is None:
            # Apaisadas: el sujeto rara vez está arriba, así que se centra vertical.
            centering = (0.5, 0.35) if im.size[0] > im.size[1] else (0.5, 0.22)
        out = to_portrait(im, centering, zoom)
    out.save(out_path, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    return os.path.getsize(out_path)


def find_year_dir(year: str):
    for root in SRC_ROOTS:
        candidate = os.path.join(root, year)
        if os.path.isdir(candidate):
            return candidate
    return None


def main() -> int:
    total = count = missing = 0
    for year, people in sorted(MAPPING.items()):
        src_dir = find_year_dir(year)
        out_dir = os.path.join(OUT_ROOT, year)
        if src_dir is None:
            print(f"[{year}] carpeta de origen ausente, se omite")
            continue
        os.makedirs(out_dir, exist_ok=True)

        for name, entry in people.items():
            if isinstance(entry, tuple):
                filename, centering = entry[0], (entry[1], entry[2])
                zoom = entry[3] if len(entry) > 3 else 1.0
            else:
                filename, centering, zoom = entry, None, 1.0
            src = os.path.join(src_dir, filename)
            if not os.path.isfile(src):
                print(f"[{year}] FALTA: {filename} ({name})", file=sys.stderr)
                missing += 1
                continue
            out = os.path.join(out_dir, f"{slugify(name)}.jpg")
            size = convert(src, out, centering, zoom)
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
