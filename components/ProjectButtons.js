import Link from "next/link";
import { FaCode, FaExternalLinkAlt, } from 'react-icons/fa'
import { GrMoreVertical } from 'react-icons/gr'
import { useTranslations } from 'next-intl'

export default function ProjectButtons({ project, details, buttonStyle }) {
    const sharedTranslator = useTranslations('shared');
    return (
        <>
            {project.projectSourceUrl && <a href={project.projectSourceUrl} className={buttonStyle} >

                <FaCode className='self-center' />
                <p >{sharedTranslator('buttons.source').toUpperCase()}</p>

            </a>
            }

            {project.projectUrl && <a href={project.projectUrl} className={buttonStyle} >

                <FaExternalLinkAlt className='self-center' />
                <p >{sharedTranslator('buttons.visit').toUpperCase()}</p>
            </a>
            }

            {details && <Link href={'/project/' + project.id+'#header'} passHref >
                <a type='button' className={buttonStyle}>
                    <GrMoreVertical className='self-center' />
                    <p >{sharedTranslator('buttons.readMore').toUpperCase()}</p>
                </a>
            </Link>
            }

        </>
    )
}
