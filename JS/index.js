//skill progress

const container = document.getElementById("skills_main");
const progressbars = document.querySelectorAll(".progress_bar");

function showprogress() {
  progressbars.forEach((progressbar) => {
    const value = progressbar.dataset.progress;
    // console.log(value);
    progressbar.style.opacity = 1;
    progressbar.style.width = `${value}%`;
  });
}

function hideprogress() {
  progressbars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const sectionpos = container.getBoundingClientRect().top;
  const screenpos = window.innerHeight;

  if (sectionpos < screenpos) {
    showprogress();
  } else {
    hideprogress();
  }
});

//top progress bar
const body = document.querySelector(".main");
const progressBartop = document.querySelector(".top_progress_bar");

const onscroll = () => {
  let scrollDist = -body.getBoundingClientRect().top;
  let progresswidth =
    (scrollDist /
      (body.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;
  let value = Math.floor(progresswidth);
  progressBartop.style.width = value + "%";
};

window.addEventListener("scroll", onscroll);
