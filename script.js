/**
 * Portfolio Interactive Scripts
 * Vanippriya G - AI/ML & Computer Vision Engineer
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. NEURAL NETWORK CANVAS ANIMATION
    // ==========================================================================
    const canvas = document.getElementById('neural-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };

        // Handle Window Resize
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        }

        // Particle Blueprint
        class Particle {
            constructor(x, y, vx, vy, radius) {
                this.x = x;
                this.y = y;
                this.vx = vx;
                this.vy = vy;
                this.radius = radius;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(0, 242, 254, 0.5)';
                ctx.fill();
            }

            update() {
                // Bounds Collision
                if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                    this.vx = -this.vx;
                }
                if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                    this.vy = -this.vy;
                }

                this.x += this.vx;
                this.y += this.vy;

                // Mouse Interactivity (push away slightly or float towards depending on physics)
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius && mouse.x !== null) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxDistance = mouse.radius;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * 0.8;
                    const directionY = forceDirectionY * force * 0.8;
                    
                    this.x -= directionX;
                    this.y -= directionY;
                }

                this.draw();
            }
        }

        // Initialize Particle Cloud
        function initParticles() {
            particles = [];
            // Dynamically scale particle density based on screen size
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 16000);
            const limit = Math.min(numberOfParticles, 90); // Cap at 90 for performance
            
            for (let i = 0; i < limit; i++) {
                let radius = Math.random() * 2 + 1;
                let x = Math.random() * (canvas.width - radius * 2) + radius;
                let y = Math.random() * (canvas.height - radius * 2) + radius;
                let vx = (Math.random() - 0.5) * 0.5;
                let vy = (Math.random() - 0.5) * 0.5;
                
                particles.push(new Particle(x, y, vx, vy, radius));
            }
        }

        // Connect particles close to each other
        function connect() {
            let opacityValue = 1;
            const maxDistance = 110;
            
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < maxDistance) {
                        opacityValue = 1 - (distance / maxDistance);
                        ctx.strokeStyle = `rgba(79, 172, 254, ${opacityValue * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                if (mouse.x !== null) {
                    let dxMouse = particles[a].x - mouse.x;
                    let dyMouse = particles[a].y - mouse.y;
                    let distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                    
                    if (distMouse < mouse.radius) {
                        opacityValue = 1 - (distMouse / mouse.radius);
                        ctx.strokeStyle = `rgba(0, 242, 254, ${opacityValue * 0.25})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }
        }

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
        }

        // Mouse listeners
        window.addEventListener('mousemove', (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        window.addEventListener('resize', resizeCanvas);

        // Run
        resizeCanvas();
        animate();
    }

    // ==========================================================================
    // 2. STICKY HEADER & SCROLL SPY
    // ==========================================================================
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Sticky class
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll Spy active states
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection) && currentSection !== '') {
                link.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 3. MOBILE MENU TOGGLE
    // ==========================================================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when links are clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ==========================================================================
    // 4. PROJECT CATEGORY FILTER
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Set active class
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                // Add fade effect via classes
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hide');
                    // Trigger reflow/animation
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 50);
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // ==========================================================================
    // 5. INTERACTIVE CONTACT FORM HANDLER (MOCK ACTION)
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading status
            formStatus.className = 'form-status';
            formStatus.textContent = 'Analyzing metrics and transmission pipeline...';
            
            // Mock API network transmission
            setTimeout(() => {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Message transmitted successfully! Connection established.';
                contactForm.reset();
                
                // Fade message status after 5 seconds
                setTimeout(() => {
                    formStatus.style.opacity = '0';
                    setTimeout(() => {
                        formStatus.textContent = '';
                        formStatus.style.opacity = '1';
                    }, 500);
                }, 5000);
                
            }, 1500);
        });
    }
});
