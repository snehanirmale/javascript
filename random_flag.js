var correctans= false;
var randomno = Math.floor(Math.random()*6)+1;
console.log(randomno);
var guess = parseInt(prompt("please enter the number 1 to 6"));
if(randomno === guess)
  {
   correctans= true;
  }
  else if(guess < randomno)
  {
    guess =parseInt(prompt("enter smaller number"));
  }
	if(randomno == guess)
	 {
	   correctans= true;
	 }
    else if(guess > randomno)
     {
	  guess = parseInt(prompt("enter smaller number"));
	 }
	 if(randomno == guess)
	  {
	    correctans= true;
	  }
	  if(correctans)
	   {
	     alert("got it right answer");
	   }
	 else
	  {
	    document.write("got it wrong");
	  }