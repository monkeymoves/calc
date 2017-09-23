$(document).ready(function(){
    
window.onload = function() {

var current,
    screen,
    output,
    limit,
    zero,
    period,
    operator;
    
    screen = document.getElementById("result");

var elem = document.querySelectorAll(".num");
    
      var len = elem.length;
    
      for(var i = 0; i < len; i++ ) {
        
        elem[i].addEventListener("click",function() {
                  
            num = this.value;
                     
            output = screen.innerHTML +=num;
                  
            limit = output.length;
         
         if(limit > 16 ) {
        
         alert("Sorry no more input is allowed");
             
       }
       
     },false);
        
    } 

    document.querySelector(".zero").addEventListener("click",function() {
        
        zero = this.value;
        
        if(screen.innerHTML === "") {
            
           output = screen.innerHTML = zero;  
        }
        
        else if(screen.innerHTML === output) {
            
         output = screen.innerHTML +=zero;
            
        }
          
    },false);
    
    document.querySelector(".period").addEventListener("click",function() {
        
        period = this.value;
        
        if(screen.innerHTML === "") {
            
         output = screen.innerHTML = screen.innerHTML.concat("0.");
            
         }
    
        else if(screen.innerHTML === output) {
        
          screen.innerHTML = screen.innerHTML.concat(".");
            
        }
        
    },false);
    
    
    document.querySelector("#eqn-bg").addEventListener("click",function() {
        
      if(screen.innerHTML === output) {
          
        screen.innerHTML = eval(output);
      }
        
      else {
            screen.innerHTML = "";
      }
          
    },false);
    
 document.querySelector("#delete").addEventListener("click",function() {
        
        screen.innerHTML = "";
        
    },false);
    
   
     var elem1 = document.querySelectorAll(".operator");
    
      var len1 = elem1.length;
    
      for(var i = 0; i < len1; i++ ) {
        
        elem1[i].addEventListener("click",function() {
         
        operator = this.value;
         
         if(screen.innerHTML === "") {
            
            screen.innerHTML = screen.innerHTML.concat("");
            
        }
        
        else if(output) {
        
            screen.innerHTML = output.concat(operator);
            
        }
           
    },false);
          
      }   
}


//	var testNumLength = function(number) {
//        if (number.length > 9) {
//            totaldiv.text(number.substr(number.length-9,9));
//            if (number.length > 15) {
//                number = "";
//                totaldiv.text("Err");
//            }
//        } 
//    };
//	var number = "";
//    var newnumber = "";
//    var operator = "";
//    var totaldiv = $("#total");
//    var runningdiv = $("#running");
//    var runningcalc = ;
//    totaldiv.text("0");
//    $("#numbers > a").not("#clear,#clearall").click(function(){
//		number = $(this).text();
//		totaldiv.text(number);
//        runningdiv.append(number);
//		testNumLength(number);
//        
//    });
//    $("#operators > a").not("#equals").click(function(){
//		operator = $(this).text();
//		newnumber = number;
//		number = "";
////		totaldiv.text("0");
//        runningdiv.append(operator); 
//    });
//    $("#clear,#clearall").click(function(){
//		number = "";
//        runningdiv.text("");
//		totaldiv.text("0");
//		if ($(this).attr("id") === "clearall") {
//			newnumber = "";
//            runningdiv.text("");
//		}
//    });
//    //Add your last .click() here!
//    
//
//    
//   function equal(){
//       if (operator === "+"){
//    		number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
//    	} else if (operator === "-"){
//    		number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
//    	} else if (operator === "/"){
//    		number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
//    	} else if (operator === "*"){
//    		number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
//    	}
//        totaldiv.text(number);
//    	testNumLength(number);
//    	number = "0";
//    	newnumber = "0";
//   }
//    
//    
//    
//    $("#equals").click(equal);
});