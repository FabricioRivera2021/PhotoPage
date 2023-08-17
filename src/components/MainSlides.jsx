/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export const MainSlides = ({slides}) => {

    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if(currentImg >= 500){
                setCurrentImg(0)
            }else{
                setCurrentImg(currentImg + 100)
            }
        }, 5000);
    }, [currentImg])

    return (
    <div className="absolute left-[16rem] h-screen w-[calc(100%-16rem)] flex flex-col justify-center items-center bg-gradient-to-r from-zinc-900 to-transparent animate-gradient-x">
        <div className="antialiased text-center pb-3 drop-shadow-lg bg-gradient-to-r from-stone-400 via-slate-200 to-zinc-50 text-transparent bg-clip-text">
            <h1 className="font-normal uppercase p-2 text-center">Fabricio Rivera <span className="font-black tracking-[0.5rem]"><br />Fotográfia</span></h1>
            <p className="text-xl">Hola y bienvenido a mi página dedicada a la fotográfia, me especializo en sesiones tanto en exteriores como en estudio.</p>
            <p>Tambien hago fotografia de producto, te invito a que veas mis trabajos en la sección de portafolio.</p>
        </div>
        <div className="mb-4 h-[75vh] w-[calc(100%-38rem)] overflow-hidden">
            <div className='h-full mx-auto bg-contain bg-no-repeat bg-center transition-transform ease-out duration-1000 flex items-center' 
                 style={{transform: `translateX(-${currentImg}%)`}}>
                    {
                        slides.map((image, index) => (
                            <img key={index} src={image.name} alt="img"/>
                        ))
                    }
            
            </div>
        </div>
        <div className="flex gap-2">
            {slides.map((elem, index) => (
                (currentImg === (index * 100) )
                    ?
                    <div key={index} className="w-5 h-[2px] bg-white"></div>
                    :
                    <div key={index} className="w-5 h-[2px] bg-slate-900"></div>
            ))}
        </div>
    </div>
    )
}
