<?php
$year = $_GET['year'];
$make = $_GET['make'];
$model = $_GET['model'];

$content = array();
$output = '<option value="0">Please Select Trim</option>';
$count = 0;
if($handle1 = fopen('data/cars.csv',"r"))
{
	while (($row = fgetcsv($handle1, ",")) !== FALSE)
	{
		if($row[0] == $year && $row[1] == $make && $row[2] == $model)
		{
			if (!in_array($row[3], $content))
			{
				$output .= '<option value="'.trim($row[3]).'">'.$row[3].'</option>';
				$content[] = $row[3];
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
