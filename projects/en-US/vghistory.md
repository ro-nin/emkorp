---
title: VideogameHistoryTimeline
date: "2023-04-08"
category: websites
previewImage: vgHist/vgHist_desk.jpg
previewText: "Gaming platform's history visualizer"
images:
    - vgHist/vgHist_desk.jpg
videos:
    


projectUrl: https://vg-history-timeline.vercel.app/
stack:
    - nextjs
    - tailwindcss
    
---

Design and development of an interactive timeline for the exploration of gaming platforms from 1970 to today. Using the IGDB database, a public [spreadsheet](https://docs.google.com/spreadsheets/d/1kJCxHSnVb25GgKJf-QQ_khlQ3FZHU3fJuKY4NpYVjPc) was created and populated with the major gaming platforms (laptops, desktops, PCs and arcade), so as not to overload the API each time the site is reached (and following the IGDB caching guidelines) and subsequently the missing informations on the approximate life cycle in terms of years were manually added. It is possible to filter by platform category and select the relevant time frame, obtaining a filtered view of the platforms, dynamically recalculated to adapt to the required space. The site's design evokes the graphic style of 90's console hardware.