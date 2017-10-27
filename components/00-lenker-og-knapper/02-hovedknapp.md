---
layout: component-detail
group: komponenter
subgroup: lenker-og-knapper
permalink: /komponenter/lenker-og-knapper/hovedknapp.html

title: Hovedknapp
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description: Hovedknapp i standard størrelse.
  styleModifier: a-btn
  includeClassification: atoms
  includeCategory: 03-knapper
  includeName: 14-knapp-stor

usage:
- title: Når skal du bruke denne komponenten?
  description: Den store knappen brukes i sjeldne tilfeller der en oppgave skal fremheves, f.eks "Logg inn" eller fremheve en lenke til et aktuelt skjema. Brukes stort sett inni illustrasjonsfelt på forside.
- title: Når skal du vurdere alternativer?
  description: Dersom knappen ikke har en veldig god grunn til å være fremhevet, skal vanlige knapper benyttes.
- title: Policies
  description: Se theme-spesifikke policies.

theme-specific-altinn:
- description: Ingen retningslinjer er lagt inn for Altinn enda.

theme-specific-brreg:
- description: Ingen retningslinjer er lagt inn for Brønnøysundregistrene enda.

classes:
- className: a-btn a-btn-border
  required : ja
  description: Bruk disse klassene for hovedknappen. NB. En lenke kan også styles som en hovedknapp, ved å legge på de samme klassene på < a >.

theme-specific:
- description: Teksten i Altinns hovedknapp justeres etter skjermstørrelse 3.6rem (desktop), 2.8rem (tablet), 2.4rem (mobil).


---
