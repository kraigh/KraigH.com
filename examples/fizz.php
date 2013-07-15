<!DOCTYPE html>
<html>
<head>
  <title>Fizzbuzz</title>
</head>
<body>
<ul>

<?php

$output = '';

// Check for Fizz/Buzz
for ($i = 1; $i <= 100; ++$i) {
  $output .= '<li>';
  if ($i%3 == 0) $output .= 'Fizz';
  if ($i%5 == 0) $output .= 'Buzz';
  if (($i%5 != 0) && ($i%3 != 0)) $output .= $i;
  $output .= '</li>';
}

// Print numbers
print $output;

?>

</ul>
</body>
</html>
