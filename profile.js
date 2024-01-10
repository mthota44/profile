
var i = 0, text;
text = "Backend End Devloper, I am Manoj Thota"
function typing() {

if (i < text.length) {
    var a = document.getElementById("sum")
    a.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
setTimeout(function(){
    typing()
},10)

function th(){
    theme.style.top="120vh"
    theme_section.style.top="20vh"
}

// alert("click on screen")