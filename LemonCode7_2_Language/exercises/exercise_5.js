
class SlothMachine {
    
    constructor() {
        this.coins = 0;
    }

    play() {
        this.coins++;

        if ( Math.random() >= 0.5 && Math.random() >= 0.5 && Math.random() >= 0.5 ){
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        }else{
            console.log("Good luck next time!!")
        }
    }
}

/* Ejercicio 5 */

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play(); 
machine1.play();