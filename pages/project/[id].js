import ProjectLayout from "../../components/layouts/ProjectLayout"
import { getAllProjectIds, getProjectData } from "../../lib/projects"
import markdownStyles from '../../styles/markdown-styles.module.css'
import Image from 'next/image'
import { useIntl, NextIntlProvider, useTranslations } from 'next-intl';
import ProjectButtons from "../../components/ProjectButtons"
import { parseISO } from 'date-fns'
import { getIcon } from "../../Resources"
import Head from 'next/head'
import  ReactMarkdown  from "react-markdown";
export default function Project({ postData }) {
    const t = useTranslations('project');
    const intl = useIntl();
    const dateTime = parseISO(postData.date);
    const markdownContent = postData.markdownContent;

    return <div className="flex flex-col pr-12  gap-1">
        <Head>
            <title>{postData.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content={"EMKORP project " + postData.title}
            />
            <meta property="og:title" content={"EMKORPORATION - " + postData.title} />
            <meta
                property="og:description"
                content={"EMKORP project " + postData.title}
            />
            <meta
                name="og:image"
                content={postData.previewImage}
            />
            <meta
                property="og:image"
                content={postData.previewImage}
            />
            <meta
                property="og:type"
                content="website"
            />


            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={"EMKORPORATION - " + postData.title} />
            <meta name="twitter:description" content={postData.previewText} />
            <meta name="twitter:image" content={postData.previewImage} />

        </Head>


        <h1 className='pt-6'>{postData.title}</h1>
        <h2>{t('released')} {intl.formatDateTime(dateTime, { year: 'numeric', month: 'long' })}</h2>
        <div className='flex gap-4 '>
            {postData.stack.map(item => getIcon(item, 45))}

        </div>
        <div
            className={markdownStyles['markdown']}>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>

        <div className="flex md:flex-row flex-col gap-4 mt-6 mx-auto">
            <ProjectButtons project={postData} buttonStyle={'whiteBorderButton'} />
        </div>
        <div className="Images mt-6 flex flex-wrap flex-col md:flex-row  justify-center max-w-full 2 gap-4  ">
            {postData.images.map(item =>
                <div key={item} className="relative border-b border-opacity-5
                 w-[75vw] h-[40vh]  
                 md:min-w-75vw md:min-h-75vh  
                 lg:max-w-full py-2">

                    <Image
                        key={item}
                        src={'/' + item}
                        quality={100}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            )}
        </div>

    </div>
}

Project.getLayout = function getLayout(page) {
    return (
        <NextIntlProvider messages={page.props.messages && JSON.parse(page.props.messages)}>
            <ProjectLayout>{page}</ProjectLayout>
        </NextIntlProvider>
    )
}

export async function getStaticPaths({ locales }) {
    const paths = getAllProjectIds(locales)
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params, locale }) {
    //TODO take the it locales articles
    let messages = await import(`../../messages/index/${locale}.json`)
    messages = JSON.stringify(messages)

    const postData = await getProjectData(params.id, locale)
    return {
        props: {
            postData,
            messages
        }
    }
}
