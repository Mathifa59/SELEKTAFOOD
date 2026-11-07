export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Source = { text: string; url: string };

export type Post = {
  slug: string;
  title: string;
  category: string;
  author: { name: string; role: string };
  date: string;
  readTime: string;
  excerpt: string;
  shareDescription: string;
  cover: { src: string; width: number; height: number };
  ogImage: { src: string; width: number; height: number };
  body: Block[];
  sources?: Source[];
};

export const SITE_URL = "https://www.selektafood.com";

const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

export const posts: Post[] = [
  {
    slug: "selekta-catal15t-tec-de-monterrey",
    title:
      "Selekta participó en CATAL1.5°T, el programa de aceleración climática del Tec de Monterrey",
    category: "Noticias",
    author: { name: "Jorge Delgado", role: "COO" },
    date: "2026-11-07",
    readTime: "3 min",
    excerpt:
      "En diciembre de 2025 firmamos el convenio para participar en la tercera cohorte de CATAL1.5°T, un programa que acelera startups de tecnología climática en América Latina.",
    shareDescription:
      "En diciembre de 2025 firmamos el convenio para participar en la tercera cohorte de CATAL1.5°T, un programa que acelera startups de tecnología climática en América Latina.",
    cover: {
      src: "/assets/portada_articulo_1_catal15t.jpg",
      width: 1200,
      height: 630,
    },
    ogImage: {
      src: "/assets/portada_articulo_1_catal15t.jpg",
      width: 1200,
      height: 630,
    },
    body: [
      {
        type: "p",
        text: "En diciembre de 2025 Selekta fue seleccionada para la tercera cohorte de CATAL1.5°T, el programa de aceleración para startups de tecnología climática que el Tecnológico de Monterrey lidera en América Latina. Firmamos el convenio de colaboración el 10 de diciembre y el programa se desarrolló entre enero y junio de 2026.",
      },
      { type: "h2", text: "Qué es CATAL1.5°T" },
      {
        type: "p",
        text: "CATAL1.5°T es una iniciativa implementada por el Tecnológico de Monterrey, la Cooperación Alemana (GIZ) y EIT Climate-KIC, y financiada por el Green Climate Fund y el Ministerio Federal de Cooperación Económica y Desarrollo de Alemania (BMZ). Acompaña y financia startups latinoamericanas cuyo negocio ayuda a reducir emisiones o a adaptarse al cambio climático. En sus primeros tres años apoyó a 90 emprendimientos climáticos en 8 países.",
      },
      {
        type: "h2",
        text: "Por qué una empresa de selección de fruta en un programa climático",
      },
      {
        type: "p",
        text: "Antes de llegar a la planta, cada fruta ya consumió agua, fertilizante, combustible y frío. Si en la faja de selección se descarta una fruta apta por error, todo eso se pierde con ella.",
      },
      {
        type: "p",
        text: "Nuestro software clasifica la fruta por su calidad real con cámaras sincronizadas en la línea de selección, y reduce el descarte de fruta exportable. En 2024 eso significó 13.2 toneladas de fruta que no se descartaron por error. Esa relación entre merma y emisiones es la que nos llevó a postular.",
      },
      { type: "h2", text: "Con qué objetivos entramos" },
      {
        type: "p",
        text: "Postulamos en noviembre de 2025 con tres objetivos. El primero, llevar la tecnología a cítricos y uva, además del arándano y la palta, donde ya operamos. El segundo, avanzar en la protección internacional de nuestra patente peruana mediante el sistema PCT. El tercero, medir mejor el impacto climático de nuestro trabajo, con indicadores que podamos reportar a clientes e inversionistas.",
      },
      { type: "h2", text: "Qué nos deja el programa" },
      {
        type: "p",
        text: "Con el programa pudimos invertir más en validar nuevos cultivos y en adaptar nuestra tecnología a las variedades de cada uno. Cada cultivo, y cada variedad dentro de él, tiene defectos y formas distintas, y el sistema necesita aprenderlos antes de entrar a una línea de selección.",
      },
      {
        type: "p",
        text: "También mejoramos la forma en que medimos nuestro impacto ambiental y climático, con el apoyo de EIT Climate-KIC, que trabaja junto con el Tec de Monterrey en CATAL1.5°T. Ambos nos acompañaron durante todo el programa.",
      },
      {
        type: "p",
        text: "El programa también nos exigió reportar cada mes nuestros avances comerciales y financieros. Es una práctica que mantenemos después de terminar.",
      },
    ],
    sources: [
      {
        text: "CATAL1.5°T LATAM. Demo Day, Programa de Aceleración, Batch 3.",
        url: "https://luma.com/ogx3b1ge",
      },
      {
        text: "Descubre.vc. Convocatoria Tec de Monterrey y Cooperación Alemana: programa de aceleración para Climate Tech.",
        url: "https://www.descubre.vc/noticia/convocatoria-tec-de-monterrey-y-cooperaci-n-alemana-programa-de-aceleraci-n-para-climate-tech-2023-11-27",
      },
    ],
  },
  {
    slug: "resultados-un-ano-en-planta",
    title:
      "13.2 toneladas de fruta recuperada: lo que medimos en un año en planta",
    category: "Sostenibilidad",
    author: { name: "Jorge Delgado", role: "COO" },
    date: "2026-11-07",
    readTime: "3 min",
    excerpt:
      "En 2024 nuestro software evitó que 13.2 toneladas de fruta apta se descartaran por error. Te contamos cómo lo medimos y qué significa para una planta.",
    shareDescription:
      "En 2024 nuestro software evitó que 13.2 toneladas de fruta apta se descartaran por error. Te contamos cómo lo medimos y qué significa para una planta.",
    cover: { src: "/assets/CAMARAS EN FAJA 003.jpg", width: 1376, height: 768 },
    ogImage: {
      src: "/assets/og-resultados-un-ano.jpg",
      width: 1200,
      height: 630,
    },
    body: [
      {
        type: "p",
        text: "En 2024 Selekta operó en líneas de selección de arándano y palta en plantas agroexportadoras del Perú. Al cierre del año, nuestro registro mostró 13.2 toneladas de fruta que iban a descarte y que el sistema identificó como apta para exportar.",
      },
      { type: "h2", text: "Dos errores posibles en la faja" },
      {
        type: "p",
        text: "En una línea de selección se puede fallar de dos maneras. La primera es descartar fruta buena: la planta pierde producto que pudo venderse a precio de exportación. La segunda es dejar pasar fruta con defectos, que aparece después como reclamo o descuento del cliente en destino.",
      },
      {
        type: "p",
        text: "Selekta trabaja sobre los dos errores. En este artículo hablamos del primero, porque es el que se puede pesar.",
      },
      { type: "h2", text: "Cómo lo medimos" },
      {
        type: "p",
        text: "Lo medimos a partir de la cantidad de descarte que se calculó después de los procesos en planta. Las 13.2 toneladas corresponden a fruta apta para exportación que, sin el sistema, habría terminado en ese descarte.",
      },
      { type: "h2", text: "Qué significan 13.2 toneladas" },
      {
        type: "p",
        text: "Son 13.2 toneladas que entraron a la caja de exportación en lugar de ir a descarte o al mercado local a menor precio. Para la planta es ingreso sobre fruta que ya había pagado: se cosechó, se transportó y se procesó igual.",
      },
      { type: "h2", text: "El impacto en emisiones" },
      {
        type: "p",
        text: "Producir fruta genera emisiones antes de que llegue a la planta. Cuando esa fruta se descarta sin razón, esas emisiones se pierden con ella. Calculamos este impacto con la calculadora de ImpactNexus, de EIT Climate-KIC: recuperar 13.2 toneladas de fruta equivale a evitar 35.6 toneladas de CO2.",
      },
      { type: "h2", text: "Dónde estamos hoy" },
      {
        type: "p",
        text: "Desde entonces seguimos sumando plantas agroexportadoras, y el modelo ya está entrenado con más de 5 millones de imágenes reales de operación.",
      },
      {
        type: "p",
        text: "El siguiente paso es llevar esta misma medición a cítricos y uva, los cultivos a los que estamos ampliando la tecnología.",
      },
    ],
  },
  {
    slug: "palta-hass-defectos-seleccion-manual",
    title: "Palta Hass: los defectos que más se escapan en la selección manual",
    category: "Innovación agro",
    author: { name: "Jorge Delgado", role: "COO" },
    date: "2026-11-07",
    readTime: "3 min",
    excerpt:
      "Trips, roña, lenticelosis y daño mecánico. Qué son, por qué cuesta verlos en la faja y qué pasa cuando un error de selección se repite durante toda la campaña.",
    shareDescription:
      "Trips, roña, lenticelosis y daño mecánico. Qué son, por qué cuesta verlos en la faja y qué pasa cuando un error de selección se repite durante toda la campaña.",
    cover: { src: "/assets/FOTO SELECCION MANUAL.jpg", width: 852, height: 816 },
    ogImage: {
      src: "/assets/FOTO SELECCION MANUAL.jpg",
      width: 852,
      height: 816,
    },
    body: [
      {
        type: "p",
        text: "En 2025 el Perú exportó 722 mil toneladas de palta Hass, 38% más que el año anterior, y Europa recibió el 63% de ese volumen. Con esas cantidades, un error de selección que parece pequeño en porcentaje termina siendo de varias toneladas.",
      },
      {
        type: "p",
        text: "Estos son los defectos que más trabajo dan en la faja y las razones por las que la selección manual no siempre los detecta.",
      },
      { type: "h2", text: "Los defectos más comunes" },
      {
        type: "ul",
        items: [
          "Trips. El insecto daña la piel cuando el fruto todavía es pequeño. A medida que la palta crece, la marca se extiende y queda como una zona áspera y de color distinto.",
          "Roña. Es un hongo que deja manchas oscuras, rugosas y levantadas. El daño es sobre todo estético, pero baja la calidad de exportación. Suele aparecer donde los trips ya hirieron la piel.",
          "Lenticelosis. Son puntos oscuros en las lenticelas, los poros de la piel. Se relaciona con el estrés mecánico en cosecha y poscosecha, incluido el cepillado durante el lavado. En la Hass cuesta verla porque la piel se oscurece al madurar.",
          "Daño mecánico, golpes y cortes. Se producen al cosechar, transportar y manipular la fruta, y pueden abrir la puerta a enfermedades poscosecha.",
        ],
      },
      {
        type: "p",
        text: "Un estudio de la Universidad Nacional Agraria La Molina sobre lotes de palta Hass de exportación registró catorce defectos de calidad y cuatro de condición. El seleccionador no busca uno o dos problemas: compara cada fruto contra una lista larga mientras la faja avanza.",
      },
      { type: "h2", text: "Por qué la selección manual falla" },
      {
        type: "p",
        text: "El criterio cambia entre personas y también en una misma persona a lo largo del turno. La piel de la Hass es oscura y rugosa, y varios defectos se confunden con su textura normal. Con cansancio y fruta en movimiento, cada caso dudoso se resuelve de manera distinta según quién esté en la faja.",
      },
      { type: "h2", text: "Lo que cuesta un error" },
      {
        type: "p",
        text: "Una palta apta que se descarta termina en el mercado local o como desecho, a un precio muy por debajo del de exportación. Una palta con defecto que pasa puede generar un reclamo o un descuento en destino.",
      },
      {
        type: "p",
        text: "Un ejemplo para dimensionarlo: en una planta que procesa 1,000 toneladas en una campaña, un 1% de fruta apta descartada por error son 10 toneladas que salen del canal de exportación.",
      },
      { type: "h2", text: "Qué aporta la visión por computadora" },
      {
        type: "p",
        text: "Una investigación publicada en 2025 mostró que el análisis de imágenes puede identificar daños por trips, roña y raspaduras en palta Hass, y estimar el tamaño del fruto.",
      },
      {
        type: "p",
        text: "Selekta aplica ese principio en la línea de selección. Cámaras sincronizadas con la faja toman imágenes de cada fruto y nuestro software lo clasifica según su calidad real, con el mismo criterio durante todo el turno. El modelo está entrenado con más de 5 millones de imágenes reales de operación en plantas peruanas.",
      },
    ],
    sources: [
      {
        text: "Agraria.pe. Exportaciones peruanas de palta Hass podrían crecer entre 10% y 15% en volumen en 2026 (19 de febrero de 2026).",
        url: "https://agraria.pe/noticias/exportaciones-peruanas-de-palta-hass-podrian-crecer-entre-10-41695",
      },
      {
        text: "Hass Avocado Board. Manual de calidad del aguacate: defectos comunes de la fruta.",
        url: "https://hassavocadoboard.com/wp-content/uploads/Hass-Avocado-Board-07-Common-Fruit-Defects-Spanish.pdf",
      },
      {
        text: "Portal Frutícola. Guía fitosanitaria de la palta Hass en Perú (2026).",
        url: "https://www.portalfruticola.com/noticias/2026/08/11/palta-hass-fito/",
      },
      {
        text: "Ronceros Narrea, J. L. Uso de perfil analítico de la palta Hass de exportación para su clasificación. Universidad Nacional Agraria La Molina.",
        url: "https://repositorio.lamolina.edu.pe/items/403883cf-9de4-4789-93ab-9ca3362c74a9",
      },
      {
        text: "Identificación de defectos de calidad en frutos de aguacate Hass mediante procesamiento de imágenes (2025). FAO AGRIS.",
        url: "https://agris.fao.org/search/zh/records/6851798daab9439e79fccd07",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
