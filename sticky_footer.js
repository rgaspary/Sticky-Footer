$(window).bind("load", function() {      
  var footerHeight = 0,
  footerTop = 0,
  $footer = $("#footer");
  $header = $("#header");
  $content = $("#content");
  positionFooter();
  function positionFooter() {
    footerHeight = $footer.height();
    footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
    header1 = $header.height();
    content1 = $content.height();

    // DEBUGGING STUFF

    /*console.log("Document height: ", $(document.body).height());
    console.log("Window height: ", $(window).height());
    console.log("Window scroll: ", $(window).scrollTop());
    console.log("Footer height: ", footerHeight);
    console.log("Footer top: ", footerTop);
    console.log("-----------")
    console.log("Header height: ", header1);
    console.log("Content height: ", content1);
    console.log("-----------")*/

    if ( (header1+content1+footerHeight) < $(window).height()) {
      $footer.css({
        position: "absolute"
      }).stop().animate({
        top: footerTop
      })
    } else {
      $footer.css({
        position: "static"
      })
    }
  }
  $(window)
  .scroll(positionFooter)
  .resize(positionFooter)   
});