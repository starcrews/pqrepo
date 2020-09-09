let department = document.getElementById("department"),
  course_code = document.getElementById("course_code"),
  course_name = document.getElementById("course_name"),
  session = document.getElementById("session"),
  level = document.getElementById("level"),
  fCheck = document.querySelector(".fCheck"),
  preloader = document.querySelector(".sk-chase").style;

// Uploading a Question
const uploadQuestion = document.querySelector(".upload-question");

uploadQuestion.addEventListener("submit", function (e) {
  e.preventDefault();
  preloader.display = "inline-block";

  const formData = new FormData(this);

  fetch("/images", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((rdata) => {
      const data = {
        department: department.value,
        course_code: course_code.value,
        course_name: course_name.value,
        session: session.value,
        level: level.value,
        image: rdata.URLS,
      };

      fetch("/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((rdata) => {
          if (rdata.Message == "Upload Successful") {
            preloader.display = "none";

            department.value = "ACCOUNTING";
            course_code.value = "";
            course_name.value = "";
            session.value = "2011/2012";
            level.value = "100";
            fCheck.value = "";

            display("Upload Successful!");
          } else if (rdata.Message == "Upload Failed") {
            preloader.display = "none";
            display("Upload Failed, Try Again");
          } else if (rdata.Message == "Invalid Values") {
            preloader.display = "none";
            display("Invalid Values, Please Correct.");
          }
        })
        .catch((error) => {
          preloader.display = "none";
          display("Upload Failed, Try Again");
        });
    })
    .catch((error) => {
      preloader.display = "none";
      display("Server Error, Try Again");
    });
});

const display = (message) => {
  document.querySelector(
    ".message"
  ).innerHTML = `<div class="user-message user-message--error">${message}</div>
              <br />
              <br />`;
};
