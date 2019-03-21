$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();

      var unluckyResponses = [];
    $("input:checkbox[name=unlucky-sign]:checked").each(function(){
      var unluckyStuff = $(this).val();
      unluckyResponses.push(unluckyStuff);
    });
    var luckyResponses = [];
  $("input:checkbox[name=lucky-sign]:checked").each(function(){
    var luckyStuff = $(this).val();
    luckyResponses.push(luckyStuff);
  });
    if (unluckyResponses.length > luckyResponses.length){
      $("#bad-fortune").show();
    } else if (unluckyResponses.length < luckyResponses.length) {
      $("#good-fortune").show();
    } else {
      $("#neutral-fortune").show();
    }

  });
});
