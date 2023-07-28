import Link from "next/link";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section className="flex flex-col items-center justify-evenly">
        <h2 className="mb-4 text-4xl text-white">Contact Me</h2>

        <div className="mb-2 flex justify-center rounded-full bg-white p-1">
          <div className="h-full w-full rounded-full bg-blue-950">
            <FaPhone className="m-4 text-2xl text-white" />
          </div>
        </div>
        <span className="mb-4 text-lg text-white">+1 (714) 482-5865</span>

    <Link href="mailto:traviscmiller01@gmail.com">
        <div className="mb-2 flex justify-center rounded-full bg-white p-1">
          <div className="h-full w-full rounded-full bg-blue-950">
            <FaEnvelope className="m-4 text-2xl text-white" />
          </div>
        </div>
    </Link>
        <span className="mb-4 text-lg text-white">Email</span>

        <Link
          href="https://github.com/tcmiller30"
        >
          <div className="mb-2 flex justify-center rounded-full bg-white p-1">
            <div className="h-full w-full rounded-full bg-blue-950">
              <FaGithub className="m-4 text-2xl text-white" />
            </div>
          </div>
        </Link>
        <span className="mb-4 text-lg text-white">GitHub</span>

        <Link href="https://www.linkedin.com/in/travis-miller-a31073279/">
          <div className="mb-2 flex justify-center rounded-full bg-white p-1">
            <div className="h-full w-full rounded-full bg-blue-950">
              <FaLinkedin className="m-4 text-2xl text-white" />
            </div>
          </div>
        </Link>
        <span className="mb-4 text-lg text-white">LinkedIn</span>
      </section>
    </>
  );
}
