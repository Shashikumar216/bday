// Trigger to play music in the background with SweetAlert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background? For Better Experince use 🎧',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

// Animation timeline
const animationTimeline = () => {
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span>`;
    hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    };

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    };

    const tl = new TimelineMax();

    tl.to(".container", 0.6, { visibility: "visible" })
      .from(".one", 0.7, { opacity: 0, y: 10 })
      .from(".two", 0.4, { opacity: 0, y: 10 })
      .to(".one", 0.7, { opacity: 0, y: 10 }, "+=3.5")
      .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
      .from(".three", 0.7, { opacity: 0, y: 10 })
      .to(".three", 0.7, { opacity: 0, y: 10 }, "+=3")
      .from(".four", 0.7, { scale: 0.2, opacity: 0 })
      .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
      .staggerTo(".hbd-chatbox span", 1.5, { visibility: "visible" }, 0.05)
      .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" }, "+=4")
      .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=1")
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-3", 0.7, ideaTextTrans)
      .to(".idea-3 strong", 0.5, { scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
      .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-4", 0.7, ideaTextTrans)
      .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-5", 0.7, { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 }, "+=1.5")
      .to(".idea-5 span", 0.7, { rotation: 90, x: 8 }, "+=1.4")
      .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")
      .staggerFrom(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.2)
      .staggerTo(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.2, "+=1.5")
      .staggerFromTo(".baloons img", 2.5, { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000 }, 0.2)
      .from(".profile-picture", 0.8, { scale: 1.5, opacity: 0, x: 10, y: -10, rotationZ: -15, ease: "power2.out" }, "-=2")
      .from(".hat", 0.5, { x: -1000, y: 320, rotation: -180, opacity: 0 })
      .staggerFrom(".wish-hbd span", 0.7, { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: Elastic.easeOut.config(1, 0.5) }, 0.1)
      .staggerFromTo(".wish-hbd span", 0.7, { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#FF4500", ease: Expo.easeOut }, 0.1, "party")
      .from(".wish h5", 0.5, { opacity: 0, y: 10, skewX: "-15deg" }, "party")
      .staggerTo(".eight svg", 1.5, { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 1.4 }, 0.3)
      .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" })
      .to(".poetry", 4, {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        onStart: function () {
          gsap.set(".poetry-container", { visibility: "visible", overflowY: "auto" });
          setupPoetryScrollListener();
        }
      }, "+=0.3")
      .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
      .to(".last-smile", 0.5, { rotation: 90 })
      .fromTo(".footer p", 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: "power2.out" }, "+=1");
};

function setupPoetryScrollListener() {
    const poetryContainer = document.querySelector('.poetry-container');
    let scrollEndTimer;

    poetryContainer.addEventListener('scroll', function () {
        clearTimeout(scrollEndTimer);
        const isAtBottom = poetryContainer.scrollHeight - poetryContainer.scrollTop === poetryContainer.clientHeight;
        if (isAtBottom) {
            scrollEndTimer = setTimeout(() => {
                fadeOutPoetry();
            }, 5000);
        }
    });
}

function fadeOutPoetry() {
    gsap.to(".poetry", {
        opacity: 0,
        y: -30,
        duration: 2,
        ease: "power1.out",
        onComplete: resetPoetryContainer
    });
}

function resetPoetryContainer() {
    gsap.set(".poetry", { y: "100vh", opacity: 0 });
    gsap.set(".poetry-container", { visibility: "hidden" });
}

const poetryContainer = document.querySelector(".poetry-container");
const lastLine = poetryContainer?.querySelector("p:last-of-type");
const lastSection = document.querySelector(".nine");

function showLastSection() {
    setTimeout(() => {
        lastSection.style.opacity = "1";
        lastSection.style.transform = "translateY(0)";
    }, 7000);
}

if (poetryContainer && lastLine) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                showLastSection();
            }
        });
    }, { threshold: 1 });

    observer.observe(lastLine);
}

const replyBtn = document.getElementById("replay");
replyBtn.addEventListener("click", () => {
    const audio = document.querySelector(".song");
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
    gsap.set(".poetry", { y: "100vh", opacity: 0 });
    gsap.set(".poetry-container", { visibility: "hidden" });
    animationTimeline();
});
