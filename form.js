const name = document.querySelector("#name");
const email = document.querySelector("#email");

const phone = document.querySelector("#phone");
const chef = document.querySelector("#chef");

const message = document.querySelector("#message");
const img = document.querySelector("#img");

const form = document.querySelector("#form");
const errorElement = document.querySelector("#error");

//regex for email defined, e-mail must be in this format:
const emailRegEx = /\S+[@]\S+[.]\S+/;

//event listener that checks if form values meet the criteria.
// if value does not meet criteria, then push error message to messages, and show it i

form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Verður að skrá nafn");
  }

  if (!emailRegEx.test(email.value)) {
    messages.push("Netfang vitlaust");
  }
  if (phone.value.length != 7) {
    messages.push("Símanúmer verður að vera 7 tölur");
  }

  //boolean (check if chef.value no is true)
  if (chef.value === "no") {
    messages.push("Þú átt ekki heima hér");
  }

  if (message.value.length < 1) {
    messages.push("Engin uppskrift skráð");
  }

  //////////////////////////////////////

  //if messages length is greater than 0, there is an error. push messages to errorElement innerHTML and make text color red.
  if (messages.length > 0) {
    // Ef messages.length er stærra en 0 þá er eh villa í gangi og við sýnum hana.
    e.preventDefault();
    errorElement.style.color = "red";
    errorElement.innerText = messages.join(` | `);
  } else {
    // else make text green and print success string
    errorElement.style.color = "green";
    messages.push("Takk fyrir uppskriftina!");
    errorElement.innerText = messages.join(` | `);
    e.preventDefault();
  }
});
