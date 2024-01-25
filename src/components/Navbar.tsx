import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDocs } from 'firebase/firestore';

import { navLinksRef } from '../constants/FirebaseStore';
import { styles } from '../Styles';
import { logo, menu, close } from '../assets';

interface DocumentLink {
  id: string;
  title: string;
}

const Navbar = () => {
  const [navLink, setNavLink] = useState<DocumentLink[]>([]);
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  const fetchData = async (): Promise<void> => {
    const snapshot = await getDocs(navLinksRef);
    const documentData = snapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title as string,
    }));
    setNavLink(documentData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center max-[997px]:items-start max-md:items-center max-[262px]:items-start gap-3'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-semibold cursor-pointer flex max-md:flex-col mr-10 max-md:mr-8 '>
            Daniel Gómez &nbsp;
            <span className='md:block hidden'>
              |&nbsp; Productor de Sonido y Desarrollador Web
            </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex  max-md:items-center max-[997px]:items-start  items-center flex-row gap-10'>
          {navLink.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(Link.title);
              }}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu icon'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLink.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
