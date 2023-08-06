import { img } from '../data';


export const Sesiones = () => {
    return (
      <div className="absolute left-[16rem] w-[calc(100%-16rem)] overflow-hidden bg-zinc-900">
        <div className='bg-sesionesPageBg bg-cover bg-center h-full w-full opacity-90'>
            <div className='w-full h-screen bg-cover bg-gradient-to-r from-zinc-900 to-transparent backdrop-blur-sm'>
                <div className='flex w-full h-full flex-col justify-center items-center'>
                    <h2 className='text-white font-normal mb-5 text-7xl'>SESIONES DE FOTOS</h2>
                    <p className='text-white max-w-xl text-justify'>Quieres una sesion de fotos para Bookings, cumpleaños de 15, algun evento en especial. Tambien puedes actualizar tus fotos en redes sociales. No dudes en consultarnos por una sesion de fotos en estudio.</p>
                </div>
            </div> 
        </div> 


        <div>
            <div className='bg-gradient-to-l from-zinc-900 to-transparent columns-1 md:columns-2 xl:columns-3 gap-2 mb-10 pt-10'>
                {img.map((elem) => {
                return (
                    <div key={elem.id} className='mb-2 hover:cursor-pointer hover:opacity-70'>
                    <img src={`../src/img/${elem.name}.jpg`} alt={elem.title}/>
                    {/* <div className="p-4">
                        <h2 className="text-xl font-bold">{elem.title}</h2>
                        <p>{elem.desc}</p>
                    </div> */}
                    </div>
                );
                })}
                </div>
            </div>
        </div>
    )
  }
