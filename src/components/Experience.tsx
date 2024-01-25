import { useState, useEffect } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../Styles';
import { experiencesRef } from '../constants';
import { textVariant } from '../utils/motion';
import { getDocs } from 'firebase/firestore';
import ExperienceCard from './ExperienceCard';
// import { ExperienceCard } from '../components';

export interface DocumentExperience {
  company_name: string;
  date: string;
  icon: string;
  iconBg: string;
  points: string[];
  title: string;
}

const Experience = () => {
  const [experience, setExperience] = useState<DocumentExperience[]>([]);

  const fetchData = async (): Promise<void> => {
    const snapshot = await getDocs(experiencesRef);
    const documentData = snapshot.docs.map((doc) => {
      const { company_name, date, icon, iconBg, points, title } = doc.data();
      return {
        company_name: company_name as string,
        date: date as string,
        icon: icon as string,
        iconBg: iconBg as string,
        points: points as string[],
        title: title as string,
      };
    });
    setExperience(documentData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experience.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
