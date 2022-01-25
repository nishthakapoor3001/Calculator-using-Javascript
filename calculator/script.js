function sin(){
	document.cal.answer.value=Math.sin(document.cal.answer.value);
	}

	function cos(){
	document.cal.answer.value=Math.cos(document.cal.answer.value);
	}

	function tan(){
	document.cal.answer.value=Math.tan(document.cal.answer.value);
	}

	function BACKSPC(){
	var a = document.cal.answer.value;
	document.cal.answer.value = a.substr(0, a.length-1);
	}

	function square() {
        var side, area;
        side = document.cal.answer.value;
        area = side * side;
      
        document.cal.answer.value = area;
      }

      function circle() {
        var pie;
        pie = 3.14159265359;
        document.cal.answer.value = pie * document.cal.answer.value * document.cal.answer.value;
      }


	function number(value){
	document.cal.answer.value += value;
	}

	function remv(){
	document.cal.answer.value=" ";
	}

	function equal(){
	document.cal.answer.value=eval(document.cal.answer.value);
	}