import { img } from './data.js';

export const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold font-cursive text-center my-8">Fabricio Rivera Fotografia</h1>
      <nav>
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-10 mx-auto text-xl">
              <a href="/" className="text-gray-300 hover:text-white">Home</a>
              <a href="/portfolio" className="text-gray-300 hover:text-white">Portfolio</a>
              <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center">
        <div className="max-w-screen-lg">
          <div className='flex flex-wrap flex-shrink'>
            {img.map((elem) => {
              return (
                <div key={elem.id}>
                  <img src={`./src/img/${elem.name}.jpg`} alt={elem.title} className="w-1/2 bg-black" />
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
    </div>
  );
};