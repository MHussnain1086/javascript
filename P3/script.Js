var math = parseInt( prompt("Enter Your Math Number"));
var english = parseInt(prompt("Enter Your English Number"));
var physics = parseInt(prompt("Enter Your Physics Number"));
var result = math + english + physics ;
var average = result/3;

if(average > 80)
{
    console.log("You are Above Standerd, Admission Granted With Percentage of", average);
    alert("You are Above Standerd, Admission Granted");
}
else{
    console.log("Your Admission Faild with percentage of", average);
    alert("Your Admission Faild")
};