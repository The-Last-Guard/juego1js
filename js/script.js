document.getElementById('player').addEventListener("mouseover", sumarpuntos)

puntos = 0;
tiempo = 60;
nesesarios = 30;

function sumarpuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "puntos: <b>" + puntos +"/"+ nesesarios + "</b>";
    randNum1 = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop = randNum1 + "px"
    document.getElementById("player").style.marginLeft = randNum2 + "px"

    if (puntos == nesesarios){
        alert("ganaste")
    }
}

function restarTiempo(){
    tiempo -- ;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;tiempo: <b>" + tiempo + "</b>";
    if (tiempo == 0)
    {
        alert("perdiste");
        tiempo = 60;
        puntos = 0;
    }
}

setInterval(restarTiempo,1000)