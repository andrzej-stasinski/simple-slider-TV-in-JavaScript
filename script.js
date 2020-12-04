// Solition 1
// -----------------------

var myScreen = document.getElementById('myScreen');
var tab = ['./images/up1.jpg', './images/up2.jpg', './images/up3.jpg'];
var nr = 0;
function loop() {
    myScreen.innerHTML = "<img src='"+tab[nr]+"' />";
    nr++;
    if(nr >= tab.length) nr=0;
    setTimeout('loop()', 2000);
}
loop();


// Solition 2
// -----------------------

// var myScreen = document.getElementById('myScreen');
// var myPics = ['up1.jpg','up2.jpg','up3.jpg'];
// var totalPics = myPics.length;
// var i = 0;
// function loop() {
// 	if(i > (totalPics - 1)){
// 		i = 0;
// 	}
// 	myScreen.innerHTML = '<img src="'+myPics[i]+'">';
// 	i++;
// 	var loopTimer = setTimeout('loop()',3000);
// }
// loop();