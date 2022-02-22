const mask = () => {
  $("#phone").mask("+40 999 999 999");
  $("#date").mask("99/99");
  $("#time").mask("99:99");
  $('input').val('');
};

mask();