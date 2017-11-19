$(function(){
    // variables 
    
    var number = "";
    var firstNumber = "";
    var operator = "";
    var screenText = $('.display');
    screenText.text("0");
    var result;
    
    // functions 
    
    function add(a, b){
        result = a + b;
        return result;
    }
    function subtract(a,b){
        result = a - b; 
        return result;
    }
    function multiply(a,b){
        result = a * b;
        return result;
    }
    function divide(a,b){
        result = a / b;
        return result;
    }
    
    function testNumLength(n){
        if(n.length > 9){
            var str = n.substr(n.length - 9, 9);
            screenText.text(str);
        }
        if(n.length > 15){
            number = "";
            screenText.text("Err. Too many numbers...");
        }
    }
    
    // click events
    
    $('.numbers > a').not('#clear, #clearAll').click(function(){
        number = number + $(this).html();
        screenText.text(number);
        testNumLength(number);
    });
    
    $('.operators > a').not('#equals').click(function(){
       operator = operator + $(this).html();
        firstNumber = number;
        number = "";
        screenText.text("0");
    });
    
    $('#equals').click(function(){
        var total;
        number = parseFloat(number, 10);
        firstNumber = parseFloat(firstNumber, 10);
        
        if(operator == "+"){
            total = add(firstNumber, number);
        }
        else if(operator == "-"){
            total = subtract(firstNumber, number);
        }
        else if(operator == "*"){
            total = multiply(firstNumber, number);
        }
        else if(operator == "/"){
            total = divide(firstNumber, number);
        }
        else{
            screenText.text("Did you forget the operator...");
        }
        
        total = total.toString(10);
        screenText.text(total);
        number = "";
        firstNumber = "";
    });
    
    $('#clear').click(function(){
        number = "";
        screenText.text("0");
    });
    $('#clearAll').click(function(){
        number = "";
        firstNumber = "";
        screenText.text("0");
    })
});