(function ($, window) {
  $(function () {
    formComponent();
  });

  function formComponent() {
    var saveData1;
    var saveData2;
    var saveData3;
    var saveData4;

    $(".nextClick button").on("click", function () {
      $(this).closest(".formComponent").hide();
      $(this).closest(".formComponent").next().fadeIn();
    });

    $(".restartBtn").on("click", function () {
      $(this).closest(".formComponent").hide();
      $(".restartScreen").fadeIn();

      saveData1 = "";
      saveData2 = "";
      saveData3 = "";
      saveData4 = "";
    });

    $(".newPath").on("click", function () {
      $(this).closest(".formComponent").hide();
      $(".newPathStart").fadeIn();
    });

    $(".existingPath").on("click", function () {
      $(this).closest(".formComponent").hide();
      $(".existingPathStart").fadeIn();
    });

    //newpath results
    $(".data-1").on("click", function () {
      saveData1 = $(this).attr("data-val");
    });

    $(".data-2").on("click", function () {
      saveData2 = $(this).attr("data-val");

      if (saveData1 == "grid" && saveData2 == "yesjs") {
        $(".newResult").html("4 hours");
      }

      if (saveData1 == "grid" && saveData2 == "nojs") {
        $(".newResult").html("2 hours");
      }

      if (saveData1 == "nonStandard" && saveData2 == "yesjs") {
        $(".newResult").html("6 hours");
      }

      if (saveData1 == "nonStandard" && saveData2 == "nojs") {
        $(".newResult").html("3 hours");
      }
    });

    // existingpath results
    $(".data-3").on("click", function () {
      saveData3 = $(this).attr("data-val");
    });

    $(".data-4").on("click", function () {
      saveData4 = $(this).attr("data-val");

      if (saveData3 == "yeschange" && saveData4 == "yesjs") {
        $(this).closest(".formComponent").hide();
        $(".complexComponentScreen").fadeIn();
        console.log(12);
      } else {
        console.log(555);
        $(this).closest(".formComponent").hide();
        $(this).closest(".formComponent").next().fadeIn();
      }

      if (saveData3 == "yeschange" && saveData4 == "nojs") {
        $(".existingResult").html("1.5 hours");
      }

      if (saveData3 == "nochange" && saveData4 == "yesjs") {
        $(".existingResult").html("2.5 hours");
      }

      if (saveData3 == "nochange" && saveData4 == "nojs") {
        $(".existingResult").html("1 hour");
      }
    });
  }
})(window.jQuery, window);
