---
layout: page
type: detail
title: Farger
group: styles
permalink: /styles/farger.html
description: Stilguide

---

<div id="alert-no-arrow" class="a-message a-message-error a-message--arrow-off a-message--fullwidth mb-2 a-py-minus-1">
  NB: Innholdet og sidene er under utvikling
</div>

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

<div style="width: 300px; height: 100px; cursor: not-allowed; background-color: #ffffff; color: #000; background-image: url('http://altinn.github.io/DesignSystem/images/disabled-background.svg'); text-align: center; line-height: 100px;">.a-disabled</div>

## Skygger

Skygger aktiveres ved bruk av variabelen <code>$shadow</code>

<pre>box-shadow: 1px 1px 4px 0px rgba(137, 137, 137, 0.5);</pre>

<div class="ap-shadowBox" style="text-align: center; line-height: 100px;">$shadow</div>


## Kontrast

Følgende fargekombinasjoner oppfyller kravene til kontrast i liten tekst. AA er minstekravet, mens AAA er anbefalt, særlig for løpende tekst. Andre kombinasjoner kan fungere i større tekst, men må da dobbelsjekkes i henhold til WCAG 2.0-kravene. **NB: Disse forslagene er ikke vurdert ut i fra estetiske hensyn, men viser kun kontrastgodkjente kombinasjoner**

