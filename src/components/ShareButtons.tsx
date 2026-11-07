"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8 17v-7H6v7h2zM7 8.8A1.2 1.2 0 1 0 7 6.4a1.2 1.2 0 0 0 0 2.4zM18 17v-3.9c0-2-1.1-3-2.6-3-1.3 0-1.9.7-2.2 1.2V10h-2.1c0 .6 0 7 0 7h2.1v-3.7c0-.2 0-.4.1-.5.2-.4.5-.9 1.2-.9 1 0 1.4.7 1.4 1.8V17H18z" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.861 9.861 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0012.04 0C5.463 0 .102 5.335.099 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.91 11.91 0 005.705 1.455h.005c6.578 0 11.939-5.336 11.942-11.893A11.821 11.821 0 0020.452 3.488z" />
    </svg>
  );
}

const buttonClass =
  "inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        <LinkedinIcon className="h-4 w-4" />
        LinkedIn
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        <WhatsappIcon className="h-4 w-4" />
        WhatsApp
      </a>
      <button type="button" onClick={copyLink} className={buttonClass}>
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
        <span aria-live="polite">{copied ? "Enlace copiado" : "Copiar enlace"}</span>
      </button>
    </div>
  );
}
