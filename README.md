#Overview
A static site portfolio built with Next.js and Tailwind.
Deployed at http://emkorp.vercel.app


#TODO
* Use MDX to integrate internazionalitazion of projects (no more double files)

#Structure
Projects can be added as a .md file in the folder Projects.
## project markdown schema:

```
---
title: 
date: 
category: {web || game}
previewImage: relativePathURL
previewText:
images:
    - {relativePathURL}
    ...
videos:
    - {relativePathURL}
    ...
projectUrl: url
projectSourceUrl: url
stack:
    - techName
    ...
---

ProjectBodyText
```
