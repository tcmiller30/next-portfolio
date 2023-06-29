import { nova_round } from "./fonts"

export default function Home() {
  return (
    <main className='container mx-auto flex items-center'>
      <div className='w-1/2 relative'>
        <div className="border-e-4 border-slate-200">
          <h1 className={`${nova_round.className} text-2xl md:text-8xl`}>Travis Miller</h1>
          <h2 className={`${nova_round.className} text-xl ms-4 md:text-4xl static`}>Full-Stack Web Developer</h2>
        </div>
      </div>
      <ul className='border-slate-200 ms-4'>
        <a className='border-l-4' href="/"><li>About Me</li></a>
        <a href="/"><li>Projects</li></a>
        <a href="/"><li>Contact</li></a>
        <a href="/"><li>Resume</li></a>
      </ul>
    </main>
  )
}
