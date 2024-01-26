import { useState, useEffect } from 'react';
import { curriculumRef } from '../../data';
import { getDocs } from 'firebase/firestore';

interface DocumentCurriculum {
  index: number;
  link: string;
  title: string;
}

const CurriculumButton = () => {
  const [curriculum, setCurriculum] = useState<DocumentCurriculum[]>([]);

  const fetchData = async (): Promise<void> => {
    const snapshot = await getDocs(curriculumRef);
    const documentData = snapshot.docs.map((doc, index) => {
      const { link, title } = doc.data();

      return {
        index: index as number,
        link: link as string,
        title: title as string,
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
          className='bg-tertiary  py-3 px-8 max-sm:px-4 outline-none w-fit max-sm:w-full max-sm:text-sm text-base text-white font-bold shadow-md shadow-primary rounded-xl transition duration-200 hover:bg-[#00FDFD] hover:text-tertiary border-2 border-[#00FDFD] hover:border-tertiary'
        >
          <a href={document.link} target='_blank' download>
            {document.title}
          </a>
        </button>
      ))}
    </>
  );
};

export default CurriculumButton;

