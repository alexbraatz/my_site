export const Who = () => {

  return (
    <section className="pt-24 w-full h-screen bg-gradient-to-r from-pink-600 to-purple-500">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <h2 className="pl-7 font-sans font-extrabold text-4xl md:text-7xl ubpixel-antialiased text-black">me, myself, and i</h2>
        </div>
        <div className="pr-2 col-span-2">
          <p>i'm alex braatz, your friendly neighborhood developer. from my first 'hello world' in python in spring of 2020, 
             it was like being struck by lightning. my passion has always been to help people. 
             now, i can build the tools of tomorrow to impact, improve, and help the lives of as many people as i can.
          </p>
        </div>
        <div className="pr-2 row-span-2 col-span-2">
          <p>since then, i began my path to coding mastery by learning 'Ruby the Hard Way'. after learning some time on my own,
             i attended a full stack immersive experience at Prime Digital Academy gaining a solid understanding of 
             modern web architect and accelerating my technical skills. now, i have proficieny in: 
             javascript, react, node.js, and postgresql. additionally, with self-taught experience in ruby, python, php,
             and contemporary frameworks like next.js
          </p>
        </div>
      </div>

      <div>
        <p className="pl-2">i currently reside in minneapolis, minnesota with my partner samantha, 
          husky puppy zelda, our bengal-mix kitty nooriya, and gray tabby-cat nala. in my free time i like spending time outside with
          our dog, going on hikes (huge fan of yellowstone), video games, anime, netflix and of course, coding
        </p>
      </div>
    </section>
  )
}