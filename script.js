document.addEventListener('DOMContentLoaded', (event) => {
    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mentorship cards data
    const mentorshipWeeks = [
        {
            title: "Week 1: Introduction to Neural Networks",
            description: "Learn the basics of neural networks, including perceptrons, activation functions, and backpropagation.",
            slideLink: "https://github.com/mdkamrulh/mentorship/blob/main/week1_slides.pdf",
            codeLink: "https://github.com/mdkamrulh/mentorship/blob/main/week1_code.py"
        },
        {
            title: "Week 2: Convolutional Neural Networks",
            description: "Dive into CNNs, exploring their architecture, convolution operations, and applications in image processing.",
            slideLink: "https://github.com/mdkamrulh/mentorship/blob/main/week2_slides.pdf",
            codeLink: "https://github.com/mdkamrulh/mentorship/blob/main/week2_code.py"
        },
        {
            title: "Week 3: Recurrent Neural Networks",
            description: "Understand RNNs and their variants (LSTM, GRU) for sequential data processing and natural language tasks.",
            slideLink: "https://github.com/mdkamrulh/mentorship/blob/main/week3_slides.pdf",
            codeLink: "https://github.com/mdkamrulh/mentorship/blob/main/week3_code.py"
        },
        // Add more weeks as needed
    ];

    // Function to create mentorship cards
    function createMentorshipCards() {
        const mentorshipGrid = document.getElementById('mentorship-grid');
        if (!mentorshipGrid) return;

        mentorshipWeeks.forEach((week, index) => {
            const card = document.createElement('div');
            card.className = 'mentorship-card';
            card.innerHTML = `
                <div class="mentorship-card-content">
                    <h3>${week.title}</h3>
                    <p>${week.description}</p>
                    <div class="mentorship-card-buttons">
                        <a href="${week.slideLink}" target="_blank" class="btn">Slides</a>
                        <a href="${week.codeLink}" target="_blank" class="btn">Code</a>
                    </div>
                </div>
            `;
            mentorshipGrid.appendChild(card);
        });
    }

    // Call the function to create mentorship cards
    createMentorshipCards();

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For demonstration, we'll just log it to the console
            console.log('Form submitted!');
            console.log('Name:', this.name.value);
            console.log('Email:', this.email.value);
            console.log('Message:', this.message.value);
            
            // Clear the form
            this.reset();
            
            // Show a success message (you can replace this with a more sophisticated notification)
            alert('Thank you for your message. I will get back to you soon!');
        });
    }

    // Add animation to project cards on scroll
    const projectCards = document.querySelectorAll('.project-card');
    const certCards = document.querySelectorAll('.cert-card');

    const fadeInOptions = {
        threshold: 0.5
    };

    const fadeInObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, fadeInOptions);

    projectCards.forEach(card => {
        card.classList.add('fade-in-element');
        fadeInObserver.observe(card);
    });

    certCards.forEach(card => {
        card.classList.add('fade-in-element');
        fadeInObserver.observe(card);
    });
});