<?php
$servername = "127.0.0.1";
$username = "root";
$password = "Smitesh@11";
$database = "chargeup_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$country = $_POST['country'];
$state = $_POST['State'];
$city = $_POST['city'];

// Insert data into the database
$sql = "INSERT INTO user_data (country, state, city) VALUES ('$country', '$state', '$city')";
if ($conn->query($sql) === TRUE) {
    echo "Record added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
