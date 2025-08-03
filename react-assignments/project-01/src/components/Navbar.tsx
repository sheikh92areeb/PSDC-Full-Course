import { useState } from "react"

const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" className="h-8" />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Flowbite</span>
            </a>
            <button onClick={toggleMenu} type="button" aria-controls="navbar-default" aria-expanded={isOpen} className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open main menu</span>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#6a7282" viewBox="0 0 17 14" className="h-5 w-5">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
                    {navLinks.map((link) => (
                        <li key={link.name}><a href={link.href} className="block rounded-sm bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:text-white md:dark:text-blue-500" aria-current="page">{link.name}</a></li>
                    ))}                    
                </ul>
            </div>
        </div>    
    </nav>
  )
}

export default Navbar
