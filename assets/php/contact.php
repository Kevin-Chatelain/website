<?php 

    if(isset($_POST["envoyer"])) {
        $nom = $_POST["nom"];  
        $prenom = $_POST["prenom"];  
        $email = $_POST["email"];  
        $message = $_POST["message"];  
  
      
        $destinateur = $prenom.' '.$nom;

        $destinataire = 'chatelainkevin9@gmail.com';
        $header = 'Mail de '.$email;
        $texte = "vous avez reçu un e-mail de ".$destinateur."\n\n".$message;
        $sujet = "Je vous contacte depuis votre portfolio";

        mail($destinataire, $sujet, $texte, $header);
    }

?>