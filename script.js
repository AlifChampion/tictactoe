// Function to Change PlayerName
let player1Name = 'Player 1';
let player2Name = 'Player 2';

function namePlayer1() {
    let person1 = prompt("Please enter your name: ", "");
    if (person1 != null) {
      document.getElementsByClassName("name1")[0].innerHTML = person1.toUpperCase();
      document.getElementsByClassName("score1")[0].innerHTML = person1.toUpperCase();
      player1Name = person1.toUpperCase();
    }
}
function namePlayer2() {
    let person2 = prompt("Please enter your name: ", "");
    if (person2 != null) {
      document.getElementsByClassName("name2")[0].innerHTML = person2.toUpperCase();
      document.getElementsByClassName("score2")[0].innerHTML = person2.toUpperCase();
      player2Name = person2.toUpperCase();
    }
}

// Function of ScoreBoard
    let P1 = 0;
    let P2 = 0;
    let Draw = 0;

    function addP1(){
    P1 +=1;
    document.getElementById("s1").innerText = P1; 
    }
    function addP2(){
    P2 +=1;
    document.getElementById("s2").innerText = P2; 
    }
    function addDraw(){
    Draw +=1;
    document.getElementById("draw").innerText = Draw; 
    }

// Play Area
function myboxes() {

	// Setting DOM to all boxes or input field
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Checking if Player X won or not and after that disabled all the other fields
	if ((b1 == '🔥' || b1 == '🔥') && (b2 == '🔥' ||
		b2 == '🔥') && (b3 == '🔥' || b3 == '🔥')) {
		document.getElementById('print').innerHTML = player1Name + " WON !";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        Swal.fire({
            title: player1Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
        var win = new Audio('media/win.mp3');
        win.play();
        addP1();
        document.getElementById("strike").classList.add("strike-row1");
        document.body.style.backgroundImage = 'url(media/hot.gif)';
	}
	else if ((b1 == '🔥' || b1 == '🔥') && (b4 == '🔥' ||
		b4 == '🔥') && (b7 == '🔥' || b7 == '🔥')) {
		document.getElementById('print').innerHTML = player1Name + " WON !";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        Swal.fire({
            title: player1Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
        var win = new Audio('media/win.mp3');
        win.play();
        addP1();
        document.getElementById("strike").classList.add("strike-col1");
        document.body.style.backgroundImage = 'url(media/hot.gif)';
	}
	else if ((b7 == '🔥' || b7 == '🔥') && (b8 == '🔥' ||
		b8 == '🔥') && (b9 == '🔥' || b9 == '🔥')) {
		document.getElementById('print').innerHTML = player1Name + " WON !";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
        Swal.fire({
            title: player1Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP1();
          document.getElementById("strike").classList.add("strike-row3");
          document.body.style.backgroundImage = 'url(media/hot.gif)';
	}
	else if ((b3 == '🔥' || b3 == '🔥') && (b6 == '🔥' ||
		b6 == '🔥') && (b9 == '🔥' || b9 == '🔥')) {
		document.getElementById('print').innerHTML = player1Name + " WON !";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        Swal.fire({
            title: player1Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP1();
          document.getElementById("strike").classList.add("strike-col3");
          document.body.style.backgroundImage = 'url(media/hot.gif)';
	}
	else if ((b1 == '🔥' || b1 == '🔥') && (b5 == '🔥' ||
		b5 == '🔥') && (b9 == '🔥' || b9 == '🔥')) {
		document.getElementById('print').innerHTML = player1Name + " WON !";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        Swal.fire({
            title: player1Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP1();
          document.getElementById("strike").classList.add("strike-dgl1");
          document.body.style.backgroundImage = 'url(media/hot.gif)';
	}
	else if ((b3 == '🔥' || b3 == '🔥') && (b5 == '🔥' ||
		b5 == '🔥') && (b7 == '🔥' || b7 == '🔥')) {
		document.getElementById('print').innerHTML = player1Name + " WON !";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        Swal.fire({
            title: player1Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP1();
          document.getElementById("strike").classList.add("strike-dgl2");
          document.body.style.backgroundImage = 'url(media/hot.gif)';
	}
	else if ((b2 == '🔥' || b2 == '🔥') && (b5 == '🔥' ||
		b5 == '🔥') && (b8 == '🔥' || b8 == '🔥')) {
		document.getElementById('print').innerHTML = player1Name + " WON !";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
        Swal.fire({
            title: player1Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP1();
          document.getElementById("strike").classList.add("strike-col2");
          document.body.style.backgroundImage = 'url(media/hot.gif)';
	}
	else if ((b4 == '🔥' || b4 == '🔥') && (b5 == '🔥' ||
		b5 == '🔥') && (b6 == '🔥' || b6 == '🔥')) {
		document.getElementById('print').innerHTML = player1Name + " WON !";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        Swal.fire({
            title: player1Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP1();
          document.getElementById("strike").classList.add("strike-row2");
          document.body.style.backgroundImage = 'url(media/hot.gif)';
	}

	// Checking is player 0 won or not and after that disabled all the other fields
	else if ((b1 == '❄️' || b1 == '❄️') && (b2 == '❄️' ||
		b2 == '❄️') && (b3 == '❄️' || b3 == '❄️')) {
		document.getElementById('print').innerHTML = player2Name + " WON !";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        Swal.fire({
            title: player2Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP2();
          document.getElementById("strike").classList.add("strike-row1");
          document.body.style.backgroundImage = 'url(media/snow.gif)';
	}
	else if ((b1 == '❄️' || b1 == '❄️') && (b4 == '❄️' ||
		b4 == '❄️') && (b7 == '❄️' || b7 == '❄️')) {
		document.getElementById('print').innerHTML = player2Name + " WON !";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        Swal.fire({
            title: player2Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP2();
          document.getElementById("strike").classList.add("strike-col1");
          document.body.style.backgroundImage = 'url(media/snow.gif)';
	}
	else if ((b7 == '❄️' || b7 == '❄️') && (b8 == '❄️' ||
		b8 == '❄️') && (b9 == '❄️' || b9 == '❄️')) {
		document.getElementById('print').innerHTML = player2Name + " WON !";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
        Swal.fire({
            title: player2Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP2();
          document.getElementById("strike").classList.add("strike-row3");
          document.body.style.backgroundImage = 'url(media/snow.gif)';
	}
	else if ((b3 == '❄️' || b3 == '❄️') && (b6 == '❄️' ||
		b6 == '❄️') && (b9 == '❄️' || b9 == '❄️')) {
		document.getElementById('print').innerHTML = player2Name + " WON !";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        Swal.fire({
            title: player2Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP2();
          document.getElementById("strike").classList.add("strike-col3");
          document.body.style.backgroundImage = 'url(media/snow.gif)';
	}
	else if ((b1 == '❄️' || b1 == '❄️') && (b5 == '❄️' ||
		b5 == '❄️') && (b9 == '❄️' || b9 == '❄️')) {
		document.getElementById('print').innerHTML = player2Name + " WON !";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        Swal.fire({
            title: player2Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP2();
          document.getElementById("strike").classList.add("strike-dgl1");
          document.body.style.backgroundImage = 'url(media/snow.gif)';
	}
	else if ((b3 == '❄️' || b3 == '❄️') && (b5 == '❄️' ||
		b5 == '❄️') && (b7 == '❄️' || b7 == '❄️')) {
		document.getElementById('print').innerHTML = player2Name + " WON !";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        Swal.fire({
            title: player2Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP2();
          document.getElementById("strike").classList.add("strike-dgl2");
          document.body.style.backgroundImage = 'url(media/snow.gif)';
	}
	else if ((b2 == '❄️' || b2 == '❄️') && (b5 == '❄️' ||
		b5 == '❄️') && (b8 == '❄️' || b8 == '❄️')) {
		document.getElementById('print').innerHTML = player2Name + " WON !";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
        Swal.fire({
            title: player2Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP2();
          document.getElementById("strike").classList.add("strike-col2");
          document.body.style.backgroundImage = 'url(media/snow.gif)';
	}
	else if ((b4 == '❄️' || b4 == '❄️') && (b5 == '❄️' ||
		b5 == '❄️') && (b6 == '❄️' || b6 == '❄️')) {
		document.getElementById('print').innerHTML = player2Name + " WON !";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        Swal.fire({
            title: player2Name + " WON !",
            background: '#fff url(media/win.gif)',
          });
          var win = new Audio('media/win.mp3');
          win.play();
          addP2();
          document.getElementById("strike").classList.add("strike-row2");
          document.body.style.backgroundImage = 'url(media/snow.gif)';
	}

	// Checking if match is Tie
	else if ((b1 == '🔥' || b1 == '❄️') && (b2 == '🔥'
		|| b2 == '❄️') && (b3 == '🔥' || b3 == '❄️') &&
		(b4 == '🔥' || b4 == '❄️') && (b5 == '🔥' ||
		b5 == '❄️') && (b6 == '🔥' || b6 == '❄️') &&
		(b7 == '🔥' || b7 == '❄️') && (b8 == '🔥' ||
		b8 == '❄️') && (b9 == '🔥' || b9 == '❄️')) {
		document.getElementById('print').innerHTML = "You Both SUCKS!";
        // Swal.fire("MATCH TIE", "You Both SUCKS!");
        Swal.fire({
            title: 'MATCH TIE',
            background: '#fff url(media/draw.gif)',
          });
          var win = new Audio('media/boo.mp3');
          win.play();
          addDraw();
	}
	else {              // Display next player move
		if (flag == 1) {
			document.getElementById('print').innerHTML = player1Name + ' Move';
		}
		else {
			document.getElementById('print').innerHTML = player2Name + ' Move';
		}
	}
}

// Functions check turn of the player and put accordingly value X or 0
flag = 1;
function myfunc_1() {
	if (flag == 1) {
		document.getElementById("b1").value = "🔥";
		document.getElementById("b1").disabled = true;
		flag = 0;
        var audio = new Audio('media/Player.mp3');
        audio.play();
	}
	else {
		document.getElementById("b1").value = "❄️";
		document.getElementById("b1").disabled = true;
		flag = 1;
        var audio = new Audio('media/Player2.mp3');
        audio.play();
	}
}

function myfunc_2() {
	if (flag == 1) {
		document.getElementById("b2").value = "🔥";
		document.getElementById("b2").disabled = true;
		flag = 0;
        var audio = new Audio('media/Player.mp3');
        audio.play();
	}
	else {
		document.getElementById("b2").value = "❄️";
		document.getElementById("b2").disabled = true;
		flag = 1;
        var audio = new Audio('media/Player2.mp3');
        audio.play();
	}
}

function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b3").value = "🔥";
		document.getElementById("b3").disabled = true;
		flag = 0;
        var audio = new Audio('media/Player.mp3');
        audio.play();
	}
	else {
		document.getElementById("b3").value = "❄️";
		document.getElementById("b3").disabled = true;
		flag = 1;
        var audio = new Audio('media/Player2.mp3');
        audio.play();
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b4").value = "🔥";
		document.getElementById("b4").disabled = true;
		flag = 0;
        var audio = new Audio('media/Player.mp3');
        audio.play();
	}
	else {
		document.getElementById("b4").value = "❄️";
		document.getElementById("b4").disabled = true;
		flag = 1;
        var audio = new Audio('media/Player2.mp3');
        audio.play();
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b5").value = "🔥";
		document.getElementById("b5").disabled = true;
		flag = 0;
        var audio = new Audio('media/Player.mp3');
        audio.play();
	}
	else {
		document.getElementById("b5").value = "❄️";
		document.getElementById("b5").disabled = true;
		flag = 1;
        var audio = new Audio('media/Player2.mp3');
        audio.play();
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b6").value = "🔥";
		document.getElementById("b6").disabled = true;
		flag = 0;
        var audio = new Audio('media/Player.mp3');
        audio.play();
	}
	else {
		document.getElementById("b6").value = "❄️";
		document.getElementById("b6").disabled = true;
		flag = 1;
        var audio = new Audio('media/Player2.mp3');
        audio.play();
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b7").value = "🔥";
		document.getElementById("b7").disabled = true;
		flag = 0;
        var audio = new Audio('media/Player.mp3');
        audio.play();
	}
	else {
		document.getElementById("b7").value = "❄️";
		document.getElementById("b7").disabled = true;
		flag = 1;
        var audio = new Audio('media/Player2.mp3');
        audio.play();
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b8").value = "🔥";
		document.getElementById("b8").disabled = true;
		flag = 0;
        var audio = new Audio('media/Player.mp3');
        audio.play();
	}
	else {
		document.getElementById("b8").value = "❄️";
		document.getElementById("b8").disabled = true;
		flag = 1;
        var audio = new Audio('media/Player2.mp3');
        audio.play();
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b9").value = "🔥";
		document.getElementById("b9").disabled = true;
		flag = 0;
        var audio = new Audio('media/Player.mp3');
        audio.play();
	}
	else {
		document.getElementById("b9").value = "❄️";
		document.getElementById("b9").disabled = true;
		flag = 1;
        var audio = new Audio('media/Player2.mp3');
        audio.play();
	}
}

// Function of Button to Restart / Reset Game
function myfunc_0() {                           // Restart Button
	//location.reload();
	document.getElementById("b1").value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';
	document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById("b5").disabled = false;
	document.getElementById("b6").disabled = false;
	document.getElementById("b7").disabled = false;
	document.getElementById("b8").disabled = false;
	document.getElementById("b9").disabled = false;
    flag=1;
    document.body.style.backgroundImage = 'url(media/desert.gif)';
    document.getElementById('print').innerHTML = 'Tracking Move';
    document.getElementById("strike").classList='strike';
    var audio = new Audio('media/restart.mp3');
    audio.play();
}

function myfunc_11(){                           // Reset Game Button
    //location.reload();
    document.getElementById("b1").value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';
	document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById("b5").disabled = false;
	document.getElementById("b6").disabled = false;
	document.getElementById("b7").disabled = false;
	document.getElementById("b8").disabled = false;
	document.getElementById("b9").disabled = false;
    flag=1;
    P1=0;
    P2=0;
    Draw=0;
	document.getElementById("s1").innerText = P1;
	document.getElementById("draw").innerText = Draw;
	document.getElementById("s2").innerText = P2;
    document.getElementsByClassName('name1')[0].innerHTML = "First Player";
    document.getElementsByClassName('name2')[0].innerHTML = "Second Player";
    document.getElementsByClassName('score1')[0].innerHTML = "PLAYER 1";
    document.getElementsByClassName('score2')[0].innerHTML = "PLAYER 2";
    document.body.style.backgroundImage = 'url(media/desert.gif)';
    document.getElementById('print').innerHTML = 'Tracking Move';
    player1Name = 'Player 1'
    player2Name = 'Player 2'
    document.getElementById("strike").classList='strike';
    var audio = new Audio('media/Reset.mp3');
    audio.play();
}