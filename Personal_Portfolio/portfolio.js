document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor-follower');
    cursor.innerHTML = `
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="#87CEEB" stroke-width="2" opacity="0.5" />
            <circle cx="20" cy="20" r="5" fill="#87CEEB" opacity="0.8" />
        </svg>
    `;

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    });
});

// Role Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    const roles = ['Game Developer', 'Frontend Developer', '3D Modeler'];
    const roleText = document.querySelector('.role-text');
    let currentRole = 0;

    function typeWriter(text, index) {
        if (index < text.length) {
            roleText.textContent += text[index];
            setTimeout(() => typeWriter(text, index + 1), 100);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        const text = roleText.textContent;
        if (text.length > 0) {
            roleText.textContent = text.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            currentRole = (currentRole + 1) % roles.length;
            setTimeout(() => typeWriter(roles[currentRole], 0), 500);
        }
    }

    typeWriter(roles[currentRole], 0);
});

// Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const cards = document.querySelectorAll('.service-card, .certificate-card');

    // Header background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animate cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = menuBtn.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(6px, 6px)' : '';
        spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(6px, -6px)' : '';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = menuBtn.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '1';
            });
        });
    });
});

// Certificate Modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('certificateImage');
    const closeBtn = document.querySelector('.close-modal');
    const certificates = document.querySelectorAll('.certificate-card');

    const certificateImages = {
        'game-dev': '/lovable-uploads/c9dffbea-2682-498c-9f45-275b9c217365.png',
        'frontend': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000'
    };

    certificates.forEach(cert => {
        cert.addEventListener('click', () => {
            const certType = cert.dataset.certificate;
            modalImg.src = certificateImages[certType];
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Update Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// function changeImage() {
//     const img = document.getElementById("bag_img");
//     img.src = "bag_zip_open.png"; 
// }
let showingImage1 = true;

function changeImage() {
    const img = document.getElementById("bag_img");
    if (showingImage1) {
      img.src = "bag_zip_open.png";
    } else {
      img.src = "bag_zip_closed.png";
    }
}
