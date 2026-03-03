const totalValue = document.getElementById("totalValue");
const interviewValue = document.getElementById("interviewValue");
const rejectedValue = document.getElementById("rejectedValue");

const listAll = document.getElementById("listAll");
const listInterview = document.getElementById("listInterview");
const listRejected = document.getElementById("listRejected");

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