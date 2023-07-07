import { FaCode, FaCloudSun, FaCheckCircle, FaLock, FaCalendarDay, FaMicroblog} from 'react-icons/fa'

export default function Projects() {
    return(
        <>
        <div className='flex flex-row flex-wrap'>

           <article className='bg-white p-1 mx-2 my-2 w-full shadow-lg rounded-xl md:w-1/2 lg:w-1/3'>
                <div className='bg-blue-950 rounded-lg p-4'>
                    <div className='flex items-center'>
                    <FaCode size='3em' className='p-2 fill-white-500 bg-gradient-radial from-blue-600 rounded-full'/>
                    <h3 className='ms-4 text-xl tracking-tighter'>Coding Quiz Challenge</h3>
                    </div>
                </div>
           </article>

           <article className='bg-white p-1 mx-2 my-2 w-full shadow-lg rounded-xl md:w-1/2 lg:w-1/3'>
                <div className='bg-blue-950 rounded-lg p-4'>
                    <div className='flex items-center'>
                    <FaCode size='3em' className='p-2 fill-white-500 bg-gradient-radial from-blue-600 rounded-full'/>
                    <h3 className='ms-4 text-xl tracking-tighter'>Coding Quiz Challenge</h3>
                    </div>
                </div>
           </article>

           <article className='bg-white p-1 mx-2 my-2 w-full shadow-lg rounded-xl md:w-1/2 lg:w-1/3'>
                <div className='bg-blue-950 rounded-lg p-4'>
                    <div className='flex items-center'>
                    <FaCode size='3em' className='p-2 fill-white-500 bg-gradient-radial from-blue-600 rounded-full'/>
                    <h3 className='ms-4 text-xl tracking-tighter'>Coding Quiz Challenge</h3>
                    </div>
                </div>
           </article>
           
        </div>
        </>
    )
}