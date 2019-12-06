var questionAnswers = [
// Teszt
{
	question: '1. Hogyan nevezzük másképp a bekezdés kiegyenlítését (sorkizárást)?',
	answer: '- sorívelés</br>- záros sor</br>- szabadsoros szedés</br><span class="pink">- tömbös szedés</span>'
},{
	question:'2. A billentyűzeten nincs meg az µ jel. Hogyan tudja a szövegben mégis szerepeltetni?',
	answer:'- szervizbe viszem a billentyűzetet</br><span class="pink">- szimbólumok beszúrásával</span></br>- „A” betűt ütök kétszer egymás után</br><span class="pink">- Alt + 0181</span>'
},{
	question:'3. A billentyűzeten nincs meg a hosszú kötőjel jel. Hogyan tudja mégis „beírni”?',
	answer:'<span class="pink">- Word használata esetén leütöm: Ctrl + -  (a numerikus buillentyűzeten)</span></br><span class="pink">- szimbólumok beszúrásával</span></br>- „O” betűt ütök kétszer egymás után</br><span class="pink">- Az Alt + 0150 -nel megoldom.</span>'
},{
	question:'4. Milyen adatok szükségesek egy dokumentum első mentésekor?',
	answer:'- a bekezdések</br>- a betűtípus</br>- a fálj méret</br><span class="pink">- a fájl formátuma</span>'
},{
	question:'5. Milyen adatok szükségesek egy dokumentum első mentésekor?',
	answer:'<span class="pink">- a fájl neve</span></br>- a fájl helye</br>- a fálj mérete</br>- a fájl formátuma'
},{
	question:'6. Word-ben a „Mentés másként...” után az eredeti fájl marad nyitva? ',
	answer:'- igen</br>- nem, egy üres dokumentum nyílik meg</br><span class="pink">- nem, az új néven mentett fájl lesz nyitva</span></br>- az új is és az eredeti is nyitva marad'
},{
	question:'7. A tabulátor mely tulajdonságai (pozíció, igazítás, kitöltés) olvashatók le a vonalzón?',
	answer:'<span class="pink">- mindig leolvasható minden tulajdonság</span></br>- a kitöltés soha nem olvasható le</br>- az élőfejben/élőlábban az igazító tabulátorok nem látszanak a vonalzón</br>- a tabulátor funkció megszűnt az Office 2007 óta'
},{
	question:'8. Csak a „gyárilag” előre meghatározott papírméreteket lehet használni a Wordben?',
	answer:'- igen, mindig</br>- ha magyar a Word, akkor igen</br><span class="pink">- nem, lehet saját méretet is megadni</span></br>- egyáltalán nem lehet papírméretet választani '
},{
	question:'9. Egy bekezdést új oldalon szeretnék kezdeni, milyen lehetőségeim vannak rá?',
	answer:'<span class="pink">- oldaltörést szúrok be elé</span></br>- a bekezdés formázásánál beállítom, hogy egy oldalra kerüljön</br>- a bekezdés formázásánál beállítom, hogy új oldalra kerüljön</br>-  új dokumentumba másolom'
},{
	question:'10. Egy szövegrész áthelyezéskor hova „tűnik” (hová kerül) a kivágott szöveg?',
	answer:'- a lomtárba</br>- a dokumentum végére</br>-  nem tűnik el, csak fehér lesz a betűszíne</br><span class="pink">- a vágólapra</span>'
},{
	question:'11. Elhelyezhető-e kép egy táblázat cellájában?',
	answer:'- igen, de legfeljebb 3 cm-es méretben</br>- csak a szövegben</br><span class="pink">- igen, mindenfajta korlátozás nélkül</span></br>- nem, a képeknek külön táblázatot kell készíteni'
},{
	question:'12. Hogy tudja megállapítani, meddig tart egy bekezdés?',
	answer:'- kis smiley jelzi a végét</br>- piros háromszög jelzi a végét</br>-  egy béta jelzi a végét</br><span class="pink">- egy fordított P-re hasonlító jel jelzi a végét</span>'
},{
	question:'13. Hogyan lehet a kitörölni az üres bekezdéseket a szövegből?',
	answer:'- sehogy</br>- az egymás utáni két bekezdésjelet lecserélem egy ?-re</br><span class="pink">- az egymás utáni két bekezdésjelet lecserélem egy bekezdésjelre</span></br>-a bekezdésjeleket cserélem dupla bekezdésjelre '
},{
	question:'14. Hol szokás a törhetetlen (az elválaszthatatlan) szóközt használni?',
	answer:'<span class="pink">- érték és mértékegység között</span></br>- mondatkezdő névelő után közvetlenül</br>- a három szavas mondatokban sehol</br>- nem szabad sortörést használni sehol'
},{
	question:'15. Hol található a élőfej (fejléc)?',
	answer:'- csak a dokumentum elején</br><span class="pink">- az oldal tetején, a margó és a lap széle között</span></br>- az oldal bal- és jobb szélén</br>- a margókon belül (szedéstükörben)'
},{
	question:'16. Hol található az élőláb (lábléc)?',
	answer:'- csak a dokumentum végén</br>- az oldal bal- és jobb szélén</br>- az oldal alján, a margón kívül</br><span class="pink">- az oldal alján, a margón belül</span>'
},{
	question:'17. Tartalomjegyzék készítésénél csak az eredeti Címsor stílusokat használhatjuk?',
	answer:'- igen, de nem szabad módosítani őket</br><span class="pink">- nem, használhatunk egyéb stílusokat is</span></br>- nem, de csak egy szintű lehet a tartalomjegyzék nem címsorok esetén</br>- Csak a TJ1 nevű stílus használható'
},{
	question:'18. Lehet-e egy dokumentumon belül többféle stílust használni?',
	answer:'- nem, egységesnek kell lennie</br>- persze, egy stílussal nem is engedi menteni a dokumentumot</br>- nem, mert tipográfiailag nem helyes</br><span class="pink">- igen</span>'
},{
	question:'19. Lehet-e lapszámozást úgy beállítani, hogy az első oldalon ne látszódjék?',
	answer:'- nem, de egy rajzolt alakzattal le lehet fedni</br>- csak akkor lehet, ha legalább 8 oldalas a dokumentum</br><span class="pink">- be lehet állítani, hogy az első oldalnak különböző fejléce/lábléce legyen</span></br>- igen, de csak a tanár engedélyével'
},{
	question:'20. Megengedett-e, hogy egynél több szóköz álljon egymás után?',
	answer:'<span class="pink">- nem, ha nagyobb helyre van szükség, akkor tabulátort kell használni</span></br>- csak akkor, ha névelő után vannak</br>- igen, semmi akadálya</br>- csak akkor, ha beférnek egy sorba'
},{
	question:'21. Melyik az idézőjel helyes használata magyar szövegekben?',
	answer:'- „ez„ </br><span class="pink">- „ez” </span></br>- ” ez ” </br>- ” ez „'
},{
	question:'22. Mi a betűfokozat (méret) mértékegysége?',
	answer:'-fok</br>- cm</br>- inch (2,54 cm)</br><span class="pink">- pont (1/72 inch)</span>'
},{
	question:'23. Mi a különbség a „Mentés” és a „Mentés másként…” utasítások között?',
	answer:'<span class="pink">- a „Mentés másként…”-nél megváltoztatható a fájlnév és fájltípus</span></br>- nincs különbség</br>- első alkalommal csak mentés másként lehetséges, a későbbiekben mindkettő</br>- a Mentésnél ugyanazon a néven mentünk a gyökérkönyvtárba'
},{
	question:'24. Mi lehet a táblázatok jegyzékének alapja?',
	answer:'- a fejezetcímek stílusa</br>- a táblázatok címsor (rovatfej) stílusa</br><span class="pink">- a táblázat megnevezésének stílusa</span></br>- a tartalomjegyzék'
},{
	question:'25. Mi a tartalomjegyzék alapja?',
	answer:'<span class="pink">- a fejezetcímek stílusa</span></br>- a képaláírások</br>- a táblázatok</br>- a lábjegyzetek'
},{
	question:'26. Mi az ábrajegyzék alapja?',
	answer:'- a fejezetcímek stílusa</br><span class="pink">- a képaláírások stílusa</span></br>- a táblázatok címsora</br>- a tartalomjegyzék stílusa'
},{
	question:'27. Mi az élőfej (fejléc)?',
	answer:'<span class="pink">- olyan része a dokumentumnak, amely minden oldalon ugyanolyan tartalmú</span></br>- a fejjegyzetek helye</br>- a vonalzó másik neve</br>- táblázatszerű szövegrész a lap alján'
},{
	question:'28. Milyen szabály vonatkozik a páros/páratlan oldalszámok helyére?',
	answer:'<span class="pink">- a páratlan oldal a könyv jobb oldalára, vagy a közepére esik</span></br>- csak a páros oldalakon lehet egyáltalán oldalszámot használni</br>- csak a páratlan oldalakon lehet egyáltalán oldalszámot használni</br>- mindkettőnél jobboldalon kell lennie az oldalszámnak'
},{
	question:'29. Milyen tabulátorigazításokat ismer?',
	answer:'<span class="pink">- jobbra</span></br>- felülre</br><span class="pink">- középre</span></br>- alulra'
},{
	question:'30. Minden stílus módosítható?',
	answer:'- igen, de csak ha rtf a fájlformátum</br>- nem, csak az olyanok, amelyek nincsenek a sablonban</br><span class="pink">- igen, kivétel nélkül</span></br>- nem, mert akkor gond lenne a ráépülő többi stílussal'
},{
	question:'31. Mire használható a Tab billentyű egy táblázatban?',
	answer:'<span class="pink">- A következő cellába ugrik és ott mindent kijelöl.</span></br>- Kitörli a táblázatot.</br>- Bekapcsolt capslock esetén, akkor igazításra használható.</br>- CTRL-lal együtt tabulátor karaktert gépelhetünk be.'
},{
	question:'32. Mit jelent a tabulátor „pozíciója”?',
	answer:'- mekkora a dokumentum</br><span class="pink">- az utána következő szöveg megfelelő részét hova igazítja a balmargóhoz képest</span></br>- hány szóból áll a sor</br>- mekkora jobboldali behúzás'
},{
	question:'33. Mit jelent, hogy egy x stílusnak y az alapstílusa?',
	answer:'- x stílus törlésekor y is törlődik</br>- y stílus módosítása hatással van az x stílusú bekezdésekre is</br><span class="pink">- x stílus örökli y stílus beállításait</span></br>- ugyanaz a bekezdés igazításuk'
},{
	question:'34. Mivel biztosítható, hogy a sorvégi mondatkezdő névelő/rövid szó a következő sor elejére kerüljön?',
	answer:'- a karakterstílusban beállítom, hogy mindig új sorban kezdődjön</br><span class="pink">- nem törhető (elválaszthatatlan) szóközt teszek mögé</span></br>- sorkiegyenlített igazítást használok</br>- sajnos be kell gépelni elé egy másik szót'
},{
	question:'35. Sorkiegyenlítés esetén elválasztást is alkalmazni kell?',
	answer:'- Igen, de csak akkor ha több hasábos a szöveg.</br><span class="pink">- érdemes, mert hosszú szavak előtti sorokban a szóközök és betűközök nagyon nagyok lehetnek, elrondítva a szövegeket.</span></br>- felesleges, a wordben mindig be van kapcsolva az automatikus elválasztás.</br>- nem kell, csak akkor, ha 1,5-szörös a sortávolság.'
},{
	question:'36. A dia háttereként egy kép van beállítva. Mi történik, ha egy másik, a dia méretével azonos méretű képet helyezünk el a dián, és kiadjuk a "Hátraküldés" parancsot?',
	answer:'<span class="pink">- Semmi</span></br>- A beállított háttérkép válik láthatóvá</br>- Eltűnik a dián lévő kép</br>- Ha a dia háttere kép, a program nem engedi, hogy azon egy másik kép legyen'
},{
	question:'37. Hogyan kezdeményezhető a ppsx kiterjesztésű fájlok szerkesztése?',
	answer:'- nem szerkeszthető</br>- a PowerPointon belül kiadott megnyitás parancsot követően</br>- a helyi menü szerkesztés (vagy Új) parancsával</br><span class="pink">- a helyi menü Megnyitás parancsával</span>'
},{
	question:'38. Hogyan lehet a bemutató megszakítása nélkül elsötétíteni a kivetített képet? ',
	answer:'- a projektor távkapcsolójának segítségével</br>- az Esc billentyű megnyomásával</br>- megfelelő típusú prezenterrel</br><span class="pink">- vetítés közben a billentyűzet B betűjének megnyomásával</span>'
},{
	question:'39. Hogyan lehet PP-ben szabályos alakzatot rajzolni?',
	answer:'- Csak szabályos alakzatot lehet</br><span class="pink">- SHIFT gomb nyomvatartásával</span></br>- Sehogy</br>- A beszúrás menü, szabályok parancsával '
},{
	question:'40. Hogyan lehet PP-ben a szöveges hivatkozások aláhúzását kikapcsolni?',
	answer:'- sehogy</br><span class="pink">- az aláhúzás kiemelési mód kikapcsolásával</span></br>- az aláhúzás stílus módosításával</br>- a mesterdián történő beállítással'
},{
	question:'41. Hol található a mesterdia?',
	answer:'- Diavetítés/Előadói nézet</br><span class="pink">- Nézet/Diaminta</span></br>- vázlat nézet</br>- Nézet/Diarendező nézet'
},{
	question:'42. Mely képformátumokat képes kezelni a PowerPoint?',
	answer:'<span class="pink">- .png</span></br><span class="pink">- .jpg</span></br>- .tif</br>- .raw'
},{
	question:'43. Melyek a kirakati bemutató jellemzői?',
	answer:'- A diák sorrendje lineáris.</br>- A közönség létszáma tág határok között mozog.</br>- Az előadónak és a közönségnek egy időben kell jelen lennie.</br>- A közönség létszáma akár nulla fő is lehet.'
},{
	question:'44. Melyik irányból nem szabad beúsztatni szöveget a diára?',
	answer:'- balról</br>- jobbról</br>- fentről</br>- lentről'
},{
	question:'45. Mi történik, ha egy kép a dián kívül van elhelyezve?',
	answer:'- A PowerPointban nem lehet a dián kívül objektumot elhelyezni.</br>- A program megnöveli a diát, hogy a kívül levő kép is rajta legyen.</br>- A dián kívüli levő kép nem látszik a vetítés során.</br><span class="pink">- A program áthelyezi a képet a diára.</span>'
},{
	question:'46. Mik a különbségek az élőszavas, kirakati és interaktív bemutatótípusok között?',
	answer:'<span class="pink">- A kirakati bemutató mindig lineáris.</span></br>- Az élőszavas bemutató mindig lineáris.</br>- Az interaktív bemutató tartalmazhat lineáris részeket.</br>- Az élőszavas bemutató mindig tartalmaz elágazásokat.'
},{
	question:'47. Mik az animációk jellemzői?',
	answer:'<span class="pink">- mindig mozgással jár</span></br><span class="pink">- hangeffektussal is társulhat</span></br>- az objektumok időzítésének fontos eszköze</br>- egy objektumnak több animációja is lehet'
},{
	question:'48. Milyen általános szabályok vonatkoznak az animációra?',
	answer:'- ne legyen öncélú</br>- egy objektum ne haldajon át egy már korábban megjelenített objektumon</br>- az objektum típusa is befolyásolja, milyen animációt választunk</br>- az animáció szabályai megegyeznek az áttűnés szabályaival'
},{
	question:'49. Mi jellemző az MP3 fájlokra?',
	answer:'- Veszteséges tömörítés</br>- Veszteségmentes tömörítés</br>- Képfájl</br><span class="pink">- Hangfájl</span>'
},{
	question:'50. A .wav a Microsoft saját zenei hangformátuma?',
	answer:'- Igen, s licence-díj fizetése mellett használható.</br><span class="pink">- Igen, és szabadon felhasználható.</span></br>- Nem, az ISO szabványügyi szervezet éltal létrehozott RF6529 szabvány.</br>- Nem, ez a Hot Hits Atlanta - WAVA - Online Radio Station rövid neve.'
},{
	question:'51. Melyik hangformátumot definiálta a Microsoft a Windows számára?',
	answer:'- WAW</br><span class="pink">- WAV</span></br>- WWF</br>- VVT'
},{
	question:'52. Melyik nem hangfájl kiterjesztés?',
	answer:'- .WMV</br>- .AUV</br><span class="pink">- .MOV</span></br>- .MP3'
},{
	question:'53. Rajzfilmfiguraszerű hangot szeretne előállítani. Melyik menüpontot használja az Audacity programban?',
	answer:'<span class="pink">- Hangmagasság változtatása</span></br>- Felkeverés</br>- Tempó megváltoztatása</br>- Sebesség változtatása'
},{
	question:'54. Youtube-on telálható clip hangját szeretném a saját mp3 lejátszón hallgatni. Mit tegyek?',
	answer:'- A clip lejátszása közben az Audacity-vel rögzítem.</br>- Csak az Amazon Appstore-on meg kell vásárolni.</br><span class="pink">- Használom a clipconverter.cc oldalt.</span></br>- 5 bitcoin-ért előfizetést kel vennem a youtube-on, s egy évig korlátlanul letölthetem a clipeket'
},{
	question:'55. Mi jellemző a BMP képekre?',
	answer:'- Lehet "átlátszó" pixel benne</br>- Veszteséges tömörítés</br>- Csak 256 színe lehet</br><span class="pink">- Rasztergrafikus képformátum</span>'
},{
	question:'56. Mi jellemző a GIF képekre?',
	answer:'- Lehet "átlátszó" pixel benne</br>- Veszteséges tömörítés</br>- Csak 256 színe lehet</br><span class="pink">- Animáció is lehet</span>'
},{
	question:'57. Mi jellemző a JPG képekre?',
	answer:'- Lehet "átlátszó" pixel benne</br><span class="pink">- Veszteséges tömörítés</span></br>- Csak 256 színe lehet</br>- Animáció is lehet '
},{
	question:'58. Mi jellemző a PNG képekre?',
	answer:'<span class="pink">- Lehet "átlátszó" pixel benne</span></br>- Veszteséges tömörítés</br>- Csak 256 színe lehet</br>- Animáció is lehet'
},{
	question:'59. Mi jellemző a rasztergrafikus képekre?',
	answer:'- Jól nagyítható</span></br>- Tömörített képek</br>- Max. 1000 pixel szélesek lehetnek</br><span class="pink">- A BMP is ilyen</span>'
},{
	question:'60. Mi jellemző a vektorgrafikus képekre?',
	answer:'<span class="pink">- Jól nagyítható</span></br>- Tömörített képek</br>- Max. 1000 pixel szélesek lehetnek</br>- A BMP is ilyen'
},{
	question:'61. Milyen szín jelent az RGB színsémában a 0,0,0?',
	answer:'- fehér</br>- zöld</br><span class="pink">- fekete</span></br>- piros'
},{
	question:'62. Milyen szín jelent az RGB színsémában a 0,0,255?',
	answer:'- vörös</br>- zöld</br><span class="pink">- kék</span></br>- sárga'
},{
	question:'63. Milyen szín jelent az RGB színsémában a 0,255,0?',
	answer:'- vörös</br><span class="pink">- zöld</span></br>- kék</br>- sárga'
},{
	question:'64. Milyen szín jelent az RGB színsémában a 255,0,0? ',
	answer:'<span class="pink">- vörös</span></br>- zöld</br>- kék</br>- sárga'
},{
	question:'65. Milyen szín jelent az RGB színsémában a 255,255,255?',
	answer:'<span class="pink">- fehér</span></br>- zöld</br>- fekete</br>- piros '
},{
	question:'66. Mit jelent : 24bpp?',
	answer:'- 24 képpont cm-enként</br>- 3x8 bites (RGB) színleképzés</br>- egy szín (pl. kék) 24 bítes felbontású</br>- Egy képpont 16 777 216 féle színű lehet'
},{
	question:'67. Ha PowerPointban eltávolítottuk egy fénykép hátterét, milyen formátumban érdemes elmenteni?',
	answer:'- JPG</br><span class="pink">- PNG</span></br>- EMF</br>- BMP'
},{
	question:'68. Melyek az alapszínei az RGB színkeverésnek?',
	answer:'- vörös, sárga, kék</br>- bíborvörös, sárga, ciánkék</br><span class="pink">- vörös, zöld, kék</span></br>- rozsdabarna, sárga, kék'
},{
	question:'69. Melyek az alapszínek a CMYK színsémában?',
	answer:'- ciánkék, bíborvörös, sárga, khaki</br><span class="pink">- ciánkék, bíborvörös, sárga, fekete</span></br>- ciánkék, rozsdabarna, sárga, fekete</br>- zöld, bíborvörös, sárga, fekete '
},{
	question:'70. A jpg típusú kép korlátlanul nagyítható.',
	answer:'- Persze, csak a képpontok mérete nő.</br>- A jpg korlátlanul kicsinyíthető, de nagyításkor a szinek torzulnak.</br><span class="pink">- A jpg nagyításakor megjelenhet a világos részeken a tömörítési eljárásből adódó zaj, foltosság..</span></br>- Nem, hiszen a képpontok száma neghatározza a méretet, eszköztől függetlenül.'
},{
	question:'71. A jpg típusú kép tömörítési értéke:',
	answer:'- nem változtatja a képminőséget.</br><span class="pink">- minél nagyobb értéket állítunk be, annál kisebb lesz az állomány mérete.</span></br>- a kép minősége rosszabb lesz, ha kisebb értéket állítunk be.</br>- a kisebb érték kisebb méteret eredményez.'
},{
	question:'72. Mely eszközök használják a szubsztraktív színkeverést?',
	answer:'- <span class="pink">Amelyek visszaverik a fényt, nem aktív fénykibocsátók.</span></br>- A mobiltelefonok.</br>- A színszűrővel felszerelt fénycsövek.</br><span class="pink">- Színes nyomtatók.</span>'
},{
	question:'73. Mik lehetnek EXIF adatok? ',
	answer:'<span class="pink">- A fotó készítésének helye</span></br><span class="pink">- A fotó készítésének ideje</span></br>- Tájolási adatok</br>- A fotós neve'
},{
	question:'74. Van-e különbség az additív és a szubsztraktív színkeverés között?',
	answer:'- Igen, az additív a visszavert fénynél, a szubsztraktív az aktív fényt kisugárzó eszközöknél használatos</br><span class="pink">- Igen, az szubsztraktív a visszavert fénynél, a additív az aktív fényt kisugárzó fénynél használatos</span></br>- Nincs különbség.</br>- Mindkettő a színkibocsátással kapcsolatos fogalom.'
},{
	question:'75. Full HD-re jellemző: ',
	answer:'- 10"-os táblagépen lehet csak lejátszani.</br><span class="pink">- Vízszintesen 1920 képontot tartalmaz.</span></br>- A létező legnagyobb felbontás jelenleg..</br>- 3840×2160 felbontású videó '
},{
	question:'76. HD Ready tulajdonsága, hogy',
	answer:'<span class="pink">- 1280 képpont széles.</span></br><span class="pink">- 720 képpont magas.</span></br>- csak CRT monitoron használható.</br>- A régi SECAM szabvány felbontása.'
},{
	question:'77. Mi jellemző a Full HD videóra?',
	answer:'<span class="pink">- 1080 soros a kép.</span></br>- Bármelyik mobiltelefonon teljes felbontásban le lehet játszani.</br>- A szabványos felbontás: High Density (HD DVD)</br>- Teljes képernyős megjelenítés.'
},{
	question:'78. Az MP4 hangformátum?',
	answer:'<span class="pink">- Az mp4 egy videok tárolására szolgáló konténer.</span></br>- Az mp4 egy konténer, az mpeg4 egy tömörítési szabvány (és gyakran mp4ként adják meg).</br>- A legjobb bveszteségmentes tömörítési eljárás.</br>- Az MP4 a brit katonai rendőrség (Military Police) 4. hadosztályának jele.'
},{
	question:'79. Mely fájlkiterjesztések jelölhetnek videófájlt?',
	answer:'<span class="pink">- MPG</span></br><span class="pink">- MOV</span></br>- WMA</br><span class="pink">- MP4</span>'
},{
	question:'80. Melyik nem videófájl kiterjesztés?',
	answer:'- MP4</br>- MPEG</br><span class="pink">- WMA</span></br>- WMV'
},{
	question:'81. Mi a container a videók esetében?',
	answer:'- A kivágott, szükségtelenné vált klippek gyűjtő helye</br>- Egy tömörítési eljárás</br>- Mozgókép, állókép, hang és felirat állományokat egy fájlban tartalmazni képes formátum.</br><span class="pink">- Például az AVI, a MOV containerek</span>'
},{
	question:'82. Mi az a kodek?',
	answer:'- Népszerű hordozható hangszerkesztő alkalmazás.</br><span class="pink">- Egy digitális jelfolyam átalakítására szolgáló eszköz vagy program.</span></br>- A Windows alapértelmezett multimédia lejátszó alkalmazása.</br>- Ingyenes online videó szerkesztő alkalmazás.'
},{
	question:'83. Youtube videót szeretne letölteni. Szabad?',
	answer:'- Nem, csak online nézhetem meg.</br><span class="pink">- Magáncélra igen, de terjeszteni (szomszédnak kölcsönadni) nem megengedett.</span></br>- Megvásárolt programmal szabad letöltenem..</br>- Jogszabály tiltja a film letöltését.'
},{
	question:'84. Youtube videót szeretne magán célra letölteni. Hogyan teheti meg.',
	answer:'- A youtube oldalon a letöltés gombra kattintok.</br><span class="pink">- Használom a onlinevideoconverter.com oldalt.</span></br>- Külön programot kell vásárolni hozzá.</br>- Nem oldható meg.'
}
];

function init() {
	const list = document.getElementById('questions'); 
	
	questionAnswers.forEach(item => {
		let option = document.createElement('option');
		option.value = item.question;
		list.appendChild(option);
	});
};

function searchAnswer() {
	const div = document.getElementById('answer');
	var question = document.getElementById('question').value;
	questionAnswers.forEach(item => {
		if (item.question == question) {
			document.getElementById('answer').innerHTML = item.answer;			
		}
	});
}

function reset() {
	document.getElementById('question').value = '';
	document.getElementById('answer').innerHTML = '';
}