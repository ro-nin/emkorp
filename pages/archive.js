import ProjectLayout from "../components/layouts/ProjectLayout"
import { getSortedProjectsData } from "../lib/projects"
import { useIntl, NextIntlProvider, useTranslations } from 'next-intl';
import { parseISO } from 'date-fns'
import Head from 'next/head'
import Link from "next/link";
import { useMemo } from "react";

//usecallback?
const sortDateDesc = (a, b) => {

    const dateA = parseISO(a.date)
    const dateB = parseISO(b.date)

    if (dateA < dateB) {
        return 1
    } else if (dateA > dateB) {
        return -1
    } else {
        return -1
    }
};

export default function Archive({ sortedProjectsData }) {
    const t = useTranslations('shared');
    const intl = useIntl();
    const { allProjects } = sortedProjectsData.projects
    const reversedProjects = useMemo(
        () => allProjects.sort(sortDateDesc),
        [allProjects]
    );
    const gameCatStyle = ' text-gray-600'
    const webCatStyle = ' text-gray-500'
    const otherCatStyle = ' text-gray-700'


    return <div className="flex flex-col pr-12  gap-1 ">
        <div className={`opacity-0 text-lg ${gameCatStyle}${webCatStyle}${otherCatStyle}`}>
            {/* workaround for tailwind purging */}
        </div>
        <Head>
            <title>{'Archive'}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content={"EMKORP project " + "ARCHIVE"}
            />
            <meta property="og:title" content={"EMKORPORATION - " + "ARCHIVE"} />
            <meta
                property="og:description"
                content={"EMKORP project " + "ARCHIVE"}
            />
            <meta
                name="og:image"
            />
            <meta
                property="og:image"
            />
            <meta
                property="og:type"
                content="website"
            />


            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={"EMKORPORATION - " + "ARCHIVE"} />
            <meta name="twitter:description" content={'all work'} />
            <meta name="twitter:image" content={""} />

        </Head>

        <h1 className='pt-6'>{t('sections.archive').toUpperCase()}</h1>
        <ul className="flex flex-col gap-4 mt-8">
            {reversedProjects.map((project) => {
                return <span key={project.id ?? project.title} >
                    <li className={` flex gap-2 items-end ${project.category == 'games' ? gameCatStyle : project.category == 'websites' ? webCatStyle : otherCatStyle} `}>
                        <span className={`font-bold ${project.id ? 'text-lg' : 'text-base'}`}>{project.title}</span>
                        <span className="font-light">{project.category}</span>
                        <span>{parseISO(project.date).getFullYear()}</span>
                        {project.id && <a className="px-1 border-2 border-white text-white hover:bg-gray-50 hover:text-black hover:cursor-pointer " href={'/project/' + project.id + '#header'}>About</a>}

                        {project.projectUrl && <a className="px-1 border-2 border-white text-white hover:bg-gray-50 hover:text-black hover:cursor-pointer " href={project.projectUrl}>URL</a>
                        }
                    </li>
                </span>
            })}
        </ul>



    </div>
}

Archive.getLayout = function getLayout(page) {
    return (
        <NextIntlProvider messages={page.props.messages && JSON.parse(page.props.messages)}>
            <ProjectLayout>{page}</ProjectLayout>
        </NextIntlProvider>
    )
}




export async function getStaticProps({ locale }) {

    const sortedProjectsData = getSortedProjectsData(locale, true, true);
    let messages = await import(`../messages/index/${locale}.json`)
    messages = JSON.stringify(messages)


    return {
        props: {
            sortedProjectsData,
            messages
        }
    }
}
