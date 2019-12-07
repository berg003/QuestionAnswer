var questionAnswers = [
// Short Tests
{
	question: 'Genetikai kód',
	answer: 'Az a kulcs, amely megmutatja, hogy a nukleinsav (genetikai információ) hogyan határozza meg a fehérjék aminosav összetételét. Alapegysége a 3 nukleotidból álló triplet, mely egy aminosavat kódol.'
},
{
	question: 'Magvacska szerepe',
	answer: '- rRNS szintézise</br>-rRNS összekapcsolása a riboszómális fehérjékkel riboszóma alegységekké</br>- előkészítés a magpóruson keresztül exportra'
},
{
	question: 'Molekuláris biológia centrális dogmája',
	answer: 'Crick által megfogalmazott tétel amely szerint az egész élővilágban az információ átadás egyirányú: <abbr title="Domain Name System">DNS</abbr>  RNS  fehérje. Az újabb eredmények szerint módosított tétel: nukleinsav  fehérje, mert a nukleinsavak között mindkét irányban  lehetséges az információ átvitel. Nukleotidok felépítése:</br>-foszforsav (H3PO3)</br>-pirimidin szerves bázisok (citozin, timin, uracil)</br>-purin szerves bázisok (adenin, guanin)'
},
{
	question: 'tRNS kötőhelyei',
	answer: '-antikodon (mRNS-hez való kötődés helye)</br>-aminosavaktiváló enzim kötőhelye</br>-a riboszómához való kötődés helye</br>-CCA-triplet, az aktivált aminosavak kötőhelye'
},
{
	question: 'A-csík',
	answer: 'A harántcsíkolt izomszövet szerkezeti egységének, a sarcomernek a hosszabbik csíkját nevezzük, amit az A-filamentumok alkotnak.'
},
{
	question: 'Aktin',
	answer: 'Izomfehérje. Egy általánosan elterjedt izomfehérje az eukarióta sejtekben. Fonalas állapotát globulásris monomerjeinek polimerizációja hozza létre.'
},
{
	question: 'Allél',
	answer: 'Eltérő génváltozatok. Pl: kék szem, barna haj'
},
{
	question: 'Alternatív splicing',
	answer: 'Ennek során ugyanabból a pre-mRNS-ből különböző érett mRNS-ek képződhetnek, amelyek egymástól eltérő fehérjék szintézisét képesek irányítani.'
},
{
	question: 'Amnion üreg',
	answer: 'A hólyagcsíra sejtjeiből kialakúló egyik üreg, melyet magzatvíz tölt ki.'
},
{
	question: 'Antikodon',
	answer: 'Bázishármas, amely az mRNS bázistripletjével (kodon) komplementer, ez „olvassa le” a soron következő aminósavat.'
},
{
	question: 'Apoptózis',
	answer: 'A sejthalálnak az a formája, melyet endonukleázok, meghatározott program szerint hajtanak végre. A <abbr title="Domain Name System">DNS</abbr> feldarabolódik és a nukleoszómás szerkezet elemeire esik szét. Ez a folyamat a sejtmagban membránvédetten zajlik le.'
},
{
	question: 'Intermedier anyagcsere',
	answer: 'Az élő szervezetekben az anyagfelvétel és -leadás között lezajló átalakítási folyamatok összessége. Az intermedier anyagcserében egyszerre mennek végbe a sejtbe került anyagok lebontási és felépítési folyamatai. Iránya nagymértékben függ a táplálkozástól.'
},
{
	question: 'Ivari kromatinrög',
	answer: 'A korai embrionális fejlődés során a nőkben az egyik X kromoszóma véglegesen heterokramizálódik, inaktiválódik, majd egy kicsi, tömör kromatinszemcsét alkot. Ez a kromatinszemcse kitapad a sejtmag hártyájához, ezt nevezzük kromatinrögnek vagy Barr-testnek.'
},
{
	question: 'Barázdálódás',
	answer: 'A zigóta osztódási folyamata. Következményeként a sejtszám állandóan duplázódik. Az utódsejtek állandóan kisebbek lesznek.'
},
{
	question: 'Bazális csíkolat',
	answer: 'A vesetestecskék kanyarulatos csatornáiban reszorpciót (folyadék visszaszívást) végző sejtek bazális (alapi) részén található sejtmembrán betüremkedések, melyek növelik a felszínt.'
},
{
	question: 'Bazális membrán',
	answer: 'Hámszövetekben lévő alaphártya. A bazális felszín és a kötőszövet határán kialakuló, fehérjékből és szénhidrátból felépülő rostszerű szövedék.'
},
{
	question: 'Belső magzatburok',
	answer: 'A hólyagcsíra belső felszínéről leváló sejtek körülveszik az amnionüreget és a szikhólyagot, mintegy burokba zárják. Ez a belső magzatburok.'
},
{
	question: 'Blastulatio',
	answer: 'Morula belsejében bekövetkezik a sejtek „olvadása”, egyetlen sejtsor lesz=blastula=hólyagcsíra. A további sejtosztódás a sejtek átrendeződésével jár a blastula belsejében, megjelenik az embryo-csomó.'
},
{
	question: 'Centroszóma és a centriólumok',
	answer: 'A sejtváz mikrotubuláris rendszerének kialakításaában résztvevő sejtszervecskét nevezzük centrószámának (sejtközpontnak). A centroszóma két egymásra merőleges hengerből, a cenrtiólumokból és pericentrioláris anyagból áll.'
},
{
	question: 'Citromsavciklus',
	answer: 'A mitokondrium alapállományában zajló körfolyamat, mely szén-dioxidot és jelentős mennyiségű NADH-t termel.'
},
{
	question: 'Contergan hatás',
	answer: 'A Contergan  gyógyszer egy thalidomid teratogén szer, melyet a terhességi hányás csillapítására használták. Ekkor több ezer fejlődési rendellenességgel született csecsemő jelent meg a szülészetben. Fókakezéséget, kisszeműséget illetve végtagnélküliséget okozott a gyógyszer.'
},
{
	question: 'Crossing over',
	answer: 'A kromatidák közötti reciprok kicserélődés folyamata, ami a kapcsolt gének rekombinációját eredményezi. A meiózis I. profázisában történik, de ritkán a mitózis során is előfordul.'
},
{
	question: 'Cytotrophoblast',
	answer: 'A beágyazódás  során a trophoplast ismét differenciálódik, egy belső, köbös sejtekből álló rétegre. Ezt a réteget nevezzük cytotrophoblatnak.'
},
{
	question: 'Dendritek',
	answer: 'Az  axonnál rövidebb nyúlvány. Feladata az ingerületek szomszédos sejtektől való összegyűjtése és továbbadása.'
},
{
	question: 'Dermatom',
	answer: 'A szomita alsó részéből kialakuló kutiszlemez, amely a bőrkötőszöveteinek a telepe.'
},
{
	question: 'Diploid',
	answer: 'Kétszeres kromoszómaszerelvényű sejt, ameIy két haploid (n) genomot tartalmaz.Ivaros szaporodás esetén az egyik genom anyai, a másik apai eredetű. Jele: 2n'
},
{
	question: 'Domináns-recesszív öröklésmenet',
	answer: 'A domináns-recesszív öröklődésnek egy jellegzetes változata a kodominancia jelensége. Emberi ABO vércsoportrendszer.'
},
{
	question: 'Down-szindróma',
	answer: 'A 21-es testi kromoszóma (autoszóma) számbeli rendellenessége, triszómiája.'
},
{
	question: 'Ebert féle vonal',
	answer: 'A szívizomszövet sejtjei között található, összetett sejtkapcsoló struktúra.'
},
{
	question: 'Ektoderma',
	answer: 'Külső csíralemez, a bélcsíra képződésekor kialakuló külső sejtréteg, melyből a kültakaró, a bőr és az idegrendszer fejlődik.'
},
{
	question: 'Elasztikus rostok',
	answer: 'A lazarostos kötőszövet egyik rostfélesége, melyek  jóval vékonyabbak, mint a kollagénrostok. Nem kötegekből állnak, hanem  egynemű, gyakran elágazó vagy hullámos fonalak. Igen rugalmasak, elszakadva felcsavarodnak.'
},
{
	question: 'Elektronmikroszkóp',
	answer: 'Az optikai mikroszkóppal (vagy fénymikroszkóppal) ellentétben elektroncsóvával világítja meg a megfigyelendő tárgyat. Az elektron  sugárzás hullámhossza lényegesen kisebb a fénysugár hullámhosszánál, ami sokkal erősebb nagyítást tesz lehetővé. A legismertebb a transzmissziós elektronmikroszkóp , ami a tárgy megfigyelését elektronsugárral való átvilágításban végzi, és a pásztázó elektronmikroszkóp , ami a visszavert elektronok segítségével állít elő képet a tárgy felületéről.'
},
{
	question: 'Elektrotranszportlánc',
	answer: 'Biokémiai redukciós-oxidációs reakciók egymást követő sora, amelyben elektronátmenet történik hordozók sorával. Elektrontranszportlánc, amelyet légzési láncnak is neveznek, képezi az aerob légzés utolsó lépését. A molekuláris oxigénnek adja át az elektronokat és a hidrogénatomokat a Krebs-ciklusból, víz kialakításával.'
},
{
	question: 'Embrioblast',
	answer: 'A hólyagcsíra felszíni sejtjeinek egy része.'
},
{
	question: 'Embriócsomó',
	answer: 'A barázdálódás végén keletkező hólyag (blastula) egyik csúcsán keletkező sejthalmaz, melyből az embrió teste fog kifejlődni.'
},
{
	question: 'Endoderma',
	answer: 'Belső csíralemez, melyből a zsigerek telepei alakulnak ki.'
},
{
	question: 'Exon',
	answer: 'A több darabban kódolt gének 1-1 kifejeződő szakasza, melyeket egymástól közbeékelt <abbr title="Domain Name System">DNS</abbr> szakaszok, intronok választanak el.'
},
{
	question: 'Uniformitás',
	answer: 'Homozigóta szülők kereszteződéséből származó utódok minden tagja genotípusát és fenotípusát tekintva egyforma.'
},
{
	question: 'Szegregáció',
	answer: 'Az F1 nemzedék tagjainak egymással való kereszteződéséből származó második utódnemzedék (F2) tagjai között bizonyos arányban újra felbukkannak az eredeti szülői tulajdonságok.'
},
{
	question: 'Fakultatív heterokromatin',
	answer: 'A heterokromatin funkcionálisan inaktív. Amennyiben csak a sejt adott állapotában nem működik, és később újra indulhat rajta az RNS-szintézis, akkor beszélünk fakultatív heterokromatinról.'
},
{
	question: 'Fáziskontraszt mikroszkóp',
	answer: 'Egy speciális kondenzorból és egy úgynevezett fáziskontraszt-objektívből áll, ezekkel kell a közönséges mikroszkópot kiegészíteni. A fáziskontraszt-eljárással kapott kép igen kontrasztos, és ezért különösen jól használható szövettenyészetben az alaphoz letapadt, elvékonyodott sejtek, valamint nagyon vékony (0,1-1 μm), festetlen metszetek vizsgálatára.'
},
{
	question: 'Fehérjék elsődleges szerkezete',
	answer: 'A 20 féle aminósav lehetséges sorrendjét jelenti, ami természetesen genetikailag kódolt, szigorúan meghatározott.'
},
{
	question: 'Fehérjék másodlagos szerkezete',
	answer: 'A másodlagos vagy szekunder szerkezeten a peptidgerinc hidrogénkötések által stabilizált lokális (legalább négy aminosavra kiterjedő) rendezettségét értjük. E szerkezeti elemek legfőbb csoportjai a hélixek, a redők, a hurkok és a kanyarok; leggyakoribb az α-hélix, és a β-redő.'
},
{
	question: 'Fehérjék harmadlagos szerkezete',
	answer: 'A polipeptidlánc térbeli elrendeződése, feltekeredése, felcsavarodása, összetekeredése képezi a fehérjék harmadlagos szerkezetét. Így jönnek létre a globuláris fehérjék.'
},
{
	question: 'Fehérjék negyedleges szerkezete',
	answer: 'Bizonyos fehérjéket több peptidlánc alkot, melyeket ez esetben alegységeknek nevezünk. A peptidláncok lehetnek azonosak vagy eltérőek, számuk általában nem haladja meg a nyolcat, de ismertek fontos kivételek: pl. egyes vírusok kapszidja hatvan polipeptidből áll.'
},
{
	question: 'A fehérjeszintézis két szintere',
	answer: 'Sima, és durva felszínű endoplazmatikus retikulum.'
},
{
	question: 'Féldezoszóma',
	answer: 'A hemidezmoszómák (fél dezmoszómák) a folt dezmoszómákhoz hasonló struktúrák, amelyek segítségével a sejtek az extracelluláris mátrix komponenseihez kötôdnek.	A hemidezmoszómákat a sejtek bazális térfelén találjuk, ahol feladatuk a bazális laminához való rögzítés.'
},
{
	question: 'Fenotípus',
	answer: 'Az allélek által kialakított látható, mérhető, egyéb módon kifejezésre juttató, külső jellegek, amely a genotípus és a környezeti tényezők kölcsönhatásának eredményeként jön létre.'
},
{
	question: 'Fluorescens mikroszkóp',
	answer: 'A fluoreszcens mikroszkópban a fényforrás maga a vizsgált minta. A fluoreszkáló anyagok ugyanis fénnyel történő gerjesztés hatására  fotonokat bocsátanak ki.'
},
{
	question: 'Foltdezmoszóma',
	answer: 'A leggyakoribb sejtkapcsoló struktúra  a patenthoz hasonlítható macula adherens, szintén lehorgonyozó kapcsolódás. Afoltdezmoszóma területén a szomszédos citoplazmákban egy fehérjékből képződő korong plakk letesít kapcsolatot a transzmembrán fehérjék és a sejtváz intermedier filamentumai között.'
},
{
	question: 'Foszfatidok',
	answer: 'A lipidek csoportjába tartoznak. Molekuláit a glicerin, zsírsav, és foszforsav építi fel. Legegyszerűbb képviselőjük a foszfatidsav. Amfipatikus jellegűek, ez a kettős jelleg a zsírsavak és a foszforsav jelenlétéből adódik: a zsírsavak hidrofób, apoláris tulajdonságúak, ellenben a foszforsav hidrofil éspoláris.'
},
{
	question: 'Gasztruláció',
	answer: 'Az embrió kifejlődése, ahol a barázdálódáskor létrejött sejtek végleges helyükre kerülnek, kialakulnak a csíralemezek, amelyekből megindul a szervképződés.'
},
{
	question: 'Gélelektroforézis',
	answer: 'A gélelektroforézis alapelve, hogy a töltéssel rendelkező molekulák elektromos térben, össztöltésüknek megfelelően, az ellentétes töltésű elektróda felé vándorolnak. A vándorlás sebessége (v) függ a molekula töltésétől (z), tömegétől és alakjától (f) továbbá az elektromos térerőtől (E)'
},
{
	question: 'Gén',
	answer: 'Egyes tulajdonságok öröklődésének egysége.'
},
{
	question: 'Génamplifikáció',
	answer: 'Egyes gének differenciált replikációja több száz vagy ezer példányban.'
},
{
	question: 'Genetikai nem',
	answer: 'A diploid sejtek ivari kromoszóma  összetételét jelenti. Ennek alapján a nők testi sejtjeiben XX, a férfiakéban pedig XY ivari kromoszómák találhatóak.'
},
{
	question: 'Genotípus',
	answer: 'Egy sejt vagy szervezet genetikai információjának összessége.'
},
{
	question: 'Glikokalix',
	answer: 'Az állati sejtek felszínét borító szénhidrátréteg, melynek szénhidrát molekulái a membránfehérjékhez (glikoprotein) és a membránlipidekhez (glikolipidek) kapcsolódnak.'
},
{
	question: 'Glikolízis',
	answer: 'A biológiai oxidáció első szakasza, melyben a glükóz bontása következik be három szénatomos egységekre a sejtplazmában.'
},
{
	question: 'Gonadális nem',
	answer: 'Az embrionális ivarszerv-kezdeményből kialakuló , az ivaréretté válás után érett ivarsejteket termelő páros herék, ill. petefészkek jelenlétét és működését jelenti.'
},
{
	question: 'Graaf tüsző szerkezete',
	answer: '- Theca externa</br>-Theca interna</br>-membrana granulosa</br>-cavum folliculi</br>-cumulus oophorus</br>-corona radiata</br>-zona pllucida</br>-petesejt'
},
{
	question: 'Haploid',
	answer: 'Olyan sejt vagy szervezet, amely a diploidok ivarsejtjeire jellemző, egyszeres kromoszóma-készlettel rendelkezik. Jelölése: n'
},
{
	question: 'Helikáz',
	answer: 'Enzim, amely a <abbr title="Domain Name System">DNS</abbr>-szintézis első lépését az eredeti molekula kettős spiráljának felbomlását, despiralizációját végzi.'
},
{
	question: 'Heterozigóta',
	answer: 'Olyan egyed, mely egy vagy több génre nézve eltérő allélokat hordoz.'
},
{
	question: 'Hólyagcsíra',
	answer: 'A barázdálódás eredménye a szedercsíra. Ezt követi a csíraállapotok kialakulásának folyamata, majd a szöveti-szervi differenciálódás. E folyamatok során a szedercsírából előbb hólyagcsíra.'
},
{
	question: 'Homológ kromoszómák',
	answer: 'Apai és anyai eredetű kromoszómák, amelyek azonos lókuszokat tartalmaznak, de gyakran különböző alléleket hordoznak. A meiozis során párokat alkotnak.'
},
{
	question: 'Homozigóta',
	answer: 'Adott génnek minden lókuszán (diploidban 2, tetraploidban 4, stb.) azonos génváltozatot (allélt) hordozó egyed.'
},
{
	question: 'Humán Genom Projekt',
	answer: 'Egy nagyszabású projekt volt 1996-tól 2006 májusáig, mely feltárta a teljes emberi genomot egészen a nukleotidok (bázispárok) szintjéig, és azonosította a benne található összes gént. Az emberi genom a petesejt vagy hímivarsejt teljes genetikai tartalma. A humán genom a Homo sapiens genomja. 23 kromoszómapárból és kb. 3 milliárd <abbr title="Domain Name System">DNS</abbr> bázispárból áll.'
},
{
	question: 'I – csík',
	answer: 'A harántcsíkolt izomszövet szerkezeti egységének, a sarcomernek a határát a Z-lemez alkotja, amely mellett mindkét oldalon I-filamentumokból álló egy-egy I-csík található.'
},
{
	question: 'Interdigitáció',
	answer: 'A sejtek kesztyűujjszerű egymásba nyomulása szintén fizikailag rögzíti egymáshoz a sejteket. Gyakori rögzítési mód a hámsejtek között.'
},
{
	question: 'Interfázis',
	answer: 'A sejtciklus két osztódás közötti szakasza, amely három részből áll: G1, S és G2. Ekkor a kromoszómák egy lazább szerkezetet vesznek fel.'
},
{
	question: 'Intermedier filamentumok',
	answer: 'Átmeneti filmentumok, melyke 8-12 nanométer átmérőjű rostok a citoplazmában.  Nem mozognak, hanem erős mechanikai vázat biztosítanak a sejtek számára.'
},
{
	question: 'Intermedier öröklésmenet',
	answer: 'A nem teljes értékű domináns allél jelenléte az öröklésmenetben a két fenotípus köztes formáját, intermedier öröklésmenetet idéz elő. Például csodatölcsér, rövidszarvú marha.'
},
{
	question: 'Intron',
	answer: 'Génsivatag. Egy gén olyan <abbr title="Domain Name System">DNS</abbr>-szakasza, mely a gén által termeltetett fehérje egy részét sem kódolja, és amely a génről átírt mRNS-ből, még a sejtmagba szállítás előtt kivágódik (splicing). Az intronok nagyrészt eukarióta sejtekben találhatók.'
},
{
	question: 'Invazív prenetális genetikai vizsgálatok',
	answer: 'Olyan eljárások, módszerek melyek segítségével a magzat testéből nyert szövetmintát, sejtmintát elemezve állapíthatók meg a kórképek. Idetartózó eljárások: fötoszkópia, amniocentézis, korionboholy mintavétel.'
},
{
	question: 'Riboszóma',
	answer: 'Citoplazmában nagy számban (10-30 ezer) jelenlévő ribonukleoprotein komplex, mely a fehérjeszintézis helye. Két alegységes sejtalkotó. A kisebb és a nagyobb alegységet Mg2+ kapcsolja össze. Riboszómális RNS-t (rRNS) és fehérjéket tartalmaz. Feladata a mRNS bázishármasainak leolvasása és ezáltal a fehérjeszintézis irányítása.'
},
{
	question: 'Kariogram',
	answer: 'Egy sejt nagyság szerint és a centromera helyzete alapján, egyezményen alapuló, rendezett és párokba állított kromoszómáit kariogramnak nevezzük.'
},
{
	question: 'Karotinoidok',
	answer: 'Konjugált kettős kötést tartalmazó, hosszú, nyílt láncú szénvegyületek. Karotinoid jellegű vegyület pl. likopin, xantofill, karotin, retinál.'
},
{
	question: 'Katabolitikus folyamatok',
	answer: 'Lebontó folyamatok. Lényege a szerves anyagok elégetése, eloxidálása, végső soron széndioxiddá és vízzé alakítása. Energiafelszabadulással járnak.'
},
{
	question: 'Klinefelter sy',
	answer: 'Férfi fenotípussal járó kromoszómamutáció. A fejletlen herék kevés hím nemi hormont termelnek. A spermiumtermelés kóros, vagy egyáltalán nincs. A külső nemi szervek fejletlenek. A másodlagos nemi jellegek nem alakulnak ki, ezért a beteg gyakran nőies alkatú (gyér szőrzet, lekerekített formák). Néha emlőnövekedés is megfigyelhető. Szellemileg épek. A kromoszómaaberráció oka többségében a petesejtben történt meiotikus non-diszjunkció. A szindróma előfordulási gyakorisága nő az anyai életkor emelkedésével.'
},
{
	question: 'Kodominancia',
	answer: 'Két domináns allél elhelyezkedhet a <abbr title="Domain Name System">DNS</abbr>-molekula azonos lókuszán és hatásukat egyforma mértékben fejthetik ki a fenotípusban. Ez a kodominancia jelensége. Ez jellemző az AB0 vércsoportrendszer kialakulására.'
},
{
	question: 'Kodon',
	answer: 'mRNS, a <abbr title="Domain Name System">DNS</abbr> információt tároló szakaszának komplementere, a tárolt információ továbbadására szolgál.    (<abbr title="Domain Name System">DNS</abbr> info= Kód,  RNS info=kodon)'
},
{
	question: 'Kódszótár',
	answer: 'mRNS trippletjeit tartalmazza, és azt, hogy ezek milyen aminosavakat jelentenek.'
},
{
	question: 'Kollagén rostok',
	answer: 'Aránylag vastagok, nagy a szakító és a húzási szilárdságuk, nem nyújthatóak.'
},
{
	question: 'Komplamentaritás a <abbr title="Domain Name System">DNS</abbr> kettős hélixében',
	answer: 'A <abbr title="Domain Name System">DNS</abbr> 2 szála egymással párhuzamosan, de fordítottan fut le. Így a 2 szál egymás kiegészítője (komplementere) lesz.'
},
{
	question: 'Konstitutív heterokromatin',
	answer: 'Erősen felcsavarodott, szuperspiralizált, <abbr title="Domain Name System">DNS</abbr>-t tartalmazó kromatin terület, mely RNS szintézisre végérvényesen képtelen.'
},
{
	question: 'Kortikális reakció',
	answer: 'Ennek során az ER-ból kalciumionok szabadulnak fel, ami a zona pellucida megkeményedését, szerkezetének megváltozását okozza. Így nem enged be több spermiumot a petesejtbe. Ezáltal elkerülhető az, hogy egy petesejtet több spermium termékenyítsen meg.'
},
{
	question: 'Kromoszómamutáció',
	answer: 'A kromoszóma egyes részei mutálódnak. Ez lehet szerkezeti változás, például a kromoszómák törlődése (deléció), kicserélődése (transzlokáció), megduplázódása (duplikáció) stb. Másrészt lehet számbeli, melyen belül megkülönböztetünk poliploidiát (kromoszómagarnitúra a normális egész számú többszöröse, például 6n-es banán) és aneuploidiát (csak egy kromoszómánál van eltérés, például embernél 21. kromoszómából 3 van). Ezek a mutációk szembetűnő változásokat okoznak, és szaporodásra képtelené teszik az egyedet, hiszen a más kromoszómaszámú társai ivarsejtjével az ő ivarsejtje nem képes zigótát képezni.'
},
{
	question: 'Külső magzatburok',
	answer: 'A chorion, a külső magzatburok már igen korán, az implantációtól kezdve azonosítható, sejtjei szövetoldó enzimeket termelnek, melynek következtében az anyai szövetbe behatolnak kis boholyszerű nyúlványok formájában. (chorionbolyhok)'
},
{
	question: 'Leydig féle intersticiális sejtek',
	answer: 'Ezek a herében találhatóak, a tesztoszteront termelik.'
},
{
	question: 'Ligáz',
	answer: '<abbr title="Domain Name System">DNS</abbr> szintézis során. az Okazaki-fragmentumok összekapcsolását folyamatos lánccá ez az enzim végzi.'
},
{
	question: 'Lipidek',
	answer: 'Vízben nem, vagy nagyon rosszul oldódó, tehát hidrofób, apoláros jellegű molekulák. Fajtái: trigliceridek, foszfatidok, szteroidok, karotinoidok.'
},
{
	question: 'Lókusz',
	answer: 'A riboszómák felületén lévő „ragadós” terület, mely képes a fehérjeszintézis résztvevőinek megkötésére.'
},
{
	question: 'Másodlagos lizoszóma',
	answer: 'Szekunder lizoszóma. Úgy jönnek létre a primer lizoszómákból, hogy azok lebontandó anyagot tartalmazó vezikulumokkal egyesülnek. Nagyobbak, szabálytalan alakúak, és bennük bontó folyamatok zajlanak.'
},
{
	question: 'Mesenchima',
	answer: 'Embrionális kötőszövet. Sejtjei csillag alakúak, sejtközötti állománya kocsonyás, gyorsan osztódó szövetféleség. Később ebből differenciálódnak a kötő- és támasztószöveteink nagy része.'
},
{
	question: 'Mezoderma',
	answer: 'Középső csíralemez (ektoderma és az endoderma között)'
},
{
	question: 'Mikrobolyhok',
	answer: 'A tápanyagfelszívás szolgálatában álló sejtfelszíni módosulások, ujjszerű plazmanyúlványok. A vékonybélhámsejteknek a bél lumene felé eső felszínén alkotnak egy összefüggő réteget, melyet kutikulának hívnak.'
},
{
	question: 'Mikrofilamentumok',
	answer: 'Sejtvázat alkotó 7 nm átmérőjű fonalak, melyek kémiailag aktinból állnak, főként a plazmamembrán alatti területen találhatók.'
},
{
	question: 'Mikrotubulusok',
	answer: 'Sejtvázat alkotó 25 nm átmérőjű üreges csövecskék. Fontos szerepe van a sejt alakjának meghatározásában, és mozgásainak irányításában. Többnyire dinamikus képletek (pl osztódási orsó),  de részei lehetnek stabil struktúráknak is (csillók, ostorok).'
},
{
	question: 'Miozin',
	answer: 'Fehérje, a vázizmot alkotja, vastag mikrofilamentum.'
},
{
	question: 'Rekombináns vektor',
	answer: 'Idegen gént is tartalmazó genetika elem.'
},
{
	question: 'Myotom',
	answer: 'A szomiták velőcső felé eső felszínén szelvényhatártól szelvényhatárig érő sejtek alakulnak ki, ezek a törzs izmainak ősei.'
},
{
	question: 'Neuruláció',
	answer: 'Az idegrendszer fejlődése. Az ektodermából indul az embrionális élet 2.-3. hetében.'
},
{
	question: 'Neutrális zsírok(trigliceridek)',
	answer: 'A három szénatomos alkohol molekulához három zsírsav-molekula kapcsolódik észter kötéssel. Szerepe nagyon sokrétű pl. tartalék táőanyag, zsíroldékony vitaminok oldószerei, mechanikai védelem, hőszigetelés, másodlagos nemi jellegek kialakítása stb.'
},
{
	question: 'Oxiszómiák- ATP szintetáz',
	answer: 'A mitokondrium belső membránjában lévő hatalmas fehérjekomplex. 2 egységből áll: F0 – komplex: egy transzmembrán protoncsatorna, melyen keresztül ki tud egyenlítődni a protongrádiens. F1 –komplex: a protonáramlás hatására ATP-t szintetizál ADP-ből és fosztátból.'
},
{
	question: 'Őscsigolyák: (szomita)',
	answer: 'Az embrió mezodermájának a gerinchúr 2 oldalán elhelyezkedő része az embrió hossztengelyére merőlegesen kezd szelvényeződni, ezek az ősszelvények, őscsigolyák. 42-44 db.'
},
{
	question: 'Övdezmoszóma',
	answer: 'Lehorgonyzó sejtkapcsoló striktúra. A kapcsolatot létesítő transzmembrán fehérjéhez a citoplazmatikus oldalon a sejtváz mikrofilamentumai kapcsolódnak. Az övdezmoszóma szerkezete a fehérjék jellegzetes elhelyezkedése miatt leginkább egy cipzárhoz hasonlít.'
},
{
	question: 'PCR (polimerase chain reaction-polimeráz láncreakció)',
	answer: 'Kary Mullis 1985-ben <abbr title="Domain Name System">DNS</abbr> sokszorozó módszert dolgozott ki, mellyel rövid <abbr title="Domain Name System">DNS</abbr> szakaszok néhány óra alatt láncreakciószerűen milliós példányszámban termeltethetők. A módszer lényegében az in vivo <abbr title="Domain Name System">DNS</abbr>-szintézist imitálja egy kémcsőben. Az elegyhez a replikációnál megismert résztvevőket hozzáadva , a hőmérséklet ciklikus változásával elérhető a láncreakciószerű <abbr title="Domain Name System">DNS</abbr>- polimerizáció. Ezért nevezik a módszert polimeráz láncreakciónak.'
},
{
	question: 'Peptidkötés',
	answer: ' tk 34.o kép!'
},
{
	question: 'Perikarion',
	answer: 'Idegsejt sejttestje, mely tartalmazza a nagysejtmagot, kiterjedt endoplazmatikus retikulumot és sok mitokondriumot. Ezenkívül megtalálhatóak benne a citoszkeletális elemek is, a mikrotubulusok és a neurofilamentumok. Sok esetben lizoszómákat és zárványokat, különböző pigmenteket is találunk.'
},
{
	question: 'Peroxiszóma',
	answer: 'Az oxigén káros hatásával szemben hatékony védekező rendszerre van szüksége az eukarióta sejtnek. Ennek fontos eleme a peroxiszóma. A mitokondriumhoz hasonlóan endoszimbiózis útján vált sejtalkotóvá. Egyszeres membrán határolta, gömbölyded sejtalkotók. Nagyszámú enzimet tartalmaznak Antioxidáns enzimjei közül a legfontosabbak: a szuperoxid dizmutázok, melyek segítségével hidrogénperoxidot állítanak elő. Ez még mindig veszélyes, ezt kataláz enzimjei bontják ártalmatlan vízmolekulává.'
},
{
	question: 'Placenta',
	answer: '(=méhlepény) A magzatburkok és a méhnyálkahártya által közösen felépített képződmény. Az anya és a magzat közötti anyagcserekapcsolatot biztosítja a köldökzsinór segítségével. Magzat felé eső oldalát amnionhám borítja. Fő magzati zárórétegét a karionlemez képezi. A placenta anyai felszíne a méhnyálkahártyából alakul ki. A magzati és anyai részt egymáshoz a tapadó korionbolyhok rögzítik.'
},
{
	question: 'Polimorfizmus',
	answer: 'Adott gén-lókuszban többféle allélforma létezése'
},
{
	question: 'Primer lizoszóma',
	answer: 'A lizoszómák a sejten belüli emésztés organellumai. A primer lizoszómák a Golgi-apparátusról lefűződő gömbölyded, egyszeres membránnal határolt vezikulumok. Még nem tartalmaznak lebontandó anyagot, csak bontó enzimeket. Mintegy 50 féle enzimet tartalmaznak, összefoglaló néven ezeket savas hidrolázoknak nevezzeket, mert savas közegben képesek a leghatékonyabban katalizálni. Ilyenek pl. a proteázok, foszfatázok, lipázok, nukleázok.'
},
{
	question: 'Primitív csík',
	answer: '(ősi csík); a madarak és emlősök embrióin a velőbélcsatorna (canalis neurentericus) mögött keletkező csíkalakú sejttömeg, mely az embrió meghosszabbodásakor fokozatosan felhasználódik.'
},
{
	question: 'Rekombináció a meiózis során',
	answer: 'Rekombináció a kromoszómák homológ szakaszai között történhet „törés” és „újraegyesülés” révén.'
},
{
	question: 'Rekombináns vektor',
	answer: 'Az idegen gént is tartalmazó genetikai elem. A vektor képes plazmidként bejutni a baktériumsejtbe és ott replikálódva megsokszorozni magát, illetve átkerülni az utódsejtekbe is.'
},
{
	question: 'Réskapcsolat',
	answer: 'Kommunikáló sejtkapcsoló struktúra. A két sejthártya nem simul össze szorosan, hanem köztük egy keskeny rés marad. A két sejthártyát, és a közöttük lévő rést is áthidaló, vízzel telt csatornák kötik össze a sejtek citoplazmáját. A réskapcsolat csatornáin átjutó anyagok segítenek összehangolni a két sejt működését.'
},
{
	question: 'Retikuláris rostok',
	answer: '(rácsrostok) Kötőszövetek sejtközötti állományában található. A kollagénrostoknál vékonyabbak.  Hálózatokat alkotnak, nagyfokú a rugalmasságuk.'
},
{
	question: 'Reverz transzkriptáz',
	answer: 'A retrovírusokban található egyedülálló enzim, mely arra képes, hogy a vírus genetikai információit hordozó RNS-éről a gazdasejtben <abbr title="Domain Name System">DNS</abbr> molekulát másoljon.'
},
{
	question: 'RFLP analízis',
	answer: 'Restrikciós fragmenthosszúság polimorfizmus. Ez a vizsgálat bizonyos térképezést tesz lehetővé, a restrikciós enzimek hasítási helyeinek feltérképezését a <abbr title="Domain Name System">DNS</abbr>-ben.  Adott restrikciós enzim hasítása mindig egy adott szekvenciánál történhet csak meg. A humán <abbr title="Domain Name System">DNS</abbr>-darabok az egyes emberekben 200-500 bázispáronként, mutációk révén, eltérnek egymástól. Ezen mutációk következtében restrikciós helyek tűnnek el, vagy jelennek meg, így a lehetséges hasítási helyek mintázata egyénenként változó. A vizsgálatok során a <abbr title="Domain Name System">DNS</abbr>-t restrikciós enzimekkel rövidebb szakaszokra vágták , majd a <abbr title="Domain Name System">DNS</abbr> láncokat hosszúságuk szerint különválasztják gélelektroforézis segítségével. A fragmentumok hosszúságából a hasítási helyek egymástól való távolságára lehet következtetni.'
},
{
	question: 'Riboszóma',
	answer: 'Ezen találkoznak a fehérjeszintézis résztvevői. Felépítésében fehérjék és rRNS vesz részt. Ezek 2 alegységgé állnak össze: 40S a kisebbik, 60S a nagyobbik alegység. A két alegység csak akkor kapcsolódik egymáshoz amikor fehérjeszintézis kezdődik a riboszómán. Így jön létre a 80S riboszóma. A kisebbik alegységen találunk 2 fontos ragadós területet (lókuszt): az A- és a P-lókuszt, melyek alkalmasak a fehérjeszintézis egyéb résztvevőinek megkötésére. A riboszómák elhelyezkedhetnek szabadon a citoszolban, vagy kötődhetnek a DER felszínéhez.'
},
{
	question: 'RNS típusok',
	answer: '-Messenger RNS (mRNS) – A <abbr title="Domain Name System">DNS</abbr> megfelelő információt tároló szakaszáról készült komplementer másolat, ami ezáltal a fehérjeszintézis kodonja.</br>-Transzfer RNS (tRNS) – antikodont tartalmazó RNS-ek. Aminosavakat szállítja a fehérjeszintézis helyére.</br>-Riboszomális RNS (rRNS): A fehérjeszintézis a riboszómákon történik. A riboszóma fehérjéből, és rRNS-ből áll.'
},
{
	question: 'Sclerotom',
	answer: 'A szomita mellső felén alakulnak ki. Ezek a későbbi csigolyák telepei.'
},
{
	question: 'Sertoli-féle dajkasejtek',
	answer: 'A spermatidák érése itt történik. Itt alakul ki az érett spermiumra jellemző ék alakú fej, melyet az acrosoma sapka fed, illetve itt alakul ki az aktív mozgásukat lehetővé tevő ostoruk is. Az érett spermiumok elhagyják a Sertoli-sejteket.'
},
{
	question: 'Singel-Nicolson féle folyékony mozaik membrán modell',
	answer: 'Szerinte a citomembránt folyékony, kétdimenziós lipid kettősréteg alkotja, melybe mozaikszerűen fehérjék ágyazódnak be.'
},
{
	question: 'Sötét látóteres mikroszkóp',
	answer: 'Működése elve: a Tyndall jelenségen alapul. Így az oldal megvilágítás hatására, a vizsgált anyag fekete alapon, fehéren csillog. Alkalmazási területe: a biológiában a kolloidok, a mikrobiológiában a treponémák vizsgálatára használják.'
},
{
	question: 'Supermasculinismus',
	answer: 'Az ivari kromoszóma számbeli rendellenessége. Dupla Y- szindróma. Kromoszómaképe: 47, XYY. Az egyedek normális férfi fenotípusúak, esetenként erőteljes testalkat figyelhető meg. Általában termékenyek. A szindróma oka az, hogy a spermium második meiotikus osztódásakor a non-diszjunkció miatta spermium 2darab Y kromoszómát tartalmaz. Az Y-szindróma kialakulása független az apa életkorától.'
},
{
	question: 'Syntitiotrophoblast',
	answer: 'Az embionális élet 2. hónapjának kezdetére a trofoblasztok a külső magzatburok bolyhait alakítják ki. A bolyhok sejtrétege a syntitiotrophoblast. Ennek osztódásai során kisebb-nagyobb, vérrel telt üregeket zárnak a sejtjeik közé.'
},
{
	question: 'Szabad kombinálódás szabálya',
	answer: 'Mendel 3. törvénye. Két tulajdonság párban (pl. a fültartása és az agresszivitás) eltérő kutyákat keresztezve az első utódnemzedékben érvényesül az uniformitás elve, de a második generációban olyan tulajdonságok is megjelennek egyes egyedekben, amelyek a szülőkben nem voltak láthatók.'
},
{
	question: 'Szarkolemma',
	answer: 'Harántcsíkolt izomszövet sejtmembránja.'
},
{
	question: 'Szarkomer',
	answer: 'A harántcsíkolt izom működési egysége. A miofibrillum két intermedier filamentumokból felépülő Z-vonala közé eső része.'
},
{
	question: 'Szarkoplazma',
	answer: 'Harántcsíkolt izomszövet sejtjeinek plazmája.'
},
{
	question: 'Szarkoplazmatikus retikulum',
	answer: 'A harántcsíkolt izomrostban a nagy mennyiségű és rendezettebb formájú SER, a megkülönböztető szarkoplazmatikus retikulum nevet viseli.'
},
{
	question: 'Szedercsíra',
	answer: 'A megtermékenytített petesejt barázálódásának végeredménye a morula (szedercsíra) létrejötte.'
},
{
	question: 'Szekunder lizoszóma',
	answer: 'Nagyobbak a primer lizoszómáknál, szabálytalan alakúak, és bennük lebontó folyamatok zajlanak. Emésztőenzimeket, és a lebontandó anyagot is tartalmazzák.'
},
{
	question: 'Szinapszis',
	answer: 'Az idegsejtek közötti, illetve idegsejt és egyéb sejt közötti funkcionális kapcsolatot nevezzük szinapszisnak.'
},
{
	question: 'Szomiták',
	answer: 'Az embrió mezodermájának a gerinchúr 2 oldalán elhelyezkedő része az embrió hossztengelyére merőlegesen kezd szelvényeződni, ezek az ősszelvények, őscsigolyák. 42-44 db.'
},
{
	question: 'Szteroidok',
	answer: 'A molekula alapja a gyűrűs szerkezetű szteránváz. A szteroidokhoz tartozik többek között az eukarióta sejtmembránok stabilitásáért felelős koleszterin és a máj által termelt epesav is. A D-vitamin, az ivarmirigyek és mellékvesekéreg által termelt nemi hormonok, valamint a prosztaglandinok is szteránvázas molekulák.'
},
{
	question: 'Szubletális gén',
	answer: 'Vannak olyan gének, melyek egyes alláljai olyan elváltozásokat idéznek elő, amelyek csökkentik az életben maradás esélyét.'
},
{
	question: 'Superfeminizmus',
	answer: 'triplo-X-szindróma. Az ivari kromoszóma számbeli rendellenessége. A betegek szabályos, vagy fejletlen külső és belső nemi szervekkel rendelkeznek. A rendellenessék oka lehet akár a spermium, akár a petesejt meiotikus non-diszjunkciója.'
},
{
	question: 'Tercier lizoszóma',
	answer: 'Az enzimek által már megemésztett anyagok maradékai. találhatók bennük.'
},
{
	question: 'Terminális oxidáció',
	answer: 'A glükóz lebontásának utolsó fő fázisa. Ennek során a NADH és a FADH2 oxidációjából származó elektronok a légzési lánc komplexein futnak végig. Az elektrontranszportlánc végső elektronfelvevője a légzésből származó O2, mely vízzé alakul. A légzési lánc komplexein végighaladva az elektronok energiája csökken, miközben a felszabaduló energia arra fordítódik, hogy protonok pumpálódjanak az intermembrán térbe.'
},
{
	question: 'Transzkripció',
	answer: '(RNS-szintézis) Valamennyi RNS a <abbr title="Domain Name System">DNS</abbr>-ről íródik át, vagyis a <abbr title="Domain Name System">DNS</abbr> bázissorrendje alapján szintetizálódik. A <abbr title="Domain Name System">DNS</abbr> templáton végrehajtott RNS szintézis a transzkripció.'
},
{
	question: 'Transzláció',
	answer: '(fehérjeszintézis) A folyamat résztvevői: 1) riboszóma-ennek felszínén találkoznak a fehérjeszintézis egyéb résztvevői. 2) Kód és antikodon (<abbr title="Domain Name System">DNS</abbr> és mRNS) A <abbr title="Domain Name System">DNS</abbr> bázissorrendjébe rögzített genetikai információ RNS-be írodik át. Ezt az információt az mRNS  viszi ki a riboszómákhoz. 3) Antikodon ( tRNS): aminosavakat szállítja a fehérjeszintézis helyére.  A transzláció lépései: iniciációs szakasz, elongációs fázis, terminációs fázis. (részletesebben tk. 78.o)'
},
{
	question: 'Trophoblast',
	answer: 'Az embriót körbefogó vékony külső ectoderma réteg ami a megtermékenyített petesejtet a méh falához csatolja és felszívja a tápanyagokat.'
},
{
	question: 'Turner-sy',
	answer: 'Az X kromoszóma monoszómiája. Kromoszómaképe: 45, X.  A beteg anyakönyvi neme: nő. Belső nemi szervük jellegzetes ún. csíkgonád. A külső nemi szervek fejletlenek, az alacsony ösztrogénszint miatt. A másodlagos nemi jellegek nem kifejezettek. Értelmi képességük átlagos. A betegség az esetek több mint 2/3 részében a spermium képződésekor bekövetkezett meiotikus non-diszjunkció eredménye.   A szindróma tünetei: Magzati korban: nyaki ödéma. Újszülött korban: nyak hátsó bőre laza. Lábháti ödéma. Serdülőkorban: rövid nyak, nyaki bőrredő, nyakba lenőtt haj, hordó alakú mellkas, kifelé forduló könyök.'
},
{
	question: 'Velőcső',
	answer: 'A gerinchúrból kiinduló indukciós hatásokra az azt borító ektoderma intenzív osztódásba kezd, megvastagszik és egy hosszanti vályúban besüpped. Így kialakul a velőlemez, melynek két szélén emelkedik ki a velősánc ami felül összezárulva velőcsövet képez. A velőcsőből fejlődik majd az idegrendszer nagyobbik fele.'
},
{
	question: 'Wharton-féle kocsonya',
	answer: 'Érett, embrionális kötőszövet, a köldökzsinór állományában található meg. A jelentő mennyiségű sejtközötti állományban kollagén rostokat találunk.'
},
{
	question: 'Záróléc',
	answer: 'Lezáró sejtkapcsoló struktúra. Jellemzően hámsejtek között találunk ilyen kapcsolatot. A szomszédos sejtek membránjainak távolsága nagyon kicsi és a kölcsönösen egymásba hurkolódó transzmembrán fehérjék mintegy összevarrják a két sejtet.'
},
{
	question: 'Zona pellucida',
	answer: 'A petesejtet majd a zygotát körülvevő burok.'
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