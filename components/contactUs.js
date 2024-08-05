function ContactUs() {
  return `
  <div class="title-part">
  <h2 class="h2">Contact Us</h2>
  <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
</div>
<div class="contact-wrapp">
  <div class="form-part">
    <form action="">
      <div class="radioBox">
        <div class="inner">
        <input
        class="radio"
        id="sayhi"
        type="radio"
        name="sayhi"
        value="Say Hi"
        />
        <label for="sayhi">Say Hi</label>
        </div>
        <div class="inner">
        <input
        id="getaqoute"
        class="radio"
        type="radio"
        name="getaqoute"
        value="Get a Quote"
        />
        <label for="getaqoute">Get a Quote</label>
        </div>
      </div>
      <div class="inputBox">
        <label for="name">Name</label>
        <input
          class="text"
          id="name"
          type="text"
          name="name"
          id=""
          placeholder="Name"
        />
      </div>
      <div class="inputBox">
        <label for="email">Email*</label>
        <input
          class="text"
          id="email"
          type="text"
          name="email"
          id=""
          placeholder="Email"
          required
        />
      </div>
      <div class="inputBox">
        <label for="message">Message*</label>
        <textarea name="message" id="" placeholder="Message"></textarea>
      </div>
      <button class="shadow-btn">Send Message</button>
    </form>
  </div>
  <div class="image-part"><img src="../assets/contactUs.svg" alt="" /></div>
</div>

        `;
}

document.querySelector(".sec-seven").innerHTML = ContactUs();
