---
layout: component-detail
group: komponenter
subgroup: lister
permalink: /komponenter/lister/liste.html

title: Liste
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description:
  styleModifier:
  includeClassification: molecules
  includeCategory: 05-lister
  includeName: 00-liste-unummerert
- title: Med lenker
  description:
  styleModifier:
  includeClassification: molecules
  includeCategory: 05-lister
  includeName: 02-liste-unummerert-lenke
- title: Ulike radvarianter
  description:
  styleModifier:
  includeClassification: molecules
  includeCategory: 05-lister
  includeName: 10-liste-unummerert-radvarianter

usage:
- title: Når skal du bruke denne komponenten?
  description: Brukes for handlinger, f.eks Lagre, Send, osv.
- title: Policies
  description: Dersom det kun er én link i en rad skal hele raden være klikkbar og trigge linkens "action". Dersom det er flere linker i samme rad skal ikke hele raden være klikkbar. Da skal man måtte klikke på linken man ønsker å trykke på.
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
