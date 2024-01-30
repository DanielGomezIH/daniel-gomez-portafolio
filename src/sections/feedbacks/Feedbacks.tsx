import { motion } from 'framer-motion';
import { styles } from '../../Styles';
import { fadeIn, textVariant } from '../../utils/motion';
import { testimonials } from '../../data/Constants';

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  image: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  index,
  testimonial,
  name,
  designation,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl w-[400px] max-[639px]:w-full'
  >
    <p className='text-white font-black text-[48px]'>''</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[14px]'>
            {designation}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback-by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks: React.FC = () => {
  return (
    <motion.section
      variants={textVariant(0)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span'>&nbsp;</span>
      <div className='mt-12 bg-black-100 rounded-[20px]'>
        <div
          className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
        >
          <motion.div>
            <p className={`${styles.heroSubText}`}>A las personas les gusta lo que hago</p>
            <h2 className={`${styles.heroHeadText}`}>Comentarios</h2>
          </motion.div>
        </div>
        <motion.div
          variants={textVariant(0.5)}
          className={`${styles.paddingX} -mt-10 pb-14 flex flex-wrap justify-evenly gap-7`}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Feedbacks;
