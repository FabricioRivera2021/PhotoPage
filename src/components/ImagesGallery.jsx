/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

export const ImagesGallery = ({imagesToLoad}) => {

    const [image, setImage] = useState(null);
    
    const handleClickedImg = (img) => {
        setImage(img);
    }

    const ref = useRef(null);

    useEffect(() => {
      function handleClickOutside(event) {
        if (image && ref.current && event.target.id !== 'modalImg') {
            console.log("second");
            console.log(event.target.id)
        }else{
            setImage(null);
            console.log(event.target.id)
        }
      }
  
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [image]);

    return (
        <div>
            <div className='bg-gradient-to-l from-zinc-900 to-transparent columns-1 md:columns-2 xl:columns-3 gap-2 mb-10 pt-10' id='sesionesPhotos'>
                {imagesToLoad.map((elem) => {
                    return (
                        <div key={elem.id} className='mb-2 hover:cursor-pointer hover:opacity-70'>
                            <img onClick={() => handleClickedImg(elem.name)} src={`../src/img/${elem.name}.jpg`} alt={elem.title}/>
                        </div>
                    );
                })}
            </div>
            {
                (image) &&
                <div ref={ref} id="modalImg" className="z-50 fixed flex justify-center items-center text-white inset-0 bg-zinc-950 bg-opacity-25 backdrop-blur-sm">
                    <div className="p-2 rounded-md bg-zinc-200">
                        <img className="max-h-[90vh]" src={`../src/img/${image}.jpg`} alt="" />
                    </div>
                </div>
            }
        </div>
    )
}
