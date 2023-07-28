import Link from "next/link";
import codeQuizImg from "../../public/codeQuiz.png";
import noteTakerImg from "../../public/noteTaker.png";
import passwordGeneratorImg from "../../public/passwordGenerator.png";
import techBlogImg from "../../public/techBlog.png";
import weatherDashboardImg from "../../public/weatherDashboard.png";
import workDaySchedulerImg from "../../public/workDayScheduler.png";
import Image from "next/image";
import { nova_round } from "../fonts";
import { FaWindowClose } from "react-icons/fa";

export default function ProjectModal(props) {
  const projects = [
    {
      name: "Code Quiz",
      description:
        "A timed quiz on JavaScript related questions. User scores are saved to local storage. Building this project helped teach me how to use local storage and how to dynamically create HTML elements using DOM manipulation.",
      deployed_url: "https://tcmiller30.github.io/coding-quiz-challenge/",
      github_url: "https://github.com/tcmiller30/coding-quiz-challenge/",
      img_src: codeQuizImg,
      alt_text: "Screenshot of Code Quiz ",
    },
    {
      name: "Weather Dashboard",
      description:
        "A weather dashboard that allows the user to search for a city and see the current weather and a 5 day forecast. Building this project helped me learn how to use API's like OpenWeatherMap.",
      deployed_url: "https://tcmiller30.github.io/weather-dashboard/",
      github_url: "https://github.com/tcmiller30/weather-dashboard",
      img_src: weatherDashboardImg,
      alt_text: "Screenshot of Weather Dashboard",
    },
    {
      name: "Password Generator",
      description:
        "This application will generate a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. Building this project helped me get me familiar with fundamental JavaScript concepts like arrays, if/then statements, and user input.",
      deployed_url: "https://tcmiller30.github.io/password-generator/",
      github_url: "https://github.com/tcmiller30/password-generator/",
      img_src: passwordGeneratorImg,
      alt_text: "Screenshot of Password Generator",
    },
    {
      name: "Note Taker",
      description:
        "This application can be used to perform CRUD operations to read and write notes. This application uses an express backend and saves and retrieves note data from a JSON file. Building this project helped me learn how to use Express.JS and how is the first application I deployed with Heroku.",
      deployed_url: "https://boiling-everglades-64675.herokuapp.com/",
      github_url: "https://github.com/tcmiller30/note-taker/",
      img_src: noteTakerImg,
      alt_text: "Screenshot of Note Taker",
    },
    {
      name: "CMS-Style Tech Blog",
      description:
        "This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This application follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. Building this project helped me learn how to use Handlebars.js and Sequelize.",
      deployed_url: "https://pacific-headland-29563.herokuapp.com/",
      github_url: "https://github.com/tcmiller30/tech-blog",
      img_src: techBlogImg,
      alt_text: "Screenshot of Tech Blog",
    },
    {
      name: "Work Day Scheduler",
      description:
        "This program is a simple calendar application that allows the user to save events for each hour of the day while also allowing them to see whether they are ahead of or behind schedule. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery and Moment.JS.",
      deployed_url: "https://tcmiller30.github.io/work-day-scheduler/",
      github_url: "https://github.com/tcmiller30/weather-dashboard",
      img_src: workDaySchedulerImg,
      alt_text: "Screenshot of Work Day Scheduler",
    },
  ];

  let activeProject = [];

  switch (props.activeProject) {
    case "codingQuiz":
      activeProject = projects[0];
      console.log(`Current Project: ${activeProject.name}`);
      break;

    case "weatherDashboard":
      activeProject = projects[1];
      console.log(`Current Project: ${activeProject.name}`);
      break;

    case "passwordGenerator":
      activeProject = projects[2];
      console.log(`Current Project: ${activeProject.name}`);
      break;

    case "noteTaker":
      activeProject = projects[3];
      console.log(`Current Project: ${activeProject.name}`);
      break;

    case "techBlog":
      activeProject = projects[4];
      console.log(`Current Project: ${activeProject.name}`);
      break;

    case "workdayScheduler":
      activeProject = projects[5];
      console.log(`Current Project: ${activeProject.name}`);
      break;
  }

  const handleOnClose = (e) => {
    if (e.target.id === "projectOverlay") props.setTrigger(false);
  };

  return props.trigger ? (
    <div
      id="projectOverlay"
      onClick={handleOnClose}
      className="fixed inset-0 flex items-center justify-center bg-black/75 backdrop-blur-sm"
    >
      <div className="rounded-lg mx-auto h-5/6 bg-white p-1 md:h-2/3 md:w-3/4 lg:w-1/3 overflow-y-scroll ">
        <div className="rounded-md flex flex-col lg:flex-none lg:grid lg:grid-rows-2 h-screen bg-blue-700 p-3 overflow-y-scroll ">
          <div>
            <Image src={activeProject.img_src} alt={activeProject.alt_text} className="border-2 border-blue-950 rounded object-fill w-full mx-auto" />
          </div>
          <div className="bg-white m-2 p-4 rounded-md">
          <h4
            className={`${nova_round.className} mb-4 text-2xl text-center font-semibold text-black underline`}
          >
            {activeProject.name}
          </h4>
          <p className="mx-4 my-4 text-justify text-black leading-relaxed">
            {activeProject.description}
          </p>


      {/* Buttons */}
          <div className="mx-16 gap-8 flex flex-col lg:grid lg:grid-cols-3 text-center">
            <Link
              className="rounded-lg bg-blue-900 p-2 shadow-md "
              href={activeProject.deployed_url}
            >
              Deployed Project
            </Link>
            <button
              className="rounded-lg bg-blue-900 p-2 shadow-md"
              onClick={() => props.setTrigger(false)}
            >
              Close
            </button>
            <Link
              className="rounded-lg bg-blue-900 p-2 shadow-md"
              href={activeProject.github_url}
            >
              Github Repo
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
