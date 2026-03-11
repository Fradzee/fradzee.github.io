
let smoother;

// Hide loader 
setTimeout(() => {
  const loader = document.getElementById('loader');
  loader.classList.add('fade-out');
  setTimeout(() => {
    loader.style.display = 'none';
    document.querySelector(".hero-text").style.display = "flex"
    const scrollDown = document.querySelector(".scroll-down");
    if (scrollDown) scrollDown.style.display = "flex";
  }, 300); 
}, 3000);

window.addEventListener("load", () => {
  document.body.style.overflow = "hidden";

  if (typeof ScrollSmoother !== "undefined" && smoother) {
    smoother.scrollTo(0, true); 
  } else {
    window.scrollTo(0, 0);
  }

  setTimeout(() => {
    document.body.style.overflow = "auto";
  }, 3000);
});

window.addEventListener("beforeunload", () => {
  if (typeof ScrollSmoother !== "undefined" && smoother) {
    smoother.scrollTo(0, true);
  } else {
    window.scrollTo(0, 0);
  }
});

// Increase Bar
const animatedCharts = new Set();

function increaseBars(chart) {
  if (animatedCharts.has(chart)) {
    return;
  }

  animatedCharts.add(chart);

  const bar = chart.querySelector(".bar");
  const valueSpan = chart.querySelector("span");
  const limit = parseInt(valueSpan.innerHTML, 10);
  
  bar.classList.add("increase");

  let i = 0;
  const interval = setInterval(() => {
    if (i <= limit) {
      valueSpan.innerHTML = i + "%";
      i++;
    } else {
      clearInterval(interval);
    }
  }, 15);
}

// Reveal Animations
const elements = document.querySelectorAll(".aboutme-heading, .circle1, .circle2, .box1, .vertical-txt, .chart, .drawer, .heading, .p-cards, .contact, .plane, .cont, .work-hd");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;

    if (entry.isIntersecting) {
      let animClass = "fade-in"; // default

      if (el.classList.contains("heading")) {
        animClass = "fade-inY"; 
      } 
      else if (el.classList.contains("plane")) {
        animClass = "fade-slide";
      }
      else if (el.classList.contains("chart")) {
        increaseBars(el);  
        return;
      }

      el.classList.add(animClass);
    }
    else {
      if (el.classList.contains("plane")) {
        el.classList.remove("fade-slide");
      }
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

// Scroll Indicator
const indicatorPerc = document.querySelector(".indicator-percentage");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.scrollHeight - window.innerHeight;
  let scrollPercent = (scrollTop / docHeight) * 100;

  if (indicatorPerc) {
    indicatorPerc.style.width = scrollPercent + "%";
  }
});


// Cursor Circle
const circle = document.getElementById("cursor-circle");
const gcircle = document.querySelector(".gcircle");
const gcircle1 = document.querySelector(".gcircle1");

  let mouseX = 0, mouseY = 0;    
  let circleX = 0, circleY = 0; 
  const speed = 0.1;             

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
  // keep trying until DOM elements exist
  if (!circle) { requestAnimationFrame(animate); return; }

  circleX += (mouseX - circleX) * speed;
  circleY += (mouseY - circleY) * speed;

  circle.style.transform = `translate(${circleX}px, ${circleY}px) translate(-50%, -50%)`;
  if (gcircle) gcircle.style.transform = `translate(${circleX}px, ${circleY}px) translate(-50%, -50%)`;
  if (gcircle1) gcircle1.style.transform = `translate(${circleX - 250}px, ${circleY}px) translate(-50%, -50%)`;

  requestAnimationFrame(animate);
}
animate();

//Open Menu
let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector(".menu")

menuIcon.addEventListener("click", function() {
  if(menu.classList.contains("close")){
    menu.classList.replace("close", "open");  
    return;
  } 
  else if(menu.classList.contains("open")){
     menu.classList.replace("open", "close")
  }
})

