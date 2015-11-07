$(document).ready(function(){
    $("#faq_a1").hide();
    $("#faq_a2").hide();
    $("#faq_a3").hide();
    $("#faq_a4").hide();

    // $("#aboutbutton").click(function(){
    //     // alert('hi');
    //     $("#mission").fadeOut();
    //     $("#about").fadeIn();
    // })

    // $("#missionbutton").hover(function(){
    //     // $("#about").fadeOut();
    //     $("#mission").fadeIn();
    // }, function(){
    //     $("#mission").fadeOut();
    // });
    $( "#faq_q1" ).click(function() {
      $( "#faq_a1" ).slideToggle( "slow", function() {
        // Animation complete.
      });
    });

    $( "#faq_q2" ).click(function() {
      $( "#faq_a2" ).slideToggle( "slow", function() {
        // Animation complete.
      });
    });

    $( "#faq_q3" ).click(function() {
      $( "#faq_a3" ).slideToggle( "slow", function() {
        // Animation complete.
      });
    });

    $( "#faq_q4" ).click(function() {
      $( "#faq_a4" ).slideToggle( "slow", function() {
        // Animation complete.
      });
    });
});


