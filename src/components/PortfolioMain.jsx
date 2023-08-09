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
    <div className="relative top-0 left-[16rem] w-[calc(100%-16rem)] h-[100vh] bg-gradient-to-r from-zinc-900 to-transparent">
      <div className="w-full h-full bg-opacity-60">

        <div className="flex w-full h-full justify-around gap-5 px-10 py-20 items-center">
          <NavLink className="flex-1 h-full" to="/portfolio/sesiones">
            <div className="card-zoom">
              <div className={`card-zoom-image ${(loaded) ? 'bg-sesionesBg-img' : 'bg-slate-800' }`}>
                {
                  (loaded)
                  ?
                  ''
                  :
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"><span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
                }
              </div>
              <h3 className='card-zoom-text'>Sesiones en interior</h3>
            </div>
          </NavLink>    
          <NavLink className="flex-1 h-full" to="/portfolio/productos">
            <div className="card-zoom">
              <div className={`card-zoom-image ${(loaded) ? 'bg-productBg-img' : 'bg-slate-800' }`}>
                {
                  (loaded)
                  ?
                  ''
                  :
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"><span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
                }

              </div>
              <h3 className='card-zoom-text'>Productos</h3>
            </div>
          </NavLink>
          <NavLink className="flex-1 h-full" to="/portfolio/exteriores">
            <div className="card-zoom">
              <div className={`card-zoom-image ${(loaded) ? 'bg-streetBg-img' : 'bg-slate-800' }`}>
                {
                  (loaded)
                  ?
                  ''
                  :
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"><span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
                }
              </div>
              <h3 className='card-zoom-text'>Sesiones en exteriores</h3>
            </div>
          </NavLink>
        </div>

      </div>

  
    </div>
  );
}