<div style="min-width: 800px;">
<div class="ap-swatch" style="background: #022F51;">
<div class="ap-colorCircle a-bgBlue" style="color: #022f51; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgBlueLight" style="color: #022f51; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgGreen" style="color: #022f51; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgGreenLight" style="color: #022f51; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgRedLight" style="color: #022f51; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgPurpleLight" style="color: #022f51; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgYellow" style="color: #022f51; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgYellowLight" style="color: #022f51; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgGreyMedium" style="background: #bcc7cc; color: #022f51; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgGreyLight" style="background: #efefef; color: #022f51; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgWhite" style="background: #ffffff; color: #022f51; font-size: 20px; line-height: 36px;">AAA</div>
</div>
<div class="ap-swatch" style="background: #0062ba;">
<div class="ap-colorCircle a-bgBlueLight" style="color: #0062ba; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgGreenLight" style="color: #0062ba; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgPurpleLight" style="color: #0062ba; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgYellowLight" style="color: #0062ba; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgGreyLight" style="background: #efefef; color: #0062ba; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgWhite" style="background: #ffffff; color: #0062ba; font-size: 20px; line-height: 36px;">AA</div>
</div>
<div class="ap-swatch" style="background: #1eaef7;">
<div class="ap-colorCircle a-bgBlueDarker" style="background: #022f51; color: #1eaef7; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgPurple" style="color: #1eaef7; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgBlack" style="background: #000000; color: #1eaef7; font-size: 20px; line-height: 36px;">AAA</div>
</div>
<div class="ap-swatch" style="background: #cff0ff;">
<div class="ap-colorCircle a-bgBlueDarker" style="background: #022f51; color: #cff0ff; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlueDark" style="color: #cff0ff; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgPurple" style="color: #cff0ff; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlack" style="background: #000000; color: #cff0ff; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgGrey" style="background: #6a6a6a; color: #cff0ff; font-size: 20px; line-height: 36px;">AA</div>
</div>
<div class="ap-swatch" style="background: #17c96b;">
<div class="ap-colorCircle a-bgBlueDarker" style="background: #022f51; color: #17c96b; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgPurple" style="color: #17c96b; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgBlack" style="background: #000000; color: #17c96b; font-size: 20px; line-height: 36px;">AAA</div>
</div>
<div class="ap-swatch" style="background: #d4f9e4;">
<div class="ap-colorCircle a-bgBlueDarker" style="background: #022f51; color: #d4f9e4; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlueDark" style="color: #d4f9e4; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgPurple" style="color: #d4f9e4; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlack" style="background: #000000; color: #d4f9e4; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgGrey" style="background: #6a6a6a; color: #d4f9e4; font-size: 20px; line-height: 36px;">AA</div>
</div>
<div class="ap-swatch" style="background: #e23b53;">
<div class="ap-colorCircle a-bgBlack" style="background: #000000; color: #e23b53; font-size: 20px; line-height: 36px;">AA</div>
</div>
<div class="ap-swatch" style="background: #f9cad3;">
<div class="ap-colorCircle a-bgBlueDarker" style="background: #022f51; color: #f9cad3; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgPurple" style="color: #f9cad3; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlack" style="background: #000000; color: #f9cad3; font-size: 20px; line-height: 36px;">AAA</div>
</div>
<div class="ap-swatch" style="background: #3f3161;">
<div class="ap-colorCircle a-bgBlue" style="color: #3f3161; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgBlueLight" style="color: #3f3161; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgGreen" style="color: #3f3161; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgGreenLight" style="color: #3f3161; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgRedLight" style="color: #3f3161; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgPurpleLight" style="color: #3f3161; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgYellow" style="color: #3f3161; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgYellowLight" style="color: #3f3161; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgGreyMedium" style="background: #bcc7cc; color: #3f3161; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgGreyLight" style="background: #efefef; color: #3f3161; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgWhite" style="background: #ffffff; color: #3f3161; font-size: 20px; line-height: 36px;">AAA</div>
</div>
<div class="ap-swatch" style="background: #e0daf7;">
<div class="ap-colorCircle a-bgBlueDarker" style="background: #022f51; color: #e0daf7; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlueDark" style="color: #e0daf7; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgPurple" style="color: #e0daf7; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlack" style="background: #000000; color: #e0daf7; font-size: 20px; line-height: 36px;">AAA</div>
</div>
<div class="ap-swatch" style="background: #ffda06;">
<div class="ap-colorCircle a-bgBlueDarker" style="background: #022f51; color: #ffda06; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgPurple" style="color: #ffda06; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlack" style="background: #000000; color: #ffda06; font-size: 20px; line-height: 36px;">AAA</div>
</div>
<div class="ap-swatch" style="background: #fbf6bd;">
<div class="ap-colorCircle a-bgBlueDarker" style="background: #022f51; color: #fbf6bd; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlueDark" style="color: #fbf6bd; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgPurple" style="color: #fbf6bd; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlack" style="background: #000000; color: #fbf6bd; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgGrey" style="background: #6a6a6a; color: #fbf6bd; font-size: 20px; line-height: 36px;">AA</div>
</div>
<div class="ap-swatch" style="background: #000000;">
<div class="ap-colorCircle a-bgBlue" style="color: #000000; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgBlueLight" style="color: #000000; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgGreen" style="color: #000000; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgGreenLight" style="color: #000000; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgRed" style="color: #000000; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgRedLight" style="color: #000000; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgPurpleLight" style="color: #000000; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgYellow" style="color: #000000; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgYellowLight" style="color: #000000; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgGreyMedium" style="background: #bcc7cc; #000000; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgGreyLight" style="background: #efefef; #000000; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgWhite" style="background: #ffffff; color: #000000; font-size: 20px; line-height: 36px;">AAA</div>
</div>
<div class="ap-swatch" style="background: #6a6a6a;">
<div class="ap-colorCircle a-bgBlueLight" style="color: #6a6a6a; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgGreenLight" style="color: #6a6a6a; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgYellowLight" style="color: #6a6a6a; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgGreyLight" style="background: #efefef; color: #6a6a6a; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgWhite" style="background: #ffffff; color: #6a6a6a; font-size: 20px; line-height: 36px;">AA</div>
</div>
<div class="ap-swatch" style="background: #bcc7cc;">
<div class="ap-colorCircle a-bgBlueDarker" style="background: #022f51; color: #bcc7cc; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgPurple" style="color: #bcc7cc; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgBlack" style="background: #000000; color: #bcc7cc; font-size: 20px; line-height: 36px;">AAA</div>
</div>
<div class="ap-swatch" style="background: #efefef;">
<div class="ap-colorCircle a-bgBlueDarker" style="background: #022f51; color: #efefef; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlueDark" style="color: #efefef; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgPurple" style="color: #efefef; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlack" style="background: #000000; color: #efefef; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgGrey" style="background: #6a6a6a; color: #efefef; font-size: 20px; line-height: 36px;">AA</div>
</div>
<div class="ap-swatch" style="background: #ffffff;">
<div class="ap-colorCircle a-bgBlueDarker" style="background: #022f51; color: #ffffff; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlueDark" style="color: #ffffff; font-size: 20px; line-height: 36px;">AA</div>
<div class="ap-colorCircle a-bgPurple" style="color: #ffffff; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgBlack" style="background: #000000; color: #ffffff; font-size: 20px; line-height: 36px;">AAA</div>
<div class="ap-colorCircle a-bgGrey" style="background: #6a6a6a; color: #ffffff; font-size: 20px; line-height: 36px;">AA</div>
    </div></div>
