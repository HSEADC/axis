import "../css/style.css";

console.log("hey");

import itImg from "../images/it.webp";
import marketingImg from "../images/marketing.webp";
import creativeImg from "../images/creative.webp";
import medicineImg from "../images/medicine.webp";
import financeImg from "../images/finance.webp";
import accurateImg from "../images/accurate.webp";
import humanitarianImg from "../images/humanitarian.webp";
import constructionImg from "../images/construction.webp";
import educationImg from "../images/education.webp";
import ecoImg from "../images/eco.webp";
import computerImg from "../images/comp.png";

const images = {
  it: itImg,
  marketing: marketingImg,
  creative: creativeImg,
  medicine: medicineImg,
  finance: financeImg,
  accurate: accurateImg,
  humanitarian: humanitarianImg,
  construction: constructionImg,
  education: educationImg,
  eco: ecoImg,
};

document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".cat-item");
  const banner = document.getElementById("banner-bg");
  const bannerImage = document.querySelector(".banner-image");

  const bannerTitle = document.getElementById("banner-title");
  const bannerDesc = document.getElementById("banner-desc");
  const bannerSteps = document.getElementById("banner-steps");

  const defaultImageSrc = computerImg; // Используем импортированную картинку
  const defaultTitle = bannerTitle.innerHTML;

  categories.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const imgKey = this.getAttribute("data-img");
      const color = this.getAttribute("data-color");
      const title = this.getAttribute("data-title");
      const desc = this.getAttribute("data-desc");

      this.style.color = color;

      banner.style.background = color;

      if (images[imgKey]) {
        bannerImage.src = images[imgKey];
        bannerImage.classList.add("zoom-active");
      }

      if (bannerSteps) bannerSteps.style.display = "none";

      if (bannerDesc) {
        bannerDesc.style.display = "block";
        bannerDesc.textContent = desc;
      }

      if (bannerTitle) bannerTitle.textContent = title;
    });

    item.addEventListener("mouseleave", function () {
      this.style.color = "";
      banner.style.background = "";
      bannerImage.src = defaultImageSrc;

      bannerImage.classList.remove("zoom-active");
      if (bannerSteps) bannerSteps.style.display = "block";
      if (bannerDesc) bannerDesc.style.display = "none";
      if (bannerTitle) bannerTitle.innerHTML = defaultTitle;
    });
  });
});
