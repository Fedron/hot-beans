const jobs = document.querySelectorAll(".job");
jobs.forEach((element) => {
    const expandButton = element.querySelector(".expand");
    const extraInfo = element.querySelector(".extra-info");

    // Expand button functionality
    expandButton.addEventListener("click", () => {
        if (extraInfo.classList.contains("hidden")) {
            extraInfo.classList.remove("hidden");
            expandButton.innerHTML = "Collapse";
        } else {
            extraInfo.classList.add("hidden");
            expandButton.innerHTML = "Expand";
        }
    });

    // Apply button functionality
    const applyButton = element.querySelector(".btn");
    const jobName = element.querySelector(".name").textContent.trim();

    const headers = element.querySelector(".main-info");
    const salary = headers.childNodes[1].textContent.trim();
    const time = headers.childNodes[3].textContent.trim();
    const city = headers.childNodes[5].textContent.trim();
    const info = element.querySelector(".info").textContent.trim();

    applyButton.setAttribute("href", `
        application.html?name=${jobName}&salary=${salary}&time=${time}&city=${city}&info=${info}
    `);
});
