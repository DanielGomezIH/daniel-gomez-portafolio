import {
  geezy,
  unitec,
  grabación_multitrack,
  sonido_directo,
  banda_sonora,
  doblaje_adr,
  COLEGIO_4C,
  TEKNE_3C,
  CAPITULO_1C,
  CAPITULO_2C,
  CAPITULO_3C,
  COL_flag,
  USA_flag,
} from '../assets';

export interface NavLink {
  id: string;
  title: string;
}

export interface DocumentCurriculum {
  index: number;
  link: string;
  title: string;
  icon: string;
}

export interface Service {
  title: string;
  icon: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface Project {
  index: number;
  name: string;
  subname: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
}

export interface Tag {
  name: string;
  color: string;
}

export const navLinks: NavLink[] = [
  {
    id: 'conóceme',
    title: 'Conóceme',
  },
  {
    id: 'proyectos',
    title: 'Proyectos',
  },
  {
    id: 'experiencia',
    title: 'Experiencia',
  },
  {
    id: 'contacto',
    title: 'Contacto',
  },
];

const curriculums: DocumentCurriculum[] = [
  {
    index: 0,
    link: 'https://drive.google.com/file/d/1Hhmy38u-pjrExXtcRuPiX3b2XAFrjxmt/view?usp=sharing',
    title: 'Mi Currículum',
    icon: COL_flag,
  },
  {
    index: 1,
    link: 'https://drive.google.com/file/d/1rm-aA6wAVqUL0twfnnD2aNvxQr41jqij/view?usp=drive_link',
    title: 'My Resume',
    icon: USA_flag,
  },
];

const services: Service[] = [
  {
    title: 'Grabación en Estudio Multitrack',
    icon: grabación_multitrack,
  },
  {
    title: 'Sonido Directo y Postproducción',
    icon: sonido_directo,
  },
  {
    title: 'Diseño de banda sonora',
    icon: banda_sonora,
  },
  {
    title: 'Doblaje y ADR',
    icon: doblaje_adr,
  },
];

const projects: Project[] = [
  {
    index: 0,
    name: 'Colegio Gerardo Paredes',
    subname: 'Documental - Volver a la Escuela',
    description:
      'Fui responsable de la grabación de sonido directo y la cinematografía, gestionando las etapas de postproducción sonora y musicalización. Como herramientas utilicé Pro Tools, Izotope Rx, Fabfilter Q3 y Epidemic Sound.',
    image: COLEGIO_4C,
    source_code_link: 'https://youtu.be/uh_TamWh6bo',
    tags: [
      {
        color: 'blue-text-gradient',
        name: 'Izotope Rx',
      },
      {
        color: 'orange-text-gradient',
        name: 'Fabfilter',
      },
      {
        color: 'pink-text-gradient',
        name: 'Pro Tools Studio',
      },
    ],
  },
  {
    index: 1,
    name: 'TEKNÉ',
    subname: 'Documental Sobre el Humanismo',
    description:
      'Desarrollé la propuesta sonora junto con la directora Camila Ortega, Me desempeñé como sonidista, microfonista y también llevé a cabo la postproducción sonora. Como herramientas utilicé Pro Tools, Izotope Rx, Adobe Premier Pro y Sonarworks.',
    image: TEKNE_3C,
    source_code_link: 'https://youtu.be/fVG9jtRVcpY',
    tags: [
      {
        color: 'blue-text-gradient',
        name: 'Izotope Rx',
      },
      {
        color: 'green-text-gradient',
        name: 'Premier Pro',
      },
      {
        color: 'pink-text-gradient',
        name: 'Pro Tools Studio',
      },
    ],
  },
  {
    index: 2,
    name: 'La Llave de la Vida',
    subname: 'Caminando en el Viento - Cap 1',
    description:
      'En el desarrollo de esta miniserie, desempeñé un papel fundamental en la planeación y ejecución de la propuesta sonora. Asumí responsabilidades tanto en la captura de sonido en locación como en la etapa de postproducción.',
    image: CAPITULO_1C,
    source_code_link: 'https://youtu.be/awC4YzKLlmg?si=KRmGrXjTh1wjjfHc',
    tags: [
      {
        color: 'blue-text-gradient',
        name: 'Sonidista',
      },
      {
        color: 'green-text-gradient',
        name: 'Microfonista',
      },
      {
        color: 'pink-text-gradient',
        name: 'Postproductor',
      },
    ],
  },
  {
    index: 3,
    name: 'La Llave de la Vida',
    subname: 'Singularidad - Cap 2',
    description:
      'Logré mejorar mis habilidades blandas al enfrentar desafíos en equipo, ya que la colaboración constante con mis compañeros de producción permitió superar obstáculos y emplear una comunicación asertiva.',
    image: CAPITULO_2C,
    source_code_link: 'https://youtu.be/d1Xzij9WwOo?si=usoeiUSjRKZubGH4',
    tags: [
      {
        color: 'blue-text-gradient',
        name: 'Empatía',
      },
      {
        color: 'green-text-gradient',
        name: 'Asertividad',
      },
      {
        color: 'pink-text-gradient',
        name: 'Colaboración',
      },
    ],
  },
  {
    index: 4,
    name: 'La Llave de la Vida',
    subname: 'Cuando sea Grande - Cap 3',
    description:
      'Utilicé un conjunto de herramientas, entre las que se incluyen Pro Tools, Izotope Rx, Izotope Insight, Epidemic Sound y Sonarworks. Las cuales facilitaron la captura y manipulación del sonido en tiempo real.',
    image: CAPITULO_3C,
    source_code_link: 'https://youtu.be/3MJGuBfaBtY?si=Uc2ku2XT_lrxEnPA',
    tags: [
      {
        color: 'blue-text-gradient',
        name: 'Sonarworks',
      },
      {
        color: 'green-text-gradient',
        name: 'Izotope Rx',
      },
      {
        color: 'pink-text-gradient',
        name: 'Pro Tools Studio',
      },
    ],
  },
];

const experiences: Experience[] = [
  {
    title: 'Productor Musical',
    company_name: 'Geezy Music',
    icon: geezy,
    iconBg: '#383E56',
    date: 'Septiembre 2019 - Diciembre 2022',
    points: [
      'Colaborar con productores musicales nacionales llevando a cabo el manejo de multitracks y stems para crear canciones con el estándar de calidad.',
      'Producir canciones originales a artistas locales, desde la planeación, grabación, mezcla y masterización.',
      'Componer y producir música instrumental o beats usando Ableton Live 10, para plataformas como Youtube y Beatstars.',
    ],
  },
  {
    title: 'Estudiante de Tecnología en Producción de Sonido',
    company_name: 'CORPORACIÓN UNIVERSITARIA UNITEC',
    icon: unitec,
    iconBg: '#383E56',
    date: 'Septiembre 2021 - Presente',
    points: [
      'Desarrollar la identidad sonora de una empresa local a través de la creación de dos cuñas radiales, un Jingle y un audio logo.',
      'Grabar el sonido directo para más de seis proyectos audiovisuales, como microfonista, sonidista y director de sonido.',
      'Realizar doblaje y ADR para documentales y cortos animados.',
      'Diseñar y mezclar la banda sonora para cortometrajes, documentales y miniseries.',
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

export { services, curriculums, projects, experiences, testimonials };
