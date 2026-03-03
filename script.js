//Dashboard values
const totalValue = document.getElementById("totalValue");
const interviewValue = document.getElementById("interviewValue");
const rejectedValue = document.getElementById("rejectedValue");


// list button Section
const listAll = document.getElementById("listAll");
const listInterview = document.getElementById("listInterview");
const listRejected = document.getElementById("listRejected");


// Job container and template
const jobParent = document.getElementById("jobParent");
const template = document.getElementById("jobTemplate");
const emptyState = document.getElementById("emptyState");
const availableJobsCount = document.getElementById("availableJobsCount");

const jobs = [
  {
    id: 1,
    company: "BRAC",
    position: "Field Officer",
    location: "Dhaka",
    type: "Full-time",
    salary: "25,000 - 30,000 BDT",
    status: "NOT APPLIED",
    description: "Work with rural development programs."
  },
  {
    id: 2,
    company: "Grameenphone",
    position: "Customer Service Executive",
    location: "Chattogram",
    type: "Full-time",
    salary: "28,000 - 32,000 BDT",
    status: "NOT APPLIED",
    description: "Assist customers with telecom services and queries."
  },
  {
    id: 3,
    company: "Square Pharmaceuticals",
    position: "Medical Representative",
    location: "Rajshahi",
    type: "Full-time",
    salary: "35,000 - 40,000 BDT",
    status: "NOT APPLIED",
    description: "Promote pharmaceutical products to healthcare professionals."
  },
  {
    id: 4,
    company: "Robi Axiata",
    position: "Sales Officer",
    location: "Sylhet",
    type: "Full-time",
    salary: "22,000 - 26,000 BDT",
    status: "NOT APPLIED",
    description: "Drive sales and manage client relationships."
  },
  {
    id: 5,
    company: "Unilever Bangladesh",
    position: "Marketing Intern",
    location: "Dhaka",
    type: "Internship",
    salary: "15,000 BDT",
    status: "NOT APPLIED",
    description: "Support marketing campaigns and brand activities."
  },
  {
    id: 6,
    company: "IFIC Bank",
    position: "Junior Officer",
    location: "Barisal",
    type: "Full-time",
    salary: "30,000 - 35,000 BDT",
    status: "NOT APPLIED",
    description: "Assist in daily banking operations and customer service."
  },
  {
    id: 7,
    company: "Apex Footwear",
    position: "Production Supervisor",
    location: "Gazipur",
    type: "Full-time",
    salary: "33,000 - 38,000 BDT",
    status: "NOT APPLIED",
    description: "Oversee shoe production and ensure quality standards."
  },
  {
    id: 8,
    company: "BRAC University",
    position: "Research Assistant",
    location: "Dhaka",
    type: "Part-time",
    salary: "20,000 BDT",
    status: "NOT APPLIED",
    description: "Assist faculty in academic research projects."
  },
  {
    id: 9,
    company: "Walton",
    position: "Software Engineer",
    location: "Gazipur",
    type: "Full-time",
    salary: "45,000 - 55,000 BDT",
    status: "NOT APPLIED",
    description: "Develop and maintain software solutions for electronics."
  },
  {
    id: 10,
    company: "Grameen Bank",
    position: "Loan Officer",
    location: "Mymensingh",
    type: "Full-time",
    salary: "28,000 - 34,000 BDT",
    status: "NOT APPLIED",
    description: "Manage microfinance loans and support rural clients."
  },
  {
    id: 11,
    company: "Banglalink",
    position: "Network Engineer",
    location: "Khulna",
    type: "Full-time",
    salary: "40,000 - 50,000 BDT",
    status: "NOT APPLIED",
    description: "Maintain and optimize telecom network infrastructure."
  }
];
let activeFilter = "ALL";

function setActiveTab(activeBtn) {
    const btns = [listAll, listInterview, listRejected];

    btns.forEach((b) => {
        b.setAttribute("aria-selected", "false");
        b.classList.remove("bg-blue-500", "text-white");
        b.classList.add("bg-white", "text-slate-500", "border", "border-gray-200");
    });

    activeBtn.setAttribute("aria-selected", "true");
    activeBtn.classList.remove("bg-white", "text-slate-500", "border", "border-gray-200");
    activeBtn.classList.add("bg-blue-500", "text-white");
}

