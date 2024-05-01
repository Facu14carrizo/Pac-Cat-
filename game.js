function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var mundo = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 0, 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],


];
var mundoDict = {
    0: 'blank',
    1: 'pared',
    2: 'burguer',
    3: 'papitas',

}
var hamburguesas = 0;
var papas = 0;
var puntaje = 0;
var h = 0;
var p = 0;
console.log("puntaje= " + puntaje);

function dibujarMundo() {
    var output = "";
    for (var fila = 0; fila < mundo.length; fila++) {
        output += "<div class = 'fila'>"
        for (var x = 0; x < mundo[fila].length; x++) {
            output += "<div class = '" + mundoDict[mundo[fila][x]] + "'></div>"
            //mundoDict[mundo[fila][x]]
        }
        output += "</div>"
    }

    document.getElementById('mundo').innerHTML = output;

}
dibujarMundo();

var gato = {
    x: 1,
    y: 1,

}

function dibujarGato() {
    document.getElementById('gato').style.top = gato.y * 40 + 'px'
    document.getElementById('gato').style.left = gato.x * 40 + 'px'
}
dibujarGato();

var perro = {
    x: 9,
    y: 9,
}

function dibujaPerro() {
    document.getElementById('perro').style.top = perro.y * 40 + 'px'
    document.getElementById('perro').style.left = perro.x * 40 + 'px'
}

dibujaPerro();

function muevePerro() {
    if (perro.x < gato.x) {
        perro.x++;
    } else if (perro.x > gato.x) {
        perro.x--;
    }
    if (perro.y < gato.y) {
        perro.y++;
    } else if (perro.y > gato.y) {
        perro.y--;
    }
    if (mundo[perro.y][perro.x] === 1) {
        if (perro.x > 0 && mundo[perro.y][perro.x - 1] !== 1) {
            perro.x--;
        } else if (perro.x < mundo[0].length - 1 && mundo[perro.y][perro.x + 1] !== 1) {
            perro.x++;
        } else if (perro.y > 0 && mundo[perro.y - 1][perro.x] !== 1) {
            perro.y--;
        } else if (perro.y < mundo.length - 1 && mundo[perro.y + 1][perro.x] !== 1) {
            perro.y++;
        }
    }
}

var vidas = 3;
console.log("vidas= " + vidas);



document.onkeydown = function (e) {
    if (e.keyCode === 37) { //izquierda
        if (mundo[gato.y][gato.x - 1] !== 1) {
            gato.x--;
        }
    }
    if (e.keyCode === 38) { //arriba
        if (mundo[gato.y - 1][gato.x] !== 1) {
            gato.y--;
        }
    }
    if (e.keyCode === 39) { //derecha
        if (mundo[gato.y][gato.x + 1] !== 1) {
            gato.x++;
        }
    }
    if (e.keyCode === 40) { //abajo
        if (mundo[gato.y + 1][gato.x] !== 1) {
            gato.y++;
        }
    }
    if (mundo[gato.y][gato.x] === 2) {
        mundo[gato.y][gato.x] = 0;
        hamburguesas += 10;
        h += 1;
        console.log("puntaje= " + puntaje);
    }
    else if (mundo[gato.y][gato.x] === 3) {
        mundo[gato.y][gato.x] = 0;
        papas += 5;
        p += 1;
        console.log("puntaje= " + puntaje);
    }

    if ((gato.x === perro.x) && (gato.y === perro.y)) {
        vidas -= 1;
        console.log("vidas= " + vidas)
    }
    if (vidas === 0) {
        document.write("Game Over!</br>" + "Tus Hamburguesas= " + hamburguesas + "</br>Tus Papas= " + papas + "</br> Your puntaje= " + puntaje)
    }
    dibujarGato()
    dibujarMundo()
    document.getElementById('hamburguesas').innerText = "Hambuguesas: " + h;
    document.getElementById('papas').innerText = "Papas: " + p;
    document.getElementById('puntaje').innerText = "Puntaje: " + puntaje;
    puntaje = hamburguesas + papas;
}
function bucle() {
    dibujarGato();
    dibujaPerro();
    muevePerro();
    dibujaPerro();

    setTimeout(bucle, 750)
}
bucle();

document.getElementById('puntaje').innerText = puntaje;