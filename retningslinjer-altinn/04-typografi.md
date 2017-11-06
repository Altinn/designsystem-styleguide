---
layout: page
type: detail
title: Typografi
group: retningslinjer-altinn
permalink: /retningslinjer-altinn/typography.html
description: Retningslinjer

---

## Font
All tekst på Altinn er satt med fonten ‘DIN’ i fire ulike varianter: Light, Regular, Medium og Bold. For å style teksten med de ulike variantene kan følgende klasser benyttes:

```
.a-fontLight
.a-fontReg
.a-fontMedium
.a-fontBold
```

<div class="row">
<div class="col-xs-12 col-md-6">

<h2 id="din-light">DIN Light</h2>
<span class="a-fontLight"> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å<br> a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å<br> 0 1 2 3 4 5 6 7 8 9<br> ! &amp; / ( ) $ = @ ; : , . </span><br><br><br></div>
<div class="col-xs-12 col-md-6">

<h2 id="din-regular">DIN Regular</h2>
<span class="a-fontReg"> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å<br> a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å<br> 0 1 2 3 4 5 6 7 8 9<br> ! &amp; / ( ) $ = @ ; : , . </span><br><br><br></div>
<div class="col-xs-12 col-md-6">

<h2 id="din-medium">DIN Medium</h2>
<span class="a-fontMedium"> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å<br> a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å<br> 0 1 2 3 4 5 6 7 8 9<br> ! &amp; / ( ) $ = @ ; : , . </span><br><br><br></div>
<div class="col-xs-12 col-md-6">

<h2 id="din-bold">DIN Bold</h2>
<span class="a-fontBold"> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å<br> a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å<br> 0 1 2 3 4 5 6 7 8 9<br> ! &amp; / ( ) $ = @ ; : , . </span> <br><br><br><br></div>

</div>

## Overskrifter

Overskriftsnivåer brukes for å strukturere teksten. Det er derfor viktig å ikke bruke H1, H2, H3, osv for styling av størrelse, men for strukturering. Er det sturkturmesig riktig å bruke en H2, men du den skal ha styling som H3 kan du bruke klassen ```a-h3```. F.eks:

```
<h2 class="a-h3">Overskrift</h2>
```

Les mer om riktig bruk av overskrifter på [Difis nettsider](https://uu.difi.no/artikkel/2015/07/tekst-og-struktur#Overskrifter).

## Line-height

Line-height er satt til 1.5 (unitless).


## Tekststørrelser
Standard tekststørrelse er satt til 16px regular, mens brødtekst i artikler er satt til 18px regular. Tekststørrelsene på overskrifter og paragrafer varierer med skjermstørrelse.

<h1 class="a-pageTitle">Sidetittel</h1>
<code> <H1> </code><br><br>
36px (desktop)<br>
36px (laptop)<br>
28px (tablet)<br>
24px (mobile)<br>

<h2 class="a-sectionTitle">Seksjonstittel</h2>
<code> <H2> </code><br><br>
28px (desktop)<br>
24px (laptop)<br>
22px (tablet)<br>
18px (mobile)<br>

<h3 class="a-sectionSubTitle">Undertittel</h3>
<code> <H3> </code><br><br>
20px (desktop)<br>
20px (laptop)<br>
18px (tablet)<br>
16px (mobile)<br>

<hr>

<p class="a-leadText">Introtekst/ingress</p>
<code><p class="a-leadText"> </code><br><br>
20px (desktop)<br>
20px (laptop)<br>
20px (tablet)<br>
18px (mobile)<br>

<hr>

<p>Brødtekst i artikler</p>
<code><p> </code><br><br>
18px (desktop)<br>
18px (laptop)<br>
18px (tablet)<br>
16px (mobile)<br>

<hr>
