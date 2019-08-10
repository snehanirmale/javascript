
var randomno = Math.floor(Math.random()*6)+1;
var guess = parseInt(prompt("enter no. 1 to 6"));

if(randomno === guess)
  {
    document.write("guess is right");
   }
else if(guess < randomno)
  {
    guess = parseInt(prompt("enter smaller number"));
  }
  
 if(randomno == guess)
   {
    alert("got right no.");
   }
   
 else if(guess > randomno)
   {
    guess = parseInt(prompt("enter smaller number"));
	}
if(randomno == guess)
  {
    alert("got right no.");
   }
else
   {  
      document.write("try it again");
   } 












