import React from "react";
import styles from "./css/course.module.css";

export default function Course() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.headerText}>
          <h1>Programmeren</h1>
          <small>
            <i>Graduaat</i>
          </small>
          <p>
            Tijdens het Graduaat Programmeren leer je het zichtbare (front-end)
            en onzichtbare (backend) deel van web- en mobiele toepassingen
            ontwikkelen. Je wordt specialist in JavaScript, HTML, CSS en vult
            jouw skills aan met o.a. PHP, Python, UI/UX. Naast deze technische
            kant, vergaar je ook algemene ICT-skills. Je leert ook hoe digital
            agencies werken en wat jouw rol hierbinnen zal zijn. Na deze
            opleiding kan je aan de slag als front-end developer, full-stack
            JavaScript developer, PHP developer, Web Designer + Coder of CMS
            Themer.
          </p>
        </div>
        <img className={styles.image} src="/assets/img/pgm.jpg" alt="" />
      </div>
      <div className={styles.articleContainer}>
        <div>
          <h2>Erkend knelpuntberoep</h2>
          <p>
            Het tekort aan programmeurs in Vlaanderen is zo groot dat de VDAB
            ons Graduaat Programmeren actief promoot onder werkzoekenden.
            Kandidaten die aan alle voorwaarden voldoen, krijgen hun
            inschrijvingsgeld terugbetaald en ontvangen een forfaitaire
            tussenkomst voor leerkosten zoals de aankoop van een laptop. Verder
            is er nog een vergoeding voor hun verplaatsingen, en worden
            eventuele kosten voor kinderopvang terugbetaald.
          </p>
        </div>
        <div>
          <h2>Al doende leren</h2>
          <p>
            De focus in de opleiding ligt op de praktijk. Van bij de start leer
            je theorie omzetten in praktijk aan de hand van concrete opdrachten.
            Zo werk je in het vak @Work real life cases van digital agencies uit
            onder begeleiding van de docenten. Je gaat op kijkstage en doet mee
            aan hackathons. In het tweede jaar draai je mee in een echt bedrijf
            en word je gecoacht door de docenten. Daarnaast weerspiegelt deze
            opleiding de verscheidenheid van de maatschappij vandaag de dag.
            Jongeren en ouderen, Vlamingen en niet-Vlamingen, jullie gaan samen
            aan de slag binnen deze opleiding en plukken de vruchten van elkaar
            werk- en levenservaring.
          </p>
        </div>
        <div>
          <h2>Uitstekende begeleiding</h2>
          <p>
            Je krijgt les in relatief kleine groepen. Verschillende coaches
            staan steeds paraat om je vragen te beantwoorden. Trajectcoaches
            volgen je nauwgezet op en sturen bij waar nodig. Je kan gebruik
            maken van de leerbegeleiding die wordt aangeboden voor onderwerpen
            zoals faalangst, uitstelgedrag, planning, timemanagement, ... We
            werken ook in verschillende niveaus, dus je kan perfect starten
            zonder enige voorkennis. Pik je kennis sneller op? Dan voorzien we
            extra uitdagende opdrachten.
          </p>
        </div>
        <div>
          <h2>Ervaring op je cv</h2>
          <p>
            Werkplekleren en bootcamps maken een groot en belangrijk deel uit
            van een graduaat. Hierbij ga je concrete opdrachten en vragen van
            bedrijven aanpakken en tot een goed einde brengen. Zo doe je
            werkervaring op tijdens je opleiding en kan je hiermee uitpakken
            tijdens een sollicitatiegesprek of in je portfolio.
          </p>
        </div>
        <div>
          <h2>Bachelordiploma</h2>
          <p>
            Dat kan na je graduaatsopleiding via een verkort traject (minstens
            90 studiepunten of 1,5 jaar).
          </p>
        </div>
      </div>
    </div>
  );
}
