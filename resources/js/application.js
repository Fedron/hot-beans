const urlParams = new URLSearchParams(window.location.search);
document.querySelector("#job").innerHTML = `
<div class="title">
    ${urlParams.get("name")}
</div>
<div class="headers">
    <div class="main-info">
        <h1>${urlParams.get("salary")}</h1>
        <h1><i class="fas fa-clock"></i> ${urlParams.get("time")}</h1>
        <h1><i class="fas fa-city"></i> ${urlParams.get("city")}</h1>
    </div>
    <div class="btn">View Info</div>
</div>
<div class="info hidden">
    ${urlParams.get("info")}
</div>
`;

const jobInfo = document.querySelector("#job .info");
const viewInfoBtn = document.querySelector("#job .btn");
viewInfoBtn.addEventListener("click", () => {
    if (jobInfo.classList.contains("hidden")) {
        jobInfo.classList.remove("hidden");
        viewInfoBtn.innerHTML = "Collapse Info";
    } else {
        jobInfo.classList.add("hidden");
        viewInfoBtn.innerHTML = "View Info";
    }
});