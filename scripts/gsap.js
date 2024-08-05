// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // Header
  gsap.from(".header", {
    scrollTrigger: {
      trigger: ".header",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse", // Play the animation on scroll, no other actions
    },
    y: -50,
    opacity: 0,
    delay: 0.2,
    duration: 0.2,
  });

  // Hero animation
  gsap.from("#hero .content-part .animate", {
    scrollTrigger: {
      trigger: "#hero .content-part",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse", // Play the animation on scroll, no other actions
    },
    stagger: 0.5,
    x: -100,
    opacity: 0,
    delay: 1,
    duration: 1,
  });
  gsap.from("#hero .content-part .shadow-btn", {
    scrollTrigger: {
      trigger: "#hero .content-part",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse", // Play the animation on scroll, no other actions
    },
    opacity: 0,
    delay: 2,
    duration: 1,
  });

  gsap.from("#hero .image-part", {
    scrollTrigger: {
      trigger: "#hero .image-part",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse", // Play the animation on scroll, no other actions
    },
    x: 100,
    opacity: 0,
    delay: 2,
    duration: 1,
  });

  gsap.from("#hero .brands-part img", {
    scrollTrigger: {
      trigger: ".brands-part",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse", // Play the animation on scroll, no other actions
    },
    stagger: 0.2,
    y: 50,
    opacity: 0,
    // delay: 1,
    duration: 1,
  });
  // Services
  gsap.from("#services h2", {
    scrollTrigger: {
      trigger: "#services",
      start: "top 80%", // Start the animation when the top of the section reaches 80% of the viewport height
      end: "top 50%", // End the animation when the top of the section reaches 50% of the viewport height
      toggleActions: "play none none reverse", // Play the animation on scroll, no other actions
    },
    y: 50, // Move the element 50px from below
    opacity: 0, // Start with opacity 0
    duration: 1, // Animation duration of 1 second
  });

  gsap.from("#services p", {
    scrollTrigger: {
      trigger: "#services",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5, // Start the animation after a delay of 0.5 seconds
  });

  gsap.from("#services .services-list .service-item", {
    scrollTrigger: {
      trigger: "#services .services-list",
      start: "top 80%", // Start the animation when the top of the section reaches 80% of the viewport height
      end: "top 50%", // End the animation when the top of the section reaches 50% of the viewport height
      toggleActions: "play none none reverse", // Play the animation on scroll, no other actions
    },
    stagger: 0.3,
    y: 50, // Move the element 50px from below
    opacity: 0, // Start with opacity 0
    duration: 1, // Animation duration of 1 second
  });
  gsap.from("#services .service-offer", {
    scrollTrigger: {
      trigger: "#services .service-offer",
      start: "top 80%", // Start the animation when the top of the section reaches 80% of the viewport height
      end: "top 50%", // End the animation when the top of the section reaches 50% of the viewport height
      toggleActions: "play none none reverse", // Play the animation on scroll, no other actions
    },
    y: 50, // Move the element 50px from below
    opacity: 0, // Start with opacity 0
    duration: 1, // Animation duration of 1 second
  });
  // Case Studio
  gsap.from("#useCases .title-part h2", {
    scrollTrigger: {
      trigger: "#useCases",
      start: "top 80%", // Start the animation when the top of the section reaches 80% of the viewport height
      end: "top 50%", // End the animation when the top of the section reaches 50% of the viewport height
      toggleActions: "play none none reverse", // Play the animation on scroll, no other actions
    },
    y: 50, // Move the element 50px from below
    opacity: 0, // Start with opacity 0
    duration: 1, // Animation duration of 1 second
  });

  gsap.from("#useCases .title-part p", {
    scrollTrigger: {
      trigger: "#useCases",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5, // Start the animation after a delay of 0.5 seconds
  });
  gsap.from("#useCases .case-wrapp", {
    scrollTrigger: {
      trigger: "#useCases",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5, // Start the animation after a delay of 0.5 seconds
  });

  // working
  gsap.from(".sec-four", {
    scrollTrigger: {
      trigger: ".sec-four",
      start: "top 80%", // Start the animation when the top of the section reaches 80% of the viewport height
      end: "top 50%", // End the animation when the top of the section reaches 50% of the viewport height
      toggleActions: "play none none reverse", // Play the animation on scroll, no other actions
    },
    y: 50, // Move the element 50px from below
    opacity: 0, // Start with opacity 0
    duration: 1, // Animation duration of 1 second
  });
  // team
  gsap.from("#members", {
    scrollTrigger: {
      trigger: "#members",
      start: "top 80%", // Start the animation when the top of the section reaches 80% of the viewport height
      end: "top 50%", // End the animation when the top of the section reaches 50% of the viewport height
      toggleActions: "play none none reverse", // Play the animation on scroll, no other actions
    },
    opacity: 0, // Start with opacity 0
    duration: 1, // Animation duration of 1 second
  });
});
