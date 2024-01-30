import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../../Styles';
import { logo_d, menu, close } from '../../assets';
import { navLinks } from '../../data/Constants';

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center max-[997px]:items-start max-md:items-center  max-[262px]:items-start gap-3'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo_d} alt='logo' className='w-9 h-9 object-contain rounded-full' />
          <p className='text-white text-[18px] font-semibold cursor-pointer flex max-md:flex-col mr-10 max-md:mr-8 '>
            Daniel Gómez &nbsp;
            <span className='md:block hidden'>
              |&nbsp; Productor de Sonido y Desarrollador
            </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex  max-md:items-center max-[997px]:items-start  items-center flex-row gap-10'>
          {navLinks.map((Link) => (
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
              {navLinks.map((Link) => (
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
