<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Reemplaza con tu dirección de correo
    $to = "info@postproducciones.com";
    
    // Recolecta los datos del formulario
    $name = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['mensaje']);
    
    // Validar campos
    if (!empty($nombre) && !empty($email) && !empty($mensaje)) {
        // Asunto del correo
        $subject = "Nuevo mensaje de contacto de: $nombre";

        // Cuerpo del correo
        $body = "Has recibido un mensaje de contacto:\n\n";
        $body .= "Nombre: $nombre\n";
        $body .= "Correo: $email\n\n";
        $body .= "Mensaje:\n$mensaje\n";

        // Cabeceras
        $headers = "From: $email";

        // Enviar el correo
        if (mail($to, $subject, $body, $headers)) {
            echo "Mensaje enviado correctamente.";
        } else {
            echo "Error al enviar el mensaje. Inténtalo nuevamente.";
        }
    } else {
        echo "Por favor, completa todos los campos.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
