const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('img');

    faqQuestions.forEach(item => {
      if (item !== question) {
        item.classList.remove('active');
        item.nextElementSibling.style.maxHeight = null;
        item.querySelector('img').src = 'assets/images/icon-plus.svg';
      }
    });

    if (question.classList.contains('active')) {
      question.classList.remove('active');
      answer.style.maxHeight = null;
      icon.src = 'assets/images/icon-plus.svg';
    } else {
      question.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      icon.src = 'assets/images/icon-minus.svg';
    }
  });
});
