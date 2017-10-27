---
layout: component-detail
group: komponenter
subgroup: skjemakomponenter
permalink: /komponenter/skjemakomponenter/radioknapp.html

title: Radioknapp
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description: Vanlig utseende på radioknapper.
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 04-radioknapp
- title: Stacked
  description: Dersom radioknappene skal falle under hverandre.
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 05-radioknapp-stacked

usage:
- title: Når skal du bruke denne komponenten?
  description: Radioknapper brukes i tilfeller der brukeren får et spørsmål og kan svare med kun ett alternativ.
- title: Når skal du vurdere alternativer?
  description: Valgknapper kan også brukes som radioknapper i spesielle tilfeller.
- title: Policies
  description: Se theme-spesifikke policies.

theme-specific-altinn:
- description: Ingen retningslinjer er lagt inn for Altinn enda.

theme-specific-brreg:
- description: Ingen retningslinjer er lagt inn for Brønnøysundregistrene enda.

classes:
- className: form-check a-radioButtons
  required : ja
  description:
- className: custom-controls-stacked
  required : nei
  description: Legg på denne klassen dersom radioknappene skal falle under hverandre.

---
