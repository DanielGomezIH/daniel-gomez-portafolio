import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../Styles';
import { textVariant } from '../../utils/motion';
import { ExperienceCard } from '../';
import { experiences } from '../../data/Constants';

const Experience: React.FC = () => {
  return (
    <motion.section
      variants={textVariant(0)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id='work'>
        &nbsp;
      </span>

      <motion.div>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default Experience;
