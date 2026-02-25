const noJobSection = document.getElementById("no-job-section");

const allJobCards = document.getElementById("all-job-cards");

const interviewJobCards = document.getElementById("interview-job-cards");

const rejectedJobCards = document.getElementById("rejected-job-cards");

// for toggling btn
const cmnSectionBtn = document.querySelectorAll(".cmn-section-btn");
const cardContainer = document.querySelectorAll(".card-container")
console.log(cardContainer.children)

// to defaulty seclect allJobs btn
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("all-section-btn").click();
});

cmnSectionBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        cmnSectionBtn.forEach(btn => {
            // for removing all the blue color
            btn.classList.remove("bg-blue-800");
        })
        // for adding the blue color
        document.getElementById(btn.getAttribute("id")).classList.add("bg-blue-800");
        // for toggling between section
        cardContainer.forEach(con => {
            con.classList.add("hidden");
        })

        if (btn.getAttribute("id") === "all-section-btn" && allJobCards.children.length > 0) {
            allJobCards.classList.remove("hidden");
        } else if (btn.getAttribute("id") === "interview-section-btn" && interviewJobCards.children.length > 0) {
            interviewJobCards.classList.remove("hidden");
        } else if (btn.getAttribute("id") === "rejected-section-btn" && rejectedJobCards.children.length > 0) {
            rejectedJobCards.classList.remove("hidden")
        } else {
            noJobSection.classList.remove("hidden")
        }

    });
});



// document.getElementById("all-section-btn").addEventListener("click", () => {
//     if (allJobCards.children.length > 0) {
//         allJobCards.classList.remove("hidden");
//         noJobSection.classList.add("hidden")
//         interviewJobCards.classList.add("hidden")
//         rejectedJobCards.classList.add("hidden")
//     } else {
//         noJobSection.classList.remove("hidden")
//     }
// })
// document.getElementById("interview-section-btn").addEventListener("click", () => {
//     if (interviewJobCards.children.length > 0) {
//         allJobCards.classList.add("hidden");
//         noJobSection.classList.add("hidden")
//         interviewJobCards.classList.remove("hidden")
//         rejectedJobCards.classList.add("hidden")
//     } else {
//         noJobSection.classList.remove("hidden")
//     }
// })
// document.getElementById("rejected-section-btn").addEventListener("click", () => {
//     if (rejectedJobCards.children.length > 0) {
//         allJobCards.classList.add("hidden");
//         noJobSection.classList.add("hidden")
//         interviewJobCards.classList.add("hidden")
//         rejectedJobCards.classList.remove("hidden")
//     } else {
//         noJobSection.classList.remove("hidden")
//     }
// })

