function init() {
	const list = document.getElementById('questions'); 
	list.innerHTML = '';	
	getQuestionAnswers().forEach(item => {
		let option = document.createElement('option');
		option.value = item.question;
		list.appendChild(option);
	});
};

function searchAnswer() {
	const div = document.getElementById('answer');
	var question = document.getElementById('question').value;
	getQuestionAnswers().forEach(item => {
		if (item.question == question) {
			document.getElementById('answer').innerHTML = item.answer;			
		}
	});
}

function reset() {
	document.getElementById('question').value = '';
	document.getElementById('answer').innerHTML = '';
}

function showDocument(fileId, type) {
	var documentFrame = document.getElementById(type + 'Frame');
	documentFrame.src = "https://docs.google.com/viewer?srcid=" + fileId + "&pid=explorer&efh=false&a=v&chrome=false&embedded=true";
	documentFrame.style.height='100%';
	documentFrame.style.visibility = null;
	documentFrame.scrollIntoView();
}
function hideDocument(type) {
	var documentFrame = document.getElementById(type + 'Frame');
	documentFrame.style.height=0;
	documentFrame.style.visibility = 'hidden';
}