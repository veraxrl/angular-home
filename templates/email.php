<?php

print "hi"

$from="vera.xu.iforc@gmail.com";
$subject = 'php testing';
$email = "vera.xu.iforc@gmail.com";
$message = $_POST['message'];

if($_POST){
	mail($email, $subject, $message,"From:".$from);
	print "Your message was sent"	
}

?>