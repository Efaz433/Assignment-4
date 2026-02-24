const emptySection = document.getElementById("empty-section");
const jobCardContainer = document.getElementById("job-cards-container");
const allJobsBtn = document.getElementById("all-Jobs-btn");
const interviewJobsBtn = document.getElementById("interview-Jobs-btn");
const rejectedJobsBtn = document.getElementById("rejected-Jobs-btn");
const interviewCards = document.getElementById("interview-cards");
const rejectedCards = document.getElementById("rejected-cards");
let totalInterview = document.getElementById("total-interview")
let totalReject = document.getElementById("total-reject")
let total = document.getElementById("total")

interviewJobsBtn.addEventListener("click", () => {
    if (interviewCards.children.length === 0) {
        jobCardContainer.classList.add("hidden");
        rejectedCards.classList.add("hidden")
        emptySection.classList.remove("hidden")
        total.innerText = interviewCards.children.length
    } else {
        jobCardContainer.classList.add("hidden");
        interviewCards.classList.remove("hidden")
        emptySection.classList.add("hidden")
        total.innerText = interviewCards.children.length
    }

})
rejectedJobsBtn.addEventListener("click", () => {
    if (rejectedCards.children.length === 0) {
        jobCardContainer.classList.add("hidden");
        interviewCards.classList.add("hidden")
        emptySection.classList.remove("hidden")
        total.innerText = rejectedCards.children.length
    } else {
        jobCardContainer.classList.add("hidden");
        rejectedCards.classList.remove("hidden")
        emptySection.classList.add("hidden")
        total.innerText = rejectedCards.children.length
    }
})
allJobsBtn.addEventListener("click", () => {
    jobCardContainer.classList.remove("hidden");
    emptySection.classList.add("hidden");
    interviewCards.classList.add("hidden")
    rejectedCards.classList.add("hidden")
    total.innerText = jobCardContainer.children.length
})


// adding cards to interview section
const interview = document.querySelectorAll(".interview");
interview.forEach(btn => {
    btn.addEventListener("click", () => {
        let cloneDiv = btn.parentNode.parentNode.cloneNode(true);
        interviewCards.appendChild(cloneDiv)
        totalInterview.innerText = interviewCards.children.length;
    });

});

// adding cards to reject section
const reject = document.querySelectorAll(".reject");
reject.forEach(btn => {
    btn.addEventListener("click", () => {
        let cloneDiv = btn.parentNode.parentNode.cloneNode(true);
        rejectedCards.appendChild(cloneDiv)
        totalReject.innerText = rejectedCards.children.length;
    });

});


