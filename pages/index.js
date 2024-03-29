import Head from 'next/head'
import HomeLayout from '../components/layouts/HomeLayout'
import { getSortedProjectsData } from '../lib/projects'
import { NextIntlProvider } from 'next-intl';
import * as Resources from '../Resources'
import ProjectsShowcase from '../components/ProjectsShowcase'
import LandingIntro from '../components/LandingIntro'
import AboutMe from '../components/AboutMe'
import SquareLogo from '../public/logo/squareLogo.svg'
import Script from 'next/script'
import { useRouter } from 'next/router'
export default function Home({ sortedProjectsData, }) {
  const { allProjects } = sortedProjectsData.projects

  const Router = useRouter()

  const contacts = [
    Resources.emailContact,
    Resources.githubContact,
    // Resources.linkedinContact,
    // Resources.igContact,
    Resources.twitterContact,
  ]

  // if (Router.locale === 'it') {
  //   contacts.push(Resources.cvIT)
  // } else {
  //   contacts.push(Resources.cvEN)
  // }

  return (
    <>

      <Head>
        <title>EMKORPORATION</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Web/Game Development Portfolio"
        />
        <meta property="og:title" content="EMKORP." />
        <meta
          property="og:description"
          content="Web/Game Development Portfolio"
        />
        <meta
          name="og:image"
          content={'http://emkorp.vercel.app/logo/textBlackLogo.jpg'}
        />
        <meta
          property="og:image"
          content={'http://emkorp.vercel.app/logo/textBlackLogo.jpg'}
        />
        <meta
          property="og:image:alt"
          content={'EMKORP logo'}
        />
        <meta
          property="og:url"
          content="http://emkorp.vercel.app"
        />
        <meta
          property="og:type"
          content="website"
        />

        <meta name="google-site-verification" content="JkTwPy3QneN1TXTJzNIEPdLdnAr9R_lfisbkr2lxhgI" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="EMKORP." />
        <meta name="twitter:description" content="Web/Game development porfolio." />
        <meta name="twitter:image" content="http://emkorp.vercel.app/logo/textBlackLogo.jpg" />

      </Head>
      <Script strategy="afterInteractive" src={"https://www.googletagmanager.com/gtag/js?id=G-C5VJ0MYY69"} />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-C5VJ0MYY69');
        `}
      </Script>

      <main id="main" className="text-center mb-0 min-h-fullscreen ">
        <LandingIntro links={contacts.slice(0,3)} />
        <AboutMe links={contacts} />
        <ProjectsShowcase projects={allProjects} />

      </main>
    </>
  )
}


Home.getLayout = function getLayout(page) {
  return (
    <NextIntlProvider messages={page.props.messages && JSON.parse(page.props.messages)}>
      <HomeLayout >
        {page}
      </HomeLayout>
    </NextIntlProvider>
  )
}


export async function getStaticProps({ locale }) {

  const sortedProjectsData = getSortedProjectsData(locale);
  let messages = await import(`../messages/index/${locale}.json`)
  messages = JSON.stringify(messages)


  return {
    props: {
      sortedProjectsData,
      messages
    }
  }
}
