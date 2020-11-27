const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { x: "0%", duration: 0.75, stagger: 0.15 });
tl.to(".slider", { x: "-100%", duration: 0.75, delay: 0.25 });
tl.to(".intro", { x: "-100%", duration: 0.5 }, "-=0.50");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
