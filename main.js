//

let a = 40;
let b = 50;

var n = "VAR";
let m = "LET";


// if(a > b){
//     alert("Adolfo el grande")
// }else if(a == b){
//     console.log("estamos melos");
// }
// else{
//     console.warn("Ojo con los typosss");
// }



// let semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];

// for (let i = 2; i < semana.length; i++) {
//     console.log("Hoy es:" + semana[i])  
// }

function ejemplo(){
    console.log("Se disparo la función: " + this.n)
}


class auto{
    constructor(alto, ancho, color){
        this.alto = alto;
        this.ancho = ancho;
        this.color = color;
        this.detenerse();
    }
    pitar(){
        alert("Honk honk")
    }

    detenerse(){
        setInterval(this.pitar(), 3000)
    }
}




$(document).ready(function(){
        $.getJSON("https://jsonplaceholder.typicode.com/users", function(result){
            $.each(result, function(i, field){
                
                $(".ajaxes").append("<li>"+field.name+ " | "+field.email + "</li>" )
                
                
            });
        });
});

















    // $("button").click(function(){
        // $.getJSON("https://jsonplaceholder.typicode.com/users", function(result){
        //     $.each(result, function(i, field){
        //         console.log("yolo");
        //     });
        // });
    // });












