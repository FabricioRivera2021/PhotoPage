/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export const MainSlides = ({slides}) => {

    const [currentImg, setCurrentImg] = useState(0);
    const [flag, setFlag] = useState(true);

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

        if(currentImg != 0 && flag == false){
            setFlag(true);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [currentImg])

    return (
    <div className="sm:absolute sm:left-[20rem] h-screen lg:pt-0 sm:w-[calc(100%-20rem)] lg:bg-gradient-to-r lg:from-zinc-900 lg:to-transparent lg:animate-gradient-x
                    flex flex-col justify-center items-center pt-20 sm:pt-0">
        <div className="antialiased text-center pt-10 lg:pb-3 lg:pt-0 sm:drop-shadow-xl lg:bg-gradient-to-r lg:from-stone-400 lg:via-slate-200 lg:to-zinc-50 lg:text-transparent lg:bg-clip-text">
            <h1 className="font-normal text-xl lg:text-5xl tracking-widest uppercase lg:p-2 lg:text-zinc-800">Fabricio Rivera <span className="font-black tracking-[0.5rem] text-zinc-800"><br />Fotografía</span></h1>
            <hr />
            <p className="p-8 sm:pt-2 sm:pb-0 text-left lg:text-center lg:text-xl">Hola y bienvenido a mi página dedicada a la fotografía, me especializo en realizar sesiones de retrato tanto en exteriores como en estudio.</p>
            <p className="px-8 text-left lg:text-xl lg:text-center">Tambien hago fotografía de producto, te invito a que veas mis trabajos en la sección de portafolio.</p>
        </div>
        <div className="relative mb-0 lg:mb-4 h-[60vh] lg:h-[90vh] lg:w-[65%] overflow-hidden">
            <div className={`h-full w-[80%] lg:w-[100%] mx-auto bg-contain bg-no-repeat bg-center ${(currentImg == 0 && flag) ? '' : 'transition-transform ease-out duration-1000'} flex items-center`}
                 style={{transform: `translateX(-${currentImg}%)`}}>
                    {
                        slides.map((image, index) => (
                            <img key={index} src={image.name} alt="img"/>
                        ))
                    }
            
            </div>
            <div className="lg:hidden absolute top-0 w-[10%] h-[100%] bg-white">
            </div>
            <div className="lg:hidden absolute top-0 right-0 w-[10%] h-[100%] bg-white">
            </div>
        </div>
        <div className="flex gap-2 mt-3 pb-4 lg:m-0">
            {slides.map((elem, index) => (
                (currentImg === (index * 100))
                    ?
                    <div key={index} className="w-5 h-[5px] bg-primary-400 lg:bg-white hover:cursor-pointer rounded-lg"></div>
                    :
                    <div key={index} className="w-5 h-[5px] bg-zinc-700 hover:cursor-pointer rounded-lg" 
                         onClick={()=>{
                            if(index === 0){
                                setFlag(false);
                                setCurrentImg(0);
                            }else{
                                setCurrentImg(index * 100);
                            }
                         }}></div>
            )).filter((div, index) => index != 6)
            }
        </div>
    </div>
    )
}
