/* eslint-disable no-unused-vars */
import { Link, NavLink } from 'react-router-dom';
import { img } from '../data';
import { ImagesGallery } from './ImagesGallery';


export const Sesiones = () => {

    const handleScrollToSection = () => {
        const element = document.getElementById('sesionesPhotos');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <div className="absolute sm:left-[16rem] sm:w-[calc(100%-16rem)] overflow-hidden bg-zinc-900">
        <div className='bg-sesionesPageBg bg-cover bg-center h-full w-full opacity-90'>
            <div className='flex justify-center items-center w-full h-screen bg-cover sm:bg-gradient-to-r sm:from-zinc-900 sm:to-transparent backdrop-blur-sm'>
            <div className='flex w-[70%] h-[55%] flex-col justify-center items-center bg-slate-700 sm:bg-transparent rounded-lg'>
                    <h2 className='text-white font-normal text-center sm:mb-1 text-[1.7rem] sm:text-6xl uppercase'>Sesiones en estudio</h2>
                    <h3 className='text-white font-light text-center  mb-5 text-[1.2rem] sm:text-xl uppercase'>Sesiones de retrato</h3>
                    <p className='text-white max-w-xl text-center flex flex-col justify-center items-center w-[70%]'>
                        <span className='mt-4'>Fotografias de alta calidad, con iluminacion profesional en un entorno controlado.</span> 
                        <span className='mt-4'>Dale un nuevo look a tus redes y actualiza tus fotos.</span> 
                        <span className='font-semibold mt-4 mb-10'>No dudes en consultarnos por una sesion de fotos en estudio.</span>
                    </p>
                    <button className="border justify-self-end rounded-md p-3 hover:bg-primary-500 transition-all" onClick={handleScrollToSection}>
                        <div className='h-0 w-0 border-x-[8px] border-x-transparent border-t-[10px]'></div>
                    </button>
                </div>
            </div> 
        </div>
        <ImagesGallery imagesToLoad={img} />
    </div>  
    )
  }
