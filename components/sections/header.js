import Image from 'next/image';
import Navbar from './navbar';
import profilePic from '../../public/profile.svg';
import hero from '../../public/hero.svg'

export default function Header() {
    return(
        <header className="xl:px-32 px-7">
          <Navbar />
          <section className="flex justify-center align-center flex-col mt-16">
            <h1 className="xl:text-6xl text-4xl font-bold text-center title is-blue">Web developer & UI/UX lover</h1>
            <p className="xl:text-2xl text-xl mt-8 mb-10 text-center font-normal subtitle is-black"><strong className="font-normal">I love to code. Coding is a way to express myself and explore my creativity.</strong></p>
            <Image src={profilePic} alt="Author's avatar"/>
            <div className="mt-16 flex justify-center align-center">
              <Image src={hero} alt="illustration"/>
            </div>
          </section>
        </header>
    )
}