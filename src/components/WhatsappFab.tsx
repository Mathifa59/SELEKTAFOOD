const WHATSAPP_NUMBER = "51986616388";
const WHATSAPP_MESSAGE = "Hola, me interesa conocer más sobre Selekta y cómo puede ayudar a optimizar la selección en mi planta. ¿Podrían darme más información?";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.861 9.861 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0012.04 0C5.463 0 .102 5.335.099 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.91 11.91 0 005.705 1.455h.005c6.578 0 11.939-5.336 11.942-11.893A11.821 11.821 0 0020.452 3.488z" />
    </svg>
  );
}

export function WhatsappFab() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-9 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#25D366]/60 sm:bottom-12 sm:right-8 sm:h-16 sm:w-16"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
      />
      <WhatsappIcon className="relative h-7 w-7 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] hidden whitespace-nowrap rounded-lg bg-accent-900 px-3 py-1.5 text-xs font-semibold text-white shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Escríbenos
      </span>
    </a>
  );
}
