
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import { translation } from '../Resources'
export default function Header({ underlineLinks }) {
    const router = useRouter()
    const { pathname, asPath, query } = router

    const sharedTranslator = useTranslations('shared');
    //const websitesSectionLabel = sharedTranslator('sections.websites',{items:2})
    //const gamesSectionLabel = sharedTranslator('sections.games',{items:2})
    let linkStyle = "text-sm md:text-base flex items-center p-2 hover:bg-opacity-60 bg-opacity-0 bg-white transition";
    if (underlineLinks) linkStyle += " underlineThick ";

    let targetLocale = null;
    if (router.locale === "it") {
        targetLocale = "en-US"
    }
    else {
        targetLocale = "it"
    }
    return (
        <div className=" z-50 sticky top-0 flex flex-wrap flex-row justify-end md:pr-6 gap-2 md:gap-4 py-1 bg-black">
            <Link href="/#main" passHref><a className={linkStyle}>Home</a></Link>
            <Link href="/#about" passHref><a className={linkStyle}>{sharedTranslator('sections.about')}</a></Link>
            <Link href="/#portfolio" passHref ><a className={linkStyle}>{sharedTranslator('sections.projectShowcase')}</a></Link>

            <Link passHref href={{pathname, query}} locale={targetLocale}>
                <a className={linkStyle}>
                    {translation.icon}
                    <p className='pl-1 text-sm md:text-base'> {targetLocale}</p>
                </a>
            </Link>

            <style jsx>{
                `a.underlineThick {text-decoration: underline  solid 4px;
                    transition: 300ms;

                }`
            }</style>
        </div >

    )
}
