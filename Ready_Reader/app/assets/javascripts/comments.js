$(document).ready(function(){

  $('#add_comment').on("click", function(e) {
    e.preventDefault();
    console.log("FUCK YOU HAMMER");
    $('#commentModal').modal();
  })

  $(document).on('submit', '#form_fun', function(e){
    e.preventDefault();
    var ajaxRequest = $.ajax({
      url : '/comment_on_book',
      data: {commentary: $('#comment_commentary').val(), commented_on: $('.current_sentence').text()},

      method: 'POST'
    });

    ajaxRequest.success(function(response){
      console.log("yolo");
      $('#form_fun').remove();
      $('#new_comment').show();

    });


  })

});
