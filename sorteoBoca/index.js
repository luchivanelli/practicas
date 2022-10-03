let button = document.querySelector(".form-button")
let textarea = document.querySelector(".participants-input")
let amountWinners = document.querySelector(".winners-input")
let winnersSection = document.querySelector(".winners-section")

let array = [];
let array2 = [];
let winners = [];
let winnersName = [];
let count = 0;

let div = document.createElement("DIV")
div.classList = "winners-name"

getParticipants = ()=> {
    let participants = textarea.value  //obteniendo participantes
    if (participants == "") {
        return false    //si no se agregan participantes, retornar "falso", y que se termine la funcion
    }
    let name = ""
    for (let index = 0; index < participants.length; index++) {  
        if (participants[index] != "\n") {
            name += participants[index]  //agregando cada caracter a la variable "name"
        } else {
            array.push(name)  //si se encuntra una coma, agregar "name" al array
            count++  //aumentar contador de participantes
            name = ""  //vaciando la variable
        }  
    }
    // al final del texto, no se agregará una coma, 
    // por lo tanto se terminará el ciclo sin haber agregado el ultimo participante
    // y sin haber aumentado el contador. Entonces:
    array.push(name)  
    count++
}

getTitle = ()=> {
    let title = document.getElementById("title-input").value
    lotteryTitle = title //otorgamos el valor de "title" a otra variable porque sino aparece como vacia
    return lotteryTitle
}

getWinner = (min,max)=> {
    numRandom = Math.floor(Math.random() * (max - min)) + min; //obteniendo numero aleatorio
    return numRandom
}

showWinner = ()=> {
    let p2 = document.createElement("P")
    p2.classList = "p2"
    p2.innerHTML= `Ganador/es <br>`
    for (let i=0; i<winnersName.length;i++) {
        p2.innerHTML+= `${i+1}° premio: <b>${winnersName[i]}</b> <br>`
    }
    div.appendChild(p2)  
    window.scroll({ 
        top: 460,
        behavior: 'smooth'
    });
}


button.addEventListener("click", (e)=> {
    e.preventDefault()
    let res = getParticipants()
    if (res == false) {
        alert("No se han agregado participantes")
    } else {
        let amount = amountWinners.value
        array2 = array

        for (let i=0; i<amount;i++) {
            winners[i]= getWinner(0,array2.length-1)  //se guardan las posiciones de los ganadores
            winnersName[i] = array2[winners[i]]   // se guardan los nombres de los ganadores
            // array2 = array2.slice(numRandom, numRandom+1)
        }

        title = getTitle()
        if (title == "") {
            title = "Sin título"
        }

        let p1 = document.createElement("P")
        p1.classList = "p1"
        p1.innerHTML = `Participantes: <b>${count}</b><br><b>${title}</b> se está realizando. <br> Espere 5 segundos...`
        div.appendChild(p1)
        winnersSection.appendChild(div)
        winnersSection.style.display = "flex"
        winnersSection.style.animation= "aparecer 1s forwards"

        window.scroll({  //deslizar pantalla 260px hacia abajo
            top: 260,
            behavior: 'smooth'
        });

        let counterP = document.createElement("P")
        counterP.classList = "counter"

        let i = 5;
        let interval = setInterval(()=> {
            counterP.textContent= i--
            div.appendChild(counterP)
            if (i===-1){
                counterP.textContent= ""
                counterP.classList = "counter-end"
                p1.textContent = ""
                p1.classList = "counter-end"
                
                clearInterval(interval)
            }
        }, 1000)
    
        window.setTimeout(showWinner, 6000) //se ejecutará showWiner despues de 5 segundos
    }
    
})