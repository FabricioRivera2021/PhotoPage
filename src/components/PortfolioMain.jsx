import {NavLink} from 'react-router-dom'

export const PortfolioMain = () => {
  return (
    <div className="absolute top-0 left-[16rem] w-[calc(100%-16rem)] md:px-6 h-[100vh]">
      <div className="absolute top-0 w-full left-0 h-full bg-opacity-60">

        <div className="relative flex justify-center space-x-20">
          <NavLink>
            <div className="flex-1 relative top-20 w-[350px] bg-cover m-auto bg-sesionesBg-img h-[700px] hover:h-[720px] hover:bg-center transition-all">
              <h3 className='uppercase text-center bg-slate-600 text-white p-4 bg-opacity-70'>
                sesiones
              </h3>  
            </div>  
          </NavLink>    
          <NavLink>
            <div className="card-zoom">
              <div className='card-zoom-image bg-streetBg-img'></div>
            </div>
          </NavLink>
          <NavLink>
            <div className="flex-1 relative top-28 w-[350px] bg-center bg-cover m-auto bg-streetBg-img h-[700px]">
              <h3 className='uppercase text-center bg-slate-600 text-white p-4 bg-opacity-70'>fotografia callejera</h3>  
            </div>
          </NavLink>
        </div>

      </div>

  
    </div>
  );
}
