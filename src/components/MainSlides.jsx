/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export const MainSlides = ({slides}) => {

    const [currentImg, setCurrentImg] = useState(0);

    let timer = setTimeout(() => {
        if(currentImg >= 600){
            setCurrentImg(0)
        }else{
            setCurrentImg(currentImg + 100)
        }
    }, 5000);

    useEffect(() => {
        // timer
        if(currentImg === 600){
            setTimeout(() => {
                    setCurrentImg(0)
            }, 1000);
        }

        return () => {
            clearTimeout(timer);
        }

    }, [currentImg])

    return (
    <div className="sm:absolute sm:left-[16rem] h-screen sm:pt-0 sm:w-[calc(100%-16rem)] sm:bg-gradient-to-r sm:from-zinc-900 sm:to-transparent sm:animate-gradient-x
                    flex flex-col justify-center items-center pt-20">
        <div className="sm:antialiased text-center pt-10 sm:pb-3 sm:pt-0 sm:drop-shadow-xl sm:bg-gradient-to-r sm:from-stone-400 sm:via-slate-200 sm:to-zinc-50 sm:text-transparent sm:bg-clip-text">
            <h1 className="font-normal text-xl sm:text-5xl tracking-widest uppercase sm:p-2 sm:text-zinc-800">Fabricio Rivera <span className="font-black tracking-[0.5rem] text-zinc-800"><br />Fotografía</span></h1>
            <hr />
            <p className="p-8 sm:p-0 text-left sm:text-xl">Hola y bienvenido a mi página dedicada a la fotografía, me especializo en realizar sesiones de retrato tanto en exteriores como en estudio.</p>
            <p className="px-8 sm:p-0 text-left sm:text-xl">Tambien hago fotografía de producto, te invito a que veas mis trabajos en la sección de portafolio.</p>
        </div>
        <div className="mb-0 sm:mb-4 h-[60vh] sm:h-[75vh] sm:w-[calc(100%-36rem)] overflow-hidden">
            <div className={`h-full w-screen sm:w-full mx-auto bg-contain bg-no-repeat bg-center ${(currentImg == 0) ? '' : 'transition-transform ease-out duration-1000'} flex items-center`}
                 style={{transform: `translateX(-${currentImg}%)`}}>
                    {
                        slides.map((image, index) => (
                            <img key={index} src={image.name} alt="img"/>
                        ))
                    }
            
            </div>
        </div>
        <div className="flex gap-2 mb-4 sm:m-0">
            {slides.map((elem, index) => (
                (currentImg === (index * 100) )
                    ?
                    <div key={index} className="w-5 h-[5px] bg-primary-400 sm:bg-white hover:cursor-pointer rounded-lg"></div>
                    :
                    <div key={index} className="w-5 h-[5px] bg-zinc-700 hover:cursor-pointer rounded-lg" 
                         onClick={()=>{
                            setCurrentImg(index * 100)
                         }}></div>
            )).filter((div, index) => index != 6 )
            }
        </div>
    </div>
    )
}
