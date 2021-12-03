import React from 'react'
import { useTranslations } from 'next-intl'

import { AiOutlineDown } from 'react-icons/ai'
export default function AboutMe({ links }) {

    const indexT = useTranslations('index');
    const sharedT = useTranslations('shared');


    let buttons = [];
    for (const link of links) {
        buttons.push(<a key={link.url} className={'whiteBorderButton justify-between'} href={link.url}>
            {link.label.toUpperCase()}
            <div className=" pl-2 hidden md:flex  items-center text-white ">
                {link.icon}
            </div>
        </a>)
    }
    return (
        <div id="about" className='About min-h-[100vh] bg-black'>

            <div className=' pt-20 flex flex-col lg:flex-row  justify-center gap-3 md:gap-6   items-center max-h-[80vh] '>
                <p className='text-3xl lg:text-6xl text-white  text-left'>
                    {sharedT('sections.about').toUpperCase()}
                </p>
                <div className='AboutMe_Left max-w-[80vw] lg:max-w-[45vw] text-left'>
                    <p className='text-white font-semibold text-xl md:text-4xl '>Emanuele Cioffi</p>
                    <p className='text-white font-thin text-lg md:text-2xl md:ml-1'>{indexT('shortBio.educationTitle')}</p>
                    <p className='text-white font-light text-base md:text-xl md:mt-2 md:ml-2'>{indexT('shortBio.bioText')} </p>

                </div>

                <div className='LinkContainer  flex  flex-row flex-wrap lg:flex-col gap-2 justify-center px-2 md:px-0'>
                    {buttons.map(link => link)}
                </div>

            </div>

            <div className='pb-6 pt-3 lg:pt-24 flex justify-center'>
                <a href={"#portfolio"} className='whiteBorderButton '>
                    <div className='flex items-center gap-2'>
                        <AiOutlineDown className='animate-pulse ' />
                        {"Portfolio".toUpperCase()}
                    </div>
                </a>

            </div>


        </div>
    )
}
