import { motion } from 'framer-motion';

export const Welcome = () => {

  return (
    <section className="w-full h-screen bg-gradient-to-r from-pink-600 to-purple-500">

      {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      <h1 className="pl-7 font-sans font-extrabold text-9xl ubpixel-antialiased text-black"><Example />hi, i'm alex, full stack developer</h1>
      </motion.div> */}

      <motion.div
        animate={{
          // scale: [1, 2, 2, 1, 1],
          rotate: [ 0, 60, 120, 180, 240, 300, 360 ]
          // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
      }}
        transition={{
          delay: 0.2,
          duration: 3,
          ease: "easeInOut",
          // type: "spring"
          // times: [0, 0.2, 0.5, 0.8, 1],
          // repeatDelay: 1,
          // loop: Infinity,
      }}
        whileHover={{ scale: 1.05 }}
      >
      <h1 className="pl-7 m-8 font-sans font-extrabold text-6xl md:text-9xl ubpixel-antialiased text-black"> hi, i'm alex, full stack developer</h1>
      </motion.div>

    </section>
  )
  
}