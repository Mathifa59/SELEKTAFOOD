from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(BASE, "public", "assets")

W, H = 1200, 630

def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

ACCENT_900 = hex_to_rgb("081733")
ACCENT_800 = hex_to_rgb("0c2347")
BRAND_950 = hex_to_rgb("162708")
BRAND_500 = hex_to_rgb("8cc63f")
LIME = hex_to_rgb("8cc63f")

# Diagonal gradient background: accent-900 -> accent-800 -> brand-950
base = Image.new("RGB", (W, H), ACCENT_900)
grad = Image.new("RGB", (W, H))
for y in range(H):
    for x_step in range(0, W, 4):
        t = ((x_step / W) * 0.55 + (y / H) * 0.45)
        if t < 0.5:
            tt = t / 0.5
            c = tuple(int(ACCENT_900[i] + (ACCENT_800[i] - ACCENT_900[i]) * tt) for i in range(3))
        else:
            tt = (t - 0.5) / 0.5
            c = tuple(int(ACCENT_800[i] + (BRAND_950[i] - ACCENT_800[i]) * tt) for i in range(3))
        for x in range(x_step, min(x_step + 4, W)):
            grad.putpixel((x, y), c)
base = grad

# Soft glow blobs (like the site's decorative blurs)
glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow_layer)
gd.ellipse([W - 480, -200, W + 100, 380], fill=BRAND_500 + (70,))
gd.ellipse([-200, H - 400, 350, H + 200], fill=LIME + (55,))
glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(90))
base = base.convert("RGBA")
base = Image.alpha_composite(base, glow_layer)

# Subtle dot grid pattern
dots = Image.new("RGBA", (W, H), (0, 0, 0, 0))
dd = ImageDraw.Draw(dots)
for gx in range(0, W, 28):
    for gy in range(0, H, 28):
        dd.ellipse([gx, gy, gx + 1.4, gy + 1.4], fill=(255, 255, 255, 18))
base = Image.alpha_composite(base, dots)

draw = ImageDraw.Draw(base)

# Logo: invert dark logo to white, keep alpha
logo = Image.open(os.path.join(ASSETS, "Recurso 1@4x.png")).convert("RGBA")
r, g, b, a = logo.split()
white_logo = Image.merge("RGBA", (
    Image.eval(r, lambda v: 255),
    Image.eval(g, lambda v: 255),
    Image.eval(b, lambda v: 255),
    a,
))
logo_w = 560
logo_h = int(logo.size[1] * (logo_w / logo.size[0]))
white_logo = white_logo.resize((logo_w, logo_h), Image.LANCZOS)
logo_x = (W - logo_w) // 2
logo_y = 210
base.paste(white_logo, (logo_x, logo_y), white_logo)

# Tagline
try:
    font_tagline = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 30)
    font_url = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 24)
except Exception:
    font_tagline = ImageFont.load_default()
    font_url = ImageFont.load_default()

tagline = "Selección inteligente para la agroindustria"
bbox = draw.textbbox((0, 0), tagline, font=font_tagline)
tw = bbox[2] - bbox[0]
draw.text(((W - tw) / 2, logo_y + logo_h + 34), tagline, font=font_tagline, fill=(214, 226, 214, 255))

# Bottom accent line + URL
line_y = H - 90
draw.line([(W/2 - 40, line_y), (W/2 + 40, line_y)], fill=LIME, width=3)

url_text = "selektafood.com"
bbox2 = draw.textbbox((0, 0), url_text, font=font_url)
uw = bbox2[2] - bbox2[0]
draw.text(((W - uw) / 2, line_y + 18), url_text, font=font_url, fill=LIME)

base = base.convert("RGB")
out_path = os.path.join(ASSETS, "og-image.jpg")
base.save(out_path, "JPEG", quality=92)
print("Saved:", out_path, base.size)
