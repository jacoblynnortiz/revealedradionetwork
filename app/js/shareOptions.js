let openShareOptionsBtn = document.getElementById('shareVideoBtn');

// copy link share button
const shareData = {
  title: "Revealed Radio Network",
  text: "",
  url: document.URL,
};

const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
openShareOptionsBtn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});