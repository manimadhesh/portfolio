<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize the input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Specify the recipient email address
    $to = "manimadhesh3112@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";

    // Create the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you for contacting us, $name. We will get back to you soon!";
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    // If not a POST request, redirect to the contact page
    header("Location: contact.html");
    exit;
}
?>
