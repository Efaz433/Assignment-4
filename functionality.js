const emptySection = document.getElementById("empty-section");
const jobCardContainer = document.getElementById("job-cards-container");
const allJobsBtn = document.getElementById("all-Jobs-btn");
const interviewJobsBtn = document.getElementById("interview-Jobs-btn");
const rejectedJobsBtn = document.getElementById("rejected-Jobs-btn");
const interviewCards = document.getElementById("interview-cards");
const rejectedCards = document.getElementById("rejected-cards");
console.log(rejectedCards.children.length)

interviewJobsBtn.addEventListener("click", () => {
    if (interviewCards.children.length === 0) {
        jobCardContainer.classList.add("hidden");
        rejectedCards.classList.add("hidden")
        emptySection.classList.remove("hidden")
    } else {
        jobCardContainer.classList.add("hidden");
        interviewCards.classList.remove("hidden")
        emptySection.classList.add("hidden")
    }

})
rejectedJobsBtn.addEventListener("click", () => {
    if (rejectedCards.children.length === 0) {
        jobCardContainer.classList.add("hidden");
        interviewCards.classList.add("hidden")
        emptySection.classList.remove("hidden")
    } else {
        jobCardContainer.classList.add("hidden");
        rejectedCards.classList.remove("hidden")
        emptySection.classList.add("hidden")
    }
})
allJobsBtn.addEventListener("click", () => {
    jobCardContainer.classList.remove("hidden");
    emptySection.classList.add("hidden");
    interviewCards.classList.add("hidden")
    rejectedCards.classList.add("hidden")
})

