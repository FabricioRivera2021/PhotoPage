import { img } from '../data';



export const MainPage = () => {
  return (
    <div className="absolute top-0 left-[18rem] w-[calc(100%-18rem)] h-[200vh] bg-slate-700 overflow-hidden">
        <div>
          <div className='flex flex-wrap'>
            {img.map((elem) => {
              return (
                <div key={elem.id} className='w-2/5'>
                  <img src={`./src/img/${elem.name}.jpg`} alt={elem.title} className='w-full'/>
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
