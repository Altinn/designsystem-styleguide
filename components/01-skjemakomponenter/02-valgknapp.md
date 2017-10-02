---
layout: component-detail
group: komponenter
subgroup: skjemakomponenter
permalink: /komponenter/skjemakomponenter/valgknapp.html

title: Valgknapp
description:
state: Ferdig
statecolor: badge-success

variations:
- title: Standard
  description:
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 03-valgknapp
- title: Valgknapp Radio
  description:
  styleModifier:
  includeClassification: atoms
  includeCategory: 01-forms
  includeName: 07-valgknapp-ett-alternativ

  usage:
  - title: When to use
    description: Usage description.
  - title: When to consider an alternative
    description: Alternative usage.

  classes:
  - className: c-hero
    required : yes
    description: Kun ett alternativ er mulig å velge med denne typen valgknapper.
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
