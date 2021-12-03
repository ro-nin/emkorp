import React from 'react'
import Image from 'next/Image'
import { parseISO } from 'date-fns'
import { useTranslations } from 'next-intl'
import { getIcon } from "../Resources"
import ProjectButtons from './ProjectButtons';

export default function ProjectPreview({ data, selected, onPress }) {
    const sharedTranslator = useTranslations('shared');
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    const baseStyle = ' border border-black transition-all duration-500 ease-in-out relative  flex flex-col lg:inline-flex mt-12 lg:m-0 hover:cursor-pointer '
    const size = selected ? ' flex-grow6 min-h-[200px] lg:flex-grow8 lg:max-h-[100%] lg:max-w-[70%] ' : 'flex-grow1 min-h-[60px]  lg:max-h-[90%] '
    const grayscale = selected ? ' grayscale-0 hover:grayscale-0' : ' grayscale hover:grayscale-0'
    const borderStyle = selected ? ' lg:shadowed' : '  '
    const fullStyle = baseStyle + size + grayscale + borderStyle;
    let imageUrl = '/' + data.images[0];
    return (

        <>
            <div type="button" onClick={onPress} className={fullStyle}>
                {data.showYear === true && <p className=' text-black  z-50  text-2xl font-regular  absolute  -top-9 -left-2'>{parseISO(data.date).getFullYear()}</p>}

                <Image
                    className=""
                    alt={data.title}
                    src={imageUrl}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            {selected &&
                <div className='flex flex-col  lg:hidden border pb-2 px-2 border-black '>
                    <p className="text-black text-xl font-bold break-words">{data.title}</p>
                    <p className="text-black text-l ">{data.category == 'game' ? sharedTranslator('sections.games', { items: 1 }) : sharedTranslator('sections.websites', { items: 1 })},{parseISO(data.date).getFullYear()}</p>
                    <div className='previewIcons flex justify-center gap-2 pt-2 min-h-[2rem] text-black'>
                        {data.stack.map(item => getIcon(item, 45))}
                    </div>
                    <p className="text-black text-l "> {data.previewText ?? loremIpsum.slice(0, 300)} </p>

                    <div className='previewButton  mx-auto flex flex-col justify-center gap-2 pt-8'>
                        <ProjectButtons project={data} buttonStyle={'blackBorderButton inline'} details={true} />
                    </div>
                </div>
            }
        </>

    )
}
