<?php
header('Access-Control-Allow-Origin: http://edwardsvilleagent.com');
$year = $_GET['year'];

$content = array();
$output = '<option value="0">Please Select Make</option>';
$count = 0;
//premium
if($handle1 = fopen('data/cars.csv',"r"))
{
	while (($row = fgetcsv($handle1, ",")) !== FALSE)
	{
		if($row[0] == $year)
		{
			if (!in_array($row[1], $content))
			{
				$output .= '<option value="'.trim($row[1]).'">'.$row[1].'</option>';
				$content[] = $row[1];
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
