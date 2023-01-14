const form = document.querySelector("form");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const body = document.querySelector("#body");
const phone = document.querySelector("#phone_num");
const the_nerd = document.querySelector(".the-nerd-presentation");
const checkout_thenerd = document.querySelector("#the-nerd-btn");

//iframe for the The Nerd Project
let show_theNerd = 0;
const thenerd = ` <div
      style="
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 56.25%;
        padding-bottom: 0;
        box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
        margin-top: 1.6em;
        margin-bottom: 0.9em;
        overflow: hidden;
        border-radius: 8px;
        will-change: transform;
      "
      >
      <iframe
        loading="lazy"
        style="
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border: none;
          padding: 0;
          margin: 0;
        "
        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFXoD5iNKM&#x2F;view?embed"
        allowfullscreen="allowfullscreen"
        allow="fullscreen"
      >
      </iframe>
      </div>`;

checkout_thenerd.addEventListener("click", (e) => {
  show_theNerd++;
  if (show_theNerd % 2) the_nerd.innerHTML = thenerd;
  else the_nerd.innerHTML = ``;
});
//validation
const israli_phone_pattern =
  /^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/;
let checkvalid = 0;

phone.addEventListener("keyup", (e) => {
  if (israli_phone_pattern.test(phone.value)) {
    phone.setAttribute("class", "success");
    checkvalid = 1;
  } else {
    phone.setAttribute("class", "error");
    checkvalid = 0;
  }
});

//send mail
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let content = `    RECEIVED A MESSAGE FROM YOUR PERSONAL SITE:
                    the email of the sender is: ${email.value}
                    the phone number of the sender is: ${phone.value}
                    and the content is: ${body.value}`;
  if (checkvalid) {
    Email.send({
      SecureToken: "dbd5f71c-4247-4a65-a5e2-eefe03c366a3",
      To: "orennisim22@gmail.com",
      From: "orennisim172@gmail.com",
      Subject: subject.value,
      Body: content,
    })
      .then((message) =>
        alert("email sent successfully, Thank you for your message")
      )
      .catch((err) => alert(err));
  } else {
    alert("phone number is not valid");
  }
});
