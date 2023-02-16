console.log('bienvenido al sistema de reservas');
var hoy = new Date;
var DateTime = luxon.DateTime;
const dt = DateTime.local(2017, 5, 15, 8, 30);
const now = DateTime.now();



//array de las reservas 
let reservas =
    [{ id: 00, fecha: "2022-03-01", hora: "10:00", estado: 1, rut: 00, nombre: "carlos", celular: 123456789, estilista: "omar" },
    { id: 01, fecha: "2022-03-01", hora: "11:00", estado: 1, rut: 01, nombre: "carla", celular: 234567890, estilista: "omar" },];
let auxReservas = reservas;

//La fecha es de tipo Date
const miFecha = new Date();

let d = new Date();
let day = d.getDate();
if (day < 10) {
    day = "0" + day;
}
let mon = d.getMonth() + 1;
if (mon < 10) {
    mon = "0" + mon;
}
else { mon = "1" + mon; }
let yea = d.getFullYear();

d = yea + "-" + mon + "-" + day;
console.log(d);

document.getElementById('fechaLux').value = DateTime.now().toFormat('yyyy-MM-dd');
document.getElementById('fechaLux').min = DateTime.now().toFormat('yyyy-MM-dd');
document.getElementById('fechaLux').max = DateTime.now().plus({ days: 30 }).toISODate();



var reserve = {
    // (A) INIT
    init: () => {
        // (A1) GET LAYOUT WRAPPER
        let layout = document.getElementById("layout");

        // (A2) GENERATE horas
        for (let i = 65; i <= 65; i++) {
            for (let j = 10; j <= 17; j++) {
                let seat = document.createElement("div");
                seat.innerHTML = j;
                seat.className = "seat";
                seat.onclick = () => { reserve.toggle(seat); };
                layout.appendChild(seat);
            }
        }

        // (A3) RANDOM TAKEN 
        let all = document.querySelectorAll("#layout .seat"),
            len = all.length - 1, rnd = [];
        while (rnd.length != 2) {
            let r = Math.floor(Math.random() * len);
            if (!rnd.includes(r)) { rnd.push(r); }
        }
        for (let i of rnd) {
            all[i].classList.add("taken");
            all[i].onclick = "";
        }
    },

    // (B) CHOOSE THIS hour
    toggle: (seat) => {
        seat.classList.toggle("selected");
    },

    // (C) SAVE RESERVATION
    save: () => {
        // (C1) GET SELECTED SEATS
        let selected = document.querySelectorAll("#layout .selected");

        // (C2) ERROR!
        if (selected.length == 0) { alert("Debe seleccionar una hora."); }

        // (C3) SELECTED SEATS
        else {
            // (C3-1) GET SELECTED SEAT NUMBERS
            let seats = [];
            for (let s of selected) { seats.push(s.innerHTML); }

            // (C3-2) DO SOMETHING WITH IT...
            alert(JSON.stringify(seats));
        }
    }
};

window.addEventListener("DOMContentLoaded", reserve.init);

