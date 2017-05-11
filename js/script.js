  $(function () {
      var $tr = $('table').find('tr');
      var counts = $tr.length - 1;
      $("#counts").text(counts);
      
      $tr.each(function(i){
        var i = i + 1;
        if(i < 10){
          $(this).next().children(':first-child').prepend('<span class="numbers">【0'+ i +'】</span>');
          }else{
          $(this).next().children(':first-child').prepend('<span class="numbers">【'+ i +'】</span>');
        }
      });
  });