---
layout: component-detail
group: skjemakomponenter
permalink: /skjemakomponenter/inputfelt.html

title: Inputfelt
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description: Et standard inputfelt med label over.
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 10-tekst-input
- title: Uten label
  description: Et inputfelt uten label over.
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 12-tekst-input-labelSkjult
- title: Deaktivert
  description: Et inputfelt som er deaktivert.
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 17-input-deaktivert
- title: Fremhevet
  description: Et inputfelt som er større enn vanlig.
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 11-tekst-input-stor
- title: Søk
  description: Et søkefelt med ikon til høyre
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 31-sok-stor

usage:
- title: Når skal du bruke denne komponenten?
  description: Info kommer.
- title: Når skal du vurdere alternativer?
  description: Info kommer.
- title: Policies
  description: Teksten i inputfeltet skal være 16px og ha 12 px ($spacer) padding fra venstre. Stort inputfelt skal ha 18px ($spacer * 1,5) padding fra venstre. Dersom det er ikon til venstre eller høyre i inputfeltet skal dette ha 6px ($spacer / 2) padding left og padding right. Venstre-ikoner på inputfelt skal ikke vises på skjermer mindre enn MD (768px). Org nr. skal formatteres xxx xxx xxx inne i inputfeltet. <p>Søkefelt med autocomplete eller autogenerert resultat skal ikke ha søke-knapp. Kun for tilfeller der brukeren blir tatt til ny side, eller at en spesifikk visning blir generert hvis man trykker enter/søk.</p><p>Valideringsmelding skal vises når man trykker seg ut av feltet dersom innfyllt informasjon er ugyldig. </p>
theme-specific-altinn:
- description: <p>Rammen på inputfelt skal gå fra blå ($blue) til mørkeblå ($blue-dark) ved aktiv, hover og fokus. <p>

theme-specific-brreg:
- description: Ingen retningslinjer er lagt inn for Brønnøysundregistrene enda.

classes:
- className: form-group a-form-group
  required : ja
  description:
- className: a-form-group-large
  required : nei
  description: Legg på denne klassen dersom inputfeltet skal være fremhevet/stort.

---
