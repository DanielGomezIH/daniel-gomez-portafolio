import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../Styles';
import { github } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { projectsRef } from '../constants';
import { Tag } from '../constants/ConstantsInfo';

interface DocumentProject {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
}

const ProjectCard: React.FC<DocumentProject> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 justify-end m-3 card-img_hover'>
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              onClick={() => window.open(source_code_link, '_blank')}
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 '>
          <h3 className='text-white font-semibold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-base'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap  gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [project, setProject] = useState<DocumentProject[]>([]);

  const fetchData = async (): Promise<void> => {
    const snapshot = await getDocs(projectsRef);
    const documentData = snapshot.docs.map((doc, index) => {
      const { name, description, tags, image, source_code_link } = doc.data();

      return {
        index: index as number,
        name: name as string,
        description: description as string,
        tags: tags as Tag[],
        image: image as string,
        source_code_link: source_code_link as string,
      };
    });
    setProject(documentData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          praesentium similique harum illo nesciunt sunt facere dolore. Ab a
          praesentium beatae sequi blanditiis? Qui eligendi recusandae eos
          inventore officia accusantium.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap md:w-full  gap-7'>
        {project.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default Works;
