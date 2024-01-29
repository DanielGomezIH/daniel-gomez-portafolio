import {
  geezy,
  unitec,
  grabación_multitrack,
  sonido_directo,
  banda_sonora,
  doblaje_adr,
} from '../assets';

export interface NavLink {
  id: string;
  title: string;
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
  name: string;
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

export { services, experiences, testimonials };
