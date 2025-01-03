document.getElementById("more-button").addEventListener("click", function () {
    const hiddenNews = document.getElementById("hidden-news");
    const button = document.getElementById("more-button");

    if (hiddenNews.classList.contains("hidden")) {
      hiddenNews.classList.remove("hidden");
      button.textContent = "Show Less";
    } else {
      hiddenNews.classList.add("hidden");
      button.textContent = "More";
    }
  });