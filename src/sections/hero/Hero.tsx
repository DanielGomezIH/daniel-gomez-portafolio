import { motion } from 'framer-motion';
import { styles } from '../../Styles';
import { productor_musical } from '../../assets';

const Hero: React.FC = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hola, soy <span className='text-[#915eff]'>Daniel</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 backdrop-rounded-xl`}
          >
            Llevo tus ideas a la realidad, impulsando{' '}
            <br className='sm:block hidden' /> tu negocio y acercándote a tus
            objetivos.
          </p>
        </div>
      </div>

      <div
        className='absolute inset-0 top-[280px] xs:top-[250px] sm:top-[420px] md:top-[250px] lg:top-[250px]
      mx-auto flex flex-row items-center justify-center'
      >
        <img
          src={productor_musical}
          alt='productor musical'
          className='w-[300px] h-auto xs:w-[380px] md:w-[450px] lg:w-[500px]'
        />
      </div>

      <div className='absolute bottom-10 xs:bottom-15 sm:bottom-15 w-full flex justify-center items-center z-10'>
        <a href='#conóceme'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
