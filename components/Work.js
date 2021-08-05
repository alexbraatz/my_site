import React, {useState} from 'react'
import {images} from '../images'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const Work = () => {
  const [[page, direction], setPage] = useState([0,0])
  const imageIndex = wrap(0, images.length, page)

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <section className="w-full h-full bg-gradient-to-r from-pink-600 to-purple-500">
      <h2 className="pl-7 pt-2 font-sans font-extrabold text-4xl md:text-7xl ubpixel-antialiased text-black">
        projects i've worked on
      </h2>
        
        <div className="">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img 
              key={page}
              src={images[imageIndex]}
              custom={direction}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              className="ml-3.5 mt-6 w-11/12 bg-center border-4 border-white 
              border-opacity-75 shadow-xl rounded"
              exit="exit"
              transition={{x: {type: 'spring', stiffness: 300, damping: 300, }, opacity: {duration: 0.5}}}
              drag="x"
              dragConstraints={{left: 0, right: 0}}
              dragElastic={1} 
            />
          </AnimatePresence>
        </div>

        <div className="pl-3">
          <motion.button
            whileHover={{scale: 1.2, transition: { duration: 0.5 }}}
            whileTap={{scale: 0.9}}
            onClick={() => paginate(-1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{width: '28px'}} className="pt-4 mx-16"/>
          </motion.button>
   
          <motion.button
            whileHover={{scale: 1.2, transition: { duration: 0.5 }}}
            whileTap={{scale: 0.9}}
            onClick={() => paginate(+1)}
          >
            <FontAwesomeIcon icon={faArrowRight} style={{width: '28px'}} className="mx-20"/>
          </motion.button>
        </div>
      
    </section>
  )

}

  