---
title: VideogameHistoryTimeline
date: "2023-04-08"
category: websites
previewImage: vgHist/vgHist_desk.jpg
previewText: "Visualizzatore interattivo per piattaforme di gioco"
images:
    - vgHist/vgHist_desk.jpg
videos:
    


projectUrl: https://vg-history-timeline.vercel.app/
stack:
    - nextjs
    - tailwindcss
    
---

Design e sviluppo di una timeline interattiva per l'esplorazione delle piattaforme di gioco dal 1970 ad oggi. Utilizzando la banca dati IGDB, è stato creato e popolato [un foglio di calcolo](https://docs.google.com/spreadsheets/d/1kJCxHSnVb25GgKJf-QQ_khlQ3FZHU3fJuKY4NpYVjPc) pubblico con le principali piattaforme di gioco (portatili, desktop, PC e arcade), in modo da non sovraccaricare le API ad ogni apertura del sito (e seguendo le guidelines per il caching di IGDB) ed in seguito sono state aggiunte manulamente le informazioni mancanti sul ciclo di vita approssimativo in termini di anni. E' possibile filtrare per categoria di piattaforma e selezionare il lasso di tempo interessato, ottenenedo una vista filtrata delle piattaforme, ricalcolata dinamicamente per adattarsi allo spazio richiesto. Il design del sito rievoca lo stile grafico degli hardware per console anni 90'.