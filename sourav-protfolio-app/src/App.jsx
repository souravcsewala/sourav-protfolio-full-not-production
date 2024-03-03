import Layout from "./components/Layout/Layout"
import About from "./pages/About/About"
import Techstack from "./pages/Techstack/Techstack"
import Education from "./pages/Education/Education"
import Project from "./pages/project/Project"
import Contact from "./pages/contact/Contact"
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/Themecontext"
import MobileNav from "./components/MobileNav/MobileNav"

const App=()=> {
  const [theme]=useTheme();

  return (
    <>
      
      <div id={theme}>
         <MobileNav/> 
      <Layout/>
      <div className="container">
        <About/>
        <Education/>
        <Techstack/>
        <Project/>
        <Contact/>
       
      </div>
      <div className="footer pb-3 ms-3">
          
            <h3 className="text-center">DEVELOP BY ENGINEER WALA SOURAV&copy; <a href="https://sourav-mern-desktop.netlify.app/"target="_blank">cheak my another site(only for desktop mode)</a></h3>
          
        </div>
        </div>
        <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
     
    </>
  )
}

export default App
