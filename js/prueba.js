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