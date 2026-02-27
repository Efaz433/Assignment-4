
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

// for different card button 
document.querySelector("main").addEventListener("click", (event) => {
    // for interview button 
    if (event.target.classList.contains("interview-btn")) {
        // if clicked this style will change
        event.target.parentNode.parentNode.classList.remove("border-l-6", "border-red-800")
        event.target.parentNode.previousElementSibling.previousElementSibling.classList.remove("border-2", "border-red-800", "text-red-800", "font-bold", "bg-white")
        event.target.parentNode.parentNode.classList.add("border-l-6", "border-green-800")
        event.target.parentNode.previousElementSibling.previousElementSibling.classList.add("border-2", "border-green-800", "text-green-800", "font-bold", "bg-white")
        // for updating "not applied" innertext
        event.target.parentNode.previousElementSibling.previousElementSibling.innerText = "Interview";

        let cloneDiv = event.target.parentNode.parentNode.cloneNode(true);
        let title = cloneDiv.children[0].children[0].children[0].innerText;
        let interviewExists = false;
        for (cards of interviewJobCards.children) {
            const jobTitle = cards.querySelector(".job-title").innerText;
            if (jobTitle === title) {
                interviewExists = true;
                break;
            }
        }
        if (!interviewExists) {
            interviewJobCards.append(cloneDiv);
        }
        for (cards of rejectedJobCards.children) {
            const jobTitle = cards.querySelector(".job-title").innerText;
            if (jobTitle === title) {
                cards.remove();
                break;
            }
        }

    }
    // for reject button
    if (event.target.classList.contains("reject-btn")) {
        // if clicked this style will change
        event.target.parentNode.parentNode.classList.add("border-l-6", "border-red-800")
        event.target.parentNode.previousElementSibling.previousElementSibling.classList.add("border-2", "border-red-800", "text-green-800", "font-bold", "bg-white")
        // for updating "not applied" innertext
        event.target.parentNode.previousElementSibling.previousElementSibling.innerText = "Rejected";

        let cloneDiv = event.target.parentNode.parentNode.cloneNode(true);
        let title = cloneDiv.children[0].children[0].children[0].innerText;
        let rejectExists = false;
        for (cards of rejectedJobCards.children) {
            const jobTitle = cards.querySelector(".job-title").innerText;
            if (jobTitle === title) {
                rejectExists = true;
                break;
            }
        }
        if (!rejectExists) {
            rejectedJobCards.append(cloneDiv);
        }
        for (cards of interviewJobCards.children) {
            const jobTitle = cards.querySelector(".job-title").innerText;
            if (jobTitle === title) {
                cards.remove();
                break;
            }
        }
    }
    // for deleting card
    if (event.target.classList.contains("fa-trash-can")) {
        event.target.parentNode.parentNode.parentNode.remove();
    }
    togglingFunction(btnId)
})

