/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import { styles } from '../../Styles';
import { textVariant } from '../../utils/motion';
import { ServiceCard } from '..';
import { services } from '../../data/Constants';
import { CurriculumButton } from '../../components/ux';
import { perfil } from '../../assets';
import { Tilt } from 'react-tilt';

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
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <div className='flex flex-row gap-8 max-sm:gap-0 max-sm:flex-col items-start'>
        <div className='flex flex-col justify-start items-start '>
          <div className='mb-8'>
            <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              itaque dicta vero sunt minus, voluptatem similique commodi,
              officiis dolor, praesentium magnam cum? Mollitia possimus non,
              fugiat voluptatem id ea eaque?
            </p>
            <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              itaque dicta vero sunt minus, voluptatem similique commodi,
              officiis dolor, praesentium magnam cum? Mollitia possimus non,
              fugiat voluptatem id ea eaque?
            </p>
            <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              itaque dicta vero sunt minus, voluptatem similique commodi,
              officiis dolor, praesentium magnam cum? Mollitia possimus non,
              fugiat voluptatem id ea eaque?
            </p>
          </div>

          <div className='flex flex-row max-xs:flex-col gap-6 w-full justify-start max-sm:justify-between'>
            <CurriculumButton />
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
        <div className='mt-16'>
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
