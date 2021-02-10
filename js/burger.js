document.addEventListener('click', function (e) {
   // получаем элемент
   const el = e.target.closest('.header__burger');
   // если эл. получен
   if (el) {
      // добавляем или убираем элемент
      el.classList.toggle('active');
      // добавляем или убираем класс
      $('.header__nav').toggleClass('active');
      $('body').toggleClass('active');
   }
});
