import { FaImages } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";



const Navbar = () => {
  return (
    <header>
        <div className="container h-100 flex justify-between align-center">
            <div className="logo">
                <a href="#home" className="flex align-center">
                    <FaImages />
                    <h1>Project Gallery</h1>
                </a>
            </div>
            <nav className="navbar">
                <ul className="list">
                    <li className="list-items"><a href="#home" className="link">Home</a></li>
                    <li className="list-items"><a href="#about" className="link">About</a></li>
                    <li className="list-items"><a href="#services" className="link">Services</a></li>
                    <li className="list-items"><a href="#portfolio" className="link">Portfolio</a></li>
                    <li className="list-items"><a href="#contact" className="link">Contact</a></li>
                </ul>
            </nav>
            <div className="navbar-toggle">
                <button><IoMenuSharp /></button>
            </div>
        </div>
    </header>
  )
}

export default Navbar
