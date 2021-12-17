export default {
  global: {
    componenteFormativo: 'Medición de variables ambientales',
    descripcionCurso:
      'La medición de variables ambientales inicia con un plan de muestreo que determine el muestreo, el tipo de muestras, el protocolo de análisis y los instrumentos de medición. Luego, se recolecta la información para determinar la calidad del suelo y del agua, y se identifican los organismos bioindicadores del agroecosistema.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plan de muestreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Calidad del agua',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Calidad del suelo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Instrumentos de medición de variables',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Bioindicadores',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acevedo, A. (2004). Agricultura Sustentable. Silueta Ediciones. Corporación Autónoma Regional del Valle del Cauca [CVC]. (2015). Guía: Evaluación y monitoreo de los suelos.',
      link:
        'https://www.cvc.gov.co/sites/default/files/Sistema_Gestion_de_Calidad/Procesos%20y%20procedimientos%20Vigente/0130_Caracterizacion%20y%20Balance%20de%20los%20Recursos%20Naturales%20y%20sus%20Actores%20Sociales%20Relevantes/Guias/GU.0130.09%20Evaluacion%20y%20monitoreo%20de%20suelo.pdf',
    },
    {
      referencia:
        'Corporación Colombiana de Investigación Agropecuaria [AGROSAVIA]. (s. f.). Química Analítica. Gov.co.',
      link:
        'https://www.agrosavia.co/productos-y-servicios/servicios-de-laboratorio/qu%C3%ADmica-anal%C3%ADtica',
    },
    {
      referencia:
        'Fernández, L. (2020). Bioindicadores: qué son, tipos y ejemplos. Ecología Verde.',
      link:
        'https://www.ecologiaverde.com/bioindicadores-que-son-tipos-y-ejemplos-2846.html',
    },
    {
      referencia:
        'Galindo-Leva, L., Constantino-Chuaire, L., Benavides-Machado, P., Montoya-Restrepo, E. y Rodríguez-Valencia, N. (2012). Evaluación de macroinvertebrados acuáticos y calidad de agua en quebradas de fincas cafeteras de Cundinamarca y Santander, Colombia. Revista Cenicafé, 63(1), p. 70-92.',
      link:
        'https://biblioteca.cenicafe.org/bitstream/10778/514/1/arc063%281%2970-92.pdf ',
    },
    {
      referencia:
        'García, Y., Ramírez, W. y Sánchez, S. (2012). Indicadores de la calidad de los suelos: una nueva manera de evaluar este recurso. Pastos y Forrajes, 35(2), p. 125-138.',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S0864-03942012000200001&lng=es&tlng=es',
    },
    {
      referencia:
        'González, L. y Lozano, L. (2004). Bioindicadores como herramienta de evaluación de la calidad ambiental en la parte alta de la microcuenca las delicias. Umbral Científico, (5), p. 73-82.',
      link: 'https://www.redalyc.org/pdf/304/30400510.pdf',
    },
    {
      referencia:
        'Holt, E. y Miller, S. (2010). Bioindicators: Using Organisms to Measure Environmental Impacts. Nature Education Knowledge, 3(10), p 8.',
      link:
        'https://www.nature.com/scitable/knowledge/library/bioindicators-using-organisms-to-measure-environmental-impacts-16821310/',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (2017a). Sólidos suspendidos totales en agua secados a 103 – 105 ºC. Subdirección de Hidrología - Grupo Laboratorio de Calidad Ambiental.',
      link:
        'http://www.ideam.gov.co/documents/14691/38155/S%C3%B3lidos+Suspendidos+Totales+en+aguas.pdf/f02b4c7f-5b8b-4b0a-803a-1958aac1179c',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (2017b). Determinación de Escherichia Coli y coliformes totales en agua por el método de filtración por membrana en agar chromocult. Subdirección de Hidrología – Grupo Laboratorio de Calidad Ambiental.',
      link:
        'http://www.ideam.gov.co/documents/14691/38155/Coliformes+totales+y+E.+coli+en+Agua+Filtraci%C3%B3n+por+Membrana.pdf/5414795c-370e-48ef-9818-ec54a0f01174',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (2018). Protocolo de monitoreo del agua. Ministerio de Ambiente y Desarrollo Sostenible.',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/023773/PROTOCOLO_MONITOREO_AGUA_IDEAM.pdf',
    },
    {
      referencia:
        'Jiménez, R. y González-Quiñones, V. (2006). La calidad de los suelos como medida para su conservación. Edafología, 13(3). p. 125-138.',
      link: 'http://edafologia.ugr.es/revista/tomo13c/articulo125.pdf ',
    },
    {
      referencia:
        'Masera, O., Astier, M. y López-Ridaura, S. (2000). Sustentabilidad y manejo de recursos naturales. El marco de evaluación MESMIS. GIRA, Mundi-Prensa, Instituto de Ecología-UNAM.',
      link:
        'https://www.researchgate.net/profile/Marta-Astier/publication/299870632_Sustentabilidad_y_manejo_de_recursos_naturales_El_Marco_de_evaluacion_MESMIS/links/57068f7f08aea3d280211802/Sustentabilidad-y-manejo-de-recursos-naturales-El-Marco-de-evaluacion-MESMIS.pdf',
    },
    {
      referencia:
        'Torri, S., Cabello, M. y Lavado, R. (2006). Diagnóstico de la calidad de los suelos y su fertilidad para el pecán. Producción de pecán en Argentina, Capítulo VI, p. 290-332.',
      link:
        'https://www.researchgate.net/publication/283492349_Diagnostico_de_la_calidad_de_los_suelos_y_su_fertilidad_para_el_pecan',
    },
  ],
  glosario: [
    {
      termino: 'Bioindicadores',
      significado:
        'Procesos biológicos, especies o comunidades de organismos usados para evaluar la calidad del medio ambiente y cómo cambia con el tiempo.',
    },
    {
      termino: 'Calidad del agua',
      significado:
        'Resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua con el contenido de las normas que regulan la materia.',
    },
    {
      termino: 'Calidad del suelo',
      significado:
        'Capacidad del suelo para funcionar dentro de los límites de un ecosistema natural o manejado, sostener la productividad de las plantas y los animales, mantener o mejorar la calidad del aire y del agua, y sostener la salud humana y el hábitat.',
    },
    {
      termino: 'Plan de muestreo',
      significado:
        'Ejercicio de planificación en el que se consideran todos los aspectos asociados al estudio de variables ambientales en el agroecosistema, como el tipo de muestras y muestreo, los protocolos, los materiales y equipos requeridos, y consideraciones para analizar la información.',
    },
    {
      termino: 'Recolección de datos',
      significado:
        'Proceso en el que se obtienen los resultados de la toma y procesamiento de muestras del suelo y del agua, y de la identificación de los bioindicadores del agroecosistema. ',
    },
  ],
  complementario: [
    {
      texto:
        'IDEAM. (2018). Protocolo de monitoreo del agua. Ministerio de Ambiente y Desarrollo Sostenible.',
      tipo: 'Libro',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/023773/PROTOCOLO_MONITOREO_AGUA_IDEAM.pdf',
    },
    {
      texto:
        'SENA. (1986). Agricultura general : por qué tomar bien una muestra de suelos',
      tipo: 'Video',
      link: 'https://hdl.handle.net/11404/3766',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Angélica María Franco Cañas',
        cargo: 'Experta temática',
        centro:
          'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico (Sabanalarga)',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Fernando Sarmiento Betancourth',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Lizeth Karina Manchego Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
