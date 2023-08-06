import { img } from '../data';


export const Sesiones = () => {
    return (
      <div className="absolute left-[16rem] w-[calc(100%-16rem)] overflow-hidden bg-zinc-900">
        <div className='bg-sesionesPageBg bg-cover bg-center h-full w-full opacity-90'>
            <div className='w-full h-screen bg-cover bg-gradient-to-r from-zinc-900 to-transparent'></div>    
        </div> 

        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, in necessitatibus voluptas modi enim quae accusantium molestias nostrum praesentium ipsam id atque repellendus doloribus magni eum mollitia expedita iusto maiores!</p>
        </div>

        <div>
            <div className='bg-gradient-to-b from-current to-transparent columns-1 md:columns-2 xl:columns-3 gap-2 mb-10 pt-10'>
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
