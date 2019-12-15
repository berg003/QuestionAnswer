var questionAnswers = [
// Teszt
{
	question: 'Alea iacta est',
	answer: 'A kocka el van vetve'
},{
	question: 'Cogito ergo sum',
	answer: 'Gondolkodom tehát vagyok'
},{
	question: 'Coito ergo sum',
	answer: 'Szeretkezem tehát vagyok'
},{
	question: 'Et cum spiritum tuo',
	answer: 'És a te lelkeddel'
},{
	question: 'In vino veritas',
	answer: 'Borban az igazság'
},{
	question: 'Servamus vitam atque servimus',
	answer: 'Megvédeni és szolgálni az életet'
},{
	question: 'Sol omnibus lucet',
	answer: 'A nap mindenkinek süt'
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