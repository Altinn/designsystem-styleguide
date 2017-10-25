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
  description:
  styleModifier: < a >
  includeClassification: atoms
  includeCategory: 02-lenker
  includeName: 00-link

usage:
- title: Når skal du bruke denne komponenten?
  description: Brukes for handlinger, f.eks Lagre, Send, osv.
- title: Policies
  description: Alltid 2px underline på lenker, unntak for artikler, der det er 1px (2px ved fet tekst). Eksterne lenker for en pil (vendt skrått oppover) til høyre for teksten. Pilen etter lenketekst skal ikke ha understrek under.
- title: Interaksjon og styling
  description: Siden knappen er kun 36px høy, er det avsatt et område over og under, slik at touch target er 48px. Det skal være minimum 12px mellomrom mellom hver knapp/lenke.
- title: Når skal du vurdere alternativer?
  description: Dersom knappen skal utføre en av følgende handlinger, 'Last ned', 'Last opp', eller 'last inn flere'. I disse tilfellene benyttes handlingsknapp som har stiplet linje.

classes:
- className: a-btn
  required : Ja
  description: Dersom du skal style en lenke slik at den ut som en knapp, kan du også bruke denne klassen.
- className: a-btn-success
  required : nei
  description: Legg til denne klassen dersom knappen skal være grønn.
- className: a-btn-danger
  required: nei
  description: Legg til denne klassen dersom knappen skal være rød.
- className: disabled
  required: nei
  description: Legg til denne klassen dersom knappen skal være deaktivert.


---
