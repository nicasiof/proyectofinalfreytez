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

hoy = DateTime.now().toFormat('yyyy-MM-dd');
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
        if (selected.length >= 2) { alert("Debe seleccionar 1 hora."); }

        // (C3) SELECTED SEATS
        else {
            //(C3 - 1) GET SELECTED hours NUMBERS
            let seats = [];
            let estil = document.getElementById("estilistas").value;
            for (let s of selected) {
                seats.push(s.innerHTML);

                //(C3 - 2) DO SOMETHING WITH IT...
                seats = seats + hoy + estil + document.getElementById("nombre").value + document.getElementById("telef").value;
                alert(seats);
            }




            //{
            // (C3-1) GET SELECTED hours NUMBERS
            //let seats = [];
            //for (let s of selected) { seats.push(s.innerHTML); }

            // (C3-2) DO SOMETHING WITH IT...
            //alert(JSON.stringify(seats));
        }
    }
};




window.addEventListener("DOMContentLoaded", reserve.init);

function myFunction() {
    alert("Hora tomada. Por favor selecciona otra.");
}