/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export const MainSlides = ({slides}) => {

    const [img, setImg] = useState(0)

    useEffect(() => {
    
        // const timer = setTimeout(() => {
            if(img > 2){
                setImg(0)
            }else{
                setImg(img + 1)
            }
        //   }, 2000);

        // return () => clearTimeout(timer);
    }, [])
    

    return (
    <div className="absolute left-[16rem] h-screen w-[calc(100%-16rem)] bg-zinc-900 flex justify-center items-center">
        <div className="m-10 h-[90vh] w-[calc(100%-21rem)] bg-zinc-900">
            <div className={`bg-${slides[img].name} w-full h-full rounded-2xl bg-contain bg-no-repeat bg-center duration-500`}></div>
        </div>
        </div>
)
}
