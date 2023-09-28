<?php

if(isset($_POST['submit'])) {
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$header = "From:".$name.".\n".$email."\r\n";

$to = "lawal4211@gmail.com";


mail($to, $subject, $message, $header);
header("Location: form.php?mailsent");
}
?>
