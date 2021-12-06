
import { SiNextdotjs,SiTailwindcss,SiStrapi,SiAdobeillustrator} from 'react-icons/si'
import { FaLinkedin,FaUnity,FaAndroid,FaUikit,FaGithub,FaNodeJs} from 'react-icons/fa'
import { BsBootstrapFill } from 'react-icons/bs'
import { DiMongodb } from 'react-icons/di'
import { RiTranslate } from 'react-icons/ri'
import { AiOutlineMail,AiOutlineIdcard } from 'react-icons/ai'


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
export const emailContact = {
    label: 'Email',
    icon: <AiOutlineMail/>,
    url: 'emailto:emkorporation@gmail.com'
}
export const cvEN = {
    label: 'CV',
    icon: <AiOutlineIdcard/>,
    url: 'cv_2021_en_noP.pdf'
}
export const cvIT = {
    label: 'CV',
    icon: <AiOutlineIdcard/>,
    url: 'cv_2021_it_noP.pdf'
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
        default:
            return undefined;
    }
}