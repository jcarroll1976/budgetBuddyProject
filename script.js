/* This is for the navigation bar*/
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  /*this is for the nav links*/
  function showBudgetBuddy() {
    const buddy = document.querySelector("#topContainer");
    buddy.style.display = "block";

    const creators = document.querySelector("#aboutCreators");
    creators.style.display="none";

    const x = document.getElementById("myLinks");
    x.style.display = "none";
  };
  function showAboutCreators() {
    const creators = document.querySelector("#aboutCreators");
    creators.style.display = "block";

    const buddy = document.querySelector("#topContainer");
    buddy.style.display = "none";

    const x = document.getElementById("myLinks");
    x.style.display = "none";
  };
  
// Actual form stuff

  const printName = document.getElementById("printName");
  const submitName = document.getElementById("name");
  const submitButton = document.getElementById("submit");
  const nameForm = document.getElementById("nameForm");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    printName.innerText = "Hi " + submitName.value + "!";
    printName.style.display ="block";
    nameForm.style.display = "none";
  });

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
    
  });

  function remainingBudget() {
    return Number(incomeInput.value) - expenseTotal;
  }


  
  const addExpensesButton = document.getElementById("addExpenses");
  let entertainmentExpense = 0;
  let foodExpense = 0;
  let clothingExpense = 0;
  let billsExpense = 0;
  let expenseTotal = 0;

  addExpensesButton.addEventListener("click", (event) => {
    event.preventDefault();
    entertainmentExpense += Number(document.getElementById("entertainment").value);
    console.log(entertainmentExpense);
    foodExpense += Number(document.getElementById("food").value);
    console.log(foodExpense);
    clothingExpense += Number(document.getElementById("clothing").value);
    console.log(clothingExpense);
    billsExpense += Number(document.getElementById("bills").value);
    console.log(billsExpense);
    expenseTotal = Number(entertainmentExpense + foodExpense + clothingExpense + billsExpense);
    console.log(expenseTotal);
    remainingBudget();
    if (remainingBudget() >= 0) {

    document.getElementById("remainingAmount").innerText = "$" + remainingBudget().toFixed(2);
    document.getElementById("totalSpent").innerText = "$" + expenseTotal.toFixed(2);
    document.getElementById("entertainmentTotal").innerText = "$" + entertainmentExpense.toFixed(2);
    document.getElementById("foodTotal").innerText = "$" + foodExpense.toFixed(2);
    document.getElementById("clothingTotal").innerText = "$" + clothingExpense.toFixed(2);
    document.getElementById("billsTotal").innerText = "$" + billsExpense.toFixed(2);
    document.getElementById("expenseForm").reset();
    } else {
      entertainmentExpense -= Number(document.getElementById("entertainment").value);
      foodExpense -= Number(document.getElementById("food").value);
      clothingExpense -= Number(document.getElementById("clothing").value);
      billsExpense -= Number(document.getElementById("bills").value);
      expenseTotal = Number(entertainmentExpense + foodExpense + clothingExpense + billsExpense);
      document.getElementById("remainingAmount").innerText = "$" + remainingBudget().toFixed(2);
      document.getElementById("totalSpent").innerText = "$" + expenseTotal.toFixed(2);
      document.getElementById("entertainmentTotal").innerText = "$" + entertainmentExpense.toFixed(2);
      document.getElementById("foodTotal").innerText = "$" + foodExpense.toFixed(2);
      document.getElementById("clothingTotal").innerText = "$" + clothingExpense.toFixed(2);
      document.getElementById("billsTotal").innerText = "$" + billsExpense.toFixed(2);
      document.getElementById("expenseForm").reset();
      document.getElementById("insufficientFunds").innerText = "You don't have enough funds to add expense(s).";
     }
  })


