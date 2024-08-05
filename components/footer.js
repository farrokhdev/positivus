function Footer() {
  return `
  <div class="footer-wrapp">
  <div class="footer-top">
    <div class="logo"><img src="../assets//whiteLogo.svg" alt="" /></div>
    <div class="menu">
      <a class="link" href="#about">About Us</a>
      <a class="link" href="#services">Services</a>
      <a class="link" href="#useCases">Use Cases</a>
      <a class="link" href="#pricing">Blog</a>
    </div>
    <div class="socials">
      <button><img src="../assets//icons/linkedin.svg" alt="" /></button>
      <button><img src="../assets//icons/twitter.svg" alt="" /></button>
      <button><img src="../assets//icons/facebook.svg" alt="" /></button>
    </div>
  </div>
  <div class="footer-middle">
    <div class="infos">
      <div class="title">Contact Us</div>
      <span class="p2">Email: info@positivus.com</span>
      <span class="p2">Phone: 555-567-8901</span>
      <span class="p2"
        >Address: 1234 Main St Moonstone City, Stardust State 12345</span
      >
    </div>
    <div class="connect">
      <input class="footerInput text" type="text" placeholder="Email" />
      <button class="green-btn">Subscribe to news</button>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="p2">© 2023 Positivus. All Rights Reserved.</span>
    <a href="#" class="link p2">Privacy Policy</a>
  </div>
</div>

          `;
}

document.querySelector(".footer").innerHTML = Footer();
