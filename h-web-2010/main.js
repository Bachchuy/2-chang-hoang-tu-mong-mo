document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const messageElement = document.getElementById('message');
    const girlfriendImage = document.getElementById('girlfriendImage');
    const container = document.querySelector('.container');
    const finalPopup = document.getElementById('finalPopup');
    const finalMessage = document.getElementById('finalMessage');
    const finalImage = document.getElementById('finalImage');
    const closeButton = document.querySelector('.close-button');

    const content = [
        {
            message: "Em yêu à, 20/10 này anh muốn gửi đến em tất cả những điều ngọt ngào nhất. Cảm ơn em đã luôn ở bên, là nguồn động lực và niềm vui của anh. Yêu em thật nhiều!",
            image: "assets/a1.jpg", // Replace with your image paths
            buttonText: "Tiếp theo nhé!"
        },
        {
            message: "Chúc công chúa của anh một ngày 20/10 thật hạnh phúc, luôn xinh đẹp, rạng rỡ và thành công trên con đường em chọn. Anh sẽ luôn là người ủng hộ em!",
            image: "assets/a2.jpg",
            buttonText: "Còn nữa nè!"
        },
        {
            message: "Mỗi ngày bên em đều là một ngày 20/10. Anh mong tình yêu của chúng ta sẽ mãi bền chặt và tràn đầy tiếng cười. Mãi yêu em!",
            image: "assets/a3.jpg",
            buttonText: "Xem nữa đi em!"
        },
        {
            message: "Gửi ngàn nụ hôn và lời chúc tốt đẹp nhất đến người phụ nữ tuyệt vời nhất trong cuộc đời anh. Chúc em 20/10 ấm áp và ý nghĩa nhé!",
            image: "assets/a4.jpg",
            buttonText: "Sắp hết rồi!"
        },
        {
            message: "Và cuối cùng, anh muốn nói rằng em là tất cả đối với anh. Cảm ơn em vì tất cả!",
            image: "assets/a5.jpg",
            buttonText: "Lời cuối cùng!"
        }
    ];

    const finalGreeting = "Em là tất cả của anh. Mãi yêu em!"; // Final message
    const finalImagePath = "assets/final.png"; // Final image path
    const backgroundImages = ["assets/a1.jpg", "assets/a2.jpg", "assets/a3.jpg", "assets/a4.jpg", "assets/a5.jpg"]; // Images for final background

    const fallingIcons = ['❤️', '🌸', '💌', '✨', '💖']; // Emojis for falling icons

    let currentIndex = 0;

    revealButton.addEventListener('click', () => {
        if (currentIndex < content.length) {
            const currentContent = content[currentIndex];

            messageElement.textContent = currentContent.message;
            girlfriendImage.src = currentContent.image;
            girlfriendImage.style.display = 'block'; // Show the image
            revealButton.textContent = currentContent.buttonText;

            createHearts();
            createFallingIcons();

            currentIndex++;
        } else {
            // Transition to final page
            container.style.display = 'none'; // Hide the main container
            document.body.classList.add('final-page');
            document.body.style.display = 'block';
            createRandomBackgroundImages();

            // Show final popup
            finalMessage.textContent = finalGreeting;
            finalImage.src = finalImagePath;
            finalPopup.style.display = 'flex';
        }
    });

    closeButton.addEventListener('click', () => {
        finalPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == finalPopup) {
            finalPopup.style.display = 'none';
        }
    });

    function createHearts() {
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3-5 seconds
            heart.style.opacity = Math.random();
            heart.style.fontSize = Math.random() * 10 + 10 + 'px';
            container.appendChild(heart);

            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }
    }

    function createFallingIcons() {
        for (let i = 0; i < 5; i++) { // Create more falling icons
            const icon = document.createElement('span');
            icon.classList.add('falling-icon');
            icon.textContent = fallingIcons[Math.floor(Math.random() * fallingIcons.length)];
            icon.style.left = Math.random() * 100 + 'vw'; // Use vw for full viewport width
            icon.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5-10 seconds
            icon.style.animationDelay = Math.random() * 5 + 's'; // Delay for staggered effect
            document.body.appendChild(icon);

            icon.addEventListener('animationend', () => {
                icon.remove();
            });
        }
    }

    function createRandomBackgroundImages() {
        document.body.style.backgroundColor = '#fce4ec'; // Ensure background color
        for (let i = 0; i < 15; i++) { // Create 10 random background images
            const img = document.createElement('img');
            img.src = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
            img.classList.add('background-image');
            img.style.width = Math.random() * 30 + 20 + 'vw'; // 20-50vw
            img.style.top = Math.random() * 100 + 'vh';
            img.style.left = Math.random() * 100 + 'vw';
            img.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(img);
        }
    }
});