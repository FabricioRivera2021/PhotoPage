/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export const MainSlides = ({slides}) => {

    const [img, setImg] = useState(0);

    // useEffect(() => {
    //         if(img >= (slides.length - 1)){
    //             setImg(0)
    //         }else{
    //             setImg(img + 1)
    //         }
    // }, [])

    return (
    <div className="absolute left-[16rem] h-screen w-[calc(100%-16rem)] flex flex-col justify-center items-center bg-gradient-to-r from-zinc-900 to-transparent animate-gradient-x">
        <div className="mx-10 mb-4 h-[90vh] w-[calc(100%-20rem)] rounded-2xl overflow-hidden">
            <div className='h-full mx-auto bg-contain bg-no-repeat bg-center transition-transform ease-out duration-500 flex items-center' 
                 style={{transform: `translateX(-${0}%)`}}>
                    {/* las imagenes deben ser todas iguales en tamaño */}

                    {
                    slides.map((image, index) => (
                        <img key={index} src={image.name} alt="img"/>
                    ))
                    }
            
            </div>
        </div>
        <div className="flex gap-2">
            {slides.map((elem, index) => (
                (img === index)
                    ?
                    <div key={index} className="w-5 h-[2px] bg-white"></div>
                    :
                    <div key={index} className="w-5 h-[2px] bg-slate-900"></div>
            ))}
        </div>
    </div>
    )
}
