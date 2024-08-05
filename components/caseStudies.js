function caseStudies() {
  return `
  <div class="title-part">
  <h2 class="h2">Case Studies</h2>
  <p>
    Explore Real-Life Examples of Our Proven Digital Marketing Success through
    Our Case Studies
  </p>
</div>
<div class="case-wrapp">
  <div class="case-item">
    <p class="p2">
      For a local restaurant, we implemented a targeted PPC campaign that
      resulted in a 50% increase in website traffic and a 25% increase in sales.
    </p>
    <div class="btn">
      <div class="learn-more-green-btn">Learn more</div>
      <div class="icon">
        <img src="../assets/icons/greenArrow.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="case-item border">
    <p class="p2">
      For a B2B software company, we developed an SEO strategy that resulted in
      a first page ranking for key keywords and a 200% increase in organic
      traffic.
    </p>
    <div class="btn">
      <div class="learn-more-green-btn">Learn more</div>
      <div class="icon">
        <img src="../assets/icons/greenArrow.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="case-item border">
    <p class="p2">
      For a national retail chain, we created a social media marketing campaign
      that increased followers by 25% and generated a 20% increase in online
      sales.
    </p>
    <div class="btn">
      <div class="learn-more-green-btn">Learn more</div>
      <div class="icon">
        <img src="../assets/icons/greenArrow.svg" alt="" />
      </div>
    </div>
  </div>
</div>

    `;
}

document.querySelector(".sec-three").innerHTML = caseStudies();
