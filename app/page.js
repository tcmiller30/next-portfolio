import { nova_round } from "./fonts"
import Image from 'next/image';

export default function Home() {
  return (
    
      <>
        <div className="mt-4 mx-auto w-3/5 p-4 bg-blue-700 rounded-t-full ">
          <Image
          src='/../public/profile.jpg'
          alt="Picture of Full-Stack Developer, Travis Miller"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-2 shadow-xl"
          />
          <h2 className="text-center">It&#39;s Nice to Meet You!</h2>
        </div>
        
        <div className="p-8 rounded-xl text-justify bg-blue-700">
          <p className="mb-4"> My name is Travis Miller and I am a full-stack web developer currently based out of Orange County, CA. I used to work with coffee, but now I work with code.</p>
          <p className="mb-4"> My journey as a developer began in the sixth grade when I had saved up enough money to build my own computer. Although I wasn&#39;t exposed to coding until my high school offered an IT elective class, building the machine 
            sparked a passion for computers and related tech that has persisted.</p>
          <p className="mb-4"> I attended St. John&#39;s University in Queens, NY for two years pursuing an English degree, but ultimately decided the humanities were not for me, and I returned home.
            After working in the food industy as a barista for some time, I decided to return to code and enrolled in a Full-Stack Web Development Bootcamp through UCI where I learned the MERN Stack. </p>
          <p className="mb-4"> Since graduating the bootcamp, I have been working to expand my skillset as a developer. I am currently teaching myself Next.js as well as familiarizing myself with Tailwind CSS, both of which I used in the development of this website! </p>
          <p className=""> When I am not working on code, I&#39;ll be playing video games, Dungeons & Dragons, reading, or searching out my next favorite local coffee shop. </p>
        </div>
      </>
      
  )
}
