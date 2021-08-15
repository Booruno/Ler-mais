var text = $('.desc_prof'),
     btn = $('.btnShow'),
       h = text[0].scrollHeight,
       initialHeight = $('.desc_prof').height();

if(h > 120) {
	btn.addClass('Menos');
	btn.css('display', 'block');
}

btn.click(function(e) 
{
  e.stopPropagation();

  if (btn.hasClass('Menos')) {
      btn.removeClass('Menos');
      btn.addClass('Mais');
      btn.text('Ler Menos');

      text.animate({'height': h});
  } else {
      btn.addClass('Menos');
      btn.removeClass('Mais');
      btn.text('Ler Mais');
      text.animate({'height': initialHeight});
  }  
});