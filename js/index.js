
  var position = 0;
  var main_w = document.getElementById("menu_click");
  var menu_m = document.getElementById("menu_more");

  function menu_slide() {
    position++;
    if(position % 2 == 0) {
      main_w.classList.add("open");
    } else {
      main_w.classList.remove("open");
    } 
  }

  menu_m.addEventLister("click", menu_slide);
