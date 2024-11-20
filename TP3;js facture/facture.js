function calcul(){
    var a = document.getElementById("prix1").value;
    var b = document.getElementById("quantite1").value;
    var c = Number(a)*Number(b);


    result1.value =c;

    var a2 = document.getElementById("prix2").value;
    var b2 = document.getElementById("quantite2").value;
    var c2 = Number(a2)*Number(b2);


    result1.value =c;

    var a3 = document.getElementById("prix3").value;
    var b3 = document.getElementById("quantite3").value;
    var c3 = Number(a3)*Number(b3);

    var a = document.getElementById("result1").value;
    var b = document.getElementById("result2").value;
    var c = document.getElementById("result3").value;
    result = Number(a3)*Number(b3);



    result1.value =c; result2.value =c2; result3.value =c3; 
}
