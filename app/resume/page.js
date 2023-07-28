import Image from "next/image";
import badgeExpressNode from "../../public/badge-express-node.png";
import badgeReact from "../../public/badge-react.png";
import badgeHtmlCss from "../../public/badge-html-css.png";
import badgeJsJquery from "../../public/badge-js-jquery.png";
import badgeSqlNoSql from "../../public/badge-sql-nosql.png";
import certificate from "../../public/UCI-bootcamp-certificate.jpg";

export default function Resume() {
  return (
    <>
    <section className="w-5/6 mx-auto text-center text-white/70">
      <h2 className="mb-4 text-center text-2xl lg:text-4xl text-white font-bold">Certifications</h2>
      <div className="flex flex-col gap-4">
        <figure className="">
          <Image
            src={certificate}
            alt={
                "Full-Stack Web Development Certificate of Completion from UC Irvine Division of Continuing Education"
            }
            />
          <figcaption className="text-center text-sm mt-4 lg:text-lg">
            Full-Stack Web Development Certificate
          </figcaption>
        </figure>

        <div className="flex flex-wrap justify-center">
          <figure className="w-1/2 lg:w-1/5">
            <Image
              src={badgeHtmlCss}
              alt={"HTML/CSS Proficiency Badge from UCI"}
            />
            <figcaption className="text-center text-sm lg:text-lg">HTML/CSS</figcaption>
          </figure>
          <figure className="w-1/2 lg:w-1/5">
            <Image
              className=""
              src={badgeJsJquery}
              alt={"JavaScript/JQuery Proficiency Badge from UCI"}
              />
            <figcaption className="text-center text-sm lg:text-lg">
              JavaScript/JQuery
            </figcaption>
          </figure>
          <figure className="w-1/2 lg:w-1/5">
            <Image
              className=""
              src={badgeExpressNode}
              alt={"ExpressJs/NodeJs Proficiency Badge from UCI"}
              />
            <figcaption className="text-center text-sm lg:text-lg">
              ExpressJs/NodeJs
            </figcaption>
          </figure>
          <figure className="w-1/2 lg:w-1/5">
            <Image
              className=""
              src={badgeSqlNoSql}
              alt={"SQL/NoSQL Database Proficiency Badge from UCI"}
            />
            <figcaption className="text-center text-sm lg:text-lg">
              SQL/NoSQL Databases
            </figcaption>
          </figure>
          <figure className="w-1/2 lg:w-1/5">
            <Image
              className=""
              src={badgeReact}
              alt={"React Proficiency Badge from UCI"}
              />
            <figcaption className="text-center text-sm lg:text-lg">React</figcaption>
          </figure>
        </div>
      </div>
      <div>
      <a href="/travisMillerResume.pdf" download>
        <button className="bg-blue-900 text-white rounded-lg p-2 shadow-md mt-8">
            Download Resume
        </button>
      </a>
      </div>
    </section>
    </>
  );
}
