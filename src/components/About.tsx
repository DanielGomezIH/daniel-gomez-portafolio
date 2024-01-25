import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../Styles';
import { fadeIn, textVariant } from '../utils/motion';
import { getDocs } from 'firebase/firestore';
import { servicesRef } from '../constants';
import { ServiceCard } from '../components';

interface DocumentService {
  title: string;
  icon: string;
}

const About = () => {
  const [service, setService] = useState<DocumentService[]>([]);

  const fetchData = async (): Promise<void> => {
    const snapshot = await getDocs(servicesRef);
    const documentData = snapshot.docs.map((doc) => ({
      title: doc.data().title as string,
      icon: doc.data().icon as string,
    }));
    setService(documentData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <motion.div variants={textVariant(0)}>
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

      <div className='mt-20 flex flex-wrap justify-start max-[957px]:justify-center gap-10'>
        {service.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
