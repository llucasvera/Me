
    AOS.init({ duration: 1000, once: true });

    particlesJS("particles-js", {
      particles: {
        number: { value: 60 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.2 },
        size: { value: 3 },
        line_linked: {
          enable: true,
          distance: 120,
          color: "#ffffff",
          opacity: 0.1,
          width: 1
        },
        move: { enable: true, speed: 0.7 }
      }
    });

    // ScrollSpy básico
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
    window.onscroll = () => {
      let current = "";
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        if (top >= offset && top < offset + height) current = sec.getAttribute("id");
      });
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    // Animaciones GSAP para el hero
    gsap.from("#hero img", { duration: 1, opacity: 0, y: -50 });
    gsap.from("#hero h1", { duration: 1, opacity: 0, x: -50, delay: 0.5 });
    gsap.from("#hero h3", { duration: 1, opacity: 0, x: 50, delay: 0.8 });
    gsap.from("#hero .btn", { duration: 0.6, opacity: 0, y: 20, delay: 1.2, stagger: 0.2 });
  


    const hamburger = document.getElementById("hamburger");
    const navlinks = document.getElementById("nav-links");
  
    hamburger.addEventListener("click", () => {
      navlinks.classList.toggle("show");
    });
 



  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    grabCursor: true,
    effect: 'slide',
    centeredSlides: true,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
