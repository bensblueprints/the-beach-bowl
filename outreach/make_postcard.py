"""Generate a 2-sided 6x4in printable postcard PDF for The Beach Bowl recipe book."""
from io import BytesIO
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
from reportlab.lib.pagesizes import inch
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parent.parent
IMG_DIR = ROOT / "public" / "menu"
OUT_PDF = Path(__file__).resolve().parent / "beach-bowl-recipe-postcard.pdf"

# Postcard: USPS-standard 6 x 4.25 inches (clears first-class postcard rate).
W = 6.0 * inch
H = 4.25 * inch

# Brand colors
INK = HexColor("#1a1625")
ACAI = HexColor("#6b3fa0")
ACAI_DEEP = HexColor("#472470")
CORAL = HexColor("#ff6f61")
SEAFOAM = HexColor("#4fc3a1")
SAND = HexColor("#fdf9f2")
SAND_2 = HexColor("#f8f0e0")

# ---------- Try to register nicer fonts if present on Windows ----------
def register_font(name, candidates):
    for p in candidates:
        if Path(p).exists():
            try:
                pdfmetrics.registerFont(TTFont(name, p))
                return True
            except Exception:
                pass
    return False

DISPLAY = "Helvetica-Bold"
SERIF = "Helvetica-BoldOblique"
SERIF_REG = "Helvetica"

win_fonts = Path("C:/Windows/Fonts")
if register_font("Display", [str(win_fonts / "georgiab.ttf")]):
    DISPLAY = "Display"
if register_font("SerifIt", [str(win_fonts / "georgiai.ttf"), str(win_fonts / "georgiaz.ttf")]):
    SERIF = "SerifIt"
if register_font("SerifReg", [str(win_fonts / "georgia.ttf")]):
    SERIF_REG = "SerifReg"


