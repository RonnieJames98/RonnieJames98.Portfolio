<?php
    $subject = $_POST["subject"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $message = wordwrap($message, 70);
    $headers = "From: $email";

    $to = "ronniejespinosa1998@gmail.com";
    
    
?>

<h1>Test Test</h1>