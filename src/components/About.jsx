


export const About = () => {
  return (
    <div className="absolute sm:top-5 top-20 sm:p-10 p-5 sm:left-[16rem] sm:w-[calc(100%-17rem)] h-[calc(100vh-20px)]">
        <div>
            <h2 className="sm:px-0 px-4">Hola !</h2>
            <hr />
            <h5 className="py-3 text-3xl">Bienvenido a mi pagina dedicada a la fotografia</h5>
            {/* <h4 className="box-decoration-clone bg-gradient-to-r from-amber-200 to-slate-200 text-black px-4">a </h4> */}
            <div>
                <p className="text-lg pb-5">Me llamo Fabricio Rivera y me dedico principalmente a la fotografia en estudio, ya sea para retratos o productos. Ademas tambien hago sesiones en exteriores,
                siempre trato de transmitir mi pasion por la fotos en todas las sesiones que realizo. 
                </p>
                <div className="sm:columns-2">
                  <img className="px-3 sm:w-[50rem]" src=".\src\img\aboutimg.jpg" alt="image" />
                  <p className="text-lg px-4 sm:px-0 pt-2">Me encanta hacer retratos, siempre tratando de sacar la mejor imagen posible de la persona retratada. Cada persona es diferente y es mi trabajo buscar y conseguir 
                  una imagen interesante y profesional.
                  </p>
                  <p className="text-lg py-4">Si estas interesado en agendarte para una sesion de fotos, o queres hacer una sesion para algun producto que estes promocionando puedes contactarte conmigo desde la pestaña de contacto, 
                  para mi sera un placer ayudarte.
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}
