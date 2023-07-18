import { img } from '../data';



export const MainPage = () => {
  return (
    <div className="absolute top-5 left-[16rem] w-[calc(100%-17rem)] overflow-hidden">
        <div>
          <div className='columns-3 gap-2 mb-10'>
            {img.map((elem) => {
              return (
                <div key={elem.id} className='mb-2 hover:cursor-pointer hover:opacity-70'>
                  <img src={`./src/img/${elem.name}.jpg`} alt={elem.title}/>
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

// className='basis-[28rem]'
