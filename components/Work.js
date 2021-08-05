import React, {useState} from 'react'
import {images} from '../images'
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
    <section className="pt-4 w-full h-full bg-gradient-to-r from-pink-600 to-purple-500">
      <h2 className="pl-7 font-sans font-extrabold text-4xl md:text-7xl ubpixel-antialiased text-black">
        projects i've worked on
      </h2>
        
        <div className="h-48 w-48 mx-20 pr-2 pt-12">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img 
              key={page}
              src={images[imageIndex]}
              custom={direction}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit="exit"
              transition={{x: {type: 'spring', stiffness: 300, damping: 300, }, opacity: {duration: 1}}}
              drag="x"
              dragConstraints={{left: 0, right: 0}}
              dragElastic={1} 
            />
          </AnimatePresence>
        </div>

        <div className="mx-8 space-x-56">
          <motion.button
            whileHover={{scale: 1.2, transition: { duration: 0.5 }}}
            whileTap={{scale: 0.9}}
            onClick={() => paginate(-1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{width: '28px'}} className=""/>
          </motion.button>
   
          <motion.button
            whileHover={{scale: 1.2, transition: { duration: 0.5 }}}
            whileTap={{scale: 0.9}}
            onClick={() => paginate(+1)}
          >
            <FontAwesomeIcon icon={faArrowRight} style={{width: '28px'}} className=""/>
          </motion.button>
        </div>
      
    </section>
  )

}

  