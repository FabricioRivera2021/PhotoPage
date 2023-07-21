import { Route, Routes } from "react-router-dom"
import { About, ContactForm, MainPage, SideBar } from "../components"



export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path='contact' element={<ContactForm />} />
                <Route path='about' element={<About />} />
                <Route path='/*' element={<MainPage />} />                
                <Route path='/*' element={<SideBar />} />                
            </Routes>
        </>
    )
}
