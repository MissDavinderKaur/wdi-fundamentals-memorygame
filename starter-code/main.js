/* var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var theGameBoard = document.getElementById('game-board');

	function createBoard()
	{
		for (var i = 0; i<cards.length; i++)
		{
			var newDiv = document.createElement('div');
		 	newDiv.className = 'card';
		 	newDiv.setAttribute('data-card', cards[i]);
		 	newDiv.addEventListener('click', isTwoCards);
		 	theGameBoard.appendChild(newDiv);	
		}
	}

	function isTwoCards()
	{
		cardsInPlay.push(this.getAttribute('data-card'));
		if (cardsInPlay.length === 2)
		{
			isMatch(cardsInPlay);
			cardsInPlay = [];
		}
	}

	function isMatch(cardsInPlay)
	{
		if (cardsinPlay[0] === cardsInPlay[1])
		{
			alert ("You have found a match");
		}
		else
		{
			alert ("Sorry, try again");
		}
	}

	createBoard();



/* if (cardTwo === cardFour || cardTwo === cardThree)
{
	alert("Sorry, try again");
}
else if (cardTwo === cardOne)
{
	alert("You have found a match!")
} */
/* console.log("JS file is connected to HTML! Woop!")*/