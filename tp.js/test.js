function test_age(){
    let age =prompt("Quelle est votre age ?")
    if (age<18)
    {
        alert("attention accès refusé,vous ètes mineur");
        document.body.style.backgroundColor ="red";
    }
    else
    {
       alert("ok,vous ètes Majeur");
        document.body.style.backgroundColor ="green";
    }
}

function test_couleur(){
    let couleur =prompt("donner une couleur")
    if (couleur =="rouge") {
        document.body.style.backgroundColor ="red"
    }
    else if (couleur =="bleu"){
        document.body.style.backgroundColor ="blue"
    }
    else if (couleur =="vert"){
        document.body.style.backgroundColor ="green"
    }
    else {
        document.write("couleur non comprise")
    }
    
}
function affichage(){
    let prenom=prompt("saisir votre prenom");
    let nom =prompt("saisir votre nom");
    document.write("<div style='border:5px solid blue; width:400px; height:300px; margin:auto;font-size:50;'>");
    document.write ("bonjour "+prenom +"  "+nom );
    document.write("</div>");

}
function calcul_moyenne(){
    var n1 =prompt("donner la première note :");
    var n2 =prompt("donner la deuxième note :");
    var n3 =prompt("donner la troisième note :");

    var somme = Number(n1) + Number(n2) +Number(n3);

    document.write("Voici la somme : "+ somme +"<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne :" + moyenne +"<br>");

    if (moyenne<10)
    {
        alert(" vous n'est pas admis");
        document.body.style.backgroundColor ="red";
    }
    else if(moyenne<14){
        alert("admis,moyen");
        document.body.style.backgroundColor ="blue";
    }
    else if(moyenne>14){
        alert("admis,bien");
        document.body.style.backgroundColor ="green";
    }
    
    
    
}


