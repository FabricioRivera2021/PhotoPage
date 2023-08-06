import { Route, Routes } from "react-router-dom"
import { About, ContactForm, MainPage, PortfolioMain, Sesiones, SideBar } from "../components"



export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path='contact' element={<ContactForm />} />
                <Route path='about' element={<About />} />
                <Route path='portfolio' element={<PortfolioMain />} />
                <Route path='portfolio/sesiones' element={<Sesiones />} />
                <Route path='/*' element={<MainPage />} />                
                <Route path='/*' element={<SideBar />} />                
            </Routes>
        </>
    )
}
