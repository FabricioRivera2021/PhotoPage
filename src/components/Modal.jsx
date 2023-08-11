/* eslint-disable react/prop-types */


export const Modal = ({img}) => {

    return(
        <>
            <div id="ModalImg" className="fixed flex justify-center items-center text-white inset-0 bg-zinc-950 bg-opacity-25 backdrop-blur-sm">
                <div className="p-2 rounded-md bg-zinc-200">
                    <img className="max-h-[90vh]" src={`../src/img/${img}.jpg`} alt="" />
                </div>
            </div>
        </> 
    )
}
