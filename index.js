const onClickResume = () => {
  document.getElementById("frameBtn").setAttribute("src", "resume.html");
  document.getElementById("title").innerHTML = "Resume";
  document.getElementById("resumeBtn").style = "text-decoration: underline";
  document.getElementById("portfolioBtn").style = "text-decoration: none";
  // let main = document.getElementById("main");
  // main.className = "animation-move";
};

const onClickPortfolio = () => {
  document.getElementById("frameBtn").setAttribute("src", "portfolio.html");
  document.getElementById("title").innerHTML = "Portfolio";
  document.getElementById("resumeBtn").style = "text-decoration: none";
  document.getElementById("portfolioBtn").style = "text-decoration: underline";
};
