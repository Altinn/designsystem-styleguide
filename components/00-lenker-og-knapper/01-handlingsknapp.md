---
layout: component-detail
group: komponenter
subgroup: lenker-og-knapper
permalink: /komponenter/lenker-og-knapper/handlingsknapp.html

title: Handlingsknapp
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description: Handlingsknapp i standard størrelse.
  styleModifier: a-btn
  includeClassification: atoms
  includeCategory: 04-handlingsknapper
  includeName: 17-handlingsknapp
- title: Full bredde
  description: Handlingsknapp i full bredde.
  styleModifier: a-btn
  includeClassification: atoms
  includeCategory: 04-handlingsknapper
  includeName: 19-handlingsknapp-full-bredde

usage:
- title: Når skal du bruke denne komponenten?
  description: En handlingsknapp består av et ikon som forklarer handlingen samt beskrivende tekst. Denne skal benyttes i disse tilfellene; Legge til, laste opp, laste ned, laste inn flere. Full bredde brukes i tilfeller der knappen avslutter en liste og ikke står helt for seg selv.
- title: Når skal du vurdere alternativer?
  description: Dersom knappen skal utføre en av følgende handlinger, 'Send', 'Lagre', 'Neste'. I disse tilfellene benyttes vanlig knapp som har solid bakgrunnsfarge.
- title: Policies
  description: Det skal være minimum 12px mellomrom mellom hver knapp/lenke. Dersom det skal legges flere knapper ved siden hverandre, legges de inn i < div class="a-btn-group" > </ div >.

theme-specific-altinn:
- description: Altinns handlingsknapp har stiplete kantlinjer og transparent fyll. Siden knappen bare er 36px høy, er det avsatt et område over og under, slik at touch target blir 48px.

theme-specific-brreg:
- description: Ingen retningslinjer er lagt inn for Brønnøysundregistrene enda.


classes:
- className: a-btn a-btn-action
  required : ja
  description: Bruk disse klassene for handlingsknapper.
- className: a-fullWidthBtn
  required : nei
  description: Legges på når knappen skal fylle helt ut i bredden av sin container.
- className: ai ai-plus
  required : nei
  description: Legg til disse to klassene på < i > , bytt evt ut "plus" med ikonet som skal brukes.
- className: a-btn-group
  required : nei
  description: Dersom det skal ligge flere knapper ved siden hverandre, legg en < div > rundt knappene med klassen a-btn-group.

---
