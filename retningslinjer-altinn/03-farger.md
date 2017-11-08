---
layout: page
type: detail
title: Farger
group: retningslinjer-altinn
permalink: /retningslinjer-altinn/farger.html
description: Retningslinjer

---

<p class="a-leadText a-fontBold">I utgangspunktet skal kun de fargene som er presentert her brukes. Hvis nye farger blir implementert skal dette gås opp med ansvarlig designer. De skal i så fall inkluderes i hele nettstedet, og tilføre en verdi til brukeropplevelsen. </p>

Fargene refereres til ved bruk av variabler som er definert i <code> variables.scss </code>.

## Tilgjengelige fargevariabler

<ul class="no-decoration ap-colors">
<li><span class="ap-swatch" style="background: #022F51;"><span class="ap-colorLabel" style="color: #fff;">$blue-darker: <br>#022F51;</span></span></li>
<li><span class="ap-swatch" style="background: #0062ba;"><span class="ap-colorLabel" style="color: #fff;">$blue-dark: <br>#0062ba; </span></span></li>
<li><span class="ap-swatch" style="background: #1eaef7;"><span class="ap-colorLabel">$blue: <br>#1eaef7;</span></span></li>
<li><span class="ap-swatch" style="background: #cff0ff;"><span class="ap-colorLabel">$blue-light: <br>#cff0ff;</span></span></li>
</ul>

<ul class="no-decoration ap-colors">
<li><span class="ap-swatch" style="background: #17c96b;"><span class="ap-colorLabel">$green: <br>#17c96b;</span> </span></li>
<li><span class="ap-swatch" style="background: #d4f9e4;"><span class="ap-colorLabel">$green-light: <br>#d4f9e4;</span></span></li>
<li><span class="ap-swatch" style="background: #e23b53;"><span class="ap-colorLabel">$red: <br>#e23b53;</span></span></li>
<li><span class="ap-swatch" style="background: #f9cad3;"><span class="ap-colorLabel">$red-light: <br>#f9cad3;</span></span></li>
</ul>

<ul class="no-decoration ap-colors">
<li><span class="ap-swatch" style="background: #3f3161;"><span class="ap-colorLabel" style="color: #fff;">$purple: <br>#3f3161;</span></span></li>
<li><span class="ap-swatch" style="background: #e0daf7;"><span class="ap-colorLabel">$purple-light: <br>#e0daf7;</span></span></li>
<li><span class="ap-swatch" style="background: #ffda06;"><span class="ap-colorLabel">$yellow: <br>#ffda06;</span></span></li>
<li><span class="ap-swatch" style="background: #fbf6bd;"><span class="ap-colorLabel">$yellow-light: <br>#fbf6bd;</span></span></li>
</ul>

<ul class="no-decoration ap-colors" style="margin-bottom: 10px;">
<li><span class="ap-swatch" style="background: #000;"> <span class="ap-colorLabel" style="color: #fff;">$black: <br>#000;</span> </span></li>
<li><span class="ap-swatch" style="background: #6a6a6a;"><span class="ap-colorLabel" style="color: #fff;">$grey: <br>#6a6a6a; </span></span></li>
<li><span class="ap-swatch" style="background: #BCC7CC;"><span class="ap-colorLabel">$grey-medium: <br>#BCC7CC; </span> </span></li>
<li><span class="ap-swatch" style="background: #efefef;"><span class="ap-colorLabel">$grey-light: <br>#efefef; </span> </span></li>
</ul>
<br><br><br>

## Interaksjon

Fargen <code>$blue</code> er dedikert til elementer som brukeren kan interagere med, f.eks lenker, knapper og navigasjon. Denne fargen skal ikke bli brukt i andre sammenhenger (unntatt illustrasjoner).

<span class="ap-swatch" style="background: #1eaef7;"><span class="ap-colorLabel">$blue: <br>#1eaef7;</span></span>


## Deaktiverte elementer

Deaktiverte elementer får en stiplet grå bakgrunn ved bruk av klassen <code>.a-disabled</code>

<div class="a-disabled p-3">.a-disabled</div>

## Skygger

Skygger aktiveres ved bruk av variabelen <code>$shadow</code>

<pre>box-shadow: 1px 1px 4px 0px rgba(137, 137, 137, 0.5);</pre>

<div class="ap-shadowBox" style="text-align: center; line-height: 100px;">$shadow</div>