/*


let fecha = document.getElementById('fecha');
let calOmar = [
    ["0", "0", "0", "0", "0", "1"], //a la hora d elas 9 el día
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"]];
let calGuido = [
    ["z", "0", "0", "0", "0", "0"],
    ["0", "1", "0", "0", "0", "0"],
    ["0", "0", "1", "0", "0", "0"],
    ["0", "0", "0", "1", "0", "0"],
    ["0", "0", "0", "0", "1", "0"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "1", "0"],
    ["0", "0", "0", "1", "0", "0"],
    ["0", "0", "1", "0", "0", "0"]];
let calMario = [
    ["1", "0", "0", "0", "0", "0"],
    ["1", "0", "0", "0", "0", "0"],
    ["1", "0", "0", "0", "0", "0"],
    ["1", "0", "0", "0", "0", "0"],
    ["1", "0", "0", "0", "0", "0"],
    ["1", "0", "0", "0", "0", "0"],
    ["1", "0", "0", "0", "0", "0"],
    ["1", "0", "0", "0", "0", "0"],
    ["1", "1", "1", "1", "1", "1"]];

let auxCal = [
    ["1", "1", "1", "1", "1", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "1"]];


var reloj = document.getElementById('reloj');
var reloj1 = document.getElementById('reloj');
var reloj2 = document.getElementById('reloj');
var reloj3 = document.getElementById('reloj');
var reloj4 = document.getElementById('reloj');
var reloj5 = document.getElementById('reloj');
var reloj6 = document.getElementById('reloj');
var d0109 = document.getElementById('d0109');

setInterval(function () {
    var data = new Date();
    data.setDate((data.getDate() + 00));
    document.getElementById('reloj').innerHTML = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    data.setDate((data.getDate() + 00));
    document.getElementById('reloj1').innerHTML = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    data.setDate((data.getDate() + 01));
    document.getElementById('reloj2').innerHTML = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    data.setDate((data.getDate() + 01));
    document.getElementById('reloj3').innerHTML = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    data.setDate((data.getDate() + 01));
    document.getElementById('reloj4').innerHTML = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    data.setDate((data.getDate() + 01));
    document.getElementById('reloj5').innerHTML = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    data.setDate((data.getDate() + 01));
    document.getElementById('reloj6').innerHTML = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    console.log(data.toDateString());

    var stilCal = document.getElementById("stilCal").value; //veo el número del estilista seleccionado
    document.getElementById('d0617').innerHTML = stilCal;

    var d0109 = document.getElementById("d0109");
    var d0110 = document.getElementById("d0110");
    var d0111 = document.getElementById("d0111");
    var d0112 = document.getElementById("d0112");
    var d0113 = document.getElementById("d0113");
    var d0115 = document.getElementById("d0115");
    var d0116 = document.getElementById("d0116");
    var d0117 = document.getElementById("d0117");

    var d0209 = document.getElementById("d0209");
    var d0210 = document.getElementById("d0210");
    var d0211 = document.getElementById("d0211");
    var d0212 = document.getElementById("d0212");
    var d0213 = document.getElementById("d0213");
    var d0215 = document.getElementById("d0215");
    var d0216 = document.getElementById("d0216");
    var d0217 = document.getElementById("d0217");

    var d0309 = document.getElementById("d0309");
    var d0310 = document.getElementById("d0310");
    var d0311 = document.getElementById("d0311");
    var d0312 = document.getElementById("d0312");
    var d0313 = document.getElementById("d0313");
    var d0315 = document.getElementById("d0315");
    var d0316 = document.getElementById("d0316");
    var d0317 = document.getElementById("d0317");

    var d0409 = document.getElementById("d0409");
    var d0410 = document.getElementById("d0410");
    var d0411 = document.getElementById("d0411");
    var d0412 = document.getElementById("d0412");
    var d0413 = document.getElementById("d0413");
    var d0415 = document.getElementById("d0415");
    var d0416 = document.getElementById("d0416");
    var d0417 = document.getElementById("d0417");

    var d0509 = document.getElementById("d0509");
    var d0510 = document.getElementById("d0510");
    var d0511 = document.getElementById("d0511");
    var d0512 = document.getElementById("d0512");
    var d0513 = document.getElementById("d0513");
    var d0515 = document.getElementById("d0515");
    var d0516 = document.getElementById("d0516");
    var d0517 = document.getElementById("d0517");

    var d0609 = document.getElementById("d0609");
    var d0610 = document.getElementById("d0610");
    var d0611 = document.getElementById("d0611");
    var d0612 = document.getElementById("d0612");
    var d0613 = document.getElementById("d0613");
    var d0615 = document.getElementById("d0615");
    var d0616 = document.getElementById("d0616");
    var d0617 = document.getElementById("d0617");

    if (stilCal == '1') { calOmar = auxCal; }
    if (stilCal == '2') { calOmar = calMario; }
    if (stilCal == '3') { calOmar = calGuido; }

    d0109 = calOmar[0][0];
    if (calOmar[0][0] == '0') { d0109 = "Disponible"; }
    else { d0109 = "Ocupada"; }
    document.getElementById('d0109').innerHTML = d0109;
    d0110 = calOmar[1][0];
    if (calOmar[1][0] == '0') { d0110 = "Disponible"; }
    else { d0110 = "Ocupada"; }
    document.getElementById('d0110').innerHTML = d0110;
    d0111 = calOmar[2][0];
    if (calOmar[2][0] == '0') { d0111 = "Disponible"; }
    else { d0111 = "Ocupada"; }
    document.getElementById('d0111').innerHTML = d0111;
    d0112 = calOmar[3][0];
    if (calOmar[3][0] == '0') { d0112 = "Disponible"; }
    else { d0112 = "Ocupada"; }
    document.getElementById('d0112').innerHTML = d0112;
    d0113 = calOmar[4][0];
    if (calOmar[4][0] == '0') { d0113 = "Disponible"; }
    else { d0113 = "Ocupada"; }
    document.getElementById('d0113').innerHTML = d0113;
    d0115 = calOmar[5][0];
    if (calOmar[5][0] == '0') { d0115 = "Disponible"; }
    else { d0115 = "Ocupada"; }
    document.getElementById('d0115').innerHTML = d0115;
    d0116 = calOmar[6][0];
    if (calOmar[6][0] == '0') { d0116 = "Disponible"; }
    else { d0116 = "Ocupada"; }
    document.getElementById('d0116').innerHTML = d0116;
    d0117 = calOmar[7][0];
    if (calOmar[7][0] == '0') { d0117 = "Disponible"; }
    else { d0117 = "Ocupada"; }
    document.getElementById('d0117').innerHTML = d0117;

    d0209 = calOmar[0][1];
    if (calOmar[0][1] == '0') { d0209 = "Disponible"; }
    else { d0209 = "Ocupada"; }
    document.getElementById('d0209').innerHTML = d0209;
    d0210 = calOmar[1][1];
    if (calOmar[1][1] == '0') { d0210 = "Disponible"; }
    else { d0210 = "Ocupada"; }
    document.getElementById('d0210').innerHTML = d0210;
    d0211 = calOmar[2][1];
    if (calOmar[2][1] == '0') { d0211 = "Disponible"; }
    else { d0211 = "Ocupada"; }
    document.getElementById('d0211').innerHTML = d0211;
    d0212 = calOmar[3][1];
    if (calOmar[3][1] == '0') { d0212 = "Disponible"; }
    else { d0212 = "Ocupada"; }
    document.getElementById('d0212').innerHTML = d0212;
    d0213 = calOmar[4][1];
    if (calOmar[4][1] == '0') { d0213 = "Disponible"; }
    else { d0213 = "Ocupada"; }
    document.getElementById('d0213').innerHTML = d0213;
    d0215 = calOmar[5][1];
    if (calOmar[5][1] == '0') { d0215 = "Disponible"; }
    else { d0215 = "Ocupada"; }
    document.getElementById('d0215').innerHTML = d0215;
    d0216 = calOmar[6][1];
    if (calOmar[6][1] == '0') { d0216 = "Disponible"; }
    else { d0216 = "Ocupada"; }
    document.getElementById('d0216').innerHTML = d0216;
    d0217 = calOmar[7][1];
    if (calOmar[7][1] == '0') { d0217 = "Disponible"; }
    else { d0217 = "Ocupada"; }
    document.getElementById('d0217').innerHTML = d0217;

    d0309 = calOmar[0][2];
    if (calOmar[0][2] == '0') { d0309 = "Disponible"; }
    else { d0309 = "Ocupada"; }
    document.getElementById('d0309').innerHTML = d0309;
    d0310 = calOmar[1][2];
    if (calOmar[1][2] == '0') { d0310 = "Disponible"; }
    else { d0310 = "Ocupada"; }
    document.getElementById('d0310').innerHTML = d0310;
    d0311 = calOmar[2][2];
    if (calOmar[2][2] == '0') { d0311 = "Disponible"; }
    else { d0311 = "Ocupada"; }
    document.getElementById('d0311').innerHTML = d0311;
    d0312 = calOmar[3][2];
    if (calOmar[3][2] == '0') { d0312 = "Disponible"; }
    else { d0312 = "Ocupada"; }
    document.getElementById('d0312').innerHTML = d0312;
    d0313 = calOmar[4][2];
    if (calOmar[4][2] == '0') { d0313 = "Disponible"; }
    else { d0313 = "Ocupada"; }
    document.getElementById('d0313').innerHTML = d0313;
    d0315 = calOmar[5][2];
    if (calOmar[5][2] == '0') { d0315 = "Disponible"; }
    else { d0315 = "Ocupada"; }
    document.getElementById('d0315').innerHTML = d0315;
    d0316 = calOmar[6][2];
    if (calOmar[6][2] == '0') { d0316 = "Disponible"; }
    else { d0316 = "Ocupada"; }
    document.getElementById('d0316').innerHTML = d0316;
    d0317 = calOmar[7][2];
    if (calOmar[7][2] == '0') { d0317 = "Disponible"; }
    else { d0317 = "Ocupada"; }
    document.getElementById('d0317').innerHTML = d0317;

    d0409 = calOmar[0][3];
    if (calOmar[0][3] == '0') { d0409 = "Disponible"; }
    else { d0409 = "Ocupada"; }
    document.getElementById('d0409').innerHTML = d0409;
    d0410 = calOmar[1][3];
    if (calOmar[1][3] == '0') { d0410 = "Disponible"; }
    else { d0410 = "Ocupada"; }
    document.getElementById('d0410').innerHTML = d0410;
    d0411 = calOmar[2][3];
    if (calOmar[2][3] == '0') { d0411 = "Disponible"; }
    else { d0411 = "Ocupada"; }
    document.getElementById('d0411').innerHTML = d0411;
    d0412 = calOmar[3][3];
    if (calOmar[3][3] == '0') { d0412 = "Disponible"; }
    else { d0412 = "Ocupada"; }
    document.getElementById('d0412').innerHTML = d0412;
    d0413 = calOmar[4][3];
    if (calOmar[4][3] == '0') { d0413 = "Disponible"; }
    else { d0413 = "Ocupada"; }
    document.getElementById('d0413').innerHTML = d0413;
    d0415 = calOmar[5][3];
    if (calOmar[5][3] == '0') { d0415 = "Disponible"; }
    else { d0415 = "Ocupada"; }
    document.getElementById('d0415').innerHTML = d0415;
    d0416 = calOmar[6][3];
    if (calOmar[6][3] == '0') { d0416 = "Disponible"; }
    else { d0416 = "Ocupada"; }
    document.getElementById('d0416').innerHTML = d0416;
    d0417 = calOmar[7][3];
    if (calOmar[7][3] == '0') { d0417 = "Disponible"; }
    else { d0417 = "Ocupada"; }
    document.getElementById('d0417').innerHTML = d0417;

    d0509 = calOmar[0][4];
    if (calOmar[0][4] == '0') { d0509 = "Disponible"; }
    else { d0509 = "Ocupada"; }
    document.getElementById('d0509').innerHTML = d0509;
    d0510 = calOmar[1][4];
    if (calOmar[1][4] == '0') { d0510 = "Disponible"; }
    else { d0510 = "Ocupada"; }
    document.getElementById('d0510').innerHTML = d0510;
    d0511 = calOmar[2][4];
    if (calOmar[2][4] == '0') { d0511 = "Disponible"; }
    else { d0511 = "Ocupada"; }
    document.getElementById('d0511').innerHTML = d0511;
    d0512 = calOmar[3][4];
    if (calOmar[3][4] == '0') { d0512 = "Disponible"; }
    else { d0512 = "Ocupada"; }
    document.getElementById('d0512').innerHTML = d0512;
    d0513 = calOmar[4][4];
    if (calOmar[4][4] == '0') { d0513 = "Disponible"; }
    else { d0513 = "Ocupada"; }
    document.getElementById('d0513').innerHTML = d0513;
    d0515 = calOmar[5][4];
    if (calOmar[5][4] == '0') { d0515 = "Disponible"; }
    else { d0515 = "Ocupada"; }
    document.getElementById('d0515').innerHTML = d0515;
    d0516 = calOmar[6][4];
    if (calOmar[6][4] == '0') { d0516 = "Disponible"; }
    else { d0516 = "Ocupada"; }
    document.getElementById('d0516').innerHTML = d0516;
    d0517 = calOmar[7][4];
    if (calOmar[7][4] == '0') { d0517 = "Disponible"; }
    else { d0517 = "Ocupada"; }
    document.getElementById('d0517').innerHTML = d0517;

    d0609 = calOmar[0][5];
    if (calOmar[0][5] == '0') { d0609 = "Disponible"; }
    else { d0609 = "Ocupada"; }
    document.getElementById('d0609').innerHTML = d0609;
    d0610 = calOmar[1][5];
    if (calOmar[1][5] == '0') { d0610 = "Disponible"; }
    else { d0610 = "Ocupada"; }
    document.getElementById('d0610').innerHTML = d0610;
    d0611 = calOmar[2][5];
    if (calOmar[2][5] == '0') { d0611 = "Disponible"; }
    else { d0611 = "Ocupada"; }
    document.getElementById('d0611').innerHTML = d0611;
    d0612 = calOmar[3][5];
    if (calOmar[3][5] == '0') { d0612 = "Disponible"; }
    else { d0612 = "Ocupada"; }
    document.getElementById('d0612').innerHTML = d0612;
    d0613 = calOmar[4][5];
    if (calOmar[4][5] == '0') { d0613 = "Disponible"; }
    else { d0613 = "Ocupada"; }
    document.getElementById('d0613').innerHTML = d0613;
    d0615 = calOmar[5][5];
    if (calOmar[5][5] == '0') { d0615 = "Disponible"; }
    else { d0615 = "Ocupada"; }
    document.getElementById('d0615').innerHTML = d0615;
    d0616 = calOmar[6][5];
    if (calOmar[6][5] == '0') { d0616 = "Disponible"; }
    else { d0616 = "Ocupada"; }
    document.getElementById('d0616').innerHTML = d0616;
    d0617 = calOmar[7][5];
    if (calOmar[7][5] == '0') { d0617 = "Disponible"; }
    else { d0617 = "Ocupada"; }
    document.getElementById('d0617').innerHTML = d0617;


    /*
        if (stilCal = 1) { auxCal = calOmar; }
        if (stilCal = 2) { auxCal = calMario; }
        if (stilCal = 3) { auxCal = calGuido; }
    
        if (auxCal[0][0] == '1') { d0109 = "Disponible"; } //
        else { d0109 = "Ocupada"; }
        document.getElementById('d0109').innerHTML = d0109;
    
        if (auxCal[0][3] == '1') { d0110 = "Disponible"; }
        else { d0110 = "Ocupada"; }
        document.getElementById('d0110').innerHTML = d0110;

}, 1000);

*/

function myFunction() {
    alert("Hora tomada. Por favor selecciona otra.");
}