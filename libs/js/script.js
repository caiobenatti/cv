// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".text", { x: "0%", duration: 0.75, stagger: 0.15 });
// tl.to(".slider", { x: "-100%", duration: 0.75, delay: 0.25 });
// tl.to(".intro", { x: "-100%", duration: 0.5 }, "-=0.50");
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
// tl.fromTo(".card", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

let tl = gsap.timeline({ defaults: { ease: "power1.out" } });

$(".sucess").hide();

tl.to("ul.transition li", {
  duration: 0.5,
  scaleY: 1,
  transformOrigin: "bottom left",
  stagger: 0.2,
});
tl.to("ul.transition li", {
  duration: 0.5,
  scaleY: 0,
  transformOrigin: "bottom left",
  stagger: 0.1,
  delay: 0.1,
});
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
if ($(".card").length) {
  tl.fromTo(".card", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
}
if ($(".text").length) {
  tl.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
}
if ($(".form").length) {
  tl.fromTo(".form", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // these IDs from the previous steps
      emailjs.sendForm("service_km1jgrx", "template_xdhf66c", this).then(
        function () {
          console.log("SUCCESS!");
          $("#confirm").html("Sent!");
          $("#contact-form")[0].reset();
          $("#contact-form").hide();
          $(".sucess").fadeIn();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
}
