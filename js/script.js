// ORA GENERIAMO LE CASELLE IN BASE AL NUMERO 

const btnStart = document.querySelector("button");

// IMPLEMENTIAMO IL GIOCO AL CLICK
btnStart.addEventListener("click", function() {
    const userChoise = document.getElementById("difficoltà");
    const userChoiseInput = userChoise.value;
    console.log(userChoise);
    // NUMERO DI BOMBE
    

    const gridElem = document.querySelector(".grid");
    // PRIMO IF PER LA SCELTA DELLA MODALITA' FACILE
    
    

    

    if (userChoiseInput === "facile") {
        const bombNumber = 16;
        const bombs = generateBombs(100 ,bombNumber);
        console.log(bombs);
        // GENERIAMO I NUMERI PER CASELLA
        function getEasyBox () {
            gridElem.innerHTML = "";
            for (let i = 1; i <= 100; i++) {
                const grid = generateNewBox(i);
                grid.addEventListener("click", colorClick);
                gridElem.append(grid);
            }
        }
        getEasyBox()
        // CREIAMO LA FUNZIONE PER IL BOX
        function generateNewBox(testo) {
            const newBox = document.createElement("div");
            newBox.classList.add ("grid-item");
            newBox.classList.add ("easy");
            newBox.innerHTML = `<span>${testo}</span>`;
            return newBox;
        }
       
        let score = 0
        const scoreArray = []
        const maxScore = 100 - bombNumber
        console.log(maxScore);

        function colorClick() {
            const clickNumber = parseInt(this.textContent)
            // BOX NON BOMBA
            if (!bombs.includes(clickNumber)){
                this.classList.add("azure");
                this.removeEventListener("click", colorClick)
                scoreArray.push();
                score ++
                if (maxScore === score){
                    alert("Hai vinto")
                    alert("Il tuo punteggio è " + score)
                }
            } else {
                this.classList.add ("red");
                console.log("BOMBA!")
                alert("Hai preso un bomba")
                alert("il tuo punteggio è " + score)
                window.location.reload()
            }
        }    
    } 
    // ORA IMPLEMENTIAMO LA SCELTA DELLA MODALITA' NORMALE
    else if (userChoiseInput === "normale") {
        const bombNumber = 16
        const bombs = generateBombs(81 ,bombNumber);
        console.log(bombs);
        // btnStart.addEventListener("click", getMediumBox)
    
        // GENERIAMO I NUMERI PER CASELLA
        function getMediumBox () {
            gridElem.innerHTML = "";
            for (let i = 1; i <= 81; i++) {
                const grid = generateNewBox(i);
                grid.addEventListener("click", colorClick);
                gridElem.append(grid);
            }
        }
        getMediumBox()
        // CREIAMO LA FUNZIONE PER IL BOX
        function generateNewBox(testo) {
            const newBox = document.createElement("div");
            newBox.classList.add ("grid-item");
            newBox.classList.add ("medium");
            newBox.innerHTML = `<span>${testo}</span>`;
            return newBox;
        }

        let score = 0
        const scoreArray = []
        const maxScore = 81 - bombNumber
        console.log(maxScore);

        function colorClick() {
            const clickNumber = parseInt(this.textContent)
            // BOX NON BOMBA
            if (!bombs.includes(clickNumber)){
                this.classList.add("azure");
                this.removeEventListener("click", colorClick)
                scoreArray.push();
                score ++
                if (maxScore === score){
                    alert("Hai vinto")
                    alert("Il tuo punteggio è " + score)
                }
            } else {
                this.classList.add ("red");
                console.log("BOMBA!")
                alert("Hai preso un bomba")
                alert("il tuo punteggio è " + score)
                window.location.reload()
            }
            
            console.log(clickNumber);
        }
    }
    // IMPLEMENTIAMO LA SCELTA DELLA MODALITA' DIFFICILE 
    else if (userChoiseInput === "difficile"){
        const bombNumber = 16
        const bombs = generateBombs(49 ,bombNumber);
        console.log(bombs);
        // btnStart.addEventListener("click", getHardBox)
    
        // GENERIAMO I NUMERI PER CASELLA
        function getHardBox () {
            gridElem.innerHTML = "";
            for (let i = 1; i <= 49; i++) {
                const grid = generateNewBox(i);
                grid.addEventListener("click", colorClick);
                gridElem.append(grid);
            }
        }
        getHardBox()
        // CREIAMO LA FUNZIONE PER IL BOX
        function generateNewBox(testo) {
            const newBox = document.createElement("div");
            newBox.classList.add ("grid-item");
            newBox.classList.add ("hard");
            newBox.innerHTML = `<span>${testo}</span>`;
            return newBox;
        }

        let score = 0
        const scoreArray = []
        const maxScore = 49 - bombNumber
        console.log(maxScore);

        function colorClick() {
            const clickNumber = parseInt(this.textContent)
            // BOX NON BOMBA
            if (!bombs.includes(clickNumber)){
                this.classList.add("azure");
                this.removeEventListener("click", colorClick)
                scoreArray.push();
                score ++
                if (maxScore === score){
                    alert("Hai vinto")
                    alert("Il tuo punteggio è " + score)
                }
            } else {
                this.classList.add ("red");
                console.log("BOMBA!")
                alert("Hai preso un bomba")
                alert("il tuo punteggio è " + score)
                window.location.reload()
            }
        }    
    }
    // RIPULISCO I CAMPI PER NON RICLICCARE IL BOTTONE
    userChoise.value = ""

    // FUNZIONE PER IL CLICK SULLA CASELLA
    
})


function generateBombs(maxNumber, numbersQuantity) {

    const bombArray = [];
    console.log(numbersQuantity);
    while(bombArray.length < numbersQuantity) {
        const rndNumber = getRndNumber(1, maxNumber)
        
        if(!bombArray.includes(rndNumber)) {
            bombArray.push(rndNumber)
        }
    }

    return bombArray 
}

function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// CREIAMO L'ALERT PER IL PUNTEGGIO



