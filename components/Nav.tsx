import Link from "next/link";
// import { useState } from "react";

const Nav = () => {

    // const [isOpen, setIsOpen] = useState(false);
    
    // const toggleMenu = () => {
        // setIsOpen(!isOpen);
    // }
    
  return (
    <>
      <header className="w-full pt-5 pb-10">
        <nav className="w-full flex items-center justify-between">
            <Link href="/" className="font-bold hover:text-white uppercase text-[#D3D3D3] text-lg tracking-widest">
              Don.Dev
            </Link>
            <div className="flex items-center gap-6 text-lg text-[#D3D3D3] max-md:hidden">
                <Link className="hover:text-white" href="/#projects">Projects</Link>
                <Link className="hover:text-white" href="/#contact">Contact</Link>
            </div>
            <div className="hidden max-md:flex">
                <button type="button" className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-menu-2">
                   <path d="M4 6l16 0" /> 
                   <path d="M4 12l16 0" /> 
                   <path d="M4 18l16 0" />
                  </svg>
                </button>
                <div className="w-full h-screen flex flex-col px-6 py-11 fixed top-0 bottom-0 bg-dark-bg text-white transition-all ease-in-out z-50 -left-full">
                    <button type="button" className="text-white self-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x">
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="flex flex-col text-[#D3D3D3] text-3xl font-semibold mt-32 gap-5 text-center">
                        <li>
                            <Link className="hover:text-white" href="/#projects">Projects</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white" href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Nav;
