import './globals.css'
import { montserrat, nova_round } from './fonts'
 
export const metadata = {
  title: 'Travis Miller Portfolio',
  description: 'Information about the full-stack web designer, Travis Miller',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} h-screen bg-slate-900 bg-gradient-to-b from-slate-900 from-10% to-slate-900 to-90% via-blue-950/50 via-30% text-slate-100`}>
        {/* extend gradient to length of screen */}
        <div className=' h-full lg:flex'>
        <header className='mt-4 w-screen text-center flex flex-col lg:w-1/2 lg:flex-row lg:justify-center lg:items-center lg:ps-4'>
          {/* Title Text */}
          <div className='lg:text-right lg:w-full'>
            <h1 className={`${nova_round.className} text-6xl tracking-tight lg:text-8xl`}>Travis Miller</h1>
            <h2 className={`${nova_round.className} text-xl text-blue-500 leading-6 mb-4 tracking-tighter lg:text-2xl`}>Full-Stack Web Developer</h2>     
          </div>
          {/* Navbar */}
          <nav className='mx-auto md:w-3/4 lg:w-3/10'>
            <ul className='w-full mx-auto columns-2 lg:ms-4 lg:columns-1 lg:border-l-4 lg:ps-4 lg:py-8 lg:relative'>
              <a href='/'>
                <li className=' w-full ps-4 mb-2 border-slate-100 border-l-4 hover:border-yellow-500 hover:text-blue-300 focus:border-blue-400 hover:transition-all duration-200 ease-in-out lg:my-2 lg:text-xl   lg:hover:text-3xl lg:leading-9 '>
                  About Me
                </li>
              </a>
              <a href='/projects'>
                <li className='w-full mb-2 border-slate-100 border-l-4 hover:border-yellow-500 hover:text-blue-300 hover:transition-all duration-200 ease-in-out lg:text-xl  lg:hover:text-3xl lg:leading-9'>
                  Projects
                </li>
              </a>
              <a href='/contact'>
                <li className='w-full mx-auto mb-2 border-slate-100 border-r-4 hover:border-yellow-500 hover:text-blue-300 hover:transition-all duration-200 ease-in-out lg:border-r-0 lg:border-l-4 lg:text-xl lg:hover:text-3xl lg:leading-9'>
                  Contact
                </li>
              </a>
              <a href='/'>
                <li className='w-full mx-auto mb-2 border-slate-100 border-r-4 hover:border-yellow-500 hover:text-blue-300 hover:transition-all duration-200 ease-in-out lg:border-r-0 lg:border-l-4 lg:text-xl lg:hover:text-3xl lg:leading-9'>
                  Resume
                </li>
              </a>
            </ul>
              
          </nav>
        </header>
    {/* Main content */}
        <main className='w-5/6 pb-4 m-auto  lg:px-2 lg:flex lg:flex-col lg:items-center'>
          {children}
        </main>
        </div>
      </body>
    </html>
  )
}
