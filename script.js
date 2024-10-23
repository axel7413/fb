document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', async (event) => {
        event.preventDefault(); // Evitar el envío tradicional
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        try {
            const response = await fetch('/.netlify/functions/form-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            alert(`Email: ${email}\nContraseña: ${password}\nMensaje: ${data.message}`);
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema con la solicitud.');
        }
    });
});
