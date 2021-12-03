import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { parseISO } from 'date-fns'

const projectsDirectory = path.join(process.cwd(), 'projects')



/**
 * fetch projects markdown from file system and return them grouped by category
 * in: locale, defaults for en-US, currently supporting only 'it'
 * return: {webProjects,gameProjects}
*/
export function getSortedProjectsData(locale = 'en-US') {
    // Get file names under /projects
    const dirPath = path.join(projectsDirectory, locale)
    const fileNames = fs.readdirSync(dirPath)
    const allprojectsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(dirPath, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the project metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })

    const webProjects = allprojectsData.filter(proj => proj.category === 'web');
    const gameProjects = allprojectsData.filter(proj => proj.category === 'game');

    // Sort projects by date
    const sortMethod = (a, b) => {

        const dateA = parseISO(a.date)
        const dateB = parseISO(b.date)

        if (dateA < dateB) {
            return -1
        } else if (dateA > dateB) {
            return 1
        } else {
            return 0
        }
    };

    

    const allProjects = { 'projects': { 'allProjects': allprojectsData.sort(sortMethod), 'webProjects': webProjects.sort(sortMethod), 'gameProjects': gameProjects.sort(sortMethod) } }
    setVisibleYears(allProjects.projects.allProjects);
    return allProjects;
}

//
export function getAllProjectIds(locales) {
    const toReturn = [];
    for (const locale of locales) {
        const dirPath = path.join(projectsDirectory, locale)

        const fileNames = fs.readdirSync(dirPath)
        toReturn.push(...(fileNames.map(fileName => {
            return {
                params: {
                    id: fileName.replace(/\.md$/, '')
                }
                , locale: locale
            }
        })))
    }
    return toReturn

}

export function setVisibleYears(projects) {
    let prevProj = null;
    for (const [index, proj] of projects.entries()) {

        if (index == 0)
            proj.showYear = true;
        else if (parseISO(prevProj.date).getFullYear() != parseISO(proj.date).getFullYear())
            proj.showYear = true;

        else proj.showYear = false;

        prevProj = proj;

    }
}


export async function getProjectData(id, locale = 'en-US') {
    const fullPath = path.join(projectsDirectory + '/' + locale, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const content = processedContent.value; //TODO

    const contentHtml = processedContent.toString()


    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}