// Typewriter effect 1
window.addEventListener('load', () => { // run after 3.3 seconds when the page load
    setTimeout(() => {
        let i = 0;
        let txt = "SAF'S CODE"; 
        let speed = 50; 

        function typeWriter() {
        if (i < txt.length) {
                document.getElementById("logo-text").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }, 3600); 
});

// Typewriter effect 2
window.addEventListener('load', () => { // run after 3.3 seconds when the page load
    setTimeout(() => {
      let i = 0;
      let txt1 = "SAF"; 
      let txt2 = "RAS"; 
      let speed = 150;

      function typeWriter() {
          if (i < txt1.length) {
              document.getElementById("name").innerHTML = 
                  document.getElementById("name").innerHTML.replace('<span id="trs-name"></span>', '') 
                  + txt1.charAt(i) 
                  + '<span id="trs-name"></span>';
              i++;
              setTimeout(typeWriter, speed);
              return;
          }
          if (i - txt1.length < txt2.length) {
              let j = i - txt1.length;
              document.getElementById("trs-name").innerHTML += txt2.charAt(j);
              i++;
              setTimeout(typeWriter, speed);
          }
      }
      document.getElementById("name").innerHTML = '<span id="trs-name"></span>';
      typeWriter();
}, 3200);

});

// Loop text
window.addEventListener('load', () => { // run after 3.3 seconds when the page load
    setTimeout(() => {
        const names = ["WEB DEVELOPER", "GRAPHIC DESIGNER"];
        const typeSpeed = 100;
        const deleteSpeed = 100;
        const waitAfterType = 2000;

        let i = 0; 
        let j = 0; 
        let typing = true;
        const element = document.getElementById('typewriter');

        function typeLoop() {
          const currentName = names[i];
          const text = currentName.slice(0, j);

          element.innerHTML = text + '<span class="caret">|</span>';

          if (typing) {
            j++;
            if (j > currentName.length) {
              typing = false;
              setTimeout(typeLoop, waitAfterType);
              return;
            }
          } else {
            j--;
            if (j < 0) {
              typing = true;
              i = (i + 1) % names.length;
              j = 0;
            }
          }

          setTimeout(typeLoop, typing ? typeSpeed : deleteSpeed);
        } 
        typeLoop();
    }, 4000); 
});

const sendButton = document.querySelector('.send-button');
const planeIcon = document.querySelector('.plane');

sendButton.addEventListener('mouseover', () => {
    planeIcon.classList.add('plane-hovered');
});

sendButton.addEventListener('mouseout', () => {
    planeIcon.classList.remove('plane-hovered');
});

// Form Validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const sendingContainer = document.getElementById('sending-container');
  const body = document.body;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (form.checkValidity()) {
      // show loader
      sendingContainer.classList.add('active');
      setTimeout(() => {
        document.querySelector(".sending-msg").textContent = "Message sended.";
      }, 3000)

      // blur content + lock scroll
      body.classList.add('sending-blur');
      body.style.overflow = 'hidden';

      setTimeout(() => {
        form.submit();
      }, 5000);
    }
  });
});

// Stop GSAP on small screens
let isSmallScreen = window.innerWidth <= 768;

document.querySelectorAll("[data-speed]").forEach(el => {
  if (isSmallScreen) {
    el.dataset.speed = "0"; // stops movement
  } else {
    el.dataset.speed = el.dataset.speed; // keep original
  }
});

//GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (!isSmallScreen) {
  smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.1,
    effects: true
  })

  gsap.to(".screen-cover", {
    scrollTrigger: {
      trigger: ".screen-cover",
      start: "top -300px",   
      end: "1200px",      
      scrub: true,
    },
    width: "100vh",
    scale: 9, 
    ease: "none"
  });

  gsap.to(".logo-corner", {
    scrollTrigger: {
      trigger: ".logo-corner",
      start: "top top",   
      end: "700px", 
      scrub: true    
    },
    y: "-250px",
    ease: "none"
  });

  gsap.to(".hire-me", {
    scrollTrigger: {
      trigger: ".hire-me",
      start: "top top",   
      end: "700px",   
      scrub: true 
    },
    opacity: 1,
    ease: "none"
  });
}





