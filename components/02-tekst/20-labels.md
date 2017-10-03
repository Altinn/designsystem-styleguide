---
layout: component-detail
group: komponenter
subgroup: tekst
permalink: /komponenter/tekst/labels.html

title: Labels
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description: Label kan ha ulike farger basert på hva den representerer, se "variasjoner".
  styleModifier:
  includeClassification: atoms
  includeCategory: 07-tekst
  includeName: 04-merkelapp
- title: Variasjoner
  description: Blå merkelapp brukes for å belyse et nummer, eksempelvis hvor mange uleste meldinger du har, hvor mange filter du har valgt, etc. Grå brukes for å gi tilleggsinfo, f.eks hvilken kategori et søkeresultat tilhører. Gul brukes for å gjøre brukeren oppmerksom på noe. Rød brukes for å advare. Grønn brukes for å oppfordre.
  styleModifier:
  includeClassification: atoms
  includeCategory: 07-tekst
  includeName: 05-merkelapp-variasjoner

  usage:
  - title: When to use
    description: Usage description.
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
