# Boya Badana Istanbul

Istanbul odakli, Next.js App Router uzerinde kurulmus, SEO guclu ve blog altyapili boya badana web sitesi.

## Teknoloji

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Server Component agirlikli yapi
- Statik uretilebilir hizmet, ilce ve blog sayfalari

## Kurulum

1. Bagimliliklari kurun:

```bash
npm install
```

2. Ortam degiskenlerini hazirlayin:

```bash
cp .env.example .env.local
```

3. Gelistirme sunucusunu baslatin:

```bash
npm run dev
```

4. Tarayicida acin:

```bash
http://localhost:3000
```

## Uretim komutlari

```bash
npm run build
npm run start
npm run lint
```

## Ortam degiskenleri

`.env.example` icindeki degiskenler:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_PHONE_DISPLAY`
- `NEXT_PUBLIC_PHONE_HREF`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL`

WhatsApp ve telefon bilgileri `lib/config.ts` uzerinden merkezi olarak kullanilir.

## Proje yapisi

```text
app/
  [districtSlug]/page.tsx
  blog/
  hizmetler/
  boya-badana-fiyatlari/
  galeri/
  hakkimizda/
  iletisim/
components/
data/
lib/
public/images/
```

## Icerik yapisi

- `data/districts.ts`: ilce landing page verileri
- `data/services.ts`: hizmet sayfalari
- `data/blogs.ts`: blog yazilari
- `data/faqs.ts`: sayfa bazli SSS verileri
- `data/gallery.ts`: galeri kartlari

## SEO

Projede asagidaki SEO katmanlari bulunur:

- Sayfa bazli unique metadata
- Canonical URL
- Open Graph
- Twitter Card
- JSON-LD schema
- `robots.ts`
- `sitemap.ts`
- Statik rota uretimi

## Form akisi

- Ana sayfa, fiyatlar ve iletisim sayfasindaki form istemci tarafinda mock olarak calisir.
- Gonderim sonrasi tesekkur mesaji gosterir.
- Kullaniciya WhatsApp uzerinden hizli fiyat alma yolu sunar.
- Backend entegrasyonu icin yapi ayrismis halde tutulmustur.

## Notlar

- Placeholder gorseller `public/images` altindadir.
- Google Maps alani env degiskeniyle kolayca gercek embed baglantisina cevrilebilir.
- Yasal metin sayfalari iskelet olarak hazirlanmistir; canli kullanima gecmeden once gercek sirket bilgileriyle guncellenmelidir.
