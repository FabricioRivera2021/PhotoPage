/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react"

export const ModalCustomHook = ( modalOpen ) => {

    const [img, setImg] = useState();

    const handleClickImg = (imgClicked) => {
        setImg(imgClicked);
    }

    return {
        handleClickImg,
        img
    }






    // const ref = useRef();

    // useEffect(() => {
    //   const checkIfClickedOutside = (e) => {
    //     if (clickedImg && ref.current && !ref.current.contains(e.target)){
    //         return 
    //     }
    //   }
    
    //   return () => {}
    // }, [clickedImg])



    // return(
    //     <>
    //         <div ref={ref} className="fixed flex justify-center items-center text-white inset-0 bg-zinc-950 bg-opacity-25 backdrop-blur-sm">
    //             <div className="p-2 rounded-md bg-zinc-200">
    //                 <img className="max-h-[90vh]" src={`../src/img/${clickedImg}.jpg`} alt="" />
    //             </div>
    //         </div>
    //     </> 
    // )
}