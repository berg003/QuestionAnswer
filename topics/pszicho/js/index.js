var questionAnswers = [
// Teszt
{
	question:'Szangvinikus vérmérséklet',
	answer: '- Testnedve a vér, eleme a levegő</br>- Érzelmi reakciói gyorsan, könnyen keletkeznek, erősek, de hamar lecsillapodnak</br>-  (szalmaláng-típus) Kedélyes, barátságos, közlékeny emberek, árad belőlük az életkedv</br>- Egészséges arcszín, gyors mozgás és felfogás jellemzi őket'
},{
	question:'Kolerikus vérmérséklet',
	answer:'- testnedve a sárga epe, eleme a tűz</br>- Érzelmi reakciói könnyen felkeltődnek, erősek, sokáig tartanak, így erős indulatai gyakran elragadják</br>- Határozott testtartás, nyílt tekintet, sárgás arcbőr jellemzi őket</br>- Egész megjelenésük tetterőt fejez ki.'
},{
	question:'Melankolikus vérmérséklet',
	answer:'- Testnedve a fekete epe, eleme a föld</br>- Érzelmi reakciói lassan és nehezen keltődnek fel, tartósak és nagy erősségig fokozódnak</br>- Főleg a bánat, a szomorúság, a levertség érzése tartós nála</br>- Nehezen dönt arckifejezése gondterhelt, külseje törékeny'
},{
	question:'Flegmatikus vérmérséklet',
	answer:'Testnedve a nyálka, eleme a víz</br>- Érzelmi reakciói nehezen, lassan jönnek létre, gyengék, és nem tartósak</br>- Kiegyensúlyozott, nyugodt, egykedvű emberek, "fát lehet vágni a hátukon"</br>- Tekintetük, megjelenésük jellegtelen, kifejezéstelen.'
},{
	question:'Leggyakoribb tűnetek',
	answer:'- hangulat zavarok (40-50%)</br>- szorongásos zavarok (pl fóbiák)</br>- evés zavarok (1-2%)'
},{
	question:'Pearson-féle korrelációs együttható',
	answer:'milyen erős a kapcsolat két változó(ismérv) között'
},{
	question:'Pszichológiai alkalmassági vizsgálat',
	answer:'1. interjúval kezdődik</br>2. gyors tesztek: pl Rorschach Test: emberi arcokat látunk</br>3. személyiség tesztek</br>4. kognitiv tesztek: teljesítmény orientált tesztek pl. iq tesztek, reakció időmérő tesztek'
},{
	question:'Nativista szemlélet',
	answer:'Az ember a veleszületett tudás és a valóság megértésének képességével, "fegyverzetével" jön a világra (Descartes)'
},{
	question:'',
	answer:''
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