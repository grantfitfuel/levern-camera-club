"""Shrink photos to web size and strip hidden metadata (including GPS location).

Any JPEG/PNG/WebP under images/ whose long edge is over MAX_EDGE pixels, or that
carries EXIF metadata, is resized and re-saved in place. Already-small, clean
images are left alone, so running this repeatedly is safe.
"""
import pathlib
from PIL import Image, ImageOps

MAX_EDGE = 2000
JPEG_QUALITY = 85
changed = []

for path in sorted(pathlib.Path("images").rglob("*")):
    if path.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
        continue
    with Image.open(path) as im:
        has_exif = bool(im.getexif())
        too_big = max(im.size) > MAX_EDGE
        if not (has_exif or too_big):
            continue
        out = ImageOps.exif_transpose(im)  # keep the photo the right way up
        if too_big:
            out.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
        fmt = (im.format or "JPEG").upper()
        if fmt == "JPEG":
            out = out.convert("RGB")
            out.save(path, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
        elif fmt == "PNG":
            out.save(path, "PNG", optimize=True)
        else:
            out.save(path, fmt, quality=JPEG_QUALITY)
    changed.append(str(path))

print("\n".join(changed) if changed else "Nothing to resize.")
