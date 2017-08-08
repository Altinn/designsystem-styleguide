---
layout: page
title: Utviklere
group: komigang
permalink: /komigang/getting-started-developers.html
description: Kom i gang


---

<p class="a-leadText a-fontBold">For å komme i gang med utvikling på Brønnøysundregistrenes webløsninger, bør du ha kjennskap til følgende.</p>

## Pattern Lab

For å bygge designsystemet har vi brukt «Pattern Lab», som er en samling verktøy for å lage atomiske designsystem. Pattern Lab setter sammen ulike maler til en statisk stilguide på nett, sørger for enkel prototyping og overlevering av HTML-kode til backend-utviklere.

<b>Pattern Lab brukes i hovedsak til to formål på Altinn:</b>

- Pattern Lab skal være et hjem for alle UI-komponenter med deres styling og retningslinjer. CSS og javascript for komponentene skal **kun** eksistere her.
- Pattern Lab skal fungere som prototypeverktøy. Alle maler skal prototypes og testes før implementering.

## Skal du bruke designsystemet i et prosjekt?

Er du backend-utvikler og skal benytte deg av css- og javascript-filene fra designsystemet, kan du hente dem fra [NPM](https://www.npmjs.com/package/altinn-designsystem). Designsystemet er versjonsbasert, slik at din løsning kan velge å oppdatere til nyeste versjon av designsystemet når det er ønskelig. NB: jQuery må hentes inn i tillegg.

## Skal du jobbe med frontend i designsystemet?

Med definerte UI-komponenter i Patternlab kan man som frontend-utvikler kjapt sy sammen nye prototyper. NB: Ta stilling til om løsningen du bruker skal ha et eget visuelt theme, eller benytte seg av et av de eksisterende.

Skal du prototype i Pattern Lab, må du først laste ned kodepakken fra Altinns [github](https://github.com/Altinn/DesignSystem) og følge oppskriften der for hvordan du setter opp utviklingsmiljøet.

### Pattern Lab Dokumentasjon
Dokumentasjon for hvordan utvikle atomisk design med Pattern Lab er tilgjengelig på [Pattern Lab](http://patternlab.io/docs/index.html) sine nettsider.

### Rutiner for oppdatering
Når et nytt atom, molekyl eller organisme lages, skal følgene sjekkes:

- Følg retningslinjene for <a href="guidelines/frontend.html">frontend-kode</a>.
- Oppdater komponentens MD-fil, med versjon, status, bruksområde og eventuelle retningslinjer.
- Sjekk at komponenten fungerer i alle skjermstørrelser (responsivt)
- Sjekk at både koden og komponenten er <a href="guidelines/frontend.html">universelt utformet</a> i henhold til kravene.
- Når den nye komponenten er ferdig, lag ny versjon av designsystemet (se under) og skriv hva som er gjort.

### Versjonering med Package-json og Gulp
Når man skal pushe en ny versjon av designsystemet skal package.json oppdateres med nytt versjonsnummer. Skriv hva som er gjort og hvilke komponenter som er påvirket.
