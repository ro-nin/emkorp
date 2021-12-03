import Image from 'next/Image'
import SquareLogo from '../public/logo/squareLogo.svg'
import { AiOutlineDown } from 'react-icons/ai'

export default function LandingIntro({ links }) {

    let buttons = [];
    for (const link of links) {
        buttons.push(< a key={link.url} href={link.url} className='landingWhiteBackgroundButton ' >
            {link.label.toUpperCase()}
        </a >
        )

    }

    buttons.push(
        <a key={"about"} href='#about' className='whiteBorderButton '>
            <AiOutlineDown className='animate-pulse ' />
            {"About Me".toUpperCase()}
        </a>
    )
    buttons.push(
        <a key={"portfolio"} href='#portfolio' className='whiteBorderButton '>
            <AiOutlineDown className='animate-pulse ' />
            {"Portfolio".toUpperCase()}
        </a>
    )



    return (
        <div className='Landing min-h-fullscreen bg-black  flex flex-col justify-center'>
            <div className=' flex flex-col md:flex-row  justify-center gap-3 md:gap-6   items-center max-h-[80vh]'>
                <div className='LogoContainer flex-1 min-w-[20vw] max-w-[30vw] animate-pulse'>
                    <Image alt={'emkrop logo'} layout="responsive" src={SquareLogo}></Image>
                </div>
                <p className='md:hidden inline sm:text-lg md:text-2xl lg:text-3xl ' >{"Game And Web Development".toUpperCase()}</p>

                <div className='LinksContainer flex  max-w-[150px] md:max-w-[400px] flex-1 flex-col gap-4'>
                    {buttons.map(link => link)}

                </div>
                <p className='vertical hidden md:inline sm:text-lg md:text-2xl lg:text-3xl ' >{"Game And Web Development".toUpperCase()}</p>

            </div>
        </div>
    )
}
