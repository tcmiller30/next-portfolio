import { nova_round } from "./fonts"
import Image from 'next/image';

export default function Home() {
  return (
    <main className='mx-auto w-4/5 h-screen flex justify-center items-center'>
      <div className='w-3/8 relative'>
        <div className="text-right">
          <h1 className={`${nova_round.className} text-3xl md:text-9xl`}>Travis Miller</h1>
          <h2 className={`${nova_round.className} uppercase ms-4 text-xl md:text-3xl static text-blue-600`}>Full-Stack Web Developer</h2>
        </div>
      </div>
      <ul className=' mx-4 ps-4 py-4 w-1/8 border-slate-200 border-s-4 '>
        <a href="/"><li className='border-blue-600 text-lg focus:text-3xl border-l-4 ps-4 mb-2'>About Me</li></a>
        <a href="/"><li className='border-blue-600 text-lg hover:text-3xl ease-in duration-100 hover:translate-x-4 border-l-4 ps-4 mb-2'>Projects</li></a>
        <a href="/"><li className='border-blue-600 text-lg active:text-3xl border-l-4 ps-4 mb-2'>Contact</li></a>
        <a href="/"><li className='border-blue-600 text-lg visited:text-3xl border-l-4 ps-4'>Resume</li></a>
      </ul>
      <div className="flex flex-col content-center mx-4 px-20 p-4 w-1/2"> 
        <div className="rounded-t-full w-1/2 mx-auto pt-4 outline-2 shadow-lg shadow-slate-800 bg-blue-600">
          <Image
          src='/../public/profile.jpg'
          alt="Picture of Full-Stack Developer, Travis Miller"
          width={250}
          height={250}
          className="rounded-full mx-auto mb-2 shadow-xl"
          />
          <h2 className="text-center underline text-2xl font-light text-slate-200 mb-4">It&#39;s Nice to Meet You!</h2>
        </div>
        
        <div className="mx-auto p-4 text-justify rounded-3xl bg-blue-600 shadow-lg shadow-slate-700">
          <p className="mb-4 md:text-lg"> My name is Travis Miller and I am a full-stack web developer currently based out of Orange County, CA. I used to work with coffee, but now I work with code.</p>
          <p className="mb-4 md:text-lg"> My journey as a developer began in the sixth grade when I had saved up enough money to build my own computer. Although I wasn&#39;t exposed to coding until my high school offered an IT elective class, building the machine 
            sparked a passion for computers and related tech that has persisted.</p>
          <p className="mb-4 md:text-lg"> I attended St. John&#39;s University in Queens, NY for two years pursuing an English degree, but ultimately decided the humanities were not for me, and I returned home.
            After working in the food industy as a barista for some time, I decided to return to code and enrolled in a Full-Stack Web Development Bootcamp through UCI where I learned the MERN Stack. </p>
          <p className="mb-4 md:text-lg"> Since graduating the bootcamp, I have been working to expand my skillset as a developer. I am currently teaching myself Next.js as well as familiarizing myself with Tailwind CSS, both of which I used in the development of this website! </p>
          <p className="mb-4 md:text-lg"> When I am not working on code, I&#39;ll be playing video games, Dungeons & Dragons, reading, or searching out my next favorite local coffee shop. </p>
        </div>
        
      </div>
    </main>
  )
}
