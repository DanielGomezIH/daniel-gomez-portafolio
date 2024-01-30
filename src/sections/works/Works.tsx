import { Tilt } from 'react-tilt';
import { styles } from '../../Styles';
import { youtube } from '../../assets';
import { Project, projects } from '../../data/Constants';



const ProjectCard: React.FC<Project> = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  subname
}) => {
  return (
    <div>
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
                src={youtube}
                alt='youtube'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 '>
          <h3 className='text-white font-semibold text-[24px]'>{name}</h3>
          <h4 className='text-white font-light text-[18px]'>{subname}</h4>
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
    </div>
  );
};

const Works: React.FC = () => {

  return (
    <section

      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id='proyectos'>
        &nbsp;
      </span>

      <div>
        <p className={`${styles.sectionSubText}`}>Mi Trabajo</p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos Destacados.</h2>
      </div>

      <div className='w-full flex'>
        <p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          En mi trayectoria, he tenido el privilegio de participar en proyectos
          que van más allá de las expectativas. Cada experiencia ha sido una
          oportunidad única para aplicar mi creatividad y habilidades, brindando
          resultados que destacan por su calidad y originalidad. De la
          conceptualización a la ejecución,{' '}
          <span className='text-[#73ffff]'>
            cada proyecto representa un compromiso con la excelencia y la
            innovación
          </span>
          .
        </p>
      </div>

      <div
        className='mt-20 flex flex-wrap md:w-full  gap-7'
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
