import Image from 'next/image'
import codingQuiz from '/public/coding-quiz.png';
import noteTaker from '/public/note-taker.png';
import weatherDashboard from '/public/weather-dashboard.png';
import workDayScheduler from '/public/work-day-scheduler.png';
import passwordGenerator from '/public/password-generator.png';
import techBlog from '/public/tech-blog.png';

export default function Projects() {
    return(
        <>
            <div className='columns-1 md:columns-2'>
                {/* Coding Quiz */}
                <div className='w-full my-4 mx-auto bg-slate-400 rounded-lg'>
                    <a href='/'>
                        <Image src={codingQuiz} alt='Coding Quiz Start Screen' className='rounded-t-lg' />
                    <h3>Coding Quiz Challenge</h3>
                    </a>
                    <p className='p-2 text-center'>This application was built when I was getting familiar with DOM Manipulation.</p>
                    <div className='flex justify-around'>
                        <a href='/'>GitHub</a>
                        <a href='/'>Deployed </a>
                    </div>
                </div>

            </div>
        </>
    )
}