const form = document.getElementById("atsForm");
const resultSection = document.getElementById("resultSection");
const scoreText = document.getElementById("scoreText");
const feedbackText = document.getElementById("feedbackText");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const jd = document.getElementById("jd").value;
  const resume = document.getElementById("resume").files[0];

  if (!jd || !resume) {
    alert("Please enter JD and upload a resume.");
    return;
  }

  // Generate a fake score between 60 and 100
  const score = Math.floor(Math.random() * 41) + 60;

  // Update UI
  scoreText.textContent = `${score}%`;
  feedbackText.innerHTML = getFeedback(score);
  resultSection.classList.remove("hidden");
});

// Example feedback logic
function getFeedback(score) {
  if (score >= 90) {
    return "🔥 Excellent match! You’re highly suitable for this role.";
  } else if (score >= 75) {
    return "✅ Good match. Minor tweaks to resume may boost it further.";
  } else {
    return "⚠️ Fair match. Try tailoring your resume more closely to the JD.";
  }
}
