const element = [
  "name",
  "address",
  "email",
  "phone",
  "profile",
  "12",
  "12institution",
  "12yr",
  "bachelor",
  "bInst",
  "bYear",
  "master",
  "masterInst",
  "masterYear",
  "other",
  "jt1",
  "employer1",
  "year1",
  "jt2",
  "employer2",
  "year2",
  "work-other",
  "skills1",
  "skills2",
  "skills3",
  "lang1",
  "lang2",
  "lang3",
  "hobbies1",
  "hobbies2",
  "hobbies3",
];
// let headerColor = null;
let output = "minimalist";
let selected = document.getElementById("myselect");
document.getElementById("headerColor").addEventListener("input", function () {
  headerColor = this.value;
});

document.getElementById("textColor").addEventListener("input", function () {
  document.body.style.color = this.value;
});

selected.addEventListener("change", () => {
  document.getElementById(output).style.display = 'none'; 
  output = selected.value;
  document.getElementById(output).style.display = 'block'; 
});

function setData(element) {
  document.getElementById(output + "-" + element).innerHTML =
    document.getElementById(element)?.value;
}



document
  .getElementById("resumeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    for (e of element) {
      setData(e);
    }
    
    const reader = new FileReader();
    
    document.getElementById(output+'-'+'img').src =URL.createObjectURL(
      document.getElementById("picture").files[0]
    );
  
    document.getElementById(output + "-" + "heading2").style.backgroundColor = headerColor;
    document.getElementById("downloadButton").style.display = "block";
    // Gather form data
    // const data = {};
    // data.fullName = document.getElementById("fullName").value;
    // data.address = document.getElementById("address").value;

    // data.email = document.getElementById("email").value;
    // data.phone = document.getElementById("phone").value;

    // //--------------------------languages data----------------------
    // data.language1 = document.getElementById("language-1").value;
    // data.language2 = document.getElementById("language-2").value;
    // data.language3 = document.getElementById("language-3").value;

    // //-------------------hobbies data-----------------------------
    // data.hobbies1 = document.getElementById("hobbies-1").value;
    // data.hobbies2 = document.getElementById("hobbies-2").value;
    // data.hobbies3 = document.getElementById("hobbies-3").value;

    // //------------------education details andd fetching---
    // data.eduDegree = document.getElementById("eduDegree").value;
    // data.eduInstitution = document.getElementById("eduInstitution").value;
    // data.eduYear = document.getElementById("eduYear").value;
    // data.eduYear1 = document.getElementById("eduYear1").value;
    // data.eduDegree1 = document.getElementById("eduDegree1").value;
    // data.eduInstitution1 = document.getElementById("eduInstitution1").value;
    // data.eduYear3 = document.getElementById("eduYear3").value;
    // data.eduDegree3 = document.getElementById("eduDegree3").value;
    // data.eduInstitution3 = document.getElementById("eduInstitution3").value;
    // //-----------------------------------------------------------
    // //work details-----------------------------------------
    // data.jobTitle = document.getElementById("jobTitle").value;
    // data.employer = document.getElementById("employer").value;
    // data.workYear = document.getElementById("workYear").value;
    // data.jobTitle1 = document.getElementById("jobTitle1").value;
    // data.employer1 = document.getElementById("employer1").value;
    // data.workYear1 = document.getElementById("workYear1").value;
    // data.other = document.getElementById("other").value;

    // //-------------------skills---------------------
    // data.skills1 = document.getElementById("skills-1").value;
    // data.skills2 = document.getElementById("skills-2").value;
    // data.skills3 = document.getElementById("skills-3").value;

    // data.profile = document.getElementById("profile").value;
    // data.picture = document.getElementById("picture").files[0];
    // document.getElementById("resumeContainer").innerHTML = getTemplate(data);
    // document.getElementById("heading2").style.backgroundColor = headerColor;
    
  });
















    document.getElementById("downloadButton").addEventListener("click", function () {
       console.log("shobha");
    var element = document.getElementById(output).innerHTML;
    console.log("outputis", element);
   
       html2pdf(element);
var opt = {
  margin:       1,
  filename:     'myfile.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 1 },
  jsPDF:        { unit: 'in', format: 'A4', orientation: 'landscape' }
};
html2pdf().from(element).set(opt).save();
   
   
});

















































  