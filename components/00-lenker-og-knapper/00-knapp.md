---
layout: component-detail
group: komponenter
subgroup: lenker-og-knapper
permalink: /komponenter/lenker-og-knapper/knapp.html

title: Knapp
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description: Vanlig utseende for knapper.
  styleModifier: a-btn
  includeClassification: atoms
  includeCategory: 03-knapper
  includeName: 10-knapp
- title: Fare
  description: Brukes for å advare brukeren mot handlingen. F.eks. Slett, Avbryt, osv.
  styleModifier: a-btn-danger
  includeClassification: atoms
  includeCategory: 03-knapper
  includeName: 12-knapp-fare
- title: Suksess
  description: Brukes for å oppfordre brukeren til en handling.
  styleModifier: a-btn-success
  includeClassification: atoms
  includeCategory: 03-knapper
  includeName: 11-knapp-suksess
- title: Deaktivert
  description: Brukes i tilfeller der knappen er deaktivert. F.eks dersom du må fylle ut noen felt først.
  styleModifier: disabled
  includeClassification: atoms
  includeCategory: 03-knapper
  includeName: 13-knapp-deaktivert

usage:
- title: Når skal du bruke denne komponenten?
  description: Brukes for handlinger, f.eks Lagre, Send, osv.
- title: Policies
  description: Det skal være minimum 12px mellomrom mellom hver knapp/lenke. En lenke kan også styles som en knapp ved å bruke samme "a-btn" klassen på < a >.

- title: Når skal du vurdere alternativer?
  description: Dersom knappen skal utføre en av følgende handlinger, 'Last ned', 'Last opp', eller 'last inn flere'. I disse tilfellene benyttes handlingsknapp.

classes:
- className: a-btn
  required : ja
  description: Bruk denne klassen for alle knapper. PS. Dersom du skal style en lenke < a > slik at den ut som en knapp, kan du også bruke denne klassen.
- className: a-btn-success
  required : nei
  description: Legg til denne klassen dersom knappen skal oppfordre til klikk.
- className: a-btn-danger
  required: nei
  description: Legg til denne klassen dersom knappen skal antyde fare.
- className: disabled
  required: nei
  description: Legg til denne klassen dersom knappen skal være deaktivert.
- className: a-btn-group
  required : nei
  description: Dersom det skal ligge flere knapper ved siden hverandre, legg en < div > rundt knappene med klassen a-btn-group.
- className: a-btn-link
  required : nei
  description: En knapp kan styles som en lenke med klassen "a-btn-link" på < button >. Knappen skal da se ut og oppføre seg likt som en lenke, altså at teksten er venstrejustert og har understrek under hele.

theme-specific:
- description: Altinns knapp har ingen borders, kun en solid farge (blå som standard, rød for fare, grønn for oppfordring). Siden knappen bare er 36px høy, er det avsatt et område over og under, slik at touch target blir 48px.


---
