// Lightning animation effect
document.addEventListener("DOMContentLoaded", () => {
    const lightning = document.querySelector('.lightning');

    if (lightning) {
        setInterval(() => {
            lightning.style.animation = "none";
            setTimeout(() => {
                lightning.style.animation = "lightning 5s infinite";
            }, 50);
        }, 8000);
    }
});

// Initialize EmailJS
document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("your_user_id_here"); // Replace with your actual EmailJS User ID
});

// Send Email on Button Click
document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.querySelector('.send-button');
    
    if (sendButton) {
        sendButton.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent page reload

            // Gather form data
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Check if required fields are filled
            if (!fullName || !email || !subject || !message) {
                alert("Please fill out all required fields.");
                return;
            }

            // Prepare template parameters
            const templateParams = {
                fullName: fullName,
                email: email,
                phone: phone,
                subject: subject,
                message: message,
            };

            // Use EmailJS to send the email
            emailjs.send('service_fvhxcxo', 'template_7dhggsh', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message sent successfully!');
                }, function (error) {
                    console.error('FAILED...', error);
                    alert('Failed to send message. Please try again.');
                });
        });
    }
});
