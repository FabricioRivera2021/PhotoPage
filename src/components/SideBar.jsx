


export const SideBar = () => {
  return (
    <nav className="fixed w-64 h-screen flex justify-center">
        <div className="w-40 h-screen flex flex-col justify-between items-start">
            {/* Cajita del logo */}
            <div className="mt-14 w-28 flex-1">
                <img src='../src/img/logo.jpg' alt="img" />
                {/* Cajita del menu */}
                {/* md:flex significa que cuando se este en md size en el view dejara de ser hidden
                y se mostrara como display flex, */}
                <div className="flex flex-col flex-1 space-y-2 antialiased text-left mt-10">
                    <a href="#" className="hover:text-red-300">Home</a>
                    <a href="#" className="hover:text-red-300">Portfolio</a>
                </div>
            </div>
            {/* Cajita de los links externos y el about */}
            <div className="mb-12 flex flex-col space-y-2 antialiased text-left">
              {/* about */}
              <a href="#"  className="hover:text-red-300">About</a>
              <a href="#" className="hover:text-red-300">Contact</a>
              <a href="#"  className="hover:text-red-300">Linkedin</a>
              <a href="#"  className="hover:text-red-300">Instagram</a>
            </div>
        </div>
    </nav>
  )
}
