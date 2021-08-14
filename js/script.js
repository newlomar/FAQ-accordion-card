const questions_div = document.querySelector('.questions');

const questions = [...questions_div.children];

questions[0].children[0].children[0].className = 'active';

questions[0].children[1].classList += ' active';
