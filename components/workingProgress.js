document.addEventListener("DOMContentLoaded", (event) => {
  function workingProgress() {
    return `
    <div class="title-part">
    <h2 class="h2">Our Working Process </h2>
    <p>
    Step-by-Step Guide to Achieving Your Business Goals
    </p>
  </div>
  <div class="working-wrapp">
    <div class="working-faq">
      <div class="top-box">
        <div class="title-box">
          <h1 class="h1">01</h1>
          <h3 class="h3">Consultation</h3>
        </div>
        <div class="icon" >
          <img src="../assets/icons/plus.svg" alt="" />
        </div>
      </div>
      <div class="bottom-box">
        <div class="dvider"></div>
        <p class="p2">
          During the initial consultation, we will discuss your business goals and
          objectives, target audience, and current marketing efforts. This will
          allow us to understand your needs and tailor our services to best fit
          your requirements.
        </p>
      </div>
    </div>
    <div class="working-faq">
      <div class="top-box">
        <div class="title-box">
          <h1 class="h1">02</h1>
          <h3 class="h3">Research and Strategy Development</h3>
        </div>
        <div class="icon" >
          <img src="../assets/icons/plus.svg" alt="" />
        </div>
      </div>
      <div class="bottom-box">
        <div class="dvider"></div>
        <p class="p2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          necessitatibus, ex voluptas eius perferendis error placeat quis rem
          molestias unde rerum veritatis, a hic. Numquam doloribus mollitia minima
          labore accusamus?
        </p>
      </div>
    </div>
    <div class="working-faq">
      <div class="top-box">
        <div class="title-box">
          <h1 class="h1">03</h1>
          <h3 class="h3">Implementation</h3>
        </div>
        <div class="icon" >
          <img src="../assets/icons/plus.svg" alt="" />
        </div>
      </div>
      <div class="bottom-box">
        <div class="dvider"></div>
        <p class="p2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          necessitatibus, ex voluptas eius perferendis error placeat quis rem
          molestias unde rerum veritatis, a hic. Numquam doloribus mollitia minima
          labore accusamus?
        </p>
      </div>
    </div>
    <div class="working-faq">
      <div class="top-box">
        <div class="title-box">
          <h1 class="h1">04</h1>
          <h3 class="h3">Monitoring and Optimization</h3>
        </div>
        <div class="icon" >
          <img src="../assets/icons/plus.svg" alt="" />
        </div>
      </div>
      <div class="bottom-box">
        <div class="dvider"></div>
        <p class="p2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          necessitatibus, ex voluptas eius perferendis error placeat quis rem
          molestias unde rerum veritatis, a hic. Numquam doloribus mollitia minima
          labore accusamus?
        </p>
      </div>
    </div>
    <div class="working-faq">
      <div class="top-box">
        <div class="title-box">
          <h1 class="h1">05</h1>
          <h3 class="h3">Reporting and Communication</h3>
        </div>
        <div class="icon" >
          <img src="../assets/icons/plus.svg" alt="" />
        </div>
      </div>
      <div class="bottom-box">
        <div class="dvider"></div>
        <p class="p2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          necessitatibus, ex voluptas eius perferendis error placeat quis rem
          molestias unde rerum veritatis, a hic. Numquam doloribus mollitia minima
          labore accusamus?
        </p>
      </div>
    </div>
    <div class="working-faq">
      <div class="top-box">
        <div class="title-box">
          <h1 class="h1">06</h1>
          <h3 class="h3">Continual Improvement</h3>
        </div>
        <div class="icon" >
          <img src="../assets/icons/plus.svg" alt="" />
        </div>
      </div>
      <div class="bottom-box">
        <div class="dvider"></div>
        <p class="p2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          necessitatibus, ex voluptas eius perferendis error placeat quis rem
          molestias unde rerum veritatis, a hic. Numquam doloribus mollitia minima
          labore accusamus?
        </p>
      </div>
    </div>
  </div>
  
        `;
  }

  document.querySelector(".sec-four").innerHTML = workingProgress();

  // handler
  const boxs = document.querySelectorAll(".working-wrapp > .working-faq");
  boxs.forEach((box) => {
    const icon = box.querySelector(".top-box > .icon");
    const bottomBox = box.querySelector(".bottom-box");

    icon.addEventListener("click", (e) => {
      const image = icon.querySelector("img");
      const currentSrc = image.getAttribute("src");
      const plusSrc = "../assets/icons/plus.svg";
      const minusSrc = "../assets/icons/minus.svg";
      const toggleClass = "active"; // Replace with the class you want to toggle

      if (currentSrc === plusSrc) {
        image.setAttribute("src", minusSrc);
        box.classList.add(toggleClass);
        bottomBox.classList.add(toggleClass);
      } else {
        image.setAttribute("src", plusSrc);
        box.classList.remove(toggleClass);
        bottomBox.classList.remove(toggleClass);
      }
    });
  });
});
