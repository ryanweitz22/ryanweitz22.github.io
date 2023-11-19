<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Your email address where you want to receive messages
    $to = "ryanweitz123@gmail.com";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
