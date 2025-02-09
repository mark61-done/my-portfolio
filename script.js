var typed = new Typed(".typing", {
  strings: ["", "Software Developer", "Graphic Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
// toggle mobile menu visibility
const asideNavToggler = document.querySelector(".aside .nav-toggler");
const menuCloseButton = document.querySelector("#menu-close-button");

asideNavToggler.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => asideNavToggler.click());
// Emailing
Email.send({
  Host: "smtp.elasticemail.com",
  Username: "markoolando558@gmail.com",
  Password: "",
  To: "them@website.com",
  From: "markoolando558@gmail.com",
  Subject: "This is the subject",
  Body: "And this is the body",
}).then((message) => alert(message));
