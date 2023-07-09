import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
    return(
        <>
            <div className='columns-3 gap-8'>
                <div className='flex flex-col p-4'>
                    <div className='mx-auto p-4 bg-gradient-radial from-blue-600 aspect-square rounded-full'>
                    <FaEnvelope size='2em' className=' fill-white-500'/>
                    </div>
                </div>

                <div className='flex flex-col p-4'>
                    <div className='mx-auto p-4 bg-gradient-radial from-blue-600 aspect-square rounded-full'>
                    <FaGithub size='2em' className=' fill-white-500'/>
                    </div>
                </div>

                <div className='flex flex-col p-4'>
                    <div className='mx-auto p-4 bg-gradient-radial from-blue-600 aspect-square rounded-full'>
                    <FaLinkedin size='2em' className=' fill-white-500'/>
                    </div>
                </div>
            </div>
        </>
    )
}