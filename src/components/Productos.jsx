/* eslint-disable no-unused-vars */
import { Link, NavLink } from 'react-router-dom';
import { prodImg } from '../products';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { useState } from 'react';
import { Modal } from './helpers';


export const Productos = () => {

    const [clickedImg, setClickedImg] = useState(null);

    const handleClickImg = (img) => {
        setClickedImg(img);
    }

    const handleScrollToSection = () => {
        const element = document.getElementById('sesionesPhotos');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <div className="absolute left-[16rem] w-[calc(100%-16rem)] overflow-hidden bg-zinc-900">
        <div className='bg-productosPageBg bg-cover bg-top h-full w-full opacity-90'>
            <div className='w-full h-screen bg-cover bg-gradient-to-r from-zinc-900 to-transparent backdrop-blur-sm'>
                <div className='flex w-full h-full flex-col justify-center items-center'>
                    <h2 className='text-white text-center font-normal mb-1 text-6xl uppercase'>Fotografía de producto</h2>
                    <h3 className='text-white text-center font-light mb-5 text-xl uppercase'>Fotos en estudio</h3>
                    <p className='text-white max-w-xl text-center flex flex-col justify-center items-center'>
                        <span className='mt-4'>Realizamos sesiones para fotos de producto, profesionales y con la mejor calidad.</span> 
                        <span className='mt-4'>Consultanos por cualquier pedido que necesites</span> 
                        <span className='font-semibold mt-4 mb-10'>Podes ver mas ejemplos debajo.</span>
                    </p>
                    <Link className="border justify-self-end rounded-md p-3 hover:bg-primary-500 transition-all" onClick={handleScrollToSection}>
                        <div className='h-0 w-0 border-x-[8px] border-x-transparent border-t-[10px]'></div>
                    </Link>
                </div>
            </div> 
        </div> 


        <div>
            <div className='bg-gradient-to-l from-zinc-900 to-transparent columns-1 md:columns-2 xl:columns-3 gap-2 mb-10 pt-10' id='sesionesPhotos'>
                {prodImg.map((elem) => {
                    return (
                        <div key={elem.id} className='mb-2 hover:cursor-pointer hover:opacity-70'>
                            <img onClick={() => handleClickImg(elem.name)} src={`../src/img/${elem.name}.jpg`} alt={elem.title}/>
                        </div>
                    );
                })}
            </div>
            { (clickedImg) &&
                <Modal clickedImg={clickedImg}/>
            }
        </div>
    </div>
    )
}
