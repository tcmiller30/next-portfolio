import Image from 'next/image';
import profilePic from '../public/profile.jpg';

export default function Home() {
  return (
    
      <>
        <div className="mt-4 mx-auto w-1/3 pt-1 px-1 bg-blue-700 rounded-t-full md:mt-2 md:w-1/4 lg:w-1/4">
          <div className="rounded-t-full bg-blue-950">
            <Image
            src={profilePic}
            alt="Picture of Full-Stack Developer, Travis Miller"
            width={250}
            height={250}
            className="rounded-full mx-auto shadow-xl"
            />
            <h2 className="text-center text-sm p-2 font-bold bg-blue-950 lg:text-lg">It&#39;s Nice to Meet You!</h2>
          </div>
        </div>
        
        <div className="p-1 mx-auto rounded-xl text-sm text-justify shadow-xl bg-blue-700  md:text-lg md:w-full lg:w-10/12 ">
          <div className='bg-blue-950 p-4 rounded-xl'>
            <p className="mb-4 px-4 border-yellow-500 border-l-2 leading-relaxed bg-blue-"> My name is Travis Miller and I am a full-stack web developer currently based out of Orange County, CA. I used to work with coffee, but now I work with code.</p>
            <p className="mb-4 border-yellow-500 border-r-2 px-4 leading-relaxed"> My journey as a developer began in the sixth grade when I had saved up enough money to build my own computer. Although I wasn&#39;t exposed to coding until my high school offered an IT elective class, building the machine 
              sparked a passion for computers and related tech that has persisted.</p>
            <p className="mb-4 border-yellow-500 px-4 border-l-2 leading-relaxed"> I attended St. John&#39;s University in Queens, NY for two years pursuing an English degree, but ultimately decided the humanities were not for me, and I returned home.
              After working in the food industy as a barista for some time, I decided to return to code and enrolled in a Full-Stack Web Development Bootcamp through UCI where I learned the MERN Stack. </p>
            <p className="mb-4 border-yellow-500 border-r-2 px-4 leading-relaxed"> Since graduating the bootcamp, I have been working to expand my skillset as a developer. I am currently teaching myself Next.js as well as familiarizing myself with Tailwind CSS, both of which I used in the development of this website! </p>
            <p className="px-4 border-yellow-500 border-l-2 leading-relaxed"> When I am not working on code, I&#39;ll be playing video games, Dungeons & Dragons, reading, or searching out my next favorite local coffee shop.  </p>
          </div>
        </div>
           
      </>
      
  )
}
