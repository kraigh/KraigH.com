<?php
$year = $_GET['year'];
$make = $_GET['make'];

$content = array();
$output = '<option value="0">Please Select Model</option>';
$count = 0;
if($handle1 = fopen('data/cars.csv',"r"))
{
	while (($row = fgetcsv($handle1, ",")) !== FALSE)
	{
		if($row[0] == $year && $row[1] == $make)
		{
			if (!in_array($row[2], $content))
			{
				$output .= '<option value="'.trim($row[2]).'">'.$row[2].'</option>';
				$content[] = $row[2];
			}

			$count++;
		}
		else if($row[0] != $year && $count != 0)
		{
			break;
		}
	}
}
fclose($handle1);
echo $output;
?>
