    var displayExample = function(elId){
      var hashelId = "#"+elId;
      if($("#hide-"+elId).hasClass("dn") === true) {
        $("#hide-"+elId).removeClass("dn");
        $("#show-"+elId).addClass("dn");
      } else if($("#show-"+elId).hasClass("dn") === true) {
        $("#show-"+elId).removeClass("dn");
        $("#hide-"+elId).addClass("dn");
      }
    };

    var animateExamples = function() {
      if($(".js-hide").hasClass("dn")) {
        $(".js-hide").removeClass("dn");
        $(".js-show").addClass("dn");
      } else if($(".js-show").hasClass("dn")) {
        $(".js-show").removeClass("dn");
        $(".js-hide").addClass("dn");
      }
      if($(".js-dib-show").hasClass("dib")) {
        $(".js-dib-show").removeClass("dib");
        $(".js-dib-hide").addClass("dib");
        $(".js-dib-show").addClass("dn");
        $(".js-dib-hide").removeClass("dn");
      } else if($(".js-dib-hide").hasClass("dib")) {
        $(".js-dib-show").addClass("dib");
        $(".js-dib-show").removeClass("dn");
        $(".js-dib-hide").addClass("dn");
        $(".js-dib-hide").removeClass("dib");
      }
    };

    window.setInterval("animateExamples()", 1500);

      var normalVisibility = function() {
        $('.motion').show();
        $('.operator').show();
        $('.normal').show();
        $('.insert').show();
        $('.clickedNormal').addClass('brdr-000000');
        $('.clickedNormal').removeClass('brdr-FFFFFF');
        $('.clickedMotion').addClass('brdr-FFFFFF');
        $('.clickedMotion').removeClass('brdr-000000');
        $('.clickedInsert').addClass('brdr-FFFFFF');
        $('.clickedInsert').removeClass('brdr-000000');
        $('.clickedOperator').addClass('brdr-FFFFFF');
        $('.clickedOperator').removeClass('brdr-000000');
      };
     var motionVisibility = function() {
        $('.operator').hide();
        $('.normal').hide();
        $('.insert').hide();
        $('.motion').show();
        $('.clickedMotion').addClass('brdr-000000');
        $('.clickedMotion').removeClass('brdr-FFFFFF');
        $('.clickedNormal').addClass('brdr-FFFFFF');
        $('.clickedNormal').removeClass('brdr-000000');
        $('.clickedInsert').addClass('brdr-FFFFFF');
        $('.clickedInsert').removeClass('brdr-000000');
        $('.clickedOperator').addClass('brdr-FFFFFF');
        $('.clickedOperator').removeClass('brdr-000000');
      };
      var operatorVisibility = function() {
        $('.motion').hide();
        $('.normal').hide();
        $('.insert').hide();
        $('.operator').show();
        $('.clickedOperator').addClass('brdr-000000');
        $('.clickedOperator').removeClass('brdr-FFFFFF');
        $('.clickedNormal').addClass('brdr-FFFFFF');
        $('.clickedNormal').removeClass('brdr-000000');
        $('.clickedInsert').addClass('brdr-FFFFFF');
        $('.clickedInsert').removeClass('brdr-000000');
        $('.clickedMotion').addClass('brdr-FFFFFF');
        $('.clickedMotion').removeClass('brdr-000000');
      };
      var insertVisibility = function() {
        $('.motion').hide();
        $('.normal').hide();
        $('.operator').hide();
        $('.insert').show();
        $('.clickedInsert').addClass('brdr-000000');
        $('.clickedInsert').removeClass('brdr-FFFFFF');
        $('.clickedNormal').addClass('brdr-FFFFFF');
        $('.clickedNormal').removeClass('brdr-000000');
        $('.clickedOperator').addClass('brdr-FFFFFF');
        $('.clickedOperator').removeClass('brdr-000000');
        $('.clickedMotion').addClass('brdr-FFFFFF');
        $('.clickedMotion').removeClass('brdr-000000');
      };

/*    
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){
    console.log("Code and Beats!");
}
}
window.addEventListener("scroll", function() {
     isScrolledIntoView($("#a"));
}, false);
   */ 




