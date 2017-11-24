---
layout: component-detail
group: komponenter
subgroup: tekst
permalink: /komponenter/tekst/modal.html

title: Modal
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Stegvis prosess
  description: Et modalvidu som animerer inn fra siden og inneholder en stegvis prosess.
  styleModifier:
  includeClassification: organisms
  includeCategory: 70-Modal-innhold
  includeName: 00-modal-startknapp
- title: Singel
  description: Et modalvidu som fader inn over en side og inneholder en enkelt side med informasjon.
  styleModifier:
  includeClassification: organisms
  includeCategory: 70-Modal-innhold
  includeName: 01-modal-startknapp-enkeltvindu

usage:
- title: Når skal du bruke denne komponenten?
  description: Eksempler på situasjoner da disse brukes er når brukeren skal utføre en oppgave eller prosess. Det kan for eksempel være å fylle ut et skjema med ett eller flere steg.
- title: Når skal du vurdere alternativer?
  description: Dersom du skal vise tilleggstekst om et begrep eller liknende, kan du bruke popover som er en mindre boks med innhold som dukker opp over innholdet.
- title: Policies
  description: For å fjerne modalvinduet må bruker trykke på krysset. Brukeren skal ikke ha tilgang til innholdet bak modalen. Dersom det er flere steg skal man alltid kunne gå tilbake i prosessen. Neste og forrige steg skal visualiseres med animasjoner som antyder om du går forover eller bakover.<p>Ulike typer modaler skal alltid ha samme bredde. Fast praksis på mindre skjermer også. Modaler skal ha samme avstand til header uavhengig om de har "tilbake"- og "lukk"-knapp. Dette for at det ikke skal oppleves som at modalen "spretter" opp om knappene tas bort.</p>

theme-specific-altinn:
- description: Blå bakgrunn er standard for modaler, mens grønn brukes når en prosess er fullført. For eksempel i det du er ferdig med å fylle ut et skjema og prosessen er vellykket. Dersom prosessen har feilet vil modalbakgrunnen være rød.

theme-specific-brreg:
- description: Ingen retningslinjer er lagt inn for Brønnøysundregistrene enda.

classes:
- className: a-fade--appear
  required: nei
  description: Legges på dersom modalen skal fade inn i stedet for å slide inn fra høyre. Denne brukes i tilfeller der modalen kun inneholder èn enkeltside og ikke fungerer som en stegvis prosess med flere sider.

technical:
- description: Modal-komponenten er laget som en utvidelse av Bootstrap modaler, og muliggjør navigering mellom sider i en modal. Funksjonaliteten kan brukes enten direkte via metoder, eller ved bruk av data-attributter. Klassen <code>a-modal-content-target</code> brukes for spesifisere hvor innholdet i modalen skal settes inn når ajax-requests er ferdig.

---
