function Members() {
  return `
  <div class="title-part">
  <h2 class="h2">Team</h2>
  <p>
    Meet the skilled and experienced team behind our successful digital
    marketing strategies
  </p>
</div>
<div class="team-wrapp">
  <div class="team-member">
    <div class="top">
      <div class="member-part">
        <div class="image">
          <img src="../assets/member1.png" alt="" />
        </div>
        <div class="info">
          <span class="p1">John Smith</span>
          <span class="p2">CEO and Founder</span>
        </div>
      </div>
      <div class="icon">
        <img src="../assets/icons/greenLinkedin.svg" alt="" />
      </div>
    </div>
    <div class="dvider"></div>
    <p class="p2">
      10+ years of experience in digital marketing. Expertise in SEO, PPC, and
      content strategy
    </p>
  </div>
  <div class="team-member">
    <div class="top">
      <div class="member-part">
        <div class="image">
          <img src="../assets/member2.png" alt="" />
        </div>
        <div class="info">
          <span class="p1">Jane Doe</span>
          <span class="p2">Director of Operations</span>
        </div>
      </div>
      <div class="icon">
        <img src="../assets/icons/greenLinkedin.svg" alt="" />
      </div>
    </div>
    <div class="dvider"></div>
    <p class="p2">
      7+ years of experience in project management and team leadership. Strong
      organizational and communication skills
    </p>
  </div>
  <div class="team-member">
    <div class="top">
      <div class="member-part">
        <div class="image">
          <img src="../assets/member3.png" alt="" />
        </div>
        <div class="info">
          <span class="p1">Michael Brown</span>
          <span class="p2">Senior SEO Specialist</span>
        </div>
      </div>
      <div class="icon">
        <img src="../assets/icons/greenLinkedin.svg" alt="" />
      </div>
    </div>
    <div class="dvider"></div>
    <p class="p2">
      5+ years of experience in SEO and content creation. Proficient in keyword
      research and on-page optimization
    </p>
  </div>
  <div class="team-member">
    <div class="top">
      <div class="member-part">
        <div class="image">
          <img src="../assets/member4.png" alt="" />
        </div>
        <div class="info">
          <span class="p1">Emily Johnson</span>
          <span class="p2">PPC Manager</span>
        </div>
      </div>
      <div class="icon">
        <img src="../assets/icons/greenLinkedin.svg" alt="" />
      </div>
    </div>
    <div class="dvider"></div>
    <p class="p2">
      3+ years of experience in paid search advertising. Skilled in campaign
      management and performance analysis
    </p>
  </div>
  <div class="team-member">
    <div class="top">
      <div class="member-part">
        <div class="image">
          <img src="../assets/member5.png" alt="" />
        </div>
        <div class="info">
          <span class="p1">Brian Williams</span>
          <span class="p2">Social Media Specialist</span>
        </div>
      </div>
      <div class="icon">
        <img src="../assets/icons/greenLinkedin.svg" alt="" />
      </div>
    </div>
    <div class="dvider"></div>
    <p class="p2">
      4+ years of experience in social media marketing. Proficient in creating
      and scheduling content, analyzing metrics, and building engagement
    </p>
  </div>
  <div class="team-member">
    <div class="top">
      <div class="member-part">
        <div class="image">
          <img src="../assets/member6.png" alt="" />
        </div>
        <div class="info">
          <span class="p1">Sarah Kim</span>
          <span class="p2">Content Creator</span>
        </div>
      </div>
      <div class="icon">
        <img src="../assets/icons/greenLinkedin.svg" alt="" />
      </div>
    </div>
    <div class="dvider"></div>
    <p class="p2">
      2+ years of experience in writing and editing Skilled in creating
      compelling, SEO-optimized content for various industries
    </p>
  </div>
</div>
<div class="shadow-btn">See all Team</div>


      `;
}

document.querySelector(".sec-five").innerHTML = Members();