function badgeStyle(span, status) {
    span.className = "jobTag inline-block rounded-md px-3 py-1 text-xs mb-3";

    if (status === "INTERVIEW") {
        span.classList.add("bg-green-50", "text-green-700");
    } else if (status === "REJECTED") {
        span.classList.add("bg-red-50", "text-red-700");
    } else {
        span.classList.add("bg-blue-50", "text-blue-700");
    }
}



function updateDashboard() {
    const total = jobs.length;
    const interview = jobs.filter(j => j.status === "INTERVIEW").length;
    const rejected = jobs.filter(j => j.status === "REJECTED").length;

    totalValue.textContent = total;
    interviewValue.textContent = interview;
    rejectedValue.textContent = rejected;
}

function visibleCountFor(filter) {
    if (filter === "ALL") return jobs.length;
    return jobs.filter(j => j.status === filter).length;
}

function updateAvailableCount(filter) {
    const total = jobs.length;
    const visible = visibleCountFor(filter);

    if (filter === "ALL") {
        availableJobsCount.textContent = `${total} ${total === 1 ? "job" : "jobs"}`;
    } else {
        availableJobsCount.textContent =
            `${visible} out of ${total} ${total === 1 ? "job" : "jobs"}`;
    }
}

function showOrHideEmpty() {
    const visible = visibleCountFor(activeFilter);
    if (visible === 0) emptyState.classList.remove("hidden");
    else emptyState.classList.add("hidden");
}

function applyFilter(filter) {
    activeFilter = filter;

    const cards = jobParent.querySelectorAll("[data-job-id]");
    cards.forEach((card) => {
        const id = Number(card.getAttribute("data-job-id"));
        const job = jobs.find(j => j.id === id);
        if (!job) return;

        if (filter === "ALL") {
            card.classList.remove("hidden");
        } else {
            if (job.status === filter) card.classList.remove("hidden");
            else card.classList.add("hidden");
        }
    });

    updateAvailableCount(filter);
    showOrHideEmpty();
}

function buildCard(job) {
    const card = template.cloneNode(true);
    card.classList.remove("hidden");
    card.removeAttribute("id");
    card.setAttribute("data-job-id", job.id);

    card.querySelector(".jobTitle").textContent = job.company;
    card.querySelector(".jobLine1").textContent = job.position;
    card.querySelector(".jobLine2").textContent = `${job.location} • ${job.type} • ${job.salary}`;

    const tag = card.querySelector(".jobTag");
    tag.textContent = job.status;
    badgeStyle(tag, job.status);

    card.querySelector(".jobDesc").textContent = job.description;

    
    const interviewBtn = card.querySelector(".interviewBtn");
    const rejectBtn = card.querySelector(".rejectBtn");
    const deleteBtn = card.querySelector(".deleteBtn");

    interviewBtn.addEventListener("click", () => {
        job.status = "INTERVIEW";
        tag.textContent = "INTERVIEW";
        badgeStyle(tag, "INTERVIEW");

        updateDashboard();
        applyFilter(activeFilter); 
    });

    rejectBtn.addEventListener("click", () => {
        job.status = "REJECTED";
        tag.textContent = "REJECTED";
        badgeStyle(tag, "REJECTED");

        updateDashboard();
        applyFilter(activeFilter);
    });

    deleteBtn.addEventListener("click", () => {
        card.remove();

        const index = jobs.findIndex(j => j.id === job.id);
        if (index !== -1) jobs.splice(index, 1);
        updateDashboard();
        applyFilter(activeFilter);
    });

    return card;
}

function loadJobs() {
    const old = jobParent.querySelectorAll("[data-job-id]");
    old.forEach(el => el.remove());

    jobs.forEach(job => {
        jobParent.insertBefore(buildCard(job), emptyState);
    });
}

listAll.addEventListener("click", () => {
    setActiveTab(listAll);
    applyFilter("ALL");
});

listInterview.addEventListener("click", () => {
    setActiveTab(listInterview);
    applyFilter("INTERVIEW");
});

listRejected.addEventListener("click", () => {
    setActiveTab(listRejected);
    applyFilter("REJECTED");
});

loadJobs();
updateDashboard();
setActiveTab(listAll);
applyFilter("ALL");

