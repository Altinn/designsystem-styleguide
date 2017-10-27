---
layout: component-detail
group: komponenter
subgroup: lenker-og-knapper
permalink: /komponenter/lenker-og-knapper/lenke.html

title: Lenke
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description: En standard lenke
  styleModifier:
  includeClassification: atoms
  includeCategory: 02-lenker
  includeName: 00-link
- title: Ekstern
  description: En ekstern lenke.
  styleModifier:
  includeClassification: atoms
  includeCategory: 02-lenker
  includeName: 02-link-ekstern
- title: Fremhevet
  description: En fremhevet lenke.
  styleModifier:
  includeClassification: atoms
  includeCategory: 02-lenker
  includeName: 03-link-fremhevet

usage:
- title: Når skal du bruke denne komponenten?
  description: Brukes når brukeren sendes til en annen side, enten intern eller ekstern.
- title: Når skal du vurdere alternativer?
  description: Dersom brukeren ikke skal sendes til en side, men utføre en handling. I slike tilfeller skal knapper brukes, ikke lenker.
- title: Policies
  description: Se theme-spesifikke policies.

theme-specific-altinn:
- description: Alltid 2px understrek på lenker, unntak for artikler, der det er 1px (2px ved fet tekst). <p>Eksterne lenker får automatisk en pil (vendt skrått oppover) til høyre for teksten. Pilen etter lenketekst skal ikke ha understrek under.</p> <p>Fremhevede lenker brukes på utvalgte steder for å oppfordre brukeren til en oppgave eller henvise til en oversikt. For eksempel i slutten av lister, etc.</p>

theme-specific-brreg:
- description: Ingen retningslinjer er lagt inn for Brønnøysundregistrene enda.

classes:
- className: Ingen
  required : nei
  description: Ved bruk av < a > vil lenken automatisk få riktig styling. Det er ikke behov for å legge til en klasse.
- className: a-linkFeatured
  required : nei
  description: Legg til denne klassen dersom lenken skal være fremhevet.
- className: a-btn-link
  required : nei
  description: For å få en knapp til å se ut som en lenke, kan man bruke klassen "a-btn-link" på < button >.

---
