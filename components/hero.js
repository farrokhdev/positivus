function SwiperSlider() {
  return `
  <div class="hero-wrapp">
  <div class="content-part">
    <h1 class="h1 animate">Navigating the digital landscape for success</h1>
    <p class="p1 animate">
      Our digital marketing agency helps businesses grow and succeed online
      through a range of services including SEO, PPC, social media marketing,
      and content creation.
    </p>
    <div class="shadow-btn">Book a consultation</div>
  </div>
  <div class="image-part">
    <img src="../assets//hero.jpg" alt="" />
  </div>
</div>
<div class="brands-part">
  <img src="../assets/amazonbrand.svg" alt="" />
  <img src="../assets/dribble.svg" alt="" />
  <img src="../assets/hobspot.svg" alt="" />
  <img src="../assets/notion.svg" alt="" />
  <img src="../assets/netflix.svg" alt="" />
  <img src="../assets/zoom.svg" alt="" />
</div>
  `;
}

document.querySelector(".sec-one").innerHTML = SwiperSlider();
