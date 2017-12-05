---
layout: component-detail
group: komponenter
subgroup: skjemakomponenter
permalink: /komponenter/skjemakomponenter/avkrysningsboks.html

title: Avkrysningsboks
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description: Vanlig utseende for avkrysningsbokser
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 00-avkrysningsboks
- title: Stacked
  description: Dersom avkrysningsboksene skal falle under hverandre.
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 01-avkrysningsboks-stacked
- title: Diskret
  description: En mer diskret visning av boksene.
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 02-avkrysningsboks-diskret

usage:
- title: Når skal du bruke denne komponenten?
  description: Avkrysningsbokser brukes i tilfeller der brukeren får et spørsmål og kan svare med et eller flere alternativer. Avkrysningsboksene skal stå foran tilhørende tekst, og skal aldri stå alene. 
- title: Når skal du vurdere alternativer?
  description: Dersom det handler om en filtrering, skal valgknapper brukes.
- title: Policies
  description: Ingen avkrysningsbokser skal stå uten tekst.

theme-specific-altinn:
- description: Ingen retningslinjer er lagt inn for Altinn enda.

theme-specific-brreg:
- description: Ingen retningslinjer er lagt inn for Brønnøysundregistrene enda.

classes:
- className: form-check a-form-checkboxes
  required : ja
  description:
- className: custom-controls-stacked
  required : nei
  description: Legg på denne klassen dersom avkrysningsboksene skal falle under hverandre.
- className: a-form-checkboxes--discret
  required : nei
  description: Legg på denne klassen dersom avkrysningsboksene skal være små.

---
