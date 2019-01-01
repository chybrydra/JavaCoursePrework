function writeLoop(){
    var number1 = document.getElementById("field1").value;
    var number2 = document.getElementById("field2").value; 
    var number1asInt = parseInt(number1);
    var number2asInt = parseInt(number2);
    
    regex = /[0-9]+/;

    if (number1.match(regex) && number2.match(regex)) {
        if (number2asInt < number1asInt) {
            document.getElementById("result").innerHTML = "Second number must be bigger than the first one!";    
        } else {             
            var finalString = "";
            for (i=number1asInt ; i <= number2asInt ; i++){
                finalString = finalString + i + "<br />";
            }                
            document.getElementById("result").innerHTML = finalString;
        } 
    } else {
        document.getElementById("result").innerHTML = "Wrong data format!";
    }

}