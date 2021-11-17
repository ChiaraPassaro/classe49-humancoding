/*
Selezionare un CD di jazz da ascoltare.
Vado allo scaffale dei cd
seleziono uno per uno cd partendo dal primo e andando verso il fondo dello scaffale
 - controllo se il cd è jazz
   SE
   il cd è Jazz
   lo prendo
   lo inserisco nel mio lettore
   FINE

   ALTRIMENTI
   Ritorno a selezionare un altro CD Finché ci sono cd disponibili

FINE



attraversare un incrocio sulle strisce
Condizione C'è il semaforo?
SE c'è il semaforo
  - Controllo il colore
    SE è ROSSO O Giallo
      Aspetto quindi continuo a controllare il colore del semaforo
    OPPURE SE è VERDE
      Attraverso
    FINE

ALTRIMENTI
  Guardo a destra e sinistra
   SE è libero
    Attraverso
  ALTRIMENTI
  Continuo a guardare a destra e sinistra

FINE




scegliere un articolo da leggere dal feed Linkedin
Accendere computer
Apriamo il browser
Cerchiamo Linkedin
  SE NON ho l'account NOT(account)
    mi registro
    Accedo
  ALTRIMENTI
    Accedo


  SE ho l'account
    Accedo
  ALTRIMENTI
    Mi registro
    Accedo

    Andiamo sulla sezione notizie
      Scorro le notizie
        FINCHÈ non trovo quella che mi interessa OPPURE Finiscono le notizie
          Leggo


aprire un pacchetto di figurine, attaccarle sull'album e scartare le doppie in un mazzo a parte


Apro un pacchetto di figurine alla volta finché non finiscono
  Prendo una figurina alla volta fino a che non finisco le figurine
    Controllo se c'è nella lista doppioni
      SE c'è la scarto
      SE non c'è
       controllo se c'è nell'album
        SE la figurina è presente
          la metto da parte - lista figurine doppioni [30, 40, 1]
        ALTRIMENTI
          la attacco inserisco il numero nella lista dei doppioni

FINE



fare la spesa seguendo una lista, poi pagare alla cassa
Fare la lista
Prendere il carrello

CICLO Controllo  finché non è apero il supermercato
  SE il supermercato è aperto
  Entriamo
  Controllo la lista
   CICLO finché non finisco gli elementi della lista
    prendo un elemento controllo se c'è negli scaffali
      Se non c'è
       continuo con la lista della spesa
      SE c'è
        lo metto nel carrello
  Mi dirigo alla cassa
    CICLO Metto un elemento alla volta sulla cassa finché ho elementi

    Paghiamo
    CICLO finché la transazione non è avvenuta OPPURE Rinuncio
      SE scelgo la Carta
        devo inserire la carta nel pos
          SE inserisco il pin OR contactless
            SE la transazioine va a buon fine
      Se scelgo i Contanti

    Devo lasciare il carrello


    scelgo un film su netflix
    Mi metto sul divano
    prendo il telecomando
    SE il televisore si accende
      Accedo a Netflix
      Se NOT(account)
        registro
      entro
        Se conosco il nome del film o serie la cerco
          guardo
        ALTRIMENTI
         CICLO Seleziono una categoria finché ho delle categorie oppure mi annoio
         WHILE FINCHÈ ho delle categorie AND non mi sono annoiato
          CICLO Scorriamo la lista dei film o serie finché non seleziono il film oppure non ho più voglia di cercare
            se trovo il film lo guardo


    ALTRIMENTI
    Controllo la spina
    FINCHé non funziona batti il telecomando OPPURe se passano più di 5 minuti

    FINE

*/