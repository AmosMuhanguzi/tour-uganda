function toggleInfo(contentId, button) {
    var info = document.getElementById(contentId);
    if (info.style.display === "none" || info.style.display === " ") {

        info.style.display = "block";
        button.textContent = "Hide";
    } else {
        info.style.display = "none";
        button.textContent = "learn more";
    }
}