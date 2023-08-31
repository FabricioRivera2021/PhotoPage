/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom'

export const PortfolioMain = () => {

  //asi como esta no risve queda para mas adelante
  const [loaded, setLoaded] = useState(() => {
    const storedLoaded = localStorage.getItem('portfolioMainLoaded');
    return storedLoaded ? JSON.parse(storedLoaded) : false;
  });

  useEffect(() => {
    setLoaded(true);

    localStorage.setItem('portfolioMainLoaded', JSON.stringify(true));
  }, []);

  return (
    <div className="relative top-0 sm:left-[16rem] w-screen sm:w-[calc(100%-16rem)] sm:h-[100vh] bg-zinc-100 sm:bg-gradient-to-r sm:from-zinc-900 sm:to-transparent sm:animate-gradient-x">
      <div className="w-full h-full bg-opacity-60 flex flex-col justify-end">

        <div className="flex flex-col sm:flex-row w-full  sm:h-full sm:justify-around gap-5 sm:px-10 py-20 sm:items-center">
          <NavLink className="flex-1 h-full" to="/portfolio/sesiones">
            <div className="card-zoom">
              <div className='card-zoom-image bg-sesionesBg-img'>
                
                {/* <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"><span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div> */}
                
              </div>
              <h3 className='card-zoom-text'>Sesiones en interior</h3>
              <div className='card-description'>
                <h3 className='card-text-mobile'>Sesiones en interior</h3>
                <button className='card-button'>Ver mas..</button>
              </div>
            </div>
          </NavLink>    
          <NavLink className="flex-1 h-full" to="/portfolio/productos">
            <div className="card-zoom">
              <div className='card-zoom-image bg-productBg-img'>
                
                {/* <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"><span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div> */}

              </div>
              <h3 className='card-zoom-text'>Productos</h3>
              <div className='card-description'>
                <h3 className='card-text-mobile'>Productos</h3>
                <button className='card-button'>Ver mas..</button>
              </div>
            </div>
          </NavLink>
          <NavLink className="flex-1 h-full" to="/portfolio/exteriores">
            <div className="card-zoom">
              <div className='card-zoom-image bg-streetBg-img'>
                
                {/* <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"><span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div> */}
                
              </div>
              <h3 className='card-zoom-text'>Sesiones en exteriores</h3>
              <div className='card-description'>
                <h3 className='card-text-mobile'>Sesiones en exteriores</h3>
                <button className='card-button'>Ver mas..</button>
              </div>
            </div>
          </NavLink>
        </div>

      </div>

  
    </div>
  );
}
