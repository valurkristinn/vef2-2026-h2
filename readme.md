### Uppsetning
```
npm install
npm run dev
```

# Vefforritun 2, 2026, hópverkefni 2

Útfæra skal React framenda með Next.js ofan á vefþjónustur úr hópverkefni 1.

## Virkni

Virkni fer mestmegnis eftir því hvað var útfært í hópverkefni 1.

Verkefnið skal hafa a.m.k. þrjár mismunandi síður/virkni fyrir utan forsíðu. T.d. listi af færslum með síðuflettingum, stök færsla, leitarniðurstöður. Að auki skal útfæra þá virkni sem tiltekin er hér.

### Valmynd og haus

Útfæra skal valmynd sem fer á milli mismunandi síða á vef þar sem hver síða birtir ákveðna virkni úr vefþjónustu. Þessi valmynd skal vera aðgengileg á öllum síðum og sýna hvaða síða er valin.

Aukalega ef virkni er til staðar sem alltaf ætti að vera hægt að komast í skal birta hana (t.d. leit eða körfuvirkni) almennt/í haus.

### Fótur

Allar síðu skulu hafa sameiginlegan fót sem birtir eitthvað einfalt (t.d. „copyright“ upplýsingar).

Ef til staðar er innskráning/virkni sem aðeins er fyrir stjórnendur skal hafa tengil á það í fæti.

### Forsíða

Forsíða hefur „statísk“ gögn með dummy content og mynd, setjið inn eigið með t.d. `lorem ipsum` texti og myndum frá [Unsplash](unsplash.com/).

### Notendur

Útfæra skal innskráningu á móti notendaumsjón í vefþjónustum og birta/leyfa aðgerðir sérstaklega fyrir innskráða notendur.

Ef skráning notanda er útfærð getur hún talist til síðu/virkni.

### Myndavirkni

Útbúa skal virkni á móti myndavirkni í vefþjónustu þ.a. hægt sé að setja inn myndir gegnum form.

## Útlit

Setja skal upp einfalt, skalanlegt útlit fyrir vefinn. Mælst er til að nota grid og flexbox.

Leyfilegt er að nota Sass.

## Next.js og almenn virkni

Setja skal verkefnið upp með Next.js og TypeScript. Setja skal upp með _server-side rendering_ og _app router_.

Ef kallað er í vefþjónustu á client side skal birta loading state og bregðast við villum. Þar sem gögn geta verið tóm skal huga að empty state.

Ef síða finnst ekki skal birta 404 síðu.

Ef reynt er að skoða síðu sem ekki er heimild til að skoða skal birta að ekki sé heimild til að skoða.

## Tæki og tól

Setja skal upp eslint. Engar villur skulu koma fram ef npm run lint er keyrt. Leyfilegt er að skilgreina hvaða reglusett er notað, ekki er krafa um að nota það sem hefur verið notað í öðrum verkefnum.

### Hýsing

Setja skal upp vefinn í hýsingu.

### README

Í rót verkefnis skal vera `README.md` skjal sem tilgreinir:

- Upplýsingar um hvernig setja skuli upp verkefnið.
- Innskráning fyrir `admin` stjórnanda ásamt lykilorði.
- Nöfn og notendanöfn allra í hóp.

## Hópavinna

Verkefnið skal unnið í hóp, helst með þremur einstaklingum. Hópar með tveim eða fjórum einstaklingum eru einnig í lagi, ekki er dregið úr kröfum fyrir færri í hóp en gerðar eru auknar kröfur ef fleiri en þrír einstaklingar eru í hóp.

Hægt er að auglýsa eftir hóp á slack á rásinni `#vef2-2026-vantar-hóp`.

Hafið samband við kennara ef ekki tekst eða ekki er mögulegt að vinna í hóp.

Það er ekki krafa að vera í sama hóp og í hópverkefni 1 og hægt að vinna sem einstaklingsverkefni en hafið þá samband við Óla.

Notast skal við Git og GitHub. Engar zip skrár með kóða ættu að ganga á milli í hópavinnu, heldur á að „committa“ allan kóða og vinna gegnum Git.

Sjást ætti á commit history að allir meðlimir hóps hafi tekið þátt í verkefni.

Útbúa ætti a.m.k. fimm Pull Request (PR) þar sem búið er að fara yfir af öðrum meðlim í hóp.

## Mat

- 20% Verkefni uppsett í Next.js og tengist vefþjónustum, almenn virkni útfærð.
- 30% Útfærslur á móti vefþjónustum, a.m.k. þrjár síður.
- 10% Útlit.
- 10% Innskráning notanda.
- 10% Útfært á móti myndavirkni.
- 10% Tæki, tól og test. README uppsett, verkefni keyrir í hýsingu.
- 10% Hópavinna með Git og GitHub PR.

## Sett fyrir

Verkefni sett fyrir í fyrirlestri miðvikudaginn 25. febrúar 2026.

## Skil

Tilnefna skal hópstjóra sem skráir sig í ákveðinn hóp undir „Hópverkefni 2“ í Canvas. Aðrir nemendur skrá sig í framhaldinu í sama hóp; hópstjóri getur líka skráð aðra nemendur í hópinn.

Útbúa skal hóp jafnvel ef verkefnið er unnið sem einstaklingsverkefni.

Hópstjóri skal skila fyrir hönd allra í Canvas í seinasta lagi föstudaginn 10. apríl 2026.

Mikilvægt er að öll skil séu gerð í hóp annars munu ekki allir nemendur fá einkunn.

Skil skulu innihalda:

- GitHub notendanöfn allra (passa þarf að allir nemendur séu í hópnum!)
- Slóð á verkefnið keyrandi í hýsingu
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `KristinFrida`
  - `MarzukIngi`
  - `osk`

## Aðstoð

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ekki er heimilt að nota stór mállíkön til að vinna verkefni í námskeiðinu, [sjá nánar um notkun](https://github.com/vefforritun/vef2-2026/blob/main/mallikon.md).

Undantekning í þessu verkefni er til að endurtaka/útbúa fleiri componenta eftir forskrift. Í þeim tilvikum skal sérstaklega taka fram hvaða kóði var útbúinn þannig, með hvaða aðferðum, módellum og hvernig farið var yfir kóðann til að tryggja réttleika.

## Einkunn

Sett verða fyrir ([sjá nánar í kynningu á áfanga](https://github.com/vefforritun/vef2-2026/blob/main/namsefni/01.kynning/1.kynning.md)):

- fimm minni sem gilda 10% hvert, samtals 50% af lokaeinkunn.
- tvö hópverkefni þar sem hvort um sig gildir 20%, samtals 40% af lokaeinkunn.
- einstaklingsverkefni sem gildir 15–25% af lokaeinkunn.

### Hóp 4 
Nöfn | Notendanofn
- Þóra Dís Garðarsdóttir| ThoraDis
- Valur Kristinn Starkaðarson | valurkristinn
- Dagur Ingi Viðar | DagurVidar
- Jóhann Chanse Sigurðsson | johannhawk

---

Admin login er 
```
"email": "admin@example.org",
"password": "admin12345"
```


> Útgáfa 0.1

| Útgáfa | Breyting      |
| ------ | ------------- | --- | ------------- |
| 0.1    | Fyrsta útgáfa | 0.1 | Fyrsta útgáfa |
