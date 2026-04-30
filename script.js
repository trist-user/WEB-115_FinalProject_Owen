let infoBook = document.getElementById("diseases-info")
let book = document.getElementById("book-display-section")
let bookBtns = document.getElementById("book-buttons-section") 

let pg1 = document.createElement("p")
pg1.id = "1"
pg1.innerHTML = `<strong>Norovirus</strong>: <br>
Virus that spreads via close contact, contaminated food, and contaminated surfaces. <br>
symptoms include vomitting, diarrhea, and stomach pain <br>
 typically lasts 1 to 3 days <br>`

 let pg2 = document.createElement("p")
 pg1.id = "2"
 pg2.innerHTML = `<strong>Flu</strong> <br>
 Virus that spreads via contaminated surface, close contact, and droplet transmission. <br>
 symptoms incluse fever, cough, and congestion <br>
 typically lasts a few days to a few weeks <br>`

 let pg3 = document.createElement("p")
 pg1.id = "3"
 pg3.innerHTML = `<strong> RSV </strong> <br>
 Virus that spreads via contaminated surface, close contact, and droplet transmission. <br>
 symptoms incluse fever, cough, and congestion <br>
 typically lasts 1 to 2 weeks <br>`

let pg4 = document.createElement("p")
pg1.id = "4"
pg4.innerHTML = `<strong> tuberculosis </strong> <br>
Infection that spreads via person with active TB lung infection. <br>
 symptoms incluse chest pain, fatigue, and cough <br>
 typically lasts 6 to 9 months <br>`

let pg5 = document.createElement("p")
pg1.id = "5"
pg5.innerHTML = `<strong> E. coli </strong> <br>
Infection that spreads via contaminated food and contaminated surfaces. <br>
 symptoms incluse vomitting, diarrhea, and stomach pain <br>
 typically lasts 5 to 10 days <br>`


let nextpg = document.createElement("button")
nextpg.innerHTML = "Next Page"
let backpg = document.createElement("button")
backpg.innerHTML = "Back 1 Page"

infoBook.addEventListener("click", ()=>{
    if(book.firstChild == null){
        book.appendChild(pg1)
    bookBtns.appendChild(nextpg)
    bookBtns.appendChild(backpg)
    }
})

nextpg.addEventListener("click", ()=>{
    switch (book.firstElementChild){
        case pg1:
            book.removeChild(pg1)
            book.appendChild(pg2)
            break;
        case pg2:
            book.removeChild(pg2)
            book.appendChild(pg3)
            break;
        case pg3:
            book.removeChild(pg3)
            book.appendChild(pg4)
            break;
        case pg4:
            book.removeChild(pg4)
            book.appendChild(pg5)
            break;
        
    }
})

backpg.addEventListener("click", ()=>{
    switch (book.firstElementChild){
        case pg1:
            break;
        case pg2:
            book.removeChild(pg2)
            book.appendChild(pg1)
            break;
        case pg3:
            book.removeChild(pg3)
            book.appendChild(pg2)
            break;
        case pg4:
            book.removeChild(pg4)
            book.appendChild(pg3)
            break;
        case pg5:
            book.removeChild(pg5)
            book.appendChild(pg4)
            break;
    }
})

class Disease{
    constructor(name, type, spread, symptoms, duration){
        this.name = name 
        this.type = type
        this.spread = spread
        this.symptoms = symptoms
        this.duration = duration
    }

}

class TestResults extends Disease{
    constructor(...args){
        super(...args)
    }

}
let norovirus = new Disease("norovirus", "virus", ["close contact", "contaminated food", "contaminated surfaces"],["vomitting", "diarrhea","stomach pain"],"1-3 days")
let flu = new Disease("flu","virus", ["close contact","contaminated surfaces","droplet transmission"],["fever", "cough","congestion"],"a few days or weeks")
let rsv = new Disease("rsv", "virus", ["close contact", "contaminated surfaces","droplet transmission"],["fever", "cough","congestion"],"1-2 weeks")
let tuberculosis = new Disease("tuberculosis", "infection", ["people with active lung infection"],["chest pain", "cough","fatigue"],"6-9 months")
let eColi = new Disease("e-coli", "infection", [ "contaminated food", "contaminated surfaces"],["vomitting", "diarrhea","stomach pain"],"5-10 days")

let potDiseases = [norovirus, flu, rsv, tuberculosis, eColi]
let enemyDisease = potDiseases[Math.floor(Math.random()* potDiseases.length)]

let startButton = document.getElementById("start") 


let starterInfo = document.getElementById("gameinfo");
startButton.addEventListener("click", ()=>{
    starterInfo.hidden = true
    startButton.hidden = true
})

function draw(){
    let test = document.createElement("canvas")
    const context = test.getContext("2d")

    context.fillStyle = "rgb(200 0 0)"
    context.fillRect(10, 10, 50, 50)
}
draw()