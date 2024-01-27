/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import { styles } from '../../Styles';
import { textVariant } from '../../utils/motion';
import { ServiceCard } from '..';
import { services } from '../../data/Constants';
import { CurriculumButton } from '../../components/ux';
import { perfil } from '../../assets';
import { Tilt } from 'react-tilt';
import { RiLinkedinBoxLine } from '@remixicon/react';

const About: React.FC = () => {
  return (
    <motion.section
      variants={textVariant(0)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id='conóceme'>
        &nbsp;
      </span>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>Introducción</p>
        <h2 className={`${styles.sectionHeadText}`}>¿Quién soy?</h2>
      </motion.div>

      <div className='flex flex-row gap-8 max-lg:gap-0 max-sm:flex-col items-start'>
        <div className='flex flex-col justify-start items-start '>
          <div className='mb-8'>
            <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              Soy Daniel Iván, aunque mis amigos me llaman Dani, empecé en la
              producción de sonido cuando tenía 15 años, utilizando Ableton Live 9,
              ahora con 20 años de edad{' '}
              <span className='text-[#73ffff]'>
                me especializo en la creación de bandas sonoras para proyectos
                audiovisuales y branding sonoro para empresas locales
              </span>
              .
            </p>
            <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              Algunos de mis logros incluyen{' '}
              <span className='text-[#73ffff]'>
                colaborar para la miniserie ¨La Llave de la Vida¨ como diseñador
                sonoro, musicalizador, microfonista y sonidista
              </span>
              , Fue un gran desafío que amplió tanto mis habilidades técnicas
              como las de trabajo en equipo.
            </p>
            <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              Soy aprendiz autodidacta,{' '}
              <span className='text-[#73ffff]'>
                he pasado desde tocar la guitarra a mezclar en 5.1, todo gracias
                a vídeos de YouTube
              </span>
              , simultáneamente, me convertí en desarrollador web con
              formaciones online.
            </p>
            <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              Mi objetivo es{' '}
              <span className='text-[#73ffff]'>
                contribuir a la creación de producciones musicales y
                audiovisuales
              </span>
              , impulsándolas a nivel global mediante la aplicación de mis
              conocimientos y las herramientas tecnológicas.
            </p>
          </div>

          <div className='flex flex-row max-xs:flex-col gap-6 w-full justify-start max-sm:justify-between items-center'>
            <CurriculumButton />
            <button className='bg-tertiary py-3 px-8 max-sm:px-4 outline-none w-fit max-sm:text-sm text-base text-white font-bold shadow-md shadow-primary rounded-xl transition duration-200 hover:bg-[#73ffff] hover:text-tertiary border-2 border-[#73ffff] hover:border-tertiary'>
              <a
                href='https://www.linkedin.com/in/gomezdanielivan/'
                target='_blank'
              >
                <RiLinkedinBoxLine className='w-7 h-auto' />
              </a>
            </button>
          </div>
        </div>

        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <div className='w-[300px] h-[300px] overflow-hidden max-lg:hidden block rounded-full shadow-xl shadow-[#52525211]'>
            <img
              src={perfil}
              alt={`foto de perfil de Daniel Gomez`}
              className='w-full h-auto block'
            />
          </div>
        </Tilt>
      </div>

      <div>
        <div className='mt-12'>
          <h3 className=' font-black text-white lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>
            Mis Habilidades.
          </h3>
        </div>

        <motion.div
          variants={textVariant(0.5)}
          className='mt-10 flex flex-wrap justify-start gap-10'
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
