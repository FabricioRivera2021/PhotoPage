/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export const MainSlides = ({slides}) => {

    const [img, setImg] = useState(0)

    useEffect(() => {
    
        const timer = setTimeout(() => {
            if(img >= (slides.length - 1)){
                setImg(0)
            }else{
                setImg(img + 1)
            }
          }, 2000);

        return () => clearTimeout(timer);
    }, [img, slides.length])
    

    return (
    <div className="absolute left-[16rem] h-screen w-[calc(100%-16rem)] bg-zinc-900 flex flex-col justify-center items-center">
        <div className="mt-10 mx-10 mb-4 h-[85vh] w-[calc(100%-21rem)] bg-zinc-900 ">
            <div
                className={`bg-${slides[img].name} animate-imgFadeIn w-full h-full rounded-2xl bg-contain bg-no-repeat bg-center transition-all`}>
            </div>
        </div>
        <div className="flex gap-2">
            {slides.map((elem, index) => (
                (img === index)
                    ?
                    <div key={index} className="w-5 h-[2px] bg-white"></div>
                    :
                    <div key={index} className="w-5 h-[2px] bg-slate-400"></div>
            ))}
        </div>
    </div>
    )
}
