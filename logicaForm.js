const form = document.getElementById('registroForm');
const tooltips = document.querySelectorAll('.tooltip');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
   
    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }
    
    // Ejemplo de alerta de feedback
    alert('¡Registro exitoso!\nNombre: ' + nombre + '\nEmail: ' + email);
});

tooltips.forEach(tooltip => {
    const input = tooltip.previousElementSibling;
    input.addEventListener('focus', function() {
        tooltip.style.display = 'block';
    });
    input.addEventListener('blur', function() {
        tooltip.style.display = 'none';
    });
});
