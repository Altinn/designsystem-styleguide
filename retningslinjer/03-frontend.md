---
layout: page
group: guidelines
permalink: /guidelines/frontend.html
title: Frontend
description: Retningslinjer
---

<div id="alert-no-arrow" class="a-message a-message-error a-message--arrow-off a-message--fullwidth mb-2 a-py-minus-1">
  NB: Innholdet og sidene er under utvikling
</div>

## Kodekvalitet

- HTML og CSS skal validere (som HTML5), med unntak av CSS3-attributter og IE-filtre.
- Klasse- og ID-navn skal ha meningsfulle navn som fungerer til gjenbruk andre steder.
- Bruk av !important skal begrenses i stilarket. Sjekk først om stilsettingen kan utføres ved omstrukturering av klasser/containere.
- Stilarket skal ikke inneholde duplisering og ingen ubrukte klasse- eller ID-selektorer (i den grad det kan kontrolleres).
- Semantisk korrekt oppbygging. Eks. Overskrifter (h1 > h2 osv), legends i fieldsets, caption på tabeller.
- Lister skal være være lister (<ul>, <ol>, <li>, <dl>, <dt> og <dd> ). Også oppramsinger av ting kan ofte markeres som lister.

## Valideringsverktøy
Bootlint - Validerer Bootstrap prosjekter
CSS Validator - Validerer CSS
Total Validator - Validerer tilgjengelighet, rettskriving, og ødelagte lenker
Easy Checks - Nyttige verktøy for UU
Tanaguru Contrast Finder - Sjekker fargekontraster og foreslår gyldige alternativer
Colour Contrast Analyser - Validerer fargekontraster etter WCAG2.0 krav (ikke prøvd)

## CSS - regler og utilities

For å få en felles forståelse av "best practice" for frontend-utvikling i Altinn har vi samlet noen regler for CSS, samt utilities-klassene vi opererer med

- Skriv all CSS ved hjelp av SASS/SCSS
- Alle variabler skal inn i "variables.scss"
- Bruk kun klasser til stilsetting, ikke ID'er.
- Kun engelske klassenavn, id-navn og kommentarer

## Prefikser

For å hjelpe utviklere å skille mellom klasser som kommer fra Bootstrap, Patternlab og klasser som er ment for å stilsette Altinns UI-komponenter, bruker vi prefikser som start på egendefinerte klasser.

- .a-... Spesifiserer stilsetting for Altinns UI-komponenter
- .ap-... Spesifiserer stilsetting for presentasjon av Altinns Profilmanual
- .sg-... Stilsetting for selve Pattern Lab og overstyring av default design.
- .a-sg-... Stilsetting lagt til for å utvide Pattern Lab's design
- .a-js-... For JavaScript og dens funksjoner

## CSS Konvensjon

For å sikre konsistens i CSS-koden, skiller vi modul, komponent og state med bindestrek. Hver del av navnet skrives i lowerCamelCase.

.< moduleName > [ - < componentName > ][ - < state > ] {}

**Eksempler**

- Modul (container/root) <br> .searchResults {}

- Komponen av en modul<br>.searchResults-heading {}

- State: (f.eks AJAX-loading)<br> .searchResults-isLoading {}


## Sass-lint med custom policies

Der det er sammenfallende regler med linting av javascript er disse like. Dette gjelder i hovedsak innrykk som settes som 2xspace. Alle regler for linting av sass ligger i filen «.sass-lint.yml». Her ligger det også lenker til dokumentasjonen for de spesifikke reglene. Om en regel er satt til 0 er den skrudd av, 1 vil gi en warning og 2 vil gi en feil.

Man kan sette opp automatisk linting av scss i Visual Studio Code, installer extension «vscode-sass-lint»: [https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint](https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint) .

For å linte sass fra kommandolinjen kjør «npm run sass» eller «./node_modules/.bin/sass-lint –v -q» fra roten av git-repoet. Om man bruker «npm run sass» vil kommandoen gi en feilmelding til slutt om man har noen feil eller warnings. Derfor kan det være ryddigere å bruke den andre kommandoen.

For å linte en spesifikk sass fil, bruk kommandoen «./node_modules/.bin/sass-lint –v –q source/css/scss/<mappenavn>/<filnavn>».

Sortering av element properties er satt til å ta utgangspunktet i bootstrap sin PropertySortOrder [https://github.com/twbs/bootstrap/blob/v4-dev/scss/.scss-lint.yml](https://github.com/twbs/bootstrap/blob/v4-dev/scss/.scss-lint.yml).
