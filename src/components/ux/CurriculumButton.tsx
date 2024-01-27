import { useState, useEffect } from 'react';
import { curriculumRef } from '../../data';
import { getDocs } from 'firebase/firestore';

interface DocumentCurriculum {
  index: number;
  link: string;
  title: string;
  icon: string
}

const CurriculumButton = () => {
  const [curriculum, setCurriculum] = useState<DocumentCurriculum[]>([]);

  const fetchData = async (): Promise<void> => {
    const snapshot = await getDocs(curriculumRef);
    const documentData = snapshot.docs.map((doc, index) => {
      const { link, title, icon } = doc.data();

      return {
        index: index as number,
        link: link as string,
        title: title as string,
        icon: icon as string
      };
    });
    setCurriculum(documentData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {curriculum.map((document) => (
        <button
          key={document.title}
          className='bg-tertiary py-3 px-8 max-sm:px-4 outline-none w-fit max-sm:w-full max-sm:text-sm text-base text-white font-bold shadow-md shadow-primary rounded-xl transition duration-200 hover:bg-[#73ffff] hover:text-tertiary border-2 border-[#73ffff] hover:border-tertiary flex justify-center items-center gap-2'
        >
          <a href={document.link} target='_blank' download>
            {document.title}
          </a>
          <img
            src={document.icon}
            alt={document.title}
            className='w-7 h-auto'
          />
        </button>
      ))}
    </>
  );
};

export default CurriculumButton;

