---
layout: component-detail
group: tekst
permalink: /tekst/varsel.html

title: Varsel
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Info
  description: Et vanlig varsel med nøytral informasjon
  styleModifier:
  includeClassification: atoms
  includeCategory: 07-tekst
  includeName: 01-varsel-01-info
- title: Driftsmelding
  description: Varsel som viser driftsmeldinger eller endringsinformasjon
  styleModifier:
  includeClassification: atoms
  includeCategory: 07-tekst
  includeName: 00-varsel
- title: Advarsel
  description: Varsel som antyder feil input, driftsfeil, etc.
  styleModifier:
  includeClassification: atoms
  includeCategory: 07-tekst
  includeName: 01-varsel-02-advarsel
- title: Godkjent
  description: Varsel som antyder gyldig input.
  styleModifier:
  includeClassification: atoms
  includeCategory: 07-tekst
  includeName: 01-varsel-03-godkjent
- title: Uten pil
  description: Varselboks som ikke har pil over seg og er 100% (fyller hele bredden).
  styleModifier:
  includeClassification: atoms
  includeCategory: 07-tekst
  includeName: 01-varsel-04-alene
- title: Uten skygge
  description: Varselboks uten skygge.
  styleModifier:
  includeClassification: atoms
  includeCategory: 07-tekst
  includeName: 01-varsel-05-utenskygge

usage:
- title: Når skal du bruke denne komponenten?
  description: Brukes for å gi brukeren varsler, f.eks ved feil i systemet, feil innfylt informasjon eller ved andre viktige opplysninger brukeren må gjøres oppmerksom på.
- title: Når skal du vurdere alternativer?
  description: Dersom det gjelder tilleggsinformasjon til et begrep eller tema, bruk heller popover.
- title: Policies
  description: Dersom det er viktig at brukeren får med seg informasjonen, legg en role="alert" på div-en, slik at brukere med skjermlesere får med seg informasjonen uten å måtte lete seg frem til den.

theme-specific-altinn:
- description: Fargene skal brukes riktig etter hva varselet skal antyde. Grå - info, Gul - driftsmelding/endringsinformasjon, Rød - advarsel, ute av drift, feil input, Grønn - riktig input, godkjent.

theme-specific-brreg:
- description: Ingen retningslinjer er lagt inn for Brønnøysundregistrene enda.

classes:
- className: a-message
  required: ja
  description: Brukes som standard.
- className: a-message--fullwidth
  required: nei
  description: Bruk denne klassen for å få varselboksen til å fylle hele den tilgjengelige bredden.
- className: a-message--arrow-off
  required: nei
  description: Bruk denne klassen for å fjerne pilen.
- className: a-message--no-dropshadow
  required: nei
  description: Bruk denne klassen for å fjerne skyggen.
- className: a-message-info
  required: nei
  description: Bruk denne klassen ved driftsmelding/endringsinformasjon.
- className: a-message-error
  required: nei
  description: Bruk denne klassen ved advarsler, feil input og kritisk informasjon / ute av drift.
- className: a-message-success
  required: nei
  description: Bruk denne klassen ved korrekt input, eller andre godkjenninger.

---
