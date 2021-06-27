let tempo = document.getElementById('tempo')
let pausa = document.getElementById('pausa')
let sessoes = document.getElementById('sessoes')
let segundos

var bell = new Audio("./audio/inicio.mp3")
var volta = new Audio("./audio/intervalo.mp3")
var final = new Audio("./audio/final.mp3")

var pause = document.getElementById('pause')
var play = document.getElementById('play')

function iniciar(){
    if(tempo.value == 0){
        document.getElementById('erro_tempo').innerHTML="Adicione os minutos"
        tempo.focus()
    } 
    else if(pausa.value==0){
        document.getElementById('erro_pausa').innerHTML="Adicione a pausa"
        pausa.focus()
    }
    else if(sessoes.value==0){
        document.getElementById('erro_sessoes').innerHTML="Adicione as sessões"
        sessoes.focus()
    }
    else{
        pause.style.setProperty('display','block','important')
    }
}