import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conoce cómo Selekta recopila, utiliza y protege tus datos personales al contactarnos a través de nuestro sitio web.",
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    title: "Política de Privacidad | Selekta",
    description:
      "Conoce cómo Selekta recopila, utiliza y protege tus datos personales al contactarnos a través de nuestro sitio web.",
    url: "https://www.selektafood.com/privacidad",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Selekta — Selección inteligente para la agroindustria",
      },
    ],
  },
};

export default function PrivacidadPage() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100">
              Legal
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-accent-800 sm:text-4xl">
              Política de Privacidad
            </h1>
            <p className="mt-3 text-xs text-neutral-500">
              Última actualización: agosto de 2026
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="space-y-8 text-sm leading-relaxed text-neutral-700">
            <p>
              En Selekta valoramos tu privacidad y nos comprometemos a
              proteger los datos personales que nos proporcionas a través de
              este sitio web, en cumplimiento de la Ley N.° 29733, Ley de
              Protección de Datos Personales del Perú, y su reglamento
              vigente.
            </p>

            <div>
              <h2 className="mb-2 text-lg font-bold text-accent-800">
                1. Responsable del tratamiento
              </h2>
              <p>
                Selekta es responsable del tratamiento de los datos
                personales recopilados a través de{" "}
                <strong>www.selektafood.com</strong>. Para cualquier consulta
                sobre esta política, puedes escribirnos a{" "}
                <a
                  href="mailto:contacto@selektafood.com"
                  className="font-semibold text-brand-600 hover:text-brand-700"
                >
                  contacto@selektafood.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-accent-800">
                2. Qué datos recopilamos
              </h2>
              <p>
                Cuando completas nuestro formulario de contacto recopilamos
                únicamente los datos que nos proporcionas voluntariamente:
                nombre, empresa, correo electrónico, teléfono, tipo de
                cultivo y el mensaje que escribas. No recopilamos datos
                sensibles ni información financiera a través del sitio.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-accent-800">
                3. Para qué utilizamos tus datos
              </h2>
              <p>
                Usamos esta información exclusivamente para responder tu
                consulta, contactarte respecto a nuestros servicios y darte
                seguimiento comercial. No utilizamos tus datos para fines
                distintos a los indicados ni los usamos para enviarte
                comunicaciones no solicitadas.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-accent-800">
                4. Con quién compartimos tus datos
              </h2>
              <p>
                Tus datos no se venden ni se comparten con terceros con fines
                comerciales. Utilizamos{" "}
                <strong>Resend</strong>, un proveedor de servicios de envío
                de correo electrónico, únicamente como intermediario técnico
                para que tu mensaje llegue al equipo de Selekta. El contenido
                de tu formulario se envía directamente por correo al equipo
                comercial y no se almacena en ninguna base de datos del
                sitio web.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-accent-800">
                5. Tiempo de conservación
              </h2>
              <p>
                Al no contar con una base de datos, tus datos permanecen
                únicamente en las bandejas de correo del equipo de Selekta,
                por el tiempo necesario para atender tu consulta y mantener
                el registro de la relación comercial.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-accent-800">
                6. Cookies y tecnologías de rastreo
              </h2>
              <p>
                Actualmente este sitio no utiliza cookies de analítica,
                publicidad ni rastreo de terceros. Si en el futuro
                incorporamos herramientas como Google Analytics u otras,
                actualizaremos esta política y solicitaremos tu
                consentimiento cuando corresponda.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-accent-800">
                7. Tus derechos
              </h2>
              <p>
                Como titular de tus datos personales, tienes derecho a
                acceder, rectificar, cancelar y oponerte (derechos ARCO) al
                tratamiento de tu información, así como a solicitar su
                portabilidad, conforme a la normativa peruana vigente. Para
                ejercer estos derechos, escríbenos a{" "}
                <a
                  href="mailto:contacto@selektafood.com"
                  className="font-semibold text-brand-600 hover:text-brand-700"
                >
                  contacto@selektafood.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-accent-800">
                8. Cambios a esta política
              </h2>
              <p>
                Podemos actualizar esta Política de Privacidad
                periódicamente para reflejar cambios en nuestras prácticas o
                por requerimientos legales. La fecha de la última
                actualización siempre estará visible al inicio de esta
                página.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
