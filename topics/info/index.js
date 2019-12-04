var questionAnswers = [
// Teszt
{
	question: 'Tesztecske?',
	answer: 'Tesztecske'
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