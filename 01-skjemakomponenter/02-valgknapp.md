---
layout: component-detail
group: skjemakomponenter
permalink: /skjemakomponenter/valgknapp.html

title: Valgknapp
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description: Valgknapper brukt som avkrysningsbokser der brukeren kan velge flere alternativer.
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 03-valgknapp
- title: Valgknapp Radio
  description: Valgknapper brukt som radioknapper der brukeren kan velge ett alternativ.
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 07-valgknapp-ett-alternativ

usage:
- title: Når skal du bruke denne komponenten?
  description: Info kommer.
- title: Når skal du vurdere alternativer?
  description: Info kommer.
- title: Policies
  description: Se theme-spesifikke policies.

theme-specific-altinn:
- description: Valgknapper som er en del av ekspanderbar overskrift skal midtstilles på stor-skjerm, og venstre-alignes på skjermer mindre enn 768px ($MD).


theme-specific-brreg:
- description: Ingen retningslinjer er lagt inn for Brønnøysundregistrene enda.

classes:
- className: a-switch
  required: ja
  description:

---
