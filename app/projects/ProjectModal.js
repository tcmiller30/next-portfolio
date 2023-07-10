import codeQuizImg from '../../public/codeQuiz.png'
import noteTakerImg from '../../public/noteTaker.png'
import passwordGeneratorImg from '../../public/passwordGenerator.png'
import techBlogImg from '../../public/techBlog.png'
import weatherDashboardImg from '../../public/weatherDashboard.png'
import workDaySchedulerImg from '../../public/workDayScheduler.png'
import Image from 'next/image'

export default function ProjectModal(props) {

  const projects = [
    {
      name: "Code Quiz",
      deployed_url: "https://tcmiller30.github.io/coding-quiz-challenge/",
      github_url: "https://github.com/tcmiller30/coding-quiz-challenge/",
      "img_src": codeQuizImg,
    },
    {
      name: "Weather Dashboard",
      deployed_url: "https://tcmiller30.github.io/weather-dashboard/",
      github_url: "https://github.com/tcmiller30/weather-dashboard",
      "img_src": weatherDashboardImg,
    },
    {
      name: "Password Generator",
      deployed_url: "https://tcmiller30.github.io/password-generator/",
      github_url: "https://github.com/tcmiller30/password-generator/",
      "img_src": passwordGeneratorImg,
    },
    {
      name: "Note Taker",
      deployed_url: "https://boiling-everglades-64675.herokuapp.com/",
      github_url: "https://github.com/tcmiller30/note-taker/",
      "img_src": noteTakerImg,
    },
    {
      name: "CMS-Style Tech Blog",
      deployed_url: "https://pacific-headland-29563.herokuapp.com/",
      github_url: "https://github.com/tcmiller30/tech-blog",
      "img_src": techBlogImg,
    },
    {
      name: "Work Day Scheduler",
      deployed_url: "https://tcmiller30.github.io/work-day-scheduler/",
      github_url: "https://github.com/tcmiller30/weather-dashboard",
      "img_src": workDaySchedulerImg,
    },
  ];

  let activeProject = []

  switch (props.activeProject) {
    case 'codingQuiz':
      activeProject = projects[0];
      console.log(`Current Project: ${activeProject.name}`)
      break;
      
      case 'weatherDashboard':
        activeProject = projects[1];
        console.log(`Current Project: ${activeProject.name}`)
        break;

      case 'passwordGenerator':
        activeProject = projects[2]
        console.log(`Current Project: ${activeProject.name}`)
        break;

      case 'noteTaker':
        activeProject = projects[3]
        console.log(`Current Project: ${activeProject.name}`)
        break;

      case 'techBlog':
        activeProject = projects[4]
        console.log(`Current Project: ${activeProject.name}`)
        break;

      case 'workdayScheduler':
        activeProject = projects[5]
        console.log(`Current Project: ${activeProject.name}`)
        break;
        
  }

  const handleOnClose = (e) => {
    if (e.target.id === 'projectOverlay') props.setTrigger(false);
  }
  
  return props.trigger ? (
    <div id='projectOverlay' onClick={handleOnClose} className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-1/3 p-4 rounded ">
        <Image src={activeProject.img_src} alt='Screenshot of Coding Quiz Challenge' />
        <h4 className='text-black'>{activeProject.name}</h4>
        <div className='flex justify-around'>
          <a className='bg-red-500' href={activeProject.deployed_url}>Deployed Project</a>
          <a className='bg-red-500' href={activeProject.github_url}>Github Repo</a>
        </div>
      </div>
        
    </div>
  ) : (
    ""
  );
}
