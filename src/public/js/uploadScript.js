let department = document.getElementById("department"),
  course_code = document.getElementById("course_code"),
  course_name = document.getElementById("course_name"),
  session = document.getElementById("session"),
  level = document.getElementById("level");

// Uploading a Question
const uploadQuestion = document.querySelector(".upload-question");

uploadQuestion.addEventListener("submit", function (e) {
  e.preventDefault();

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
          console.log(JSON.stringify(rdata.Message));
          location.reload(true);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log("Operation Failed");
    });
});
