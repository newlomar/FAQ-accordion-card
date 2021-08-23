const questions_div = document.querySelector('.questions');

const questions = [...questions_div.children];

function add_active_class() {
  questions.forEach(item => {
    item.addEventListener('click', function() {
      item.children[0].children[0].classList.toggle('active');
      item.children[0].children[1].classList.toggle('active');
      item.children[1].classList.toggle('active');
    });
  });
}

add_active_class();