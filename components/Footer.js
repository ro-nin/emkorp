import * as Strings from '../Resources'
import Image from 'next/image'
import TextBlackLogo from '../public/logo/textBlackLogo.svg'
import SquareLogo from '../public/logo/squareLogo.svg'
import SketchLogo from '../public/logo/sketchLogo.svg'

import { useRouter } from 'next/router'


export default function Footer() {
    const Router = useRouter()

    const shortContacts = [
        Strings.emailContact,
        Strings.githubContact,
        Strings.twitterContact,
        // Strings.linkedinContact,
      ]
    
    //   if(Router.locale === 'it'){
    //     shortContacts.push(Strings.cvIT)
    //   }else{
    //     shortContacts.push(Strings.cvEN)
    //   }

    let buttons = [];
    for (const link of shortContacts) {
        buttons.push(<a key={link.url} className={'footerButton'} href={link.url} >
            {link.label.toUpperCase()}
        </a>)
    }

    return (
        <footer className="text-black bg-white pt-24 pb-12">

            <div className="flex flex-col ">
                <div className="flex flex-col lg:flex-row gap-2 mx-auto">
                    {buttons}
                </div>
                <div className=" mt-6 flex flex-col md:flex-row justify-center items-center md:justify-around ">
                    <div className="hidden md:inline">
                        <Image layout="intrinsic" src={SquareLogo}></Image>
                    </div>
                    <div>
                        <Image layout="intrinsic" src={TextBlackLogo}></Image>
                    </div>
                    <div>
                        <Image layout="intrinsic" width="200" height="200" src={SketchLogo}></Image>
                    </div>
                </div>

                <p className='text-black text-lg font-light text-center'>CC 2021</p>

                <a rel="license" className='flex justify-center text-center center' href="http://creativecommons.org/licenses/by-nc-nd/4.0/">

                    <img alt="License Creative Commons"
                        src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png"
                    />
                </a>




            </div>

        </footer>
    )
}
