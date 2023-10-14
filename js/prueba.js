function comprobar(L){
    event.preventDefault();
    var r = document.getElementById("respuesta").value;
    var pass = false;
    if (L == 'A'){
        if(r == 4232) pass = true;
    }else if(L == 'B'){
        if(r == 10) pass = true;
    }else if(L == 'C'){
        if(r == 2027) pass = true;
    }else if(L == 'D'){
        if(r == 66) pass = true;
    }else if(L == 'E'){
        if (r == 122) pass = true;
    }else if(L == 'F'){
        alert("Prueba F");
    }else{
        alert("Prueba no encontrada");
    }
    
    if(pass==true){
        alert("¡Has acertado! Enhorabuena. El módulo de "+ r +" es "+ r%9 +".");
    }else{
        alert("No has acertado, vuelve a intentarlo.");
    }
}

function desencriptarMensaje(){
    var e = document.getElementById("mensaje_encriptado");
    var m = document.getElementById("mensaje_desencriptado");
    var b = document.getElementById("boton_desencriptar");

    // Agitamos el mensaje encriptado
    e.classList.add("shake");
    setTimeout(function(){
        e.classList.remove("shake");
    }, 500);

    e.classList.add("hidden");
    m.classList.remove("hidden");

    // Lo agitamos
    m.classList.add("shake");
    setTimeout(function(){
        m.classList.remove("shake");
    }, 500);

    b.setAttribute("disabled", "disabled");
    b.setAttribute("style", "background-color: #1f1f1f;")

}

