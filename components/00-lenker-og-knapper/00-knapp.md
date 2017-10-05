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
  description: Knappen er blå som standard.
  styleModifier: a-btn
  includeClassification: atoms
  includeCategory: 03-knapper
  includeName: 10-knapp
- title: Fare
  description: Rød knapp brukes for å advare brukeren mot handlingen. F.eks. Slett, Avbryt, osv.
  styleModifier: a-btn-danger
  includeClassification: atoms
  includeCategory: 03-knapper
  includeName: 12-knapp-fare
- title: Suksess
  description: Grønn knapp brukes for å oppfordre brukeren til en handling.
  styleModifier: a-btn-success
  includeClassification: atoms
  includeCategory: 03-knapper
  includeName: 11-knapp-suksess

usage:
- title: Når skal du bruke denne komponenten?
  description: Brukes for handlinger, f.eks Lagre, Send, osv.
- title: Interaksjon og styling
  description: Siden knappen er kun 36px høy, er det avsatt et område over og under, slik at touch target er 48px. Det skal være minimum 12px mellomrom mellom hver knapp/lenke.
- title: Når skal du vurdere alternativer?
  description: Blabla

classes:
- className: c-hero
  required : yes
  description: Funker dette?
- className: c-hero--bare
  modifier : yes
  description: Add to the `c-hero` element to remove the default gradient overlay from the hero image.
- className: c-hero--tinted
  modifier : yes
  description: Add to the `c-hero` element to replace the default gradient overlay with a solid, uniform tint.
- className: c-hero__body
  required: yes
  description: Apply to the container for the card body, which typically includes a title and description (see below) but can include any arbitrary markup including buttons for a call to action. The class manages the card's background gradient.
- className: c-hero__title
  recommended: yes
  description: Apply to the card's heading inside the card body. The recommended element for this class is `<h1>`.
- className: c-hero__desc
  recommended: yes
  description: Apply to the card's description text inside the card body. The recommended element for this class is `<p>`.

---
