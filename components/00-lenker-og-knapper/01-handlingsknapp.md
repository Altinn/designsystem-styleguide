---
layout: component-detail
group: komponenter
subgroup: lenker-og-knapper
permalink: /komponenter/lenker-og-knapper/handlingsknapp.html

title: Handlingsknapp
description:


variations:
- title: Handlingsknapp
  description: Skriv en kort oppsummering av komponenten.
  styleModifier: a-btn
  includeClassification: atoms
  includeCategory: 04-handlingsknapper
  includeName: 17-handlingsknapp

  usage:
  - title: When to use
    description: En handlingsknapp består av et ikon og beskrivende tekst. Denne skal benyttes i disse tilfellene; Legge til, laste opp, laste ned, laste inn flere.
  - title: When to consider an alternative
    description: Alternative usage.

  classes:
  - className: c-hero
    required : yes
    description: Apply to the hero block's containing HTML element. This class sets up the background-image handling and text color for the unit. The `c-hero` element should have just one immediate child, the `c-hero__body` element. Note, too, that the unit's hero image should be applied as a background image to this `c-hero` element.
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