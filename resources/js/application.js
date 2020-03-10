async function loadJobInfo() {
    let jobsJSON =  await axios.get("resources/js/jobs.json");
    jobsJSON = jobsJSON.data;
    
    const urlParams = new URLSearchParams(window.location.search);
    const job = jobsJSON.filter(j => j.id === parseInt(urlParams.get("id")))[0];
    
    if (!job) {
        document.querySelector("form").classList.add("hidden");
        document.querySelector("#job").classList.add("hidden");

        const alert = document.querySelector("#alert");
        alert.style.backgroundColor = "#eb4034"
        alert.querySelector("p").innerHTML = `Job ID not found`;

        alert.classList.remove("hidden");

        return;
    }

    document.querySelector("#job").innerHTML = `
    <div class="title">
        ${job.name}
    </div>
    <div class="headers">
        <div class="main-info">
            <h1><i class="fas fa-coins"></i> ${job.salary}</h1>
            <h1><i class="fas fa-clock"></i> ${job.time}</h1>
            <h1><i class="fas fa-city"></i> ${job.location}</h1>
        </div>
        <div class="btn">View Info</div>
    </div>
    <div class="info hidden">
        ${job.mainInfo}
        <br><br>
        ${job.extraInfo}
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
}

loadJobInfo();

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const requiredFields = document.querySelectorAll(".req");
    const missingFields = [];
    requiredFields.forEach((element) => {
        const inputField = element.querySelector("input");
        if (!inputField.value) {
            missingFields.push(inputField.name);
        }
    });

    const alert = document.querySelector("#alert");
    if (missingFields.length > 0) {
        alert.style.backgroundColor = "#eb4034"
        alert.querySelector("p").innerHTML = `Required fields missing: ${missingFields}`;
    } else {
        alert.style.backgroundColor = "#67db6f";
        alert.querySelector("p").innerHTML = "Application submitted successfully";
    }

    alert.classList.remove("hidden");
});

document.querySelector("#alert i").addEventListener("click", () => {
    document.querySelector("#alert").classList.add("hidden");
});