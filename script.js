/* This is for the navigation bar*/
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const printName = document.getElementById("printName");
  const submitName = document.getElementById("name");
  const submitButton = document.getElementById("submit");
  const nameForm = document.getElementById("nameForm");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    printName.innerText = "Hi " + submitName.value + "!";
    nameForm.style.display = "none";
  })

  const incomeInput = document.getElementById("incomeInput");
  const budgetButton = document.getElementById("updateBudget");
  const monthlyBudget = document.getElementById('monthlyBudget');
  const budgetHeader = document.getElementById("budgetHeader");

  budgetButton.addEventListener("click", (event) => {
      event.preventDefault();
    monthlyBudget.innerText = "$" + incomeInput.value + ".00";
    budgetHeader.innerText = "Starting Budget:";
    incomeInput.style.display = "none";
    budgetButton.style.display = "none";
  })










  /*this is for the nav links*/
  function showBudgetBuddy() {
    const buddy = document.querySelector("#budgetBuddy");
    buddy.style.display = "block";

    const creators = document.querySelector("#aboutCreators");
    creators.style.display="none";

    const x = document.getElementById("myLinks");
    x.style.display = "none";
  };
  function showAboutCreators() {
    const creators = document.querySelector("#aboutCreators");
    creators.style.display = "block";

    const buddy = document.querySelector("#budgetBuddy");
    buddy.style.display = "none";

    const x = document.getElementById("myLinks");
    x.style.display = "none";
  };