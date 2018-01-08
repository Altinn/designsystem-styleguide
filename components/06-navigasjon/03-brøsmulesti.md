---
layout: component-detail
group: komponenter
subgroup: navigasjon
permalink: /komponenter/navigasjon/smulesti.html

title: Brødsmulesti
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description: Brødsmulesti som viser kun forrige nivå på små skjermer.
  styleModifier:
  includeClassification: molecules
  includeCategory: 02-navigasjon
  includeName: 14-smulesti

usage:
- title: Når skal du bruke denne komponenten?
  description: Brukes for eksempel på artikkelsider, temasider, hjelpesider og skjemasider for å vise brukeren hvor siden bor. Brødsmulestien skal vises fra andre nivå og videre nedover i strukturen.
- title: Når skal du vurdere alternativer?
  description: På første nivå i en sidestruktur er det ikke nødvendig å vise brødsmulestien (f.eks på seksjonsforsider). Dersom det kun er et nivå av sider, er det ikke nødvendig med brødsmulesti. Dette gjelder for eksempel søkesider, profil og innboks.
- title: Policies
  description: Dersom det ikke er plass til hele brødsmulestien på skjermens bredde, vil siste nivå avsluttes med "...". På de minste skjermene vises kun forrige nivå i brødsmulestien med en tilbakepil for å indikere "Opp til forrige nivå".

theme-specific-altinn:
- description: Teksten i brødsmulestien skal være 16px på små skjermer, og 20px på store skjermer. Lenkene skal ha 2px border bottom (blå), og siden du står på skal være utgrået uten understrek.

theme-specific-brreg:
- description: Ingen retningslinjer er lagt inn for Brønnøysundregistrene enda.

classes:
- className:
  required:
  description:

---
