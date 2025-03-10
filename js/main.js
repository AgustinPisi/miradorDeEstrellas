

document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.getElementById("copyEmail");

    if (!copyButton) {
        console.error("El botón de copiar no existe en el DOM.");
        return;
    }

    copyButton.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que el enlace haga scroll arriba

        const email = "info@miradordeestrellas.com.ar"; // Cambia esto por tu correo real
        const textArea = document.createElement("textarea");
        textArea.value = email;

        // Ocultar el textarea fuera de la pantalla
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";

        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        // Usar SweetAlert2 para mostrar la notificación
        Swal.fire({
            title: "¡Copiado!",
            text: "El correo ha sido copiado al portapapeles.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
            color: "#1c4c7c" // Azul (Bootstrap primary)
        });
    });
});



window.addEventListener("load", function() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100); // Espera 100ms antes de hacer el scroll
});



document.addEventListener("scroll", function () {
    const carousel = document.getElementById("carouselExampleInterval");
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const fadeFactor = 1 - Math.min(scrollY / windowHeight, 1);
    carousel.style.opacity = fadeFactor;
});

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
      publicKey: "QNo83-2cbLhIxWc_x",
  });
})();
let returnMessage = document.getElementById("returnMessage");

window.onload = function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm('service_xk9vhgt', 'template_njc4qx3', this)
            .then(() => {
                console.log('SUCCESS!');
                Swal.fire({
                    title: "¡Mensaje enviado!",
                    text: "Tu mensaje ha sido enviado correctamente.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                    color: "#1c4c7c" // Azul (Bootstrap primary)
                });
            }, (error) => {
                console.log('FAILED...', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'Cerrar'
                });
            });
    });
};



