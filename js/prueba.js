function comprobar(L){
    event.preventDefault();
    var r = document.getElementById("respuesta").value;
    var pass = false;
    if (L == 'A'){
        if(r == 4232){
            pass= true;
        }
    }else if(L == 'B'){
        alert("Prueba B");
    }else if(L == 'C'){
        alert("Prueba C");
    }else if(L == 'D'){
        alert("Prueba D");
    }else if(L == 'E'){
        alert("Prueba E");
    }else if(L == 'F'){
        alert("Prueba F");
    }else if(L == 'G'){
        alert("Prueba G");
    }else{
        alert("Prueba no encontrada");
    }
    
    if(pass==true){
        alert("¡Has acertado! Enhorabuena.");
    }else{
        alert("No has acertado, vuelve a intentarlo.");
    }
}