import "./globals.css";
import { montserrat, nova_round } from "./fonts";
import Link from "next/link";

export const metadata = {
  title: "Travis Miller Portfolio",
  description: "Information about the full-stack web designer, Travis Miller",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} mx-auto h-screen bg-slate-900 bg-gradient-to-b from-slate-900 from-10% via-blue-950/50 via-30% to-slate-900 to-90% text-slate-100`}
      >
        {/* extend gradient to length of screen */}
        <div className=" h-full lg:flex">
          <header className="mt-4 flex w-full flex-col text-center lg:w-full lg:flex-row lg:items-center lg:justify-center lg:ps-4">
            {/* Title Text */}
            <div className="lg:w-full lg:text-right">
              <h1
                className={`${nova_round.className} text-6xl tracking-tight lg:text-8xl`}
              >
                Travis Miller
              </h1>
              <h2
                className={`${nova_round.className} mb-4 text-xl leading-6 tracking-tighter text-blue-500 lg:text-2xl`}
              >
                Full-Stack Web Developer
              </h2>
            </div>
            {/* Navbar */}
            <nav className="w-3/4 lg:w-3/10 mx-auto md:w-3/4">
              <ul className="mx-auto mb-4 lg:mb-0 lg:w-1/2 columns-2 lg:relative lg:mx-16 lg:columns-1 lg:border-l-4 lg:py-8 lg:ps-8 text-center">
                <Link href="/">
                  <li className=" mb-2 w-full border-l-4 border-slate-100 ps-4 duration-200 ease-in-out hover:border-yellow-500 hover:text-blue-500 hover:transition-all focus:border-blue-400 lg:my-2 lg:text-xl   lg:leading-9 lg:hover:text-3xl ">
                    About Me
                  </li>
                </Link>
                <Link href="/projects">
                  <li className="mb-2 w-full border-l-4 border-slate-100 duration-200 ease-in-out hover:border-yellow-500 hover:text-blue-500 hover:transition-all lg:text-xl  lg:leading-9 lg:hover:text-3xl">
                    Projects
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="mx-auto mb-2 w-full border-r-4 border-slate-100 duration-200 ease-in-out hover:border-yellow-500 hover:text-blue-500 hover:transition-all lg:border-l-4 lg:border-r-0 lg:text-xl lg:leading-9 lg:hover:text-3xl">
                    Contact
                  </li>
                </Link>
                <a href="/resume">
                  <li className="mx-auto mb-2 w-full border-r-4 border-slate-100 duration-200 ease-in-out hover:border-yellow-500 hover:text-blue-500 hover:transition-all lg:border-l-4 lg:border-r-0 lg:text-xl lg:leading-9 lg:hover:text-3xl">
                    Resume
                  </li>
                </a>
              </ul>
            </nav>
          </header>
          {/* Main content */}
          <main className="m-auto w-5/6 pb-4 lg:flex lg:flex-col lg:items-center lg:px-2">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
