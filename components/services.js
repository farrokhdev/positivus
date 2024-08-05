function Services() {
  return `
  <div class="title-part">
  <h2 class="h2">Services</h2>
  <p>
    At our digital marketing agency, we offer a range of services to help
    businesses grow and succeed online. These services include:
  </p>
</div>
<div class="services-list">
  <div class="service-item gray">
    <div class="text">
      <div class="title">
        <h3 class="h3 bg-green">Search engine</h3>
        <h3 class="h3 bg-green">optimization</h3>
      </div>
      <div class="btn">
        <div class="icon">
          <img src="../assets/icons/greenArrow.svg" alt="" />
        </div>
        <div class="learn-more-black-btn">Learn More</div>
      </div>
    </div>
    <div class="image"><img src="../assets/service1.png" alt="" /></div>
  </div>
  <div class="service-item green">
    <div class="text">
      <div class="title">
        <h3 class="h3 bg-white">Pay-per-click</h3>
        <h3 class="h3 bg-white">advertising</h3>
      </div>
      <div class="btn">
        <div class="icon">
          <img src="../assets/icons/greenArrow.svg" alt="" />
        </div>
        <div class="learn-more-black-btn">Learn More</div>
      </div>
    </div>
    <div class="image"><img src="../assets/service2.png" alt="" /></div>
  </div>
  <div class="service-item black">
    <div class="text">
      <div class="title">
        <h3 class="h3 bg-white">Social Media</h3>
        <h3 class="h3 bg-white">Marketing</h3>
      </div>
      <div class="btn">
        <div class="icon whiteIcon">
          <img src="../assets/icons/blackArrow.svg" alt="" />
        </div>
        <div class="learn-more-white-btn">Learn More</div>
      </div>
    </div>
    <div class="image"><img src="../assets/service3.png" alt="" /></div>
  </div>
  <div class="service-item gray">
    <div class="text">
      <div class="title">
        <h3 class="h3 bg-green">Email</h3>
        <h3 class="h3 bg-green">Marketing</h3>
      </div>
      <div class="btn">
        <div class="icon">
          <img src="../assets/icons/greenArrow.svg" alt="" />
        </div>
        <div class="learn-more-black-btn">Learn More</div>
      </div>
    </div>
    <div class="image"><img src="../assets/service4.png" alt="" /></div>
  </div>
  <div class="service-item green">
    <div class="text">
      <div class="title">
        <h3 class="h3 bg-white">Content</h3>
        <h3 class="h3 bg-white">Creation</h3>
      </div>
      <div class="btn">
        <div class="icon">
          <img src="../assets/icons/greenArrow.svg" alt="" />
        </div>
        <div class="learn-more-black-btn">Learn More</div>
      </div>
    </div>
    <div class="image"><img src="../assets/service5.png" alt="" /></div>
  </div>
  <div class="service-item black">
    <div class="text">
      <div class="title">
        <h3 class="h3 bg-green">Analytics and</h3>
        <h3 class="h3 bg-green">Tracking</h3>
      </div>
      <div class="btn">
        <div class="icon whiteIcon">
          <img src="../assets/icons/blackArrow.svg" alt="" />
        </div>
        <div class="learn-more-white-btn">Learn More</div>
      </div>
    </div>
    <div class="image"><img src="../assets/service6.png" alt="" /></div>
  </div>
</div>
<div class="service-offer">
  <div class="text-part">
    <h3 class="h3">Let’s make things happen</h3>
    <p class="p2">
      Contact us today to learn more about how our digital marketing services
      can help your business grow and succeed online.
    </p>
    <div class="shadow-btn">Get your free proposal</div>
  </div>
  <div class="image-part">
    <img src="../assets/serviceMakeHappen.svg" alt="" />
  </div>
</div>

    `;
}

document.querySelector(".sec-two").innerHTML = Services();
