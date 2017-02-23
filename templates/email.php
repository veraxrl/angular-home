<?php

$to = "vera.xu.iforc@gmail.com";
$subject = 'php testing';
$message = $_POST['message'];

if($_POST)
{
	mail($to, $subject, $message);
	print "Your message was sent";
}

?>