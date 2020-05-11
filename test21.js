
function getAverage (a,b){

	var average = (a + b) / 2;
    console.log(average);
    return average;

}

var myResult = getAverage (8,9);


function logResult(){

    console.log("The average is " + myResult + " inside the function");

}

logResult();