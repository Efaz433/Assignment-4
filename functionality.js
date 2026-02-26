
const noJobSection = document.getElementById("no-job-section");

const allJobCards = document.getElementById("all-job-cards");

const interviewJobCards = document.getElementById("interview-job-cards");

const rejectedJobCards = document.getElementById("rejected-job-cards");


const cmnSectionBtn = document.querySelectorAll(".cmn-section-btn");
const cardContainer = document.querySelectorAll(".card-container");
// to defaulty seclect allJobs btn
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("all-section-btn").click();
});

let btnId = ""

cmnSectionBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        // for toggling btn
        cmnSectionBtn.forEach(btn => {
            // for removing all the blue color
            btn.classList.remove("bg-blue-800");
        })
        // for adding the blue color
        document.getElementById(btn.getAttribute("id")).classList.add("bg-blue-800");
        btnId = btn;
        togglingFunction(btnId);
    });
});

// for deleteing cards 
document.querySelector("main").addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-trash-can")) {
        event.target.parentNode.parentNode.parentNode.remove();
    }
    togglingFunction(btnId)

})

// section toggle
function togglingFunction(btnId) {
    // for toggling between section
    cardContainer.forEach(con => {
        con.classList.add("hidden");
    })

    if (btnId.getAttribute("id") === "all-section-btn" && allJobCards.children.length > 0) {
        allJobCards.classList.remove("hidden");
        // for updating the section card amount
        document.getElementById("section-card-amount").innerText = allJobCards.children.length;
    } else if (btnId.getAttribute("id") === "interview-section-btn" && interviewJobCards.children.length > 0) {
        interviewJobCards.classList.remove("hidden");
        // for updating the section card amount
        document.getElementById("section-card-amount").innerText = interviewJobCards.children.length;
    } else if (btnId.getAttribute("id") === "rejected-section-btn" && rejectedJobCards.children.length > 0) {
        rejectedJobCards.classList.remove("hidden");
        // for updating the section card amount
        document.getElementById("section-card-amount").innerText = rejectedJobCards.children.length;
    } else {
        noJobSection.classList.remove("hidden");
        // for updating the section card amount
        document.getElementById("section-card-amount").innerText = 0;
    }
}




