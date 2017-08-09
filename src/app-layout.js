$(document).ready(function(){

  // toggle the code view
  // style as link
  $( ".preview .section-heading" ).addClass( "action" );
  // toggle class
  $(".preview .section-heading").click(function(){
    $('.app').toggleClass("code-view");
  });

  // toggle settings
  // style as link
  $( ".actions .settings-button" ).addClass( "action" );
  // toggle classes
  $(".actions .settings-button").click(function(){
    $(this).toggleClass("active");
    $(this).parents(".panel-heading").find(".settings").toggleClass("active");
  });

});
