document.addEventListener("DOMContentLoaded", (event) => {
  function Testimonials() {
    return `
    <div class="title-part">
    <h2 class="h2">Testimonials</h2>
    <p>
      Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about
      Our Digital Marketing Services
    </p>
  </div>
  <div class="testimonial-wrapp">
    <!-- Swiper  -->
    <div class="swiper testimonial-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="comment">
            <p class="p2">
              "We have been working with Positivus for the past year and have seen
              a significant increase in website traffic and leads as a result of
              their efforts. The team is professional, responsive, and truly cares
              about the success of our business. We highly recommend Positivus to
              any company looking to grow their online presence."
            </p>
          </div>
          <div class="bottom-part">
            <span class="user p1">John Smith</span>
            <span class="p2">Marketing Director at XYZ Corp</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="comment">
            <p class="p2">
              "We have been working with Positivus for the past year and have seen
              a significant increase in website traffic and leads as a result of
              their efforts. The team is professional, responsive, and truly cares
              about the success of our business. We highly recommend Positivus to
              any company looking to grow their online presence."
            </p>
          </div>
          <div class="bottom-part">
            <span class="user p1">John Smith</span>
            <span class="p2">Marketing Director at XYZ Corp</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="comment">
            <p class="p2">
              "We have been working with Positivus for the past year and have seen
              a significant increase in website traffic and leads as a result of
              their efforts. The team is professional, responsive, and truly cares
              about the success of our business. We highly recommend Positivus to
              any company looking to grow their online presence."
            </p>
          </div>
          <div class="bottom-part">
            <span class="user p1">John Smith</span>
            <span class="p2">Marketing Director at XYZ Corp</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="comment">
            <p class="p2">
              "We have been working with Positivus for the past year and have seen
              a significant increase in website traffic and leads as a result of
              their efforts. The team is professional, responsive, and truly cares
              about the success of our business. We highly recommend Positivus to
              any company looking to grow their online presence."
            </p>
          </div>
          <div class="bottom-part">
            <span class="user p1">John Smith</span>
            <span class="p2">Marketing Director at XYZ Corp</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="comment">
            <p class="p2">
              "We have been working with Positivus for the past year and have seen
              a significant increase in website traffic and leads as a result of
              their efforts. The team is professional, responsive, and truly cares
              about the success of our business. We highly recommend Positivus to
              any company looking to grow their online presence."
            </p>
          </div>
          <div class="bottom-part">
            <span class="user p1">John Smith</span>
            <span class="p2">Marketing Director at XYZ Corp</span>
          </div>
        </div>
      </div>
      <!-- custom navigation  -->
      <div class="nav-box">
        <div class="prev">
          <img src="../assets/icons/ArrowRight.svg" alt="" />
        </div>
        <div class="next">
        <img src="../assets/icons/ArrowRight.svg" alt="" />
      </div>
      </div>
  
      <div class="swiper-pagination"></div>
    </div>
  </div>
  
    `;
  }

  document.querySelector(".sec-six").innerHTML = Testimonials();

  const noneActiveStar = "../assets/icons/whiteStar.svg";
  const activeStar = "../assets/icons/greenStar.svg";

  const testimonialSwiper = new Swiper(".testimonial-swiper", {
    loop: true,
    centeredSlides: false, // Center active slide
    // slidesPerView: "auto",
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      600: {
        centeredSlides: true,
        slidesPerView: 2,
        // spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".nav-box .next",
      prevEl: ".nav-box .prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"><img src="${noneActiveStar}" alt="star"></span>`;
      },
    },
    on: {
      slideChange: updatePaginationIcons,
      init: updatePaginationIcons,
    },
  });

  function updatePaginationIcons() {
    const bullets = document.querySelectorAll(
      ".swiper-pagination .swiper-pagination-bullet"
    );

    bullets.forEach((bullet, index) => {
      const icon = bullet.querySelector("img");
      if (bullet.classList.contains("swiper-pagination-bullet-active")) {
        icon.setAttribute("src", activeStar);
      } else {
        icon.setAttribute("src", noneActiveStar);
      }

      bullet.addEventListener("click", () => {
        testimonialSwiper.slideToLoop(index); // Slide to the clicked bullet
      });
    });
  }
});
