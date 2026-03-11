<?php
    $servername = "sql201.infinityfree.com"; 
    $username = "if0_40156054"; 
    $password = "safsprtXyz98004"; 
    $dbname = "if0_40156054_contact_db"; 

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } 

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = mysqli_real_escape_string($conn, $_POST['name']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $message = mysqli_real_escape_string($conn, $_POST['message']);

        $sql = "INSERT INTO contact (name, email, message) VALUES ('$name', '$email', '$message')";

        if (mysqli_query($conn, $sql)) {
            header("Location: index2.html?submitted");
            exit();
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }

        mysqli_close($conn);
    }
?>
