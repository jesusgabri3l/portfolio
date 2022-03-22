import Image from 'next/image';
import logo from '../../public/logo.svg';

export default function Navbar() {
    return(
        <nav className="flex justify-end align-center pt-9">
            <div>
              <a href="#footer" className="xl:text-lg text-sm subtitle py-2 px-7 border-green-600	hover:text-white hover:bg-green-600 text-green-600 rounded-full border-2 transition-all duration-500">
                Contact me!
              </a>
            </div>
          </nav>
    )
}