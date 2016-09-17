<?php

if (isset($_POST)) {
    $data[] = $_POST;
    $allResults = file_get_contents('results.json');
    $tempArray = json_decode($allResults);
    array_push($tempArray, $data);
    $jsonData = json_encode($tempArray);
    file_put_contents('results.json', $jsonData);
    header('Location: http://kraigh.com/cse104/index.html?success=1');
    exit();
} else {
    $jsonData = file_get_contents('results.json');
    return $jsonData;
}
