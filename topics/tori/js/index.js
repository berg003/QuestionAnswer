var questionAnswers = [
// Teszt
{
	question: 'Mikor alakult meg az Egészségügyi Világszervezet?',
	answer: '1948'
},{
	question: 'Milyen területekre tagozódik a magyar eü ellátórendszer',
	answer: 'alapellátás-szakellátás'
},{
	question: 'Milyen szervezet alapította a WHO-t?',
	answer: 'ENSZ'
},{
	question: 'Mikor van az Egészségügyi Világnap?',
	answer: 'Április 7'
},{
	question: 'Hol létesültek az első orvosi iskolák?',
	answer: 'Ókori Egyiptomban'
},{
	question: 'Kinek a nevéhez fűződik az első anatómia tankönyv?',
	answer: 'Galénosz'
},{
	question: 'Hol született Hippokratész?',
	answer: 'Kos'
},{
	question: 'Hol született Galénosz?',
	answer: 'Pergamon'
},{
	question: 'Honnan származnak az első írásos emlékeink a gyógyításról?',
	answer: 'Ókori Egyiptomból'
},{
	question: 'Melyik Ókori Társadalomban voltak ellenőrei a közegészségnek?',
	answer: 'Római'
},{
	question: 'Melyik jogszabály fogalmazza meg az ápolás definícióját?',
	answer: '1997. évi CLIV. törvény'
},{
	question:'Mi volt Hippokratész édesanyjának foglalkozása?',
	answer:'szülésznő'
},{
	question:'Mi nem tartozik Hippokratész életművéhez az alábbiak közül?',
	answer:'anatómia tankönyv'
},{
	question:'Ki alapította meg a középkorban kolostori orvoslást?',
	answer:'Szent Pál apostol'
},{
	question:'Hol és mikor született Florence Nightingale?',
	answer:'Firenze, 1820. május 12.'
},{
	question:'Milyen szakmai érdemek jellemzik F. Nightingale életművét?',
	answer:'Első ápoló iskola'
},{
	question:'Mikor és hol született Semmelweis Ignác?',
	answer:'Budán 1918. július 1-én'
},{
	question:'Hol dolgozott Semmelweis Ignác?',
	answer:'Bécsi Klinika, Szt Rólus Kórház'
},{
	question:'Mi volt Semmelweis életművének legjelentősebb érdeme?',
	answer:'gyermekágyi láz okának felfedezése'
},{
	question:'Ki volt Kossuth Zsuzsanna a 48-as Szabadságharc idején?',
	answer:'Országos Főápoló'
},{
	question:'Mikor ünnepeljük a Magyar Ápolók Napját?',
	answer:'Február 19-én'
},{
	question:'Mikor ünnepeljük az Ápolók Nemzetközi Napját?',
	answer:'Május 12-én'
},{
	question:'Ki alapította a Kékkeresztes Márta Betegápoló Egyesületet?',
	answer:'Trugly Margit'
},{
	question:'Mikor épült a Sziklakórház?',
	answer:'A II. Világháború alatt'
},{
	question:'Hány ággyal tervezték kialakítani a Kórházat?',
	answer:'60'
},{
	question:'Hány szakember dolgozott a Kórházban a II. Világháború alatt?',
	answer:'20 orvos 40 ápoló'
},{
	question:'Modern röntgengép is volt a Sziklakórházban.',
	answer:'True'
},{
	question:'Két műtővel és két kórteremmel működött a Sziklakórház',
	answer:'False'
},{
	question:'A Sziklakórház a Szent János Kórház irányítása alatt működött.',
	answer:'True'
},{
	question:'Ki indította el a Vöröskereszt mozgalmat?',
	answer:'Henry Dunant'
},{
	question:'Mikor alakult meg a mai Vöröskereszt és Vörösfélhold Liga?',
	answer:'In 1919'
},{
	question:'Hol van a Vöröskereszt székhelye?',
	answer:'In Switzerland'
},{
	question:'Milyen feladat nem tartozik a Nemzetközi Vöröskereszt hatáskörébe?',
	answer:'Nemzetközi egészségügyi stratégia kidolgozása'
},{
	question:'Mit ünnepelünk az Egészség Világnapján?',
	answer:'A WHO alkotmányának hatálybalépését'
},{
	question:'Melyik évben lépett hatályba a WHO alkotmánya?',
	answer:'1948'
},{
	question:'Hány tagországa van az Egészségűgyi Világszervezetnek?',
	answer:'194'
},{
	question:'Hol van a WHO székhelye?',
	answer:'Genfben'
},{
	question:'Mi nem tartozik a WHO feladatai közé?',
	answer:'Kórházak minőségügyi ellenőrzése'
},{
	question:'WHO-nak hat regionális központja van',
	answer:'True'
},{
	question:'A WHO igazgatóját DR. Margaret Channek hívják',
	answer:'False'
},{
	question:'Mit kutatott Virginia Henderson?',
	answer:'Az ápolói szerepeket'
},{
	question:'Mi volt Virginia Henderson ápolási modelljének a lényege?',
	answer:'Segítő hivatás'
},{
	question:'Hol született Virginia?',
	answer:'Kansas Cityben'
},{
	question:'Hogyan fogalmazta meg Virginia Henderson az ápolás lényegét?',
	answer:'Segít az egyénnek, érte cselekszik, vele együtt cselekszik'
},{
	question:'Hány alapszükséglete van VH szerint az embernek?',
	answer:'14'
},{
	question:'Virginia Henderson 98 évet élt',
	answer:'True'
},{
	question:'Henderson modellje került az EüTv 98§-ba',
	answer:'True'
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