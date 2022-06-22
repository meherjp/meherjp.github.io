$(document).ready(function() {

  // Scroll to top button ----------------------------------------------------------
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      document.getElementById("topper").style.display = "block";
    } else {
      document.getElementById("topper").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  $("#topper").on("click", function() {
    $("html").animate({
      scrollTop: 0
    }, 400);
  });

  // tooltips function
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Initally hide the read more div
    $("#read-more").css("display", "none");

    // Show more on click
    $("#badge-more").on("click", function() {
        // Show/hide the div
        $("#read-more").fadeToggle("fast");
        // Change the button
        if ($("#badge-more").text() === "more") {
            $("#badge-more").text("less");
        } else {
            $("#badge-more").text("more");
        }
    });

     // popover function
    $('[data-toggle="popover"]').popover();

     // open all accordion panels for possible rinting
     // $(".expander").on("click", function() {
     //
     //    // Change the button
     //    if ($(".expander").text() == "show all") {
     //       $(".expander").text("hide all");
     //       $(".panel-collapse").addClass("in");
     //       $(".panel-default a").attr("aria-expanded", "true").removeClass("collapsed");
     //    } else {
     //       $(".expander").text("show all");
     //       $(".panel-collapse").removeClass("in");
     //       $(".panel-default a").attr("aria-expanded", "false").addClass("collapsed");
     //    }
     //
     // });

     // open all accordion panels for possible printing or close
    $(".expander").on("click", function() {
        if ($(".expander").text() === "show all") {
            // Change the button text
            $(".expander").text("hide all");
            // show all accordions
            $(".panel-collapse").collapse('show');
        } else {
            // Change the button text
            $(".expander").text("show all");
            // hide all accordions
            $(".panel-collapse").collapse('hide');
        }
    });
   
    /*var nav_items = document.getElementsByClassName('nav-item');
    for (var i = 0; i < nav_items.length; i++){
        var nav = nav_items[i];
        nav.onclick = function(){
            nav.classList.add("active");
            nav.classList.add("hvr-bubble-bottom");
            for(var j = 0; j < nav_items.length; j++){
                if (i !== j){
                    if (nav_items[j].classList.contains("active")){
                        nav_items[j].classList.remove("active");
                    }
                    if (nav_items[j].classList.contains("hvr-bubble-bottom")){
                        nav_items[j].classList.remove("hvr-bubble-bottom");
                    }
                }
            }
        };
    }*/

});
