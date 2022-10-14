
import { SiNextdotjs,SiTailwindcss,SiStrapi,SiAdobeillustrator,SiPrisma,SiSupabase,SiTypescript,SiFramer,SiThreedotjs,SiBlender} from 'react-icons/si'
import { FaLinkedin,FaUnity,FaAndroid,FaUikit,FaGithub,FaNodeJs,FaTwitter} from 'react-icons/fa'
import { BsBootstrapFill } from 'react-icons/bs'
import { DiMongodb } from 'react-icons/di'
import { RiTranslate } from 'react-icons/ri'
import { AiOutlineMail,AiOutlineIdcard,AiOutlineInstagram } from 'react-icons/ai'


export const githubContact = {
    label: 'Github',
    icon: <FaGithub/>,
    url: 'https://github.com/ro-nin/'
}
export const linkedinContact = {
    label: 'Linkedin',
    icon: <FaLinkedin/>,
    url: 'https://www.linkedin.com/in/emanuele-cioffi/'
}
export const igContact = {
    label: 'Instagram',
    icon: <AiOutlineInstagram/>,
    url: 'https://www.instagram.com/emkorporation/'
}
export const twitterContact = {
    label: 'Twitter',
    icon: <FaTwitter/>,
    url: 'https://www.twitter.com/emkorporation/'
}
export const emailContact = {
    label: 'Email',
    icon: <AiOutlineMail/>,
    url: 'emailto:emkorporation@gmail.com'
}
export const cvEN = {
    label: 'RESUME',
    icon: <AiOutlineIdcard/>,
    url: 'cv_newVersion_2022_eng.pdf'
}
export const cvIT = {
    label: 'C.V.',
    icon: <AiOutlineIdcard/>,
    url: 'cv_newVersion_2022_ita.pdf'
}
export const translation = {
    label: 'translate',
    icon: <RiTranslate/>,
}



export function getIcon(iconName, size) {

    switch (iconName) {
        case 'translate':
            return <RiTranslate  key={RiTranslate} size={size} />;
        case 'illustrator':
            return <SiAdobeillustrator  key={SiAdobeillustrator} size={size} />;
        case 'nextjs':
            return <SiNextdotjs  key={SiNextdotjs} size={size} />;
        case 'unity':
            return <FaUnity  key={FaUnity}  size={size}/>;
        case 'uikit':
            return <FaUikit  key={FaUikit} size={size} />;
        case 'tailwindcss':
            return <SiTailwindcss  key={SiTailwindcss} size={size} />;
        case 'nodejs':
            return <FaNodeJs  key={FaNodeJs} size={size} />;
        case 'bootstrap':
            return <BsBootstrapFill  key={BsBootstrapFill} size={size} />;
        case 'github':
            return <FaGithub key={FaGithub}  size={size} />;
        case 'android':
            return <FaAndroid  key={FaAndroid} size={size} />;
        case 'strapi':
            return <SiStrapi key={SiStrapi}  size={size} />;
        case 'mongodb':
            return <DiMongodb key={DiMongodb}  size={size} />;
        case 'prisma':
            return <SiPrisma key={SiPrisma}  size={size} />;
        case 'supabase':
            return <SiSupabase key={SiSupabase}  size={size} />;
        case 'typescript':
            return <SiTypescript key={SiTypescript}  size={size} />;
        case 'framermotion':
            return <SiFramer key={SiFramer}  size={size} />;
        case 'threejs':
            return <SiThreedotjs key={SiThreedotjs}  size={size} />;
        case 'blender':
            return <SiBlender key={SiBlender}  size={size} />;
        default:
            return undefined;
    }
}