import {NavLink} from 'react-router-dom'

export const PortfolioMain = () => {
  return (
    <div className="relative top-0 left-[16rem] w-[calc(100%-16rem)] h-[100vh]">
      <div className="w-full h-full bg-opacity-60">

        <div className="flex w-full h-full justify-around gap-5 p-6 items-center">
          <NavLink className="flex-1">
            <div className="card-zoom">
              <div className='card-zoom-image bg-streetBg-img'></div>
              <h3 className='card-zoom-text'>Sesiones de estudio</h3>
            </div>
          </NavLink>    
          <NavLink className="flex-1">
            <div className="card-zoom">
              <div className='card-zoom-image bg-streetBg-img'></div>
              <h3 className='card-zoom-text'>Eventos</h3>
            </div>
          </NavLink>
          <NavLink className="flex-1">
            <div className="card-zoom">
              <div className='card-zoom-image bg-streetBg-img'></div>
              <h3 className='card-zoom-text'>Fotógrafia callejera</h3>
            </div>
          </NavLink>
        </div>

      </div>

  
    </div>
  );
}
