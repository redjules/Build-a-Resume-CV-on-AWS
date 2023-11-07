document.addEventListener("DOMContentLoaded", function () {
  var employmentHistory = [
    {
      year: "2020 - Present",
      content: "Senior Manufacturing Engineer - Abbott",
    },
    { year: "2019 - 2020", content: "Process Engineer - Johnson & Johnson" },
    // Add more employment history here
  ];

  var timeline = document.getElementById("timeline");

  employmentHistory.forEach(function (job) {
    var element = document.createElement("div");
    element.innerHTML = `<strong>${job.year}</strong>: ${job.content}`;
    timeline.appendChild(element);
  });
});
