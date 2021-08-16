const questions_div = document.querySelector('.questions');

const questions = [...questions_div.children];

function add_active_class() {
  questions.forEach(item => {
    item.children[0].children[0].classList += ' active';
    item.children[1].classList += ' active';
  });
}

add_active_class();