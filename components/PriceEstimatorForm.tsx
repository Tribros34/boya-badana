"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

import { districts } from "@/data/districts";
import { getWhatsAppUrl } from "@/lib/config";
import { buildLeadMessage } from "@/lib/utils";

type SubmissionState = {
  name: string;
  district: string;
  propertyType: string;
  propertyStatus: string;
};

type PriceEstimatorFormProps = {
  title?: string;
  description?: string;
};

const propertyTypes = ["1+1", "2+1", "3+1", "4+1", "Ofis", "Villa"];

export function PriceEstimatorForm({
  title = "Fotoğraf gönder, yaklaşık fiyat çerçevesini hızlıca netleştirelim",
  description = "Form gönderimi şu anda örnek akışla çalışır. Kayıtlar console.log'a düşer ve sonrasında WhatsApp üzerinden fotoğraf göndermeniz için hızlı yol sunar.",
}: PriceEstimatorFormProps) {
  const [submitted, setSubmitted] = useState<SubmissionState | null>(null);

  const thankYouMessage = useMemo(() => {
    if (!submitted) {
      return null;
    }

    return buildLeadMessage({
      district: submitted.district,
      propertyType: submitted.propertyType,
      propertyStatus: submitted.propertyStatus,
    });
  }, [submitted]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      district: String(formData.get("district") ?? ""),
      propertyType: String(formData.get("propertyType") ?? ""),
      propertyStatus: String(formData.get("propertyStatus") ?? ""),
      ceilingPaint: String(formData.get("ceilingPaint") ?? ""),
      humidity: String(formData.get("humidity") ?? ""),
      photoName:
        formData.get("photos") instanceof File
          ? (formData.get("photos") as File).name
          : "",
    };

    // Mock submit action for backend integration.
    console.log("lead-form", payload);

    setSubmitted({
      name: payload.name,
      district: payload.district,
      propertyType: payload.propertyType,
      propertyStatus: payload.propertyStatus,
    });

    event.currentTarget.reset();
  }

  return (
    <section className="grid gap-8 rounded-[32px] border border-stone-200 bg-white p-6 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
          Fiyatı netleştir
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          {title}
        </h2>
        <p className="mt-4 leading-8 text-slate-600">{description}</p>

        <div className="mt-8 space-y-4 rounded-[24px] bg-stone-50 p-5">
          <h3 className="text-lg font-semibold text-slate-900">
            Fiyatı en çok ne etkiler?
          </h3>
          <ul className="space-y-3 text-sm leading-7 text-slate-600">
            <li>Dairenin metrekaresi ve oda sayısı</li>
            <li>Boş ya da eşyalı olması</li>
            <li>Tavan, alçı, sıva ve zımpara ihtiyacı</li>
            <li>Rutubet, küf veya leke durumu</li>
            <li>Seçilecek boya markası ve ürün tipi</li>
            <li>İlçe, ulaşım ve ekip planlaması</li>
          </ul>
        </div>

        {submitted && thankYouMessage ? (
          <div className="mt-6 rounded-[24px] border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-sm font-semibold text-emerald-800">
              Teşekkürler {submitted.name || "değerli ziyaretçi"}.
            </p>
            <p className="mt-2 text-sm leading-7 text-emerald-900">
              Dilerseniz fotoğrafları WhatsApp&rsquo;tan göndererek daha hızlı fiyat
              alabilirsiniz.
            </p>
            <Link
              className="mt-4 inline-flex text-sm font-semibold text-emerald-800"
              href={getWhatsAppUrl(thankYouMessage)}
              target="_blank"
              rel="noreferrer"
            >
              Fotoğraf Gönder, Ortalama Fiyat Al
            </Link>
          </div>
        ) : null}
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-800">
            Ad Soyad
            <input
              name="name"
              required
              className="rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
              placeholder="Adınız Soyadınız"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-800">
            Telefon
            <input
              name="phone"
              type="tel"
              required
              className="rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
              placeholder="05XX XXX XX XX"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-slate-800">
          İlçe seçimi
          <select
            name="district"
            required
            defaultValue=""
            className="rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
          >
            <option value="" disabled>
              İlçe seçin
            </option>
            {districts.map((district) => (
              <option key={district.slug} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-800">
            Daire tipi
            <select
              name="propertyType"
              required
              defaultValue=""
              className="rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
            >
              <option value="" disabled>
                Daire tipi seçin
              </option>
              {propertyTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-800">
            Ev durumu
            <select
              name="propertyStatus"
              required
              defaultValue=""
              className="rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
            >
              <option value="" disabled>
                Seçim yapın
              </option>
              <option value="Boş">Boş</option>
              <option value="Eşyalı">Eşyalı</option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-800">
            Tavan boyanacak mı?
            <select
              name="ceilingPaint"
              defaultValue=""
              className="rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
            >
              <option value="" disabled>
                Seçim yapın
              </option>
              <option value="Evet">Evet</option>
              <option value="Hayır">Hayır</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-800">
            Rutubet/küf var mı?
            <select
              name="humidity"
              defaultValue=""
              className="rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
            >
              <option value="" disabled>
                Seçim yapın
              </option>
              <option value="Var">Var</option>
              <option value="Yok">Yok</option>
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Fotoğraf yükleme alanı
          <input
            name="photos"
            type="file"
            className="rounded-2xl border border-dashed border-stone-300 px-4 py-3 text-sm text-slate-600"
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Gönder
          </button>
          <Link
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-950"
          >
            WhatsApp&rsquo;tan fotoğraf gönder
          </Link>
        </div>
      </form>
    </section>
  );
}
