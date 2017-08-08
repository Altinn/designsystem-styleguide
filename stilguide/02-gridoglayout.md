---
layout: page
type: detail
title: Grid og layout
group: styles
permalink: /styles/grid.html
description: Stilguide

---

<p class="a-leadText a-fontBold">Altinn’s responsive brukergrensesnitt er basert på en 12-kolonners grid layout, samt et sett definerte avstander som tar utgangspunkt i 12px som base.</p>

## Bootstrap grid
Vi har brukt Bootstrap's responsive gridsystem for å bygge malene. Systemet baserer seg på **flexbox**.

### Hvordan grid-systemet skal brukes

Det er tre hovedkomponenter: "containers", "rows", og "columns".

1. **"Containers"** sentrerer innholdet på siden.
<code>.container</code> for fast bredde eller <code>.container-fluid</code> for full bredde.
3. **"Rows"** er horisontale grupper av kolonner som sikrer at kolonnene blir stilt opp riktig.
4. **"Columns"** er barn av "rows" og det er i der inneholdet skal bli plassert.

- En rad (row) må tilsammen utgjøre 12 kolonner. Man kan for eksempel kobinere 4+4+4=12, 3+3+3+3=12, osv..
- Klassenavn på "Columns" indikerer antall kolonner man vil bruke ut av 12 mulige innengfor en "row". Så hvis du vil ha tre like brede kolonner, vil du bruke klassen <code>.col-sm-4</code>. (4 + 4 + 4 = 12)
- Kolonnenes bredde blir satt i prosent, så de er alltid fluid og relative til deres forelder.
- Kolonnene har horisontal padding to for å lage avstand mellom hver individuelle kolonne.
- Det er fem grid-nivåer, en for hver responsive breakpoint: : extra small, small, medium, large, and extra large.


## Breakpoints

<pre>
$grid-breakpoints: (
  // Extra small screen / phone
  xs: 0,
  // Small screen / phone
  sm: 544px,
  // Medium screen / tablet
  md: 768px,
  // Large screen / desktop
  lg: 992px,
  // Extra large screen / wide desktop
  xl: 1200px
) !default;
</pre>

## CSS3 Media queries
@media blir brukt for å definere ulik stilsetting for ulike medietyper, skjermstørrelser og enheter. CSS-kode som skal være forskjellig på forskjellige skjermstørrelser lages for mobil først - deretter utvider vi for større skjermer. Eksempel:

## Avstander

<pre>
// SPACE

$spacer : 12px;			// 12px

$spacer/2;			// 6px
$spacer*1.5;		        // 18px
$spacer*2;			// 24px
$spacer*3;			// 36px
$spacer*4;			// 48px
$spacer*5; 			// 60px
$spacer*6;			// 72px
</pre>

### Gjenbrukbare klasser for avstander

Klassene refereres til med {property}-{sides}-{size}

F.eks "p-r-1" vil sette padding right til 12px.

Les mer på [http://v4-alpha.getbootstrap.com/components/utilities/#spacing ](http://v4-alpha.getbootstrap.com/components/utilities/#spacing )

## Vertikal midtstilling

Når tekst skal sentreres innenfor en ramme, slik som for eksempel på en knapp, skal teksten sentreres basert på høyden til versalene i fonten (de store bokstavene). Slik figuren viser vil dermed avstanden fra toppen av k-en til toppen av knappen være større enn avstanden fra bunnen av p-en til bunnen av knappen.

!["Viser ekstra høyde på knapp"](../images/midtstilling_eksempel.png)


## Interaktive elementer

Av hensyn til ulike brukeres fingerstørrelse og førlighet skal alle interaktive elementer ha touch-target på minimum 48px. Det vil si at selv om en knapp kan se ut som den er 36px høy vil ethvert trykk innenfor 48px utløse knappen.

Dette løses ved å legge til et pseudo-element med en høyde på 48px og sentrere det, se kodeutsnittet under.

!["Viser ekstra høyde på knapp"](../images/clickable_eksempel.png)
