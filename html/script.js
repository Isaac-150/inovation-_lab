var name=prompt("Enter your name")
if (!name) {
 console.log("invalid")   
}
else if(isNaN(name)||typeof(parseInt(name))=='number')  
{
console.log("your name contains number ")
}
console.log(name)