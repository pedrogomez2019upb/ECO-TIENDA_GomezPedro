function validar() {
    var nombre,apellido,identificacion,correo,pass;
    nombre=document.getElementById("nombre").value;
    apellido=document.getElementById("apellido").value;
    identificacion=document.getElementById("identificacion").value;
    correo=document.getElementById("correo").value;
    pass=document.getElementById("pass").value;
    var expresionCorreo=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var expresionPass=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    var expresionNumero=/ ^[0-9]*$ /;
    
    if (nombre == "" || apellido == "" || identificacion == "" || correo == "" || pass == ""){
        alert("Alguno de los campos esta vacio");
        return false;
    }else
    
    if (nombre.trim() == "" || nombre.length < 1 ) {
        alert("El nombre no es válido");
        return false;
      }else

      if(!expressionPass.test(pass)){
        alert("La contraseña debe contener minimo 8 carácteres, un carácter especial y un número.")
        return false;
      }else
      if(!expresionCorreo.test(correo)){
          alert("El correo no es válido")
          return false;
      }else
      if(!expresionNumero.test(identificacion)){
        alert("La identificación solamente se compone de números")
      }else{
          alert("Bienvenido "+nombre+" "+apellido+"!");
      }

}