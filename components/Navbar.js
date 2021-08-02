import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {Spin as Hamburger} from 'hamburger-react'

export const Navbar = () => {
  const [active, setActive ] = useState(false);

  const handleClick = () => {
    setActive(!active);
  }

  return (
    <nav className='flex items-center flex-wrap bg-gradient-to-r from-pink-600 to-purple-500 p3'>
      <motion.div animate={{scale: 1.2}} transition={{duration: 1}}>
        <Link href='/'>
        <a className='inline-flex items-center p-2 mr-4'>
        
          {/* <Image src="/vercel.svg" width={72} height={16}></Image> */}
          <span className='text-xl text-white font-bold lowercase tracking-wide pl-12'>Alexx Braatz</span>
          

        </a>
        </Link>
      
      </motion.div>

      <button 
          className='inline-flex p-3 hover:bg-red-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
        
        <Hamburger toggled={active} toggle={setActive} />

      </button>

        <div className={`${ active ? '' : 'hidden'} pl-8 w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          {/* Use ternary operator in div to decide to or not to display content of the div*/}
          
          <div className='pr-5 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <motion.div animate={{scale: 1.3}} transition={{duration: 1}}>
              <Link href='#work'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                  work
                </a>
              </Link>
              <Link href='#who'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                  who
                </a>
              </Link>
              <Link href='/#contact'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                  contact me
                </a>
              </Link>
            </motion.div>
          </div>
        </div>

    </nav>
  )
}