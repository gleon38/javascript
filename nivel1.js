

/*                               ----------------------- HOISTING -------------------------------

var a = 1; //global
let b = 2; //global

function prueba(c){ // c es un parametro de la funcion prueva. LOCAL-

    let d = 4; //Local de la funcion

    if(c === 3){ 

        var e = 5; // por hoisting termina siendo local a la funcion
        let f = 6 // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que pasen por parametro a la func prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if vale: ' + a);
    console.log('b dentro de la funcion pero fuera del if vale: ' + b);
    console.log('c dentro de la funcion pero fuera del if vale: ' + c);
    console.log('d dentro de la funcion pero fuera del if vale: ' + d);
    console.log('e dentro de la funcion pero fuera del if vale: ' + e);
    // console.log('f dentro de la funcion pero fuera del if vale: ' + f);

};

prueba(2);

console.log('a vale: ' + a);
console.log('b vale: ' + b);
// console.log('c vale: ' + c);
// console.log('d vale: ' + d);
// console.log('e vale: ' + e);
// console.log('f vale: ' + f);

*/



/*                                  ----------------------------- INTERPOLACION DE STRING -------------------------



// let nombre = 'Leonardo';
// let apellido = 'Gonzalez';

// console.log(`Mi nombre es ${nombre} ${apellido.toUpperCase()}`);

function sumar (num1, num2){
    return numero1 + numero2;
}

let numero1 = Number(prompt('Ingrese numero 1'));
let numero2 = Number(prompt('Ingrese numero 2'));

console.log(`La suma entre ${numero1} y ${numero2} es ${sumar(numero1,numero2)}`);
*/

/*
                                  -------------------------- Función anónima -----------------------------------
*/

let z = function (p1){
    console.log(`Esta es la función ${p1}`)
}
z(2);

function sumar(n1,n2){
    return n1+n2;
}

const restar = function(n1,n2){
    return n1-n2;
}

function tareaOperador(funcionOperador, n1, n2){
    console.log(funcionOperador(n1,n2))
}

tareaOperador(restar,5,4);