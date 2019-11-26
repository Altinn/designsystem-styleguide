---
layout: component-detail
group: lister
permalink: /lister/liste.html

title: Liste
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description: Vanlig liste uten lenker
  styleModifier:
  includeClassification: molecules
  includeCategory: 05-lister
  includeName: 00-liste-unummerert
- title: Med lenker
  description: Liste der radene fungerer som lenker
  styleModifier:
  includeClassification: molecules
  includeCategory: 05-lister
  includeName: 02-liste-unummerert-lenke

usage:
- title: Når skal du bruke denne komponenten?
  description: Listen kan brukes i flere sammenhenger både til statisk tekst og lenker. Listen kan også inkludere handlinger som å fjerne raden, redigere innholdet i raden, ekspandere innhold i raden, og mer. Derfor inneholder hver li noen ekstra divs med klassene row og col for å kunne variere antall kolonner. Dersom det er kun en kolonne, settes klassen bare til col.
- title: Når skal du vurdere alternativer?
  description: Dersom listen skal være sorterbar, se "Sorterbar liste". Dersom listen skal være en utlisting i en artikkel, se nummert liste, punktliste og koblet liste.
- title: Policies
  description: Maks 2 kolonner på mobilvisning. Dersom det er mange rader, vises kun 20 første, og en "Last flere" knapp. Handlingstekster (Lagt til/Slettet) skal være bold (font-family DIN-bold). Det skal være strek over teksten dersom en rad er fjernet. Rader som kan ekspanderes vises kun 1 ekspandert ad gangen. Dersom en rad blir ekspandert, lukkes den andre som evt var ekspandert fra før.

theme-specific-altinn:
- description: Dersom radene i listen inneholder ikoner, skal raden ha 6px avstand fra venstre til begynnelsen av innholdet på radene. Dersom det er ren tekst i radene (ingen ikoner), brukes klassen a-list-noIcon legges på ul for å fjerne padding-left.<p>Hover og focus på klikkbare rader skal bli lyseblå ($blue-light). Som med alle andre klikkbare elementer skal raden få en hånd-hover musepeker. Når rad kan fjernes skal hover være lyserød ($red-light). Gjennomstryking når rad er slettet. Grønn markering når rad er valgt. Pilene på tabell-sortering skal ikke ha onhover effekt</p>

theme-specific-brreg:
- description: Ingen retningslinjer er lagt inn for Brønnøysundregistrene enda.

classes:
- className: a-list-noIcon
  required: nei
  description: Dersom det er ren tekst i radene (ingen ikoner), kan klassen a-list-noIcon legges på ul for å fjerne padding på 6px.

---
