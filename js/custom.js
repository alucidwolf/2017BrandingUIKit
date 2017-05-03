jQuery.noConflict();

(function($){
  "use-strict";

  // tooltip init
  $("[data-toggle='tooltip']").tooltip();

  // loader fade out when page load is ready
  window.onload = function(){
    $("#loader").delay(500).fadeOut("fast");
  }

})(jQuery);
