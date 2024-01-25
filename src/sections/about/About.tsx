/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import { styles } from '../../Styles';
import { fadeIn, textVariant } from '../../utils/motion';
import { ServiceCard } from '..';
import { services } from '../../data/Constants';

const About: React.FC = () => {
  return (
    <motion.section
      variants={textVariant(0)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id='about'>
        &nbsp;
      </span>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit itaque
        dicta vero sunt minus, voluptatem similique commodi, officiis dolor,
        praesentium magnam cum? Mollitia possimus non, fugiat voluptatem id ea
        eaque?
      </motion.p>

      <motion.div
        variants={textVariant(0.5)}
        className='mt-20 flex flex-wrap justify-start max-[957px]:justify-center gap-10'
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;
