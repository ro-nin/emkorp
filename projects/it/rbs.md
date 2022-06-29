---
title: Royal Battle Simulator
date: "2021-07-25"
category: websites
projectUrl: https://royalbattlesimulator.herokuapp.com/
images:
    - rbs/scr.jpg
    - rbs/mobile.jpg

previewText: Creatore di Battle Royale testuali tra personaggi creati dall'utente
stack:
    - nodejs
    - mongo
    - bootstrap


---

Progetto sviluppato al termine del [Web Development Bootcamp 2021](https://www.udemy.com/certificate/UC-6a6736b0-fa00-4f32-89d0-73858b3d1690/) e prima esperienza di sviluppo web full-stack con Javascript. Il back-end è stato sviluppato con **Node.js**, utilizzando unistanza di **MongoDB** in cloud per la persistenza, mentre il client front-end è stato sviluppato utilizzando **Bootstrap**.

Consiste di una piattaforma per l'hosting di partite sul modello *Battle Royale* sotto forma di simulazioni testuali. L'utente può creare una o più leghe (tournament) composte da un roster di personaggi creabili e personalizzabili nelle caratteristiche, e di un set di armi che questi useranno nel gioco. Lutente può quindi generare partite (editions) della lega create e condividerne lo sviluppo pubblicamente. La logica di gioco fa un uso semplicistico delle caratteristiche dei personaggi e di elementi di casualità (sebbene vi sia spazio per estenderne il funzionamento in complessità in futuro).

Il sito è stato pensato con l'idea fondamentale di garantire persistenza delle partite effettuate e soprattutto dei roster creati, dal momento che concorrenti noti richiedevano la creazione da zero (oltre che l'impossibilità di fare upload di immagini custom) per ogni partita che si voleva effettuare. La condivisione pubblica permette inoltre di evitare la creazione di screenshot, come si era solito fare su altre piattaforme simili in passato.

Lo sforzo profuso è stato indirizzato principalmente nella creazione del back-end, mentre lo sviluppo dell'interfaccia si è fermato alla fase del prototipo funzionale, e verrà ripensata integralmente per future versioni.