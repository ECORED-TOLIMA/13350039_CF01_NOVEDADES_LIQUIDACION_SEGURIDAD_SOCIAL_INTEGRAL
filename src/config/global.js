export default {
  global: {
    Name: 'Normativa y novedades en seguridad social integral',
    Description:
      'Este componente formativo aborda los fundamentos normativos del Sistema de Seguridad Social Integral en Colombia, los tipos de contrato que originan obligaciones frente al sistema, los procesos de afiliación obligatoria, la distribución de los aportes y el manejo correcto de las novedades de nómina que inciden en la liquidación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contratos de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y elementos esenciales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de contratos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características del contrato',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Contrato de prestación de servicios',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Principio del contrato realidad y sus implicaciones',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normativa del sistema de seguridad social integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto, origen y principios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ley 100 de 1993',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Sistema General de Seguridad Social en Salud',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Sistema General de Pensiones',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Sistema General de Riesgos Laborales',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Otras normas y entidades de control',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Obligaciones del empleador',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Empleador y contratante',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Afiliaciones obligatorias',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Distribución de aportes, IBC y topes',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Novedades y PILA',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Sanciones y UGPP',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Casos prácticos: aplicación en nómina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Simulación de novedades en seguridad social',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Lecciones aprendidas y recomendaciones',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [],
  glosario: [
    {
      termino: 'AFP (Administradora de Fondos de Pensiones)',
      significado:
        'Entidad privada que administra el Régimen de Ahorro Individual con Solidaridad (RAIS) en Colombia. Acumula los aportes de cada afiliado para financiar su pensión de vejez, invalidez o sobrevivencia.',
    },
    {
      termino: 'ARL (Administradora de Riesgos Laborales)',
      significado:
        'Entidad que administra el Sistema General de Riesgos Laborales y cubre las contingencias por accidentes de trabajo y enfermedades laborales.',
    },
    {
      termino: 'Contrato de prestación de servicios',
      significado:
        'Acuerdo civil mediante el cual una persona ejecuta una actividad con plena autonomía, sin subordinación y asumiendo el 100 % de sus aportes al sistema.',
    },
    {
      termino: 'Contrato laboral',
      significado:
        'Acuerdo regulado por el Código Sustantivo del Trabajo en el que concurren prestación personal del servicio, subordinación y remuneración.',
    },
    {
      termino: 'Contrato realidad',
      significado:
        'Principio que protege al trabajador vinculado mediante figuras civiles que encubren una relación laboral. Si concurren los elementos esenciales, la relación se entiende laboral sin importar su denominación.',
    },
    {
      termino: 'EPS (Entidad Promotora de Salud)',
      significado:
        'Entidad que administra el régimen contributivo de salud y garantiza a los afiliados el acceso al Plan de Beneficios en Salud.',
    },
    {
      termino: 'IBC (Ingreso Base de Cotización)',
      significado:
        'Valor mensual sobre el que se aplican los porcentajes de aporte al sistema de seguridad social.',
    },
    {
      termino: 'PILA (Planilla Integrada de Liquidación de Aportes)',
      significado:
        'Mecanismo electrónico obligatorio para el pago unificado de los aportes al sistema de seguridad social y parafiscales en Colombia.',
    },
    {
      termino: 'Seguridad social integral',
      significado:
        'Sistema colombiano de instituciones, normas y procedimientos establecido por la Ley 100 de 1993 para proteger a los trabajadores frente a contingencias de enfermedad, invalidez, vejez y muerte.',
    },
    {
      termino: 'SMLMV (Salario Mínimo Legal Mensual Vigente)',
      significado:
        'Valor mínimo de remuneración que el Gobierno Nacional fija cada año mediante decreto para todos los trabajadores colombianos.',
    },
    {
      termino: 'Subordinación',
      significado:
        'Elemento esencial del contrato de trabajo; facultad del empleador de impartir instrucciones sobre el modo, el tiempo y el lugar de prestación del servicio.',
    },
    {
      termino: 'UGPP (Unidad de Gestión Pensional y Parafiscal)',
      significado:
        'Entidad del Estado colombiano que determina y cobra los aportes al sistema de protección social no pagados correctamente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arenas Monsalve, G. (2011). El derecho colombiano de la seguridad social (3.ª ed.). Legis Editores.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993). Ley 100 de 1993: por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. Diario Oficial N.º 41.148.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2002). Ley 776 de 2002: por la cual se dictan normas sobre la organización, administración y prestaciones del Sistema General de Riesgos Profesionales. Diario Oficial N.º 45.037.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2003). Ley 860 de 2003: por la cual se reforman algunas disposiciones del Sistema General de Pensiones. Diario Oficial N.º 45.415.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1562 de 2012: por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Diario Oficial N.º 48.488.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2017). Ley 1822 de 2017: por medio de la cual se incentiva la adecuada atención y cuidado de la primera infancia y se modifica el artículo 236 del Código Sustantivo del Trabajo. Diario Oficial N.º 50.117.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2019). Ley 1955 de 2019: por el cual se expide el Plan Nacional de Desarrollo 2018-2022 Pacto por Colombia, Pacto por la Equidad. Diario Oficial N.º 50.964.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021). Ley 2114 de 2021: por medio de la cual se amplía la licencia de paternidad, se regula la licencia parental compartida y la licencia parental flexible de tiempo parcial. Diario Oficial N.º 51.797.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Decreto 780 de 2016: por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2024). Cartilla de instrucciones PILA.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015). Decreto 1072 de 2015: por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2016). Decreto 1833 de 2016: por medio del cual se compilan las normas del Sistema General de Pensiones.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional del Trabajo (OIT). (2019). Hechos concretos sobre la seguridad social.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1951). Decreto-Ley 2663 de 1950: Código Sustantivo del Trabajo. Diario Oficial N.º 27.622.',
      link: '',
    },
    {
      referencia:
        'Unidad de Gestión Pensional y Parafiscal. (2023). Guía del proceso de fiscalización. UGPP.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Regional Tolima. Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Tolima. Centro de Comercio y Servicios.',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Recursos gráficos suministrados por la plantilla base y los documentos fuente del componente formativo.',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
