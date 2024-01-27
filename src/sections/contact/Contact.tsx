import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../../Styles';
import { EarthCanvas } from '../../components/canvas';
import { slideIn, textVariant } from '../../utils/motion';

interface ContactInputProps {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef();
  const [form, setForm] = useState<ContactInputProps>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name === '' || form.email === '' || form.message === '') {
      alert(
        'Por favor, completa todos los campos antes de enviar el formulario. :)'
      );
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Daniel Gómez',
          from_email: form.email,
          to_email: 'danielivgho5@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          alert('¡Gracias, estaré contigo tan pronto sea posible!');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert('Ups, algo salió mal...');
        }
      );
  };

  return (
    <motion.section
      variants={textVariant(0)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id='contacto'>
        &nbsp;
      </span>

      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden '>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={`${styles.heroSubText}`}>Encantado de ayudarte.</p>
          <h3 className={`${styles.heroHeadText}`}>Contáctame.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Tu nombre</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder={`¿Cuál es tu nombre?`}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Tu correo electrónico
              </span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder={`¿Cuál es tu correo electrónico?`}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Tu mensaje</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='¿Qué estás pensando?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              {loading ? 'Enviando' : 'Enviar'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
