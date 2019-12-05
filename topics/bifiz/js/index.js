var questionAnswers = [
// a kórház technikai szempontból
{
	question: 'I.1. Mit nevezünk kórháznak?',
	answer: 'egy olyan fekvőbeteg-gyógyintézetet, ami orvos szakellátást nyújt azon beteg számára, akiknek egészséget helyreállítani betegségének előrehaladását megakadályozni otthon vagy az alapellátás intézményrendszerében nem lehet.'
},{
	question: 'I.2. Mi jellemzi a pavilonrendszerben épült kórházat?',
	answer: 'Egymástól különálló épületek, amik jól átszellőzhetőek, jól benapozottak, egymástól elkülönítettek. Pavilonok közötti parkos területek egészséges környezetet teremtenek. Pl. János kórház'
},{
	question: 'I.3. Mi jellemzi a tömbrendszerben épült kórházat?',
	answer: 'Centralizált, többszintes épületek, amikben a technológia ki van használva, gazdaságos a helykihasználás, van vonalszerű alaprajz (Y, X, H alaprajzú kialakítás), az egyes osztályok és a hozzájuk tartozó orvosi, helységek egy szinten vannak, a betegosztályokon néhány ágyas komfortos szobák találhatók. A belső közlekedő és szállítási útvonalak rövidek.'
},{
	question: 'I.4. Mi jellemezi a hotel-lepényrendszerben épült kórházakat?',
	answer: 'A diagnosztika és a terápia , egy 2-3 szintes lepényépületbe kerül, a betegeket a hotelekhez hasonló, de a gyógyászat igényei szerint kialakított magas épületben helyezik el, ahonnan a vizsgálatokra és a kezelésekre a lepényszárnyba mennek át. Szállítási útvonalak rövidek, a beteg forgalmak jól tervezhetőek.'
},{
	question: 'I.5. Mi tartozik a kórháztechnika tárgykörébe?',
	answer: 'Olyan műszaki eszközök és berendezések, amik nem vesznek részt közvetlenül a gyógyítás fő folyamatában, hanem támogatják azokat, és a kórház üzemeltetés mindennapos problémáit oldják meg, de nélkülük a gyógyítási tevékenység nem biztosítható.'
}, {
	question: 'I.6. Melyik jogszabály határozza meg a betegosztályok tárgyi feltételeit?',
	answer: '60/2003 (X.20.) ESzCsm rendelet'
},{
	question: 'I.7. Melyik jogszabály határozza meg az orvosi ellátórészlegek tárgyi feltételeit?',
	answer: '60/2003 (X.20.) ESzCsm rendelet'
},{
	question: 'I.8. Milyen kórházi-gazdasági műszaki háttér részlegeket ismer?',
	answer: 'Villamosenergia-ellátás</br>- Központi hőellátás</br>- Vízellátás</br>- Központi levegőellátás</br>- Központi gázellátás</br>- Csatornázás</br>- Mosoda</br>- Konyha</br>- Szállítás</br>- Hulladékkezelés</br>- Igazgatás</br>- Betegfelvétel</br>- Mentőállomás</br>- Egyéb'
},{
	question: 'I.9. Mire kell ügyelni fehér villamoskonnektorok használatánál a kórházban?',
	answer: 'Áramkimaradáskor egy másik áramszolgáltatóra vagy másik bejövő fővezeték kapcsolnak át, több időt vesz igénybe az átkapcsolás, mint a többi konnektor esetén.'
},{
	question: 'I.10. Mire kell ügyelni zöld villamoskonnektorok használatánál a kórházban?',
	answer: 'Általában nem képes ellátni a kórház teljes energiaigényét, csak egy részét és a fontos készülékeket.'
},{
	question: 'I.11. Mire kell ügyelni piros villamoskonnektorok használatánál a kórházban?',
	answer: 'Csak a legfontosabb készülékeket szabad rájuk csatlakoztatni.'
},{
	question: 'I.12. Mit kell tenni áramkimaradáskor a készülékekkel?',
	answer: 'A világítás okát és a készüléket ki kell kapcsolni ó, mert a sok bekapcsoltan hagyott áramfogyasztó az áram visszakapcsolásától együttesen egy óriási bekapcsolási áramterhelést ad, ami leoldja a biztosítékot, így a visszakapcsolás sikertelen lesz.'
},{
	question: 'I.13. Milyen hőmérsékletű szokott lenni a kórház meleg víze?',
	answer: 'Maximum 45 fok, gyermekosztályon 42 fok.'
},{
	question: 'I.14. Miért szükséges a klíma szűrőinek karbantartása?',
	answer: 'Az elpiszkolódott szűrő nem csak csökkenti a hatékonyságot, hanem a benne elszaporodó kórokozók miatt, fertőző forássá is válhat.'
},{
	question: 'I.15. Miért veszélyes az oxigéngáz használata?',
	answer: 'Mert zsíros, olajos felülettel érintkezve, szobahőmérsékleten öngyulladásrt vagy robbanást idézhet elő. És ugye nem szeretnénk, hogy egyetlen Palomitamnak valami baja essen, ezért kérem, ne használjon oxigéngázt! Köszönöm! :)'
},{
	question: 'I.16. Mire kell ügyelni központi vákuum használatakor?',
	answer: 'Tilos biztonsági szelepes gyűjtőedény nélkül a szívást megkezdeni, mert a csőbe szívott váladék nem tisztítható ki.'
},{
	question: 'I.17. Miért kell betartani a kijelölt szállítási útvonalakat?',
	answer: 'Mert a szállítás folyamatosan történik. Pl. Anyag, gyógyszer, étel, halott és ezen útvonalaknak néha tilos találkozni.'
},
// orvostechnikai eszközök
{
	question: 'II.1. Milyen jelölés kerül az Európai Uniós direktívák követelményeit teljesítő árukra?',
	answer: 'CE jel <img src="img/oe_ce.png"></br><img src="img/ce.png">'
},{
	question: 'II.2. Miért alkotott az Európai Unió külön direktívákat?',
	answer: 'Hogy a technika aktuálisan elvárható szintjét elérjék a gyártók termékei.</br>Bizonyos termékkörök esetén, így az orvostechnikai eszközöknél, az EU nem volt elégedett a kötelezettségek betartásával, ezért ezekre szigorúbb direktívákat hozott létre a termékkörhöz igazítva, különleges követelményekkel.</br><img src="img/eu.png">'
},{
	question: 'II.3. Milyen orvostechnikai eszköz direktívákat ismer?',
	answer: 'AIMD - Active Implantable Medical Devices - Aktív beültethető orvostechnikai eszköz<br/><img src="img/aimd.png"><br/>MDD - Medical Devices Directive - Orvostechnikai Eszköz Direktíva<br/><img src="img/mdd.png"></br>IVDD - In Vitro Diagnostic Devices - In vitro orvostechnikai eszközök (labordiagnosztikai eszközök)<br/><img src="img/ivdd.png">'
},{
	question: 'II.4. Miért kötelező minden tagországban betartani az Európai Unió direktíváit?',
	answer: 'Mert minden tagországnak a jogrendjébe kell illeszteni a direktívát, tehát jogszabályi erőt nyer, ellentéteseket meg kell szüntetniük.<br/><img src="img/eu2.png">'
},{
	question: 'II.5. Mit nevezünk orvostechnikai eszköznek?',
	answer: 'Minden olyan eszközt, készüléket, berendezést, anyagot vagy más terméket, amiket gyógyítás céljaira, embereken alkalmaznak.<br/><img src="img/orvosi_eszkoz.jpg">'
},{
	question: 'II.6. Mi az orvostechnikai eszközök két legfontosabb alapkövetelménye?',
	answer: 'Biztonság</br>Hatásosság</br><img src="img/safety_eff.png">'
},{
	question: 'II.7. Hogyan kell bizonyítani a biztonságot?',
	answer: 'Akkreditált módon történő mérésekkel. Szabványok vannak az orvosi eszközökre. Az összes pontjának teljesülnie kell. A technikai álláspont szerint elvárható színvonalú, teljesíthető.</br><img src="img/todo.png">'
},{
	question: 'II.8. Hogyan kell bizonyítani a hatásosságot?',
	answer: 'Valós emberen végzett tudományos kísérlettel, az Egészségügyi Tudományos Tanács jóváhagyásával.</br><img src="img/ember_kiserlet.png">'
},{
	question: 'II.9. Milyen különleges követelmények érvényesek emberen való kísérletezésnél?',
	answer: 'Egészségügyi Tudományos Tanács követelményei, ettől eltérni tilos.</br><img src="img/ett.png">'
},{
	question: 'II.10. Mit jelent az orvostechnikai eszköz kockázati osztálya?',
	answer: 'Hogy mekkora mértékű károsodást okozhat egy eszköz.</br>Pl.: I. Osztály - gyakorlatilag rizikó mentes.</br><img src="img/risk.png">'
},{
	question: 'II.11. Mondjon példákat a kockázati osztályba sorolt orvostechnikai eszközökre!',
	answer: '<b>I.</b> (gyakorlatilag rizikó mentes): lámpa, kesztyű, szék</br>><img src="img/1class.png"></br><b>II.a</b> (kis rizikó): EKG, digitális hőmérő, MRI, automata vérnyomásmérő</br><img src="img/2aclass.png"></br><b>II.b</b> (nagy rizikó): röntgen készülék, CT, defibrillátor, lélegeztető, sebészeti lézer</br><img src="img/2bclass.png"></br><b>III.</b> (veszélyes): szívbillentyű, ideiglenes pacemaker vezeték, implantátumok</br><img src="img/3class.png">'
},{
	question: 'II.12. Mivel egészül ki a magasabb kockázatú orvostechnikai eszközök CE jelölése?',
	answer: 'Nagyobb veszélyt hordozó termékek a veszélyességtől függően II.a, II.b vagy III. kockázatú jelölést kapnak.</br>A tanúsító azonosító száma is felkerül.</br><img src="img/tan_azon.png">'
},{
	question: 'II.13. Mit jelent a CE jelölés melletti négyjegyű szám?',
	answer: 'A független tanúsító (Notified Body) azonosító száma, aki ellenőrzi a gyártó kijelentéseit.</br><img src="img/tan_azon.png">'
},{
	question: 'II.14. Ki dönti el egy orvostechnikai eszköz használatának módját?',
	answer: 'Kizárólag a gyártó.</br><img src="img/gyarto.png">'
},{
	question: 'II.15. Miért a gyártó dönti el egy orvostechnikai eszköz használatának módját?',
	answer: 'Mert az általuk meghatározott használati mód esetén tudja garantálni a gyártó a biztonsági és teljesítőképességi paramétereket – ezeknek megfelelően kapták meg a tanúsítványokat, engedélyeket.</br><img src="img/engedely.png">'
},{
	question: 'II.16. Hol található meg az orvostechnikai eszköz használatának módja?',
	answer: '<b>A használati útmutatóban.</b></br>Formája nincs meghatározva, de a kötelező tartalmi elemei igen, ill. a vásárló nemzeti nyelvén rendelkezésre kell, hogy álljon. Lehet interneten elérhető, videó forma, nyomtatott is.'
},{
	question: 'II.17. Kötelező-e Magyarországon a magyar nyelvű használati útmutató az orvostechnikai eszközökhöz?',
	answer: 'Igen, a vásárló nemzeti nyelvén rendelkezésre kell, hogy álljon.'
},{
	question: 'II.18. Miért nem szabad eltérni a használati útmutató előírásaitól?',
	answer: 'Csak az előírt használati módra igazak a gyártó által garantált biztonsági és teljesítőképesség paraméterek, az ettől eltérő használat kísérlet, ami engedély nélkül törvénysértés.'
},{
	question: 'II.9. Csak a megtörtént baleseteket vagy a veszélyes eseményeket is be kell jelenteni a hatóságnak?',
	answer: 'Mindkét típusú eseményt be kell jelenteni, mert megelőzhetünk további veszélyes és baleseti helyzeteket.'
},{
	question: 'II.20. Magyarországon melyik hatóság az orvostechnikai eszközöknél illetékes hatóság?',
	answer: 'Egészségügyi Engedélyezési és Közigazgatási Hivatal -> Orvostechnikai Főosztály -> Baleset bejelentés'
},{
	question: 'II.21. Miért kell bejelenteni az orvostechnikai eszközökkel történt rendkívüli eseményeket?',
	answer: 'Azért, mert ezzel valamilyen más helyeken bekövetkezhető baleseteket előzhetünk meg.</br>Azért is, hogy a gyártó azonnal kivizsgálhassa a jelenséget, ha típushibát észlel, akkor saját költségén rendbe hozhassa.'
},{
	question: 'II.22. Mikor kell bejelenteni az orvostechnikai eszközökkel történt rendkívüli eseményeket?',
	answer: '8 napon belül.'
},{
	question: 'II.23. Mi az orvostechnikai eszközök időszakos felülvizsgálatának célja?',
	answer: 'Megfelelő információ álljon rendelkezésre a használat során bekövetkező állagromlásról, az eszköz dokumentációjában megadott előírások esetleges megváltozásáról, valamint a rendeltetésszerű és biztonságos teljesítőképesség fennállásáról.'
},{
	question: 'II.24. Milyen felülvizsgálatra kötelezett orvostechnikai eszközök kategóriát ismer?',
	answer: '1 évente ellenőrizendő</br>2 évente ellenőrizendő</br>3 évente ellenőrizendő'
},{
	question: 'II.25. Mit jelent a felülvizsgálaton átesett eszközre ragasztott címke színe?',
	answer: '<span class="green">Zöld</span> - minden rendben</br><span class="yellow">Sárga</span> - kismértékű rendellenesség, max 2 hónap türelmi időszakot jelöl, amin belül a rendellenességet meg kell szüntetni és újra el kell bírálni a megfelelőségét</br><span class="red">Piros</span> - nem használható'
},{
	question: 'II.26. Milyen problémák lehetnek a gyógyulás ígérő, nem orvostechnikai eszközöknél?',
	answer: 'A gyártó állításait nem erősíti meg sem az akkreditált laboratóriumi vizsgálat a biztonságot illetően, sem a hatékonysági vizsgálat (jó marketing, placebo hatás torzításai).'
},
// Fiziológiai jelek mérése
{
	question: 'III.1. Mi a jelentősége az objektív információnak az orvosi diagnózis felállításakor?',
	answer: 'Az ember egészségi állapota paraméterek százaival írható le. A páciens helyzetének nyomonkövetéséhez az aktuális állapotokat jellemezni kell. Ezt a célt szolgálják a szubjektív és objektív paraméterek. A probléma a szubjektív paraméterekkel,hogy nagyban függnek a megfigyelő egyéntől és gyakran téves következtetésekre adnak alapot. Míg az objektív paraméterek mérhetőek,a bizonytalanság kevesebb,mint 5%.'
},{
	question: 'III.2. Miért fontos a mértékegységek ismerete?',
	answer: 'Mert ugyanazon jellemző mérése gyakran többféle mértékegységféleségben is megengedett és attól függően, hogy a mérőműszer milyen gyártmányú vagy beállítású, a számérték mást jelenthet.'
},{
	question: 'III.3. Hány alapértéke van az SI mértékegységrendszernek?',
	answer: '7: Hosszúság - m</br>Tömeg - kg</br>Idő - s</br>Villamosáram erőssége - A</br>Termodinamikai hőmérséklet - K</br>Anyagmennyiség - mol</br>Fényerősség - cd'
},{
	question: 'III.4. Mire jó a prefixum?',
	answer: 'A sok számjegy leírásától kímélnek meg (egyszerűsítés).</br>giga G 10^9</br>mega M 10^6</br>kilo k 10^3</br>hekto h 10^2</br>deka dk 10</br>deci d 10^-1</br> centi c 10^-2</br>milli m 10^-3</br>mikro μ 10^-6</br>nano n 10^-9</br>piko p 10^-12'
},{
	question: 'III.5. Mit jelent az analóg jel?',
	answer: 'A kijelző folytonos értéket ad.</br>Már ritka, régebben sokat használt</br>nehéz leolvasni, de végtelen pontos</br><img src="img/analog.png">'
},{
	question: 'III.6. Mit jelent a digitális jel?',
	answer: 'A kijelző kvantumonként vált (lépcsőzetesen).</br>jól tárolható, jól továbbítható</br>digitális feldolgozást egy kis analóg fordítás előzi meg</br><img src="img/digital.png">'
},{
	question: 'III.7. Milyen különös szempontjai vannak az emberen végzett méréseknek?',
	answer: 'élő emberről van szó, szubjektum</br>mérés közben megváltozhat</br>nem jól reprodukálható</br>többféle egyidejű paraméter jellemez jól</br>orvosi szituáció</br>viszonyítási alap</br>megbízhatóság, üzembiztonság'
},{
	question: 'III.8. Mondjon példát közvetlen mérési módszerre!',
	answer: 'fiziológiai mennyiség közvetlenül hat az érzékelőre</br>EKG, testhőmérséklet, testsúly, vérnyomás, hasfalfeszülés, légzéstérfogat</br><img src="img/meres_1.png">'
},{
	question: 'III.9. Mondjon példát modulált mérési módszerre!',
	answer: 'energia be -> módosult energia ki</br>Röntgen, CT, UH, SPO2, elektro hreográf, légzés szám, timpanométer, MRI, szemfenéki véráramlás sebesség</br><img src="img/meres_2.png">'
},{
	question: 'III.10. Mondjon példát indikátoros mérési módszerre!',
	answer: 'segédanyag be -> érzékelés ki</br>Röntgen kontrasztanyag, UH buborék, PET, szívperctérfogat, scintigráf, helicobacter</br><img src="img/meres_3.png">'
},{
	question: 'III.11. Mondjon példát kiváltott válaszos mérési módszerre!',
	answer: 'ingerlés be ->  válasz ki</br>EEG + fény-, hang-, villamos-, mechanikus inger, ergométer</br><img src="img/meres_4.png">'
},{
	question: 'III.12. Mondjon példát mintavételes mérési módszerre!',
	answer: 'vér, vizelet, széklet, szövet, testnedv vizsgálat</br><img src="img/meres_5.png">'
},{
	question: 'III.13. Mi okozhat bizonytalanságot méréseknél?',
	answer: 'A mérőeszköz pontatlansága</br>a mérési módszer tökéletlensége</br>a Mérést végző személy szubjektív hibája</br>Külső körülmények'
},{
	question: 'III.14. Mennyi egy szokásos mérőműszer mérési bizonytalansága?',
	answer: 'A mérőműszer pontossága a mérési eredmény és a mérendő mennyiség valódi értékének a közelítése. Ez nem lehet végtelenül jó a műszer gyártási minőségéből, bonyolultságából stb adódóan.A pontatlanság függ a műszerek minőségétől:</br>* precíz,laboratóriumi műszerek esetében 1%</br>* Általánosan használt műszerek esetében:5%</br>pl: vérnyomásmérő 300Hgmm-es maximális mérési tartománnyal: 3%os pontatlansá esetén +/- 9hgmm-es eltérést jelent.'
},{
	question: 'III.15. Mennyi lehet a kezelési gondatlanságokból eredő mérési bizonytalanság nagysága?',
	answer: '5-20%'
},{
	question: 'III.16. Ismertesse a mérési hatáslánc egyes elemeit!',
	answer: '1. a mérendő jellemző az emberben</br>2. a mérőeszköz érzékelője (mérőátalakító)</br>3. a jelfeldolgozó műszer</br>4. az eredmény megjelenítője</br>5. energiaforrás stimuláláskor, vagy méréskor</br><img src="img/hatas_vazlat.png">'
},{
	question: 'III.17. Milyen kötelező fényjelzéseket ismer orvostechnikai eszközöknél?',
	answer: '<b>piros</b> veszélynél haladéktalanul avatkozzon be, kávét csak utána ihatom meg</br><b>sárga</b> figyelmeztetésnél mielőbb avatkozzon be, de még megihatom a kávét</br><b>zöld</b> helyes működés, megihatom a kávét (akár többet is)'
},{
	question: 'III.18. Milyen ajánlott hangjelzéseket ismer orvostechnikai eszközöknél?',
	answer: 'szirénzáó hang</br>hosszú sípszó</br>Veszély - Ti, ti, ti, Szünet, Ti, Ti, Szünet</br>Figyelmeztetés - Tá, Szünet, Tá, Szünet, Tá, Szünet'
},{
	question: 'III.19. Ismertessen néhány orvostechnikai eszközön alkalmazható jelképet!',
	answer: '1. Ne használd újra<img src="img/oe_01.png"></br>2. Felhasználható ...-ig (általában 5 évig korszerű, 10 évig üzemképes)<img src="img/oe_02.png"></br>3. Gyártási tétel azonosító (együtt gyártott tételek, ha egyik rész selejt, akkor gyanakodni kell, hogy többi is)<img src="img/oe_03.png"></br>4. Sorozatszám<img src="img/oe_04.png"></br>5. A gyártás ideje<img src="img/oe_05.png"></br>6.Steril (sima, etilénoxiddal, sugárzással, hővel, aszeptikus)<img src="img/oe_06_1.png"><img src="img/oe_06_2.png"><img src="img/oe_06_3.png"><img src="img/oe_06_4.png"><img src="img/oe_06_5.png"></br>7.Gyártói katalógusszám<img src="img/oe_07.png"></br>8.Használati útmutató megnézendő<img src="img/oe_08.png"></br>9.A gyártó<img src="img/oe_09.png"></br>10.Biológiai kockázat<img src="img/oe_10.png"></br>11.Hőmérséklet(max,min,tartomány)<img src="img/oe_11_1.png"><img src="img/oe_11_2.png"><img src="img/oe_11_3.png">'
},
// Villamos biztonságtechnika
{
	question: 'IV.1. Miért fontos a villamos biztonság?',
	answer: 'Gondtalan használattal vagy meghibásodás esetén áramütés keletkezhet.'
},{
	question: 'IV.2. Milyen élettani hatásait ismeri az elektromos áramnak?',
	answer: 'Ideg ingerlés</br>Izom ingerlés</br>Vegyi hatás</br>Melegedés'
},{
	question: 'IV.3. Az elektromos áram milyen tényezői határozzák meg a kiváltott hatást?',
	answer: 'Áram értéke</br>Áram „sűrűsége” (felület)</br>Áram útja</br>Hatás ideje</br>Áram neme (egyen/váltakozó)'
},{
	question: 'IV.4. Milyen frekvenciájú váltakozó áramra leginkább érzékeny az ideg és az izom?',
	answer: '50 Hz'
},{
	question: 'IV.5. A különböző nagyságú 50Hz-es áram milyen hatásokat vált ki?',
	answer: '0,02 mA közvetlenül a szíven át leállíthatja azt</br>0,3 mA érzékelés</br>1 mA bizsergés</br>15 mA elengedési küszöb</br>25 mA légzőizmok görcse</br>100 mA szív kamrai fibrilláció</br>1000 mA égés, szívleállás'
},{
	question: 'IV.6. Miért kitüntetett az 50Hz-es, 20mikroamperes áramerősség?',
	answer: 'Mert közvetlenül a szívbe juttatva fibrillációt okozhat.'
},{
	question: 'IV.7. Mi a vulnerábilis szakasz a szívciklusban?',
	answer: 'Különösen veszélyes időszak, a T-hullám felfutásától kezdődően, amikor már 20-50 μA (50 Hz-es) áram kamrai fibrillációt okozhat!</br><img src="img/t_hullam.png">'
},{
	question: 'IV.8. Mi jellemzi a villamosan jó-, a közepes vezető, és a szigetelő anyagokat?',
	answer: '<b>Jó vezető:</b> bármely pontjára juttatva a villamos potenciált, a vezető minden pontjára eljut, és azonnal megjelenik. Az áram nagyon könnyen szétoszlik. -> fémek, elektrolitok (víz), villanyvezetékek</br><b>Közepes vezető:</b> nehezen jut át a villamos potenciál, közben megoszlik, arányosan veszítve energiájából. Az áram nehezen oszlik szét -> emberi test, izzószál, villamos alkatrészek</br><b>Szigetelőanyag:</b> bármely pontjára juttatva a villamos potenciált, ugyanazon a ponton marad, nem jut tovább. Az áram nagyon nehezen oszlik szét -> szigetelők, levegő, bútorok, száraz ruha'
},{
	question: 'IV.9. Milyen áram jön létre azonos villamos potenciálok között?',
	answer: 'Azonos villamospotenciálok között nem indul meg a villamos áram.'
},{
	question: 'IV.10. Mi történik az eltérő villamos potenciálokkal érintkező emberrel?',
	answer: 'Megkezdődik az energiaszint kiegyenlítődés, megráz az áram. :(.'
},{
	question: 'IV.11. Miért van különös helyzetben a beteg a villamos biztonság szempontjából?',
	answer: 'altatva van, eszméletlen, mozgásképtelen</br>villamos készülékekkel kapcsolatban áll</br>bőre nem nyújt szigetelő védelmet</br>életfunkciói függenek a készülékektől</br>érzékeny és nagyteljesítményű készülékekkel kapcsolódik</br>laikus és lelkileg is terhelt'
},{
	question: 'IV.12. Hogyan véd a védővezeték?',
	answer: 'Rajta keresztül 0V potenciált vezetnek a többnyire fém burkolatú eszközbe, és ez által megvéd az áramütéstől. Jele: I. vagy <img src="img/vb_01.png">'
},{
	question: 'IV.13. Hogyan véd a kettős szigetelés?',
	answer: 'A kettős szigetelőanyag réteg miatt, a veszélyes potenciál nem tud eljutni az emberhez. Csak száraz körülmények között! Jele: II. vagy <img src="img/vb_02.png">'
},{
	question: 'IV.14. Miért biztonságos a belső áramforrás?',
	answer: 'Mert kis potenciálkülönbséggel dolgoznak és csak akkor veszélyes, ha a készülék által létrehozott potenciálkülönbség közé kerül az ember.'
},{
	question: 'IV.15. Miért biztonságos a lebegő potenciálú készülék?',
	answer: 'Mert a fix lebegő potenciál közé került ember érintési pontjai között nincs potenciálkülönbség, így áramütés sem.'
},{
	question: 'IV.16. Hol használhat B tipusú páciensrésszel rendelkező orvostechnikai eszközt?',
	answer: '(B=Body)<img src="img/vb_03.png">, olyan készülékeknél, amelyeknél a bőr védő hatása tud érvényesülni. Ezek főleg általános használatra szánt készülékek.'
},{
	question: 'IV.17. Hol használhat BF tipusú páciensrésszel rendelkező orvostechnikai eszközt?',
	answer: '(BF=Body Floating<img src="img/vb_04.png">), fém tűnél</br>benedvesedett bőrön</br>fém tűvel átszúrt bőrön</br>katétereknél</br>műtétileg feltárt területeken'
},{
	question: 'IV.18. Hol használhat CF tipusú páciensrésszel rendelkező orvostechnikai eszközt?',
	answer: '(BF=Cardiac Floating<img src="img/vb_05.png">), akár emberi szívnél vagy nagy ereknél, mert max. 10 μA áram tud megindulni a szív felé.'
},{
	question: 'IV.19. Hogyan kell használni a fali szigetelésellenőrző műszert?',
	answer: 'A műszer rendes működését egy kontrollgomb napi egyszeri megnyomásával ellenőrizni kell. Hiba esetén hangjelzést ad. Ekkor a hangjelzés kikapcsolható, a megkezdett beavatkozás befejezhető, de új műveletet csak a hiba felderítése után kezdhető.'
},{
	question: 'IV.20. Hogyan kell használni az EPH hálózatot?',
	answer: '(Egyesített Potenciálkiegyenlítő Hálózat): A paciens közelében minden megérinthető fém felületet egy villamos érintkező gyűjtőhöz kötnek vezetékekkel.'
},{
	question: 'IV.21. Miért hatékony az EPH hálózat?',
	answer: '(Egyesített Potenciálkiegyenlítő Hálózat): Mert a az esetleg potenciállal rendelkező fém felületek potenciálja kiegyenlítődik, közöttük nem lesz potenciálkülönbség. -> Potenciálkülönbség nélkül nem tud megindulni villamos áram, és nem lehet áramütés sem.'
},
// Endoszkópos diagnosztika
{
	question: 'V.1. Mit jelent az endoszkóp elnevezés?',
	answer: 'Belülre nézés.'
},{
	question: 'V.2. Melyek az endoszkópia előnyei más képalkotókhoz képest?',
	answer: 'Valóságos látvány (színhelyes kép)</br>Alacsonyabb kockázat</br>A vizsgált terület közelébe lehet jutni</br>Diagnosztikát azonnal követheti beavatkozás'
},{
	question: 'V.3. Milyen vizsgálati módszerek lehetnek a fény használatával?',
	answer: 'A test saját fénysugárzásának észlelése</br>A vizsgálandó terület megvilágítása, és az arról visszaverődő fény észlelése</br>A besugárzott fény modulált változatának észlelése'
},{
	question: 'V.4. Milyen színek láthatóak az endoszkópos betekintés során?',
	answer: 'Valóságos, látható színeket'
},{
	question: 'V.5. Milyen fényforrásra van szükség a helyes színárnyalatok érdekében?',
	answer: 'Amilyen a napfényhez hasonló arányokban tartalmazza az összes ember számára érzékelhető színkomponenst.</br><img src="img/fenyforras.png">'
},{
	question: 'V.6. Mit neveznek endoszkópiában hideg fényforrásnak?',
	answer: 'Azt a fényforrást, amiből kiszűrik az infravörös, hő keltő tartományt, és csak a valóban megvilágítást adó, látható tartományt engedi az emberi testbe.</br><img src="img/hideg_ff.png">'
},{
	question: 'V.7. Mi a Charriére az endoszkóp esetében?',
	answer: 'Mértékegység (Ch), egy ovális vagy kör alakú csatorna kerülete mm-ben. Pl.: 2mm átmérőjű cső kerülete kb. 6mm, azaz 6Ch.'
},{
	question: 'V.8. Mi az előnye az üveg lencsés képtovábbításnak?',
	answer: 'A képtovábbítás színhelyessége szinte tökéletes.'
},{
	question: 'V.9. Miért nevezik néhol az endoszkópiát tükrözésnek?',
	answer: 'Előfordulhat, hogy a lényeges terület nem az endoszkóp előtt van, ezért fényterelő prizmákat építenek az endoszkóp elejére. Ezek miatt a tükröződő felületek miatt hívhatják tükrözésnek.</br><img src="img/end_tukor.png">'
},{
	question: 'V.10. Mire való a munkacsatorna?',
	answer: 'Egy "cső a csőben", amiben különböző folyadékok, gázok, eszközök juttathatóak be (pl. koagulálni, mintát venni, öblítő folyadékot bejuttatni lehet).</br><img src="img/end_mcs.png">'
},{
	question: 'V.11. Milyen endoszkóp elnevezéseket ismer, és hol használják?',
	answer: 'Cisztoszkóp-húgyhólyag</br>Uretroszkóp-húgycső</br>Rektoszkóp-végbél</br>Hiszteroszkóp-méh</br>Duglaszkóp-petefészek</br>Laparoszkóp-hasüreg</br>Koledoszkóp-epehólyag</br>Gasztroszkóp-gyomor</br>Torakoszkóp-mellüreg</br>Kardioszkóp-szív</br>Bronchoszkóp-tüdő és hörgők</br>Tracheoszkóp-légcső</br>Özofagoszkóp-nyelőcső</br>Laringoszkóp-gége</br>Otoszkóp-fül</br>Rinoszkóp-orrjárat</br>Ventrikuloszkóp-agykamrák</br>Artroszkóp-térdízület</br>Hipofaringoszkóp-garat alsó része</br><img src="img/end_faj.png">'
},{
	question: 'V.12. Mi a merev endoszkópok jellemezője?',
	answer: 'Többnyire fémből készült eszközök</br>Olyan beavatkozásoknál előnyösek, ahol a merevségből adódóan jól pozícionálható a vég helyzete</br>A leképzés leginkább Hopkins-féle, jobb fényátbocsátást nyújtó rúdlencsés optikával</br><img src="img/end_m.png">'
},{
	question: 'V.13. Mi a hatékony endoszkópok jellemzője?',
	answer: 'Könnyen felveszi a csatornák görbületeit</br>A vég mozgatása segít bejuttatáskor, kanyarodáskor</br>A megszemlélés iránya változtatható</br><img src="img/end_h.png">'
},{
	question: 'V.14. Milyen endoszkópkiegészítőket ismer?',
	answer: 'Monitor</br>Video processzor (vezérlő)</br>Fényforrás</br>Nagyfrekvenciás vágó</br>Szívó/Öblítő pumpa</br>Állvány</br>Nyomtató, DVD felvevő stb.</br><img src="img/end_kieg.png">'
},{
	question: 'V.15. Mi a kapszulaendoszkóp?',
	answer: 'Tápcsatorna vizsgálatához, gyógyszerkapszula méretű, könnyen lenyelhető kapszula, ami rádióhullámok segítségévela testen kívüli vevőhöz továbbítja a fényfelvillanásokkal megvilágított fotósorozatot, amit készít. Székelés útján távozik, egyszer használható.</br><img src="img/end_kapsz.png">'
},{
	question: 'V.16. Milyen veszélye van a kapszulaendoszkóp használatának?',
	answer: 'A tápcsatornában lévő szűkületekben/zsebekben elakadhat és ilyenkor sebészi úton kell eltávolítani.'
},{
	question: 'V.17. Miért sérülékeny az endoszkóp?',
	answer: 'A merev endoszkópok optikai rendszere, belső üveglencsék igen sérülékenyek, koccanás, hajlítás hatására repedhet.</br>A hajlékony endoszkópok belső rendszere sérülékeny, a puha gumiburkolat sérülésekor a testnedvek bejuthatnak és korróziót, használhatatlanságot okoz.'
},{
	question: 'V.18. Mi az endoszkópok leggyakoribb tisztítási módja?',
	answer: 'Gumiburkolatot felfújják, hogy sérülései láthatóvá váljanak. Kívül, belül mechanikai tisztítást kell végezni, legalább kefékkel. A leghatékonyabb az UH mosogató vagy automata mosogatógép. Sterilizálást folyadékban végeznek. Egyes eszközök már az autoklávozást is bírják.'
},{
	question: 'V.19. Hogyan dokumentálják az endoszkópos vizsgálatot?',
	answer: 'Az endoszkópos beavatkozás műtéti tevékenységnek minősül, dokumentálandó. Ez jól megvalósítható videokamera használatával, lépek rögzítésével.'
},{
	question: 'V.20. Milyen diagnosztikai hibaforrásokat tud azonosítani?',
	answer: 'Z1: bélsár, táplálék, nyál</br>Z2: látószög, életlenség, elmozdulás, irányítás</br>Z3: torzítás, kamera-színhiba, rossz megvilágítás</br>Z4: rossz színbeállítás'
},
// Röntgen és CT
{
	question: 'VI.1. Mi a különbség a röntgenfelvételezés és a CT által használt sugárzás között?',
	answer: 'Semmi. Mindkettő ugyan azt a röntgensugárzást használja.'
},{
	question: 'VI.2. Mit hívunk ionizáló sugárzásnak?',
	answer: 'Azt a sugárzást, ami az élő szervezet sejtjeinek vízmolekuláit ionná teszi.'
},{
	question: 'VI.3. Hogyan osztályozzuk a képalkotó berendezéseket?',
	answer: '1. a sugárzás forrása és útja</br>2. A sugárzás veszélyessége</br>3. Mit tesz láthatóvá az eljárás'
},{
	question: 'VI.4. Mit nevezünk transzmissziós képalkotásnak?',
	answer: 'Ha a sugárzás forrása a testen kívül van, és a sugárzás áthalad a testen.</br><img src="img/transm.png">'
},{
	question: 'VI.5. Mit jelenít meg a röntgenkészülék?',
	answer: 'A testen átjutott röntgensugarat.'
},{
	question: 'VI.6. Mit jelent a keményebb vagy lágyabb röntgensugárzás?',
	answer: '<b>Kemény:</b> rövid hullámhosszú röntgensugárzás.</br><b>Lágy:</b> hosszú hullámhosszú röntgensugárzás.'
},{
	question: 'VI.7. Milyen elven készít képet a hagyományos röntgen képalkotó?',
	answer: 'Transzmissziós elven, azaz a sugarak a testen áthaladnak.</br><img src="img/transm.png">'
},{
	question: 'VI.8. Mi a centrális projekció?',
	answer: 'Minden esetben fellépő, a készülék felépítéséből fakadó metodikai hiba (Nagyít, torzít, felejt, összegez).</br><img src="img/central.png">'
},{
	question: 'VI.9. Milyen elven készít felvételeket a CT?',
	answer: 'Transzmissziós elven, azaz a sugarak a testen áthaladnak.'
},{
	question: 'VI.10. Mi a Hounsfield-skála?',
	answer: 'Megmutatja a test vizsgált részének röntgensugár-elnyelő tulajdonságát.'
},{
	question: 'VI.11. Mit nevezünk ablakolásnak?',
	answer: 'Ha a Hounsfield-skálához úgy rendeljük hozzá a megjelenítendő színtartományt, hogy csak az érdekes tartományhoz rendeljük a szürkeségi fokozatokat.'
},{
	question: 'VI.12. Hogyan működik a spirál CT?',
	answer: 'A röntgencső és a detektor helikális ívet húz a páciens teste körül.'
},{
	question: 'VI.13. Mit értünk a többszeletes CT alatt?',
	answer: 'Nem egy, hanem több detektorsor van, emiatt szélesebb lehet a röntgensugár és adott idő alatt nagyobb térrész vizsgálható.</br><img src="multi_slice_ct.png">'
},{
	question: 'VI.14. Mi az egyenértékdózis?',
	answer: 'A sugárzás élő szervezetre gyakorolt hatását fejezi ki. Sievertben mérik. 50 mSv a határérték, ennyit tud a repair mechanizmus kijavítani.</br><img src="img/sievert.png">'
},{
	question: 'VI.15. Milyen elven készít felvételeket a CT?',
	answer: 'Transzmissziós elven, azaz a sugarak a testen áthaladnak.</br><img src="img/ct_muk.png">'
},{
	question: 'VI.16. Milyen készülék a Dual Source CT?',
	answer: 'Olyan amilyenben 2-2 90°-ban elforgatott röntgencső és detektorsor található.</br><img src="img/ds_ct.png">'
},
// MRI
{
	question:'VII.1. Milyen elven működik az MRI?',
	answer: '- az MRI az angol kifejezés, a Magnetic Resonance Imaging betűszava, legnépszerűbb és legbonyolultabb képalkotó eljárás.</br>- <b>elvét egy gitárhúrral szemléltetik</b>: a gitárhúrok a szervezetben meglévő nagyszámú hidrogénatomok, potosabban azok mágneses, dipólus tulajdonsága. A hidrogén atommagjában lévő proton, mint kicsi, mágnes viselkedik. Ezen kicsi mágnesek alapállapotban egyrészt véletlenszerű irányokban állnak, másrészt tengelyük precessziós, körkörös mozgást végez, akárcsak a föld tengelye. A húrok megfeszítését B-vel jelölik, hatására az eredetileg mindenfajta irányba álló hidrogén-mágnesek berendeződnek a tér irányába.'
},{
	question: 'VII.2. Milyen tulajdonságot mutat meg az MRI?',
	answer: 'Szövetek kis mágneses különbségeit, anyagi, szöveti tulajdonságot jelenít meg az eszköz, amit látunk a képen színekkel, szürkeségekkel elkülönítve.'
},{
	question: 'VII.3. Osztályozza az MRI módszereit!',
	answer: 'a.) sugárzás forrása és útja szerint -> az energia forrása a készülék, az energia bevietelét követően a visszasugározódás csak valamekkora idő elteltével történik meg, majd részletes kifejtés, éppen az ennek kapcsán fellépő jelenségek idejét mérve kapunk diagnosztikai információt, ezért reflexiós és emissziós is egyben.</br>b.) veszélyesség szerint a II.a osztályú orvostechnikai eszköz kétféle sugárzást hoz létre: </br>- erős, mágneses tér, amely 1-3 tesla nagyságrendű</br>- rádiófrekvenciás sugárzás</br>c.) Egyerre morfológia és funkciónális képalkotó eljárás'
},{
	question: 'VII.4. Miért használ az MRI erős mágneses teret?',
	answer: 'hidrogén atomokat rendez be egy irányba, így mérhető lesz a mágneses tulajdonság, hogy az anatómiai viszonyok pontos ábrázolása mellett, különbséget tudjon tenni a szöveti minőségek között'
},{
	question: 'VII.5. Miért használ az MRI rádiófrekvenciás sugárzást?',
	answer: 'gerjesztéshez, horizontális síkba rendezéshez.</br>>nem ionizáló hatású, tehát <b>ártalmatlan sugárzás</b>.'
},{
	question: 'VII.6. Mi a T1-súlyozott felvétel?',
	answer: 'anatómiai képnek is hívják, amik valóságnak megfelelnek:</br>-fehérállomány és a zsírszövet fehér</br>-szürkeállomány szürke</br>-a liquorterek feketék'
},{
	question: 'VII.7. Mi a T2-súlyozott felvétel?',
	answer: 'negatiív kép:<>/br-liquorterek világosak</br>-fehérállomány sötét</br>-szürkeállomány világosabb'
},{
	question: 'VII.8. Mi a protondenzitás-súlyozott felvétel?',
	answer: 'olyan hatású a felvétel, mint a T2, de liquorterek sötétek rajta. '
},{
	question: 'VII.9. Mi az fMRI?',
	answer: 'Elsősorban az agyi működések vizsgálatára alkalmazott eljárás.'
},{
	question: 'VII.10. Hogyan működik az fMRI?',
	answer: '-A hemoglobin diamágneses és paramágneses különbségét képes kimutatniaz MRI, de mivel ez a különbség nagyon kicsi, ezért csak statisztikai módszerekkel kimutatható</br>-az agy adott pillanatban aktívabb területeinek anyagcseréje, oxigénfelvétele fokozódik, emiatt az innen távozó érszakaszokban a véroxigénszint alacsonyabb, mint a többi agyterületen'
},{
	question: 'VII.11. Mi a BOLD-módszer?',
	answer: 'A hemoglobin diamágneses, ha oxigénnel telített, és paramágneses ha nem. Ennek segítségével képes kimutatni az agy adott pillanatban aktív területeit (Blood Oxygen Level Dependent).'
}, {
	question: 'VII.12. Milyen műtermékek fordulhatnak elő MRI közben?',
	answer: 'a)fémek, páciensek mozgása, légzése, perisztaltikája</br>b.)infúziós pumpa; vérnyomás mérő; fonendoszkóp; kontrasztanyagot adagoló műszer; újraélesztéshez szükséges reanimációs kocsi'
},{
	question: 'VII.13. Miért van szükség MRI kompatibilis műszerekre, eszközökre?',
	answer: '-páciensek támogatására</br>-veszélyhelyzetek kezelésére</b>rorvosi okkal pl: infúziós pumpa, vérnyomásmérő'
},{
	question: 'VII.14. Milyen kockázatai lehetségesek az MRI-vizsgálatnak?',
	answer: '- a szervezetbe került fémtartalmú eszközök, szilánkok, implantátumok a mágnese tér hatására elmozudlhatnak</br>- hő fejlődhet rajtuk, komoly roncsolás okozva ezzel a szervezetben</br>- enyhe hiperténiás, melegítő hatás</br>- perifériás idegi stimuláció előfordulhat</br>- zajjal, zúgással jár->füldugó javasolt</br>- zárt henger, klausztrofóbiás egyéneknek kényelmetlen lehet</br>- berepülő tárgyak'
},{
	question: 'VII.15. Milyen hibalehetőségek ismertek MRI-vizsgálat közben?',
	answer: '<b>Z1:</b> fémszilánkok, fémtartalmú implantátumok, amelyek a mágneses teret torzítják</br><b>Z2:</b> a páciens akaratlagos vagy akaratlan mozgásai, légzés, perisztartika, a szívmozgások. A gradienstekercs nem megfeleő elhelyezése, amely nem megfelelő mágneses teret és rossz térhatású képet eredményez</br><b>Z3:</b> a készülék rádiófrekvenciás tekercseinek kalibrálatlansága</br><b>Z4:</b> az MRI-készülék belső kalibrálatlansága</br><b>Z5:</b> megjelenítés paramétereinek és ablakolás helytelen megválasztása, rosszul beállított monitor</br><b>G:</b> nem megfelelő homogenitású statikus mágneses tér, a rádiófrekvenciás tekercsek kalibrálatlansága'
},
// Nukleáris diagnosztika
{
	question: 'VIII.1. Mi az izotóp?',
	answer: 'Egy adott elemben a különböző neutronszámú változatokat nevezzük izotópnak.'
},{
	question: 'VIII.2. Ki az a magyar származású Nobel-díjas tudós, aki a nukleáris képalkotó eljárásokhoz köthető?',
	answer: 'Hevesi György'
},{
	question: 'VIII.3. Mi a radiofarmakon?',
	answer: 'Az emberi szervezetbe intravénásan, szájon vagy orron keresztül bevitt enyhén sugárzó anyag.'
},{
	question: 'VIII.4. Mit mutat meg a szcintigráfia?',
	answer: '- ez egy funkcionális képalkotó, a szervezet anyagcseréjét, vérkeringést teszi láthatóvá.</br>- pl.: agy vérellátása, tüdővérkeringés, nyirokkeringés, májfunkció vizsgálat, tumor sejtek sejtképződése'
},{
	question: 'VIII.5. Hogyan működik a gamma-kamera?',
	answer: '- a sugárzó anyag dúsulásának követésére szolgáló eszköz</br>- a testből a sugárzás gamma-fotonjai irányban kiindulnak.</br>- A kamerához érkező gamma-fotonok egy kollimátor nevű szűrőn haladnak keresztül először, amely az irányítást végzi. Csak a detektorkristályra szemből érkező sugárzás jut át a kollimátoron, a többi elnyelődik</br>- A Na-jodid egykristály a beeső gamma-sugárzás hatására látható fényvillanást produkál.</br>- A sugárzás a kristályban a szervek vetületét hozza létre.</br>- A kristályról érkező kép ilyen módon felerősítve kerül tovább a detektorokra.</br>- A detektorok jeleit áramkörök és számítógép dolgozzák fel, kiszámolva a dúsulás vetületi képét'
},{
	question: 'VIII.6. Mi a SPECT-vizsgálat?',
	answer: 'A szcintigráfia továbbfejlesztése, a különbség a felvétel technikájában mutatkozik, ugyanis a kamera teljes kört megtéve forog a test körül, közben 3-6 fokonként megáll és minden egyes pozícióban 15-20 mp-s adatgyűjtést végez, a testről érkező gamma-fotonokat monitorozva.'
},{
	question: 'VIII.7. Milyen tulajdonságot mutat meg a nukleáris diagnosztika?',
	answer: 'Funkcionális, szervek szövetek működéséről alkot képet'
},{
	question: 'VIII.8. Mit mutat meg a PET?',
	answer: '- Képet kapunk az anyagcseréről, így a funkcióról</br>- minél rosszindulatúbb a daganat, annál jobban látható</br>- szövetek cukorfelhasználása (szőlőcukor molekula) </br>- szöveti vérátfolyás (jelzett 150-butanol molekula)</br>- aminosav felvétel és fehérje anyagcsere (11C-metionin)'
},{
	question: 'VIII.9. Milyen sugárzás lép fel a PET-vizsgálat közben?',
	answer: 'ionizáló elektrománeses sugárzás: béta és gamma'
},{
	question: 'VIII.10. Mi jellemzi a PET-vizsgálatot?',
	answer: '- drága, nehezen előállítható analóg, nagy érzékenység térben, jó felbontás</br>- a pozitronrészecske az elektron antirészcskéje, tulajdonságainak többsége megegyezik vele, a töltése azonban pozitív, ellentétes az elektronéval'
},{
	question: 'VIII.11. Mi az annihiláció?',
	answer: 'a pozitron kisugárzódva az atommagból egy-két millimétert halad, amíg találkozik egy elektronnal, ekkor azonban mindkettő megsemmisül és a tömegüknek megfelelően energia szabadul fel, két egyenlő energiájú és pontosan ellentétes irányú gamma-foton formájában'
},{
	question: 'VIII.12. Melyik képalkotó működik pozitronsugárzással?',
	answer: 'a PET'
},{
	question: 'VIII.13. Melyik képalkotó eljárással vizsgálható a szövetek és szervek anyagcseréje?',
	answer: 'szcintigráfia/PET'
},{
	question: 'VIII.14. Mi a PET-CT?',
	answer: 'A PET készülék egybeépítve egy CT-vel a szövetek anyagcseréjét (funkcionális) és azok anatómiai (morfológiai) viszonyait egyszerre láttató képalkotó eljárás'
},{
	question: 'VIII.15. Mekkora sugárterhelés várható a nukleáris diagnosztikai módszerek alkalmazása során?',
	answer: '- Szöveti vérátfolyás vizsgálatánál 17-20 mSv</br>- Cukorfelhasználás vizsgálatánál 7-10mSv</br>- Aminosav felvétel és fehérjeanyagcsere vizsgálatnál 12-15 mSv'
},
// Ultrahangos diagnosztika
{
	question:'IX.1. Mit nevezünk ultrahangnak? ',
	answer: '-Az emberi fül számára nem hallható, magas rezgésszámú hangokat vezetnek az emberi testbe, melyek az emberi testrészeken részben áthaladnak, részben visszaverődnek.</br>-Az ultrahang Longitudinális hullám, 20kHz-100MHz frekvenciájú mechanikai rezgés. Orvosi gyakorlatban: 2-25MHz'
},{
	question:'IX.2. Mit jelent a hullámhossz fogalma?',
	answer: 'A hanghullámok közötti térbeli távolság a hullámhossz, ami a forrás frekvenciájától és a terjedési sebességtől függ '
},{
	question:'IX.3. Miért lényeges a szervek akusztikus impedanciakülönbözősége?',
	answer: '- Mert annál nagyobb a visszaverődés, minél nagyobb az impedenciaeltérés</br>- a hangok számára, amelyek mindig csak az anyagokban terjednek, rájuk jellemző</br>- jellemző tulajdonsága, hogy a hang hogyan tudja megmozgatni a részecskéket</br>- jelentős még a hangvisszaverődés szempontjából is, uh a szervek faláról verődik vissza különböző kell legyen a visszaverődés ahhoz, hogy látszódjék'
},{
	question:'IX.4. Miért kell használni az ultrahang-diagnosztikában ultrahangzselét? ',
	answer: 'Mert csökkenteni kell a hámszövet és a levegő közötti nagy akusztikus inpedenciakülönbséget, zselé nélkül az uh nem jutna át a hámrétegen'
},{
	question:'IX.5. Milyen hatásai lehetnek az ultrahangrezgéseknek a testre?',
	answer: '- nem fejtenek ki biológiai hatást</br>- hőhatást</br>- mechanikai hatást</br>- kémiai katalizáló hatást'
},{
	question:'IX.6. Milyen intenzitással működnek a diagnosztikai ultrahangok?',
	answer: '25 mW/cm2 és 25 W/cm2 között'
},{
	question:'IX.7. Mi az ALARA-elv?',
	answer: 'As Low As Reasonably Achievable elv, vagyis a legkisebb, még hatékony intenzitással való munka'
},{
	question:'IX.8. Mi az echó elvű ultrahangos készülékek elve?',
	answer: 'A hangullámok vagy impulzusok visszaverődését kihasználó eszközök.'
},{
	question:'IX.9. Mire használható az A-scan üzemmód?',
	answer: '- Az agyban lévő esetleges tumor vagy bevérzés helyének észlelése</br>- rész-szolgáltatása nagyobb teljesítményű készülékeknek</br>- A-módusnak nevezett lineáris rendszer (távolságot mér)'
},{
	question:'IX.10. Mire használható a B-scan üzemmód?',
	answer: '- Hasi szervek vizsgálata</br>- kardiológiai vizsgálat</br>- B-módusnak nevezett metszeti eljárás (metszeti képet ad 2D)'
},{
	question:'IX.11. Mire használható a TM-üzemmód?',
	answer: '- Mozgó szerverk (főleg szívbillentyű és szívizom) vizsgálatára</br>- „Time Motion” eljárást „időmozgatásos” (B-scan speciális egy irányú)'
},{
	question:'IX.12. Mi a Doppler-jelenség?',
	answer: '- A hang forrástól az érzékelőhöz eljutott hang frekvenciája módosul, ha a hangforrás és az érzékelő egymáshoz képest mozognak</br>- KÖRÖM: <b>KÖ</b>zeledik <b>RÖ</b>videbb hullámhossz <b>M</b>agasabb hang, távolodik hosszabb hullámhossz mélyebb hang.'
},{
	question:'IX.13. Mire lehet következtetni az echó frekvenciaváltozásából?',
	answer: 'Meghatározható a mozgás sebessége.'
},{
	question:'IX.14. Mit jelent a CW Doppler-üzemmód?',
	answer: '- „Contonosus Wave” vagyis a „folyamatos hullámú” Doppler-üzemmódban a készülékek a vizsgált irányba folyamatosan sugároznak ultrahangot, melynek visszaverődését is folyamatosan érzékelik.</br>- A Doppler-hatást létrehozó mozgó szövetek helyzetének csak az iránya és mozgásuk sebessége határozható meg'
},{
	question:'IX.15. Mi az előnye a PW Doppler-módnak?',
	answer: '- „Pulse Wave” vagyis „pulzus hullámú” Doppler-üzemmódban a készülékek csak egy rövid ultrahangimpulzust bocsátanak ki meghatározott irányba.'
},{
	question:'IX.16. Mit nevezünk spektrum Doppler-módnak?',
	answer: 'Minden sebesség, amely az adott pillanatban érzékelhető volt, egy pontot kap ebben a képben.'
},{
	question:'IX.17. Mit nevezünk color Doppler-módnak?',
	answer: 'ez a mód az adott pontot <span class="red">pirosra</span> színezi, ha az ott észlelhető mozgás iránya a transzducertől <span class="red">távolodó</span>, és <span class="blue">kékre</span>, ha <span class="blue">közeledő</span>.'
},{
	question:'IX.18. Milyen új technikákat ismer az ultrahang-diagnosztikában?',
	answer: '- Panoráma UH</br>- Szono-CT</br>- Szonoelasztográfia</br>- Felharmónikus ábrzolás</br>- Kontrasztharmónikus ábrázolás</br>- Zónaszonográfia</br>- Ultrahang-navigáció'
},{
	question:'IX.19.Mi a Triplex üzemmód?',
	answer: 'az uh három funkciót használ egyszerre</br>- élő B kép + élő CW + PW spektrumdoppler</br>- élő B kép + élő Color + Power doppler'
},{
	question:'IX.20. Milyen a 3D-ultrahangkép?',
	answer: 'A fény és az árnyék csak virtuális, tehát nem valóságos, tisztított felületkezelt kép, információveszteséggel jár.'
},{
	question:'IX.21. Milyen a 4D-ultrahangkép?',
	answer: 'A 4.dimenzió az idő, vagyis mozgó megjelenítést jelent.'
},{
	question:'IX.22. Mit jelent a fókuszmélység?',
	answer: 'Mélység ahol uh nyaláb fokuszálva van, alatta felette rosszabb a felbontás'
},{
	question:'IX.23. Milyen zavaró hatások (artefaktok) léphetnek fel?',
	answer: '- távolsághiba</br>- elhajlás az iránytól</br>- felfényesedés</br>- árnyékosodás</br>- tükröződés</br>- pöttyösödés</br>- elmosódottság'
},{
	question:'IX.24. Mit okozhat a sérült vizsgálófej használata?',
	answer: '- áramütést okozhat</br>- részletszegény képet'
},
// Labortechnika
{
	question:'X.1. Hogyan biztosítják a laboratóriumi eszközök minőségét?',
	answer: 'Az EU külön direktívát alkotott, ez a 98/79/EK irányelv, amelynek magyarországi bevezetése a 8/2003. (III.13.) ESzCsM rendelet'
},{
	question:'X.2. Milyen vérvételi eszközöket ismer? ',
	answer: '- hagyományosnál: vastag injekciós tű és a kifolyó vér felfogására szolgáló kémcső</br>- vákuum alatt álló cső (Vacutainer)</br>- speciális fecskendő, amelynek letörhető a szára és a vér lecentrifugálható benne (Sarstendt, Braun)'
},{
	question:'X.3. Mi az a Vacutainer vérvételi rendszer?',
	answer: '- vákuum alatt álló csőbe vérvétel</br>-előnye: vért vevők, szállítók védve vannak, centrifugálásnál ki se kell nyitni</br>-hátránya: vérvételnél merev szögben kell a vénába szűrni a tűt'
},{
	question:'X.4. Hogyan jelölik a vérvételi csöveket?',
	answer: '- színes dugókkal (van vagy nincs adalék)</br>- beteg azonosítására szolgáló címkével, vonalkóddal'
},{
	question:'X.5. Mi az a kvantitatív vérkép?',
	answer: 'A sejetes alkotóelemek abszolút számának meghatározása'
},{
	question:'X.6. Mi a véralvadás mérés alapelve?',
	answer: 'Időmérésen alapul az első fibrinszál kicsapódásáig mérnek'
},{
	question:'X.7. Milyen kémiai módszerekkel ismerhető fel a cukorbetegség?',
	answer: 'Szárazkémiai vizsgálat, kolorimetria'
},{
	question:'X.8. Mire használják a pipettát?',
	answer: 'térfogatmérő eszköz, folyadékok pontos kimérésére, oldatok készítéséhez használnak'
},{
	question:'X.9. Sorolja fel a laboratóriumok alapfelszereltségéhez tartozó eszközöket, műszereket!',
	answer: '- hűtőszekrény</br>- mérlegek</br>- szárítószekrények</br>- termosztát</br>- vízfürdő</br>- centrifuga</br>- hematokrit</br>- fotométer</br>- mikroszkópok</br>- fénymikroszkópok</br>-automata pipetták</br>- automata adagolók</br>- tárgylemezek</br>- metszetek'
},{
	question:'X.10. Milyen elven működnek a centrifugák?',
	answer: '- a vizsgálati minták elválasztására alkalmazzák, fajsúlyszerint magas fordulatszámon</br>- többfázisú elegyből a kiülepedés sebessége függ az oldat viszkozitásátólés az összetevők fejkülönbségétől'
},{
	question:'X.11. Milyen módszerrel működnek a hematológiai automaták?',
	answer: 'fotoelektromos és elektromos ellenállás módszerrel'
},{
	question:'X.12. Mire használják a fotometriát?',
	answer: '- mennyiségi és minőségi elemzésre</br>- anyagra jellemző emissziós (kibocsásáti) színképét, ha kibocsátó fényét megfelelő készülékkel felbontjuk</br>- anyag abszorpciós színképét (elnyelési színkép), ha fényt a vizsgálandó anyagra bocsátjuk'
},{
	question:'X.13. Mi a szárazkémiai rendszer lényege?',
	answer: '- itt a színösszehasonlító módszert alkalmazzák</br>- az ujjbegyből vet vértcseppet reagenssel átitatott műanyagcsíkra cseppentve színváltozással járó kémiai reakció játszódik le</br>kolorimetriai módszerrel'
},{
	question:'X.14. Hogyan működik a vért felszívó tesztcsík?',
	answer: '- rácseppentjük a vércseppet, az felszívja reagens felület megváltozik a színe</br>- manuálisan vagy műszeresen értékelhető'
},{
	question:'X.15. Ismertesse az ujjbegyből történő vérvétel folyamatát!',
	answer: '1. steril, egyszer használatos lándzsa behelyezése a kézi darabba</br>2. szúrásmélység beállítása 1-6-ig</br>3. az ujj vértelítettségének fokozása meleg vizes kézmosás, az ujj elszorítása, pumpáló kézmozgás</br>4. az ujj alkoholos lemosása</br>5. ujjbegy megszúrása, első vércsepp letörlése, újabb vércseppképzés</br>6. vércsepp reagensre cseppentése'
},{
	question:'X.16. Mi a teendő, ha a vércukormérésnél extrém értéket mérünk?',
	answer: 'Ismétlés'
},{
	question:'X.17. Ismertesse a hematológiai automatáknál használt fotoelektromos mérési eljárás lényegét!',
	answer: '- a higított vérszuszpenzió keresztülfolyik egy sejtméret vastagságú küvettán, ami egy sötétlátóteres kondenzorhoz kapcsolódik</br>- . Minden részecske a kondenzor rése előtt elhaladva a rajta visszaverődő fény miatt felvillan</br>- ezeket a fényimpulzusokat a készülék érzékeli, elektromos impulzusokká alakítja, megszámlálja és kijelzi'
},{
	question:'X.18. Ismertesse a hematológiai automatáknál használt elektromos ellenállási mérési eljárás lényegét!',
	answer: '- Azon alapszik, hogy míg a vérsejt rossz elektromos vezető, bizonyos hígító oldatok jó vezetők</br>- elektródokal elektromos áramlást tartanak fenn a minta és egy kapilláris között'
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