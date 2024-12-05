

    function rollDice() {

        // For Player-1


    let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

    let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
    
    let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
    
    let image1 = document.querySelectorAll("img")[0];
    
    image1.setAttribute("src", randomImageSource)
    
    // For Player-2
    
    let randomNumber2 = Math.floor(Math.random() * 6) + 1; 
    
    let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
    
    //If Player 1 or 2 wins
    
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!🏆"; // Change h1 text
        document.querySelector("h1").style.color = "#af2424fb"; // Change h1 color
        document.body.style.backgroundColor = "#0000ff"; // Change page background color
        document.querySelectorAll("p")[0].style.color = "#fefae0"; // Change the paragraph color like h1
        document.querySelectorAll("p")[0].textShadow = '0 0 30px #fefae0'; // Add a glow to the paragraph

        document.querySelectorAll("p")[1].style.color = "";
        document.querySelectorAll("p")[1].style.textShadow = '';
    }
     
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🥇"; // Change h1 text
        document.querySelector("h1").style.color = "#0000ff"; // Change h1 color
        document.body.style.backgroundColor = "#5d3891"; // Change page background color
        document.querySelectorAll("p")[0].style.color = "#ffddd2"; // Change the paragraph color like h1
        document.querySelectorAll("p")[0].textShadow = '0 0 30px #ffddd2'; // Add a glow to the paragraph

        document.querySelectorAll("p")[1].style.color = "";
        document.querySelectorAll("p")[1].style.color = '';
    }
    
    else {
        document.querySelector("h1").innerHTML = "Draw!🫂";
        document.querySelector("h1").style.color = "#140614"; // Change h1 color
        document.body.style.backgroundColor = "#b8860b"; // Change h1 color
        document.querySelectorAll("p")[0].style.color = "";
        document.querySelectorAll("p")[0].style.textShadow = '';
        document.querySelectorAll("p")[1].style.color = "";
        document.querySelectorAll("p")[1].style.textShadow = '';
    }
        
    }
    
    let button = document.querySelector("button"); 
    button.addEventListener("click", rollDice);
    

	
   

