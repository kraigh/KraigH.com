<?php

// If data is being submitted, process it and save
if (!empty($_POST)) {

    // Replace empty values with a default value
    if (empty($_POST['name'])) {
        $_POST['name'] = 'anonymous';
    }
    if (empty($_POST['greeted'])) {
        $_POST['greeted'] = 'none';
    }
    if (empty($_POST['comments'])) {
        $_POST['comments'] = 'none';
    }

    // Create an array with the POST values


    // Load results from json file
    $allResults = file_get_contents('results.json');
    // Parse json into array
    $tempArray = json_decode($allResults);

    if (is_array($tempArray)) {
        // If values already exist, add our POST values
        array_push($tempArray, $_POST);
    } else {
        // If no values exist (empty file) create new array
        $tempArray = array($_POST);
    }

    // Reverse array so newest are last
    $tempArray = array_values($tempArray);

    // Encode array as json and save to file
    $jsonData = json_encode($tempArray);
    file_put_contents('results.json', $jsonData);

    header("Location: https://kraigh.com/cse104/index.html");
    die();

} else {
    // No data submitted, so this is a GET request for existing submissions. Return JSON.
    $jsonData = file_get_contents('results.json');
    echo $jsonData;
}
