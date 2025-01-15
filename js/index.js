gsap.registerPlugin(ScrollTrigger);
init();

function init() {
  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {
      /* section1 비디오 */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section1", // 트리거 요소
            start: "top top", // 애니메이션 시작 지점 (요소의 top과 뷰포트의 top이 만나는 지점)
            end: "bottom top", // 애니메이션 종료 지점 (요소의 bottom과 뷰포트의 top이 만나는 지점)
            scrub: 1, // 애니메이션과 스크롤의 동기화 정도
            pin: true, // 스크롤할 동안 요소 고정 여부
            onUpdate: (self) => {
              gsap.set("#section1-video-inner", {
                clipPath: `inset(0 calc(${1 - self.progress} * (50% - 315px))
                             round calc(${1 - self.progress} * 20px)`,
              });
            },
          },
        })
        .to("#section1-logos", { y: "50vh", ease: "power1.in" });
    },
  });

  window.addEventListener("resize", ScrollTrigger.update);
}