def make_hero_background():
    """Build a blurred, tinted composite from real product photos for the front."""
    bg = Image.new("RGB", (1800, 1275), "#2a1346")
    shots = [
        ("acai_bowl_traditional.jpg", (-90, -140, 1100, 1100)),
        ("boba_strawberry.jpg", (900, 250, 780, 780)),
        ("smoothie_cherry_chocolate.jpg", (500, 800, 560, 560)),
    ]
    for name, (x, y, w, h) in shots:
        p = IMG_DIR / name
        if not p.exists():
            continue
        im = Image.open(p).convert("RGB").resize((w, h))
        # Soft mask with rounded corners
        mask = Image.new("L", (w, h), 0)
        d = ImageDraw.Draw(mask)
        d.rounded_rectangle((0, 0, w, h), radius=min(w, h) // 5, fill=255)
        mask = mask.filter(ImageFilter.GaussianBlur(30))
        bg.paste(im, (x, y), mask)

    # Tint/darken for legibility
    overlay = Image.new("RGB", bg.size, "#2a1346")
    bg = Image.blend(bg, overlay, 0.45)
    bg = bg.filter(ImageFilter.GaussianBlur(8))
    out = BytesIO()
    bg.save(out, format="JPEG", quality=88)
    out.seek(0)
    return out


def make_cover_thumb():
    """Small 'book cover' image for the front panel."""
    p = IMG_DIR / "acai_pb.jpg"
    im = Image.open(p).convert("RGB").resize((600, 800))
    # Overlay gradient bottom
    grad = Image.new("L", im.size, 0)
    gd = ImageDraw.Draw(grad)
    for y in range(im.size[1]):
        a = int(255 * max(0, (y - 350) / (im.size[1] - 350)))
        gd.line([(0, y), (im.size[0], y)], fill=a)
    dark = Image.new("RGB", im.size, "#1a1625")
    im = Image.composite(dark, im, grad)
    out = BytesIO()
    im.save(out, format="JPEG", quality=90)
    out.seek(0)
    return out


def draw_front(c: canvas.Canvas):
    # Background composite
    c.drawImage(
        Image.open(make_hero_background()).filename
        if False else BytesIO_to_reader(make_hero_background()),
        0, 0, W, H, mask="auto"
    )
    # Softening dark veil
    c.setFillColorRGB(0.10, 0.07, 0.18, alpha=0.55)
    c.rect(0, 0, W, H, stroke=0, fill=1)

    # Decorative color disc top-right (coral)
    c.setFillColor(CORAL)
    c.circle(W - 0.55 * inch, H - 0.55 * inch, 0.42 * inch, stroke=0, fill=1)
    c.setFillColor(SAND)
    c.setFont(DISPLAY, 13)
    c.drawCentredString(W - 0.55 * inch, H - 0.58 * inch - 3, "$9.99")
    c.setFont(SERIF_REG, 6)
    c.drawCentredString(W - 0.55 * inch, H - 0.42 * inch, "LAUNCH")

    # Kicker
    c.setFillColor(SAND)
    c.setFont(DISPLAY, 7.5)
    c.drawString(0.4 * inch, H - 0.45 * inch, "THE BEACH BOWL  ·  DOOR COUNTY, WI")

    # Headline
    c.setFont(DISPLAY, 42)
    c.setFillColor(SAND)
    c.drawString(0.4 * inch, H - 1.35 * inch, "Sun. Sand. Açaí.")
    c.setFont(SERIF, 42)
    c.setFillColor(HexColor("#ffb4a2"))
    c.drawString(0.4 * inch, H - 1.85 * inch, "At home, all year.")

    # Subhead
    c.setFont(SERIF_REG, 11)
    c.setFillColor(SAND)
    text = c.beginText(0.4 * inch, H - 2.2 * inch)
    text.setLeading(14)
    for line in [
        "The complete Beach Bowl recipe book.",
        "Every bowl, boba, smoothie & loaded mac —",
        "ratioed, timed, and instantly downloadable.",
    ]:
        text.textLine(line)
    c.drawText(text)

    # CTA pill
    cta_x, cta_y, cta_w, cta_h = 0.4 * inch, 0.55 * inch, 3.2 * inch, 0.42 * inch
    c.setFillColor(SAND)
    c.roundRect(cta_x, cta_y, cta_w, cta_h, cta_h / 2, stroke=0, fill=1)
    c.setFillColor(INK)
    c.setFont(DISPLAY, 10)
    c.drawString(cta_x + 0.2 * inch, cta_y + 0.15 * inch, "GET THE RECIPE BOOK  —  $9.99  >>")

    # Secondary URL line
    c.setFillColor(SAND)
    c.setFont(SERIF_REG, 9)
    c.drawString(0.4 * inch, 0.3 * inch, "beachbowl.advancedmarketing.co/#recipes")

    # Price stamp (big crossed-out)
    c.saveState()
    c.translate(W - 1.2 * inch, 1.1 * inch)
    c.rotate(-8)
    c.setFillColor(SAND)
    c.setFont(DISPLAY, 14)
    c.drawCentredString(0, 16, "ONLINE ONLY")
    c.setFont(SERIF, 30)
    c.setFillColor(HexColor("#ffb4a2"))
    c.drawCentredString(0, -18, "$9.99")
    c.setFont(SERIF_REG, 10)
    c.setFillColor(SAND)
    c.drawCentredString(0, -38, "reg. $14.99")
    c.restoreState()


def BytesIO_to_reader(bio):
    from reportlab.lib.utils import ImageReader
    return ImageReader(bio)


def draw_back(c: canvas.Canvas):
    # Sand background
    c.setFillColor(SAND)
    c.rect(0, 0, W, H, stroke=0, fill=1)

    # Subtle color bar at top
    c.setFillColor(ACAI_DEEP)
    c.rect(0, H - 0.35 * inch, W, 0.35 * inch, stroke=0, fill=1)
    c.setFillColor(SAND)
    c.setFont(DISPLAY, 8)
    c.drawString(0.3 * inch, H - 0.22 * inch, "THE BEACH BOWL  —  RECIPE BOOK POSTCARD")
    c.drawRightString(W - 0.3 * inch, H - 0.22 * inch, "advancedmarketing.co")

    # --- Left half: message ---
    lx = 0.3 * inch
    ly = H - 0.6 * inch

    c.setFillColor(ACAI_DEEP)
    c.setFont(SERIF, 22)
    c.drawString(lx, ly - 18, "Get the recipes.")
    c.setFont(SERIF, 22)
    c.setFillColor(CORAL)
    c.drawString(lx, ly - 42, "Online only — $9.99.")

    c.setFillColor(INK)
    c.setFont(SERIF_REG, 9.5)
    t = c.beginText(lx, ly - 70)
    t.setLeading(13)
    for line in [
        "Every bowl, every boba, every loaded mac —",
        "the way we make them in Door County.",
        "",
        "• 5 signature açaí bowls   • 12 boba recipes",
        "• 6 smoothies              • 4 loaded macs",
        "• Substitution & topping guide",
        "• Instant PDF — make it at home all winter.",
    ]:
        t.textLine(line)
    c.drawText(t)

    # Scan/visit block
    c.setStrokeColor(ACAI)
    c.setDash(2, 2)
    c.line(lx, 0.95 * inch, W / 2 - 0.15 * inch, 0.95 * inch)
    c.setDash()
    c.setFillColor(ACAI_DEEP)
    c.setFont(DISPLAY, 9)
    c.drawString(lx, 0.7 * inch, "VISIT")
    c.setFillColor(INK)
    c.setFont(SERIF_REG, 10)
    c.drawString(lx, 0.5 * inch, "beachbowl.advancedmarketing.co/#recipes")
    c.setFillColor(CORAL)
    c.setFont(DISPLAY, 8)
    c.drawString(lx, 0.3 * inch, "USE CODE: SUMMER  —  SAVE $5")

    # --- Right half: address + postage box ---
    mx = W / 2 + 0.05 * inch

    # Stamp box
    stamp_x = W - 0.95 * inch
    stamp_y = H - 1.6 * inch
    c.setStrokeColor(INK)
    c.setFillColor(SAND)
    c.setDash(3, 3)
    c.rect(stamp_x, stamp_y, 0.75 * inch, 0.9 * inch, stroke=1, fill=0)
    c.setDash()
    c.setFillColor(INK)
    c.setFont(SERIF_REG, 6)
    c.drawCentredString(stamp_x + 0.375 * inch, stamp_y + 0.52 * inch, "PLACE")
    c.drawCentredString(stamp_x + 0.375 * inch, stamp_y + 0.42 * inch, "STAMP")
    c.drawCentredString(stamp_x + 0.375 * inch, stamp_y + 0.32 * inch, "HERE")

    # Address lines
    c.setStrokeColor(INK)
    c.setLineWidth(0.6)
    top = H - 2.0 * inch
    for i in range(4):
        y = top - i * 0.35 * inch
        c.line(mx, y, W - 0.3 * inch, y)

    # Address block label
    c.setFont(DISPLAY, 7)
    c.setFillColor(ACAI)
    c.drawString(mx, top + 10, "TO:")

    # Return address label
    c.setFont(SERIF_REG, 7)
    c.setFillColor(INK)
    c.drawString(mx, 0.35 * inch, "From: The Beach Bowl · Door County, WI")

    # Divider spine
    c.setStrokeColor(HexColor("#d6c9ad"))
    c.setLineWidth(1)
    c.line(W / 2, 0.3 * inch, W / 2, H - 0.5 * inch)


def main():
    c = canvas.Canvas(str(OUT_PDF), pagesize=(W, H))
    c.setTitle("The Beach Bowl — Recipe Book Postcard")
    c.setAuthor("Advanced Marketing")

    draw_front(c)
    c.showPage()
    draw_back(c)
    c.showPage()
    c.save()
    print(f"Wrote {OUT_PDF}  ({OUT_PDF.stat().st_size / 1024:.1f} KB)")


if __name__ == "__main__":
    main()
