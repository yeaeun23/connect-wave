gsap.registerPlugin(ScrollTrigger);
init();

function init() {
  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {
      /* section1 비디오 */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section1", // 트리거
            start: "top top", // 애니메이션 시작: 트리거 top과 뷰포트 top이 만날 때
            end: "bottom top", // 애니메이션 종료: 트리거 bottom과 뷰포트 top이 만날 때
            scrub: 1, // 애니메이션과 스크롤 동기화
            pin: true, // 스크롤 시 트리거 고정
            onUpdate: (self) => {
              gsap.set("#section1-video-inner", {
                clipPath: `inset(0 calc(${1 - self.progress} * (50% - 315px))
                             round calc(${1 - self.progress} * 20px)`,
              });
            },
          },
        })
        .to("#section1-logos", { y: "50vh", ease: "power1.in" });

      /* section2 슬레이트 */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section2",
            start: "top top",
            end: "+=600%", // 트리거 높이 6배만큼 스크롤 했을 때
            scrub: 1,
            pin: true,
            anticipatePin: 1, // 부드럽게 고정
          },
        })
        .to(".section2-slate-up > span", { y: "-50px", ease: "power1.in", duration: 0.1 }, 0)
        .to(".section2-slate-down > span", { y: "50px", ease: "power1.in", duration: 0.1 }, 0)
        .to(".section2-slate-up", { y: "-100%", ease: "power1.in", duration: 0.1 }, 0.1)
        .to(".section2-slate-down", { y: "100%", ease: "power1.in", duration: 0.1 }, 0.1)
        .to("#section2-slate-video > video", {
          clipPath: "inset(calc(50% - 300px) calc(50% - 640px) round 30px)",
          duration: 0.1,
        })
        .fromTo("#section2-slate-video > img", { opacity: 0 }, { opacity: 1, duration: 0.3 });
    },
  });

  window.addEventListener("resize", ScrollTrigger.update);
}
