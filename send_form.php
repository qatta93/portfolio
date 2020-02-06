
<?php
header("content-type: application/json; charset=utf-8");
$name=isset($_POST['name']) ? $_POST['name'] : "";
$email=isset($_POST['email']) ? $_POST['email'] : "";
$message=isset($_POST['message']) ? $_POST['message'] : "";
if($name && $email && $message){
 $headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit";
 $message_body="Formularz kontaktowy wysłany ze strony www.panasi.uk\n";
 $message_body.="Imię: $name\n";
 $message_body.="Adres email: $email\n";
 $message_body.=$message;
 if(mail("panasiuk.patrycja@gmail.com","Formularz kontaktowy",$message_body,$headers)){
 $json=array("status"=>1,"msg"=>"<p class='status_ok'>Your message was sent successfully! Thanks</p>");
 }
 else{
 $json=array("status"=>0,"msg"=>"<p class='status_err'>Sorry, your message was not send successfully :(</p>"); 
 }
}
else{
 $json=array("status"=>0,"msg"=>"<p class='status_err'>Please fill out all required fields</p>"); 
}
echo json_encode($json);
exit;
?>