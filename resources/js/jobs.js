async function loadJobs() {
    let jobsJSON =  await axios.get("resources/js/jobs.json");
    jobsJSON = jobsJSON.data;
    
    const jobsContainer = document.querySelector(".job-list");
    jobsJSON.forEach((job, index) => {
        jobsContainer.innerHTML += `
        <div class="job">
            <div class="name">
                <h1>${job.name}</h1>
            </div>
            <div class="desc">
                <div class="headers">
                    <div class="main-info">
                        <h1><i class="fas fa-coins"></i> ${job.salary}</h1>
                        <h1><i class="fas fa-clock"></i> ${job.time}</h1>
                        <h1><i class="fas fa-city"></i> ${job.location}</h1>
                    </div>
                    <a class="btn" href="application.html?id=${job.id}">Apply Now</a>
                </div>
                <div class="info">${job.mainInfo}</div>
                <div class="extra-info hidden">${job.extraInfo}</div>
                <div class="expand btn">Expand</div>
            </div>
        </div>
        `
    });

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
    });
}

loadJobs();
