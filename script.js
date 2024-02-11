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
    debugger
    document.getElementById(output+'-'+'img').src =URL.createObjectURL(
      document.getElementById("picture").files[0]
    )
    ;
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
    // document.getElementById("downloadButton").style.display = "block";
  });

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const blob = new Blob([resumeOutput], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

// function getTemplate(data) {
//   if (output == "minimalist") {
//     // Generate resume output
//     return `
//     <div id="resumeOutput">
//   <div id = "heading2" class= "heading">
//   <h2>${data.fullName}</h2>
//    <img class="round-img" src="${URL.createObjectURL(
//      data.picture
//    )}" alt="User's Picture"></p>
//    </div>
   
//    <div id = "Address">
//     <p><strong>Address:</strong>${data.address}</p>
//    <p><strong>Email:</strong>${data.email}</p>
//    <p><strong>Phone:</strong>${data.phone}</p>
//    </div>

//    <div id = "profile">
//    <h3>Profile</h3>
//    <p>${data.profile}</p>
//     </div>
   
//    <div id ="education">
//   <h3>Education</h3>
//   <div id ="sub-div">
//       <p><strong>12th:</strong>${data.eduDegree}</p>
//        <p><strong>Institution:</strong> ${data.eduInstitution}</p>
//       <p><strong>Year:</strong> ${data.eduYear}</p>
//       </div>
//    <div id = "sub-id2">
//    <p><strong>Bechlor:</strong> ${data.eduDegree1}</p>
//    <p><strong>Institution:</strong> ${data.eduInstitution1}</p>
//    <p><strong>Year:</strong> ${data.eduYear1}</p>
//    </div>
//    <div id = "sub-id3">
//    <p><strong>Master:</strong> ${data.eduDegree3}</p>
//    <p><strong>Institution:</strong> ${data.eduInstitution3}</p>
//    <p><strong>Year:</strong> ${data.eduYear3}</p>
//    </div>
//    <div id ="other">
//    <h3>Other</h3>
//    <p>${data.other}</p>                        
//    </div>
//     </div>
   
   
   
//     <div id="work">
//    <h3>Work Experience</h3>
//     <div id="work1">
//    <p><strong>Job Title:</strong>${data.jobTitle}</p>
//    <p><strong>Employer:</strong>${data.employer}</p>
//    <p><strong>Year:</strong>${data.workYear}</p>
//    </div>
   
//    <div id="work2">
//    <p><strong>Job Title:</strong>${data.jobTitle1}</p>
//    <p><strong>Employer:</strong>${data.employer1}</p>
//    <p><strong>Year:</strong>${data.workYear1}</p>
//    </div>
   
//    <div id ="other">
//    <h3>Other</h3>
//    <p>${data.other}</p>                        
//    </div>
//    </div>
  
// <div class="skills1">
// <h3>skills</h3>
//           <div class="box">
//             <h3>${data.skills1}</h3>
//           </div>
//           <div class="box">
//             <h3>${data.skills2}</h3> 
//           </div>
//           <div class="box">
//             <h3>${data.skills3}</h3> 
//           </div>
//         </div>

//         <div class="hobbies">
//         <h3>language</h3>
//         <li>${data.language1}</li>
//         <li>${data.language2}</li>
//         <li>${data.language3}</li>
//         </div>

//         <div class="hobbies">
//         <h3>HOBBIES</h3>
//         <li>${data.hobbies1}</li>
//         <li>${data.hobbies2}</li>
//         <li>${data.hobbies3}</li>
//         </div>
// </div>
//  `;
//   } else if (output == "two-column") {
//     // Generate resume output
//     return `
//    <div id="nextresume">
//       <div id = "heading2"  class="left">
//         <div class="image">
//           <img  class= "minimalist-img"src="${URL.createObjectURL(
//             data.picture
//           )}" alt="User's Picture"></img>
//           <i class="ri-phone-fill">${data.phone}</i>
//           <i class="ri-mail-line">${data.email}</i>
//           <i class="ri-map-pin-line">${data.address}</i>
//         </div>
//         <div class="summary">
//           <h3>profile</h3>
//           <p>${data.profile}</p>
//         </div>
      
//         <div class="language">
//           <h3>language</h3>
//           <li>${data.language1}</li>
//           <li>${data.language2}</li>
//           <li>${data.language3}</li>
//           </div>

//           <div class="language">
//           <h3>HOBBIES</h3>
//           <li>${data.hobbies1}</li>
//           <li>${data.hobbies2}</li>
//           <li>${data.hobbies3}</li>
//           </div>
          
//       </div>

//       <div class="right">
//         <div class="first">
//           <h3>${data.fullName}</h3>
//         </div>
//         <div class="Experience">
//             <h3>Experience</h3>
//             <div class="exp-1">
//             <p>${data.jobTitle}</p>
//             <li>${data.employer}</li>
//             <li>${data.employer}</li>
//           </div>
//           <div class="exp-2">
//             <p>${data.jobTitle1}</p>
//             <li>${data.employer1}</li>
//             <li>${data.workYear1}</li>
//           </div>
//           <div class="exp-3">
//             <p>Other</p>
//             <li>${data.other}</li>
//             </div>
//         </div>
//         <div class ="education">
//         <h3>Education</h3>
//        <div class ="sub-div1">
//        <p><strong>12th:</strong>${data.eduDegree}</p>
//         <p><strong>Institution:</strong> ${data.eduInstitution}</p>
//        <p><strong>Year:</strong> ${data.eduYear}</p>
//        <p><strong>Bechlor:</strong> ${data.eduDegree1}</p>
//       <p><strong>Institution:</strong> ${data.eduInstitution1}</p>
//       <p><strong>Year:</strong> ${data.eduYear1}</p>
//       <p><strong>Master:</strong> ${data.eduDegree3}</p>
//     <p><strong>Institution:</strong> ${data.eduInstitution3}</p>
//     <p><strong>Year:</strong> ${data.eduYear3}</p>
//     </div>
//     <div id ="other">
//     <h3>Other</h3>
//     <p>${data.other}</p>                        
//     </div>
//      </div>
    
       
       
       
       
       
       
       
//         <div class="skills">
//         <h3>skills</h3>
//           <div class="box">
//             <h3>${data.skills1}</h3>
//           </div>
//           <div class="box">
//             <h3>${data.skills2}</h3> 
//           </div>
//           <div class="box">
//             <h3>${data.skills3}</h3> 
//           </div>
//         </div>
//       </div>
//     </div>

//   `;
//   }
// }
