<?php
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = '203.199.178.220';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'alerts';                 // SMTP username
$mail->Password = 'alert@123';                           // SMTP password
//$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
//$mail->Port = 587;                                    // TCP port to connect to
$mail->From = 'info@imimobile.com';
$mail->FromName = 'info';
$mail->addAddress('david.wintour@imimobile.com', 'Joe User');     // Add a recipient
$mail->addAddress('david.wintour@imimobile.com');               // Name is optional
// $mail->addReplyTo('info@example.com', 'Information');
$mail->addCC('david.wintour@imimobile.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML



$mail->Subject = 'Here is the subject';
$mail->Body    =
'<!DOCTYPE html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width"/>
	<style>
	body{
    width:50% !important;
    min-width: 20%;
  -webkit-text-size-adjust:50%;
  -ms-text-size-adjust:50%;
  margin:0;
  padding:0;
  text-align: center;
}
h1 {
    font-family: Trebuchet MS;
    color: Red;
    text-align: center;
    font-size: 20px;
}
h2 {
    font-family: Trebuchet MS;
    color: black;
    text-align: center;
    font-size: 11px;
}
	</style>
<title>PFI MonitorEmail</title>
</head>
<body>
<h1>PFI Alert Test</h1>
<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tellus erat. Aenean bibendum orci eu sapien mattis, sed efficitur enim lacinia. Cras luctus interdum libero, et lobortis dui elementum nec. Nulla dignissim arcu est, in elementum enim sodales non. Donec leo elit, faucibus a mauris at, vehicula mattis lacus. Proin turpis nunc, eleifend in accumsan ac, placerat sed risus. Fusce tincidunt imperdiet libero eu tempus. Integer in pulvinar diam. Vestibulum pulvinar justo lacus, id interdum nulla lobortis sit amet.
Vivamus elementum magna risus, in dapibus orci sagittis quis. Integer iaculis pellentesque tempus. Suspendisse quis molestie mi. Etiam lobortis dignissim lectus, et blandit odio pellentesque ac. Vestibulum iaculis lectus sed interdum laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vel erat vel felis ultrices posuere. Sed id magna risus. Vivamus venenatis tristique tortor, sit amet scelerisque velit. Mauris vel pharetra ligula. Nulla gravida mattis elit, at pulvinar nulla suscipit eu. Integer mattis orci vel ante imperdiet ornare. Vestibulum fringilla vulputate erat nec mattis. Mauris non eros non lacus ullamcorper mattis at eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc interdum mauris tellus, vel volutpat dolor facilisis sed.

</h2>
</body>
</html>';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>