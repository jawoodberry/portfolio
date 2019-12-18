var rev = "fwd";
function titlebar(val) {
  var msg = " 🏞 Jada's Portfolio!!";
  var res = "F ";
  var speed = 90;
  var pos = val;
  msg = " 🏞 Jada's Portfolio!!";
  var le = msg.length;
  if (rev === "fwd") {
    if (pos < le) {
      pos = pos + 1;
      scroll = msg.substr(0, pos);
      document.title = scroll;
      var timer = window.setTimeout("titlebar(" + pos + ")", speed);
    } else {
      rev = "bwd";
      timer = window.setTimeout("titlebar(" + pos + ")", speed);
    }
  } else {
    if (pos > 0) {
      pos = pos - 1;
      var ale = le - pos;
      var scrol = msg.substr(ale, le);
      document.title = scrol;
      timer = window.setTimeout("titlebar(" + pos + ")", speed);
    } else {
      rev = "fwd";
      timer = window.setTimeout("titlebar(" + pos + ")", speed);
    }
  }
}
titlebar(0);
