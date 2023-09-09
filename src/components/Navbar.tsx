import CARVR2D from '../assets/CARVR2D.png'
import Search_ from '../assets/Search_.svg'

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 px-6 items-center absolute inset-x-0 top-0 max-h-[96px] nav_background">
      <img src={CARVR2D} alt="CARVR Logo" className="w-24 h-20" />
      <ul className="flex px-20 items-center">
        <li>
          <a href={`#home`} className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
                Home
          </a>
        </li>
        <li>
          <a href={`#`} className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
              About
          </a>
          <a href={`#`} className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
              Events
          </a>
          <a href={`#`} className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
              Discover
          </a>
          <a href={`#`} className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
              Contact
          </a>
        </li>
      </ul>
      <img src={Search_} alt="Search Icon" className="w-6 h-6 ml-auto cursor-pointer" />
    </nav>
  )
}

export default Navbar