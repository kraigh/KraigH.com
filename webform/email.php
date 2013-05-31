<?php
$vars = json_decode($_POST['vars'], TRUE);
// $zip = $_POST['zipcode'];
// $mainDriver = $_POST['mainDriverObj'];
// $driversArray = $_POST['driversArray'];
// $vehiclesArray = $_POST['vehiclesArray'];

$file = 'log.txt';

date_default_timezone_set('America/Chicago');
$date = date('l, F d \a\t h:i A');

$output = '';

// $output .= var_export($vars, true);

$output .= 'Submission on ' . $date . PHP_EOL . PHP_EOL;
$output .= 'Email Address: ' . $vars['mail'] . PHP_EOL;
$output .= 'ZipCode: ' . $vars['zipcode'] . PHP_EOL . PHP_EOL;
$output .= 'Main Driver: ' . PHP_EOL;
$output .= '    First Name: ' . $vars['mainDriverObj']['firstName'] . PHP_EOL;
$output .= '    Middle Name: ' . $vars['mainDriverObj']['middleName'] . PHP_EOL;
$output .= '    Last Name: ' . $vars['mainDriverObj']['lastName'] . PHP_EOL;
$output .= '    DOB: ' . $vars['mainDriverObj']['dob'] . PHP_EOL;
$married = var_export($vars['mainDriverObj']['married'], true);
$output .= '    Married: ' . $married . PHP_EOL . PHP_EOL;
if (count($vars['driversArray']) > 0) {
  foreach ($vars['driversArray'] as $key => $value) {
    $keyplusone = $key + 1;
    $output .= 'Extra Driver #' . $keyplusone . PHP_EOL;
    $output .= '    First Name: ' . $value['firstName'] . PHP_EOL;
    $output .= '    Middle Name: ' . $value['middleName'] . PHP_EOL;
    $output .= '    Last Name: ' . $value['lastName'] . PHP_EOL;
    $output .= '    DOB: ' . $value['dob'] . PHP_EOL;
    $married = var_export($value['married'], true);
    $output .= '    Married: ' . $married . PHP_EOL . PHP_EOL;
  }
}
foreach ($vars['vehiclesArray'] as $key => $value) {
  $keyplusone = $key + 1;
  $output .= 'Vehicle #' . $keyplusone . PHP_EOL;
  $output .= '    Year: ' . $value['year'] . PHP_EOL;
  $output .= '    Make: ' . $value['make'] . PHP_EOL;
  $output .= '    Model: ' . $value['model'] . PHP_EOL;
  $output .= '    Trim: ' . $value['trim'] . PHP_EOL . PHP_EOL;
}
$mail_sent = mail('kraigory@gmail.com, alex@edwardsvilleagent.com', 'New Website Form Submission', $output, 'From: kraigory@gmail.com');
$output .= 'Email Sent: ' . $mail_sent . PHP_EOL . PHP_EOL . PHP_EOL;
$output .= '=================================' . PHP_EOL . PHP_EOL . PHP_EOL;

file_put_contents($file, $output, FILE_APPEND);

?>
