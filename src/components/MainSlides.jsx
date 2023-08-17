/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export const MainSlides = ({slides}) => {

    const [currentImg, setCurrentImg] = useState(0);

    let timer = setTimeout(() => {
        if(currentImg >= 500){
            setCurrentImg(0)
        }else{
            setCurrentImg(currentImg + 100)
        }
    }, 5000);

    useEffect(() => {
        timer

        return () => {
            clearTimeout(timer)
        }

    }, [currentImg])

    return (
    <div className="absolute left-[16rem] h-screen w-[calc(100%-16rem)] flex flex-col justify-center items-center bg-gradient-to-r from-zinc-900 to-transparent animate-gradient-x">
        <div className="antialiased text-center pb-3 drop-shadow-xl bg-gradient-to-r from-stone-400 via-slate-200 to-zinc-50 text-transparent bg-clip-text">
            <h1 className="font-normal tracking-widest uppercase p-2 text-zinc-800">Fabricio Rivera <span className="font-black tracking-[0.5rem] text-zinc-800"><br />Fotografía</span></h1>
            <hr />
            <p className="text-xl">Hola y bienvenido a mi página dedicada a la fotografía, me especializo en realizar sesiones de retrato tanto en exteriores como en estudio.</p>
            <p>Tambien hago fotografía de producto, te invito a que veas mis trabajos en la sección de portafolio.</p>
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
                    <div key={index} className="w-5 h-[5px] bg-white hover:cursor-pointer rounded-lg"></div>
                    :
                    <div key={index} className="w-5 h-[5px] bg-zinc-700 hover:cursor-pointer rounded-lg" 
                         onClick={()=>{
                            setCurrentImg(index * 100)
                         }}></div>
            ))}
        </div>
    </div>
    )
}
