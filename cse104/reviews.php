<?php

if (!empty($_POST)) {
    $data = $_POST;
    $allResults = file_get_contents('results.json');
    $tempArray = json_decode($allResults);
    if (is_array($tempArray)) {
        array_push($tempArray, $data);
    } else {
        $tempArray = $data;
    }
    $jsonData = json_encode($tempArray);
    file_put_contents('results.json', $jsonData);
    header("Location: http://kraigh.com/cse104/index.html?success=1");
    die(1);
} else {
    $jsonData = file_get_contents('results.json');
    echo $jsonData;
}
