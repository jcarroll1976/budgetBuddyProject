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
    monthlyBudget.innerText = "$" + incomeInput.value;
    budgetHeader.innerText = "Starting Budget:";
    incomeInput.style.display = "none";
    budgetButton.style.display = "none";
    
  });

  function remainingBudget() {
    return Number(incomeInput.value) - expenseTotal;
  }

  
  const addExpensesButton = document.getElementById("addExpenses");
  const entertainment = document.getElementById("entertainment");
  const food = document.getElementById("food");
  const clothing = document.getElementById("clothing");
  const bills = document.getElementById("bills");
  const remainingAmount = document.getElementById("remainingAmount");
  const totalSpent = document.getElementById("totalSpent");
  const entertainmentTotal = document.getElementById("entertainmentTotal");
  const foodTotal = document.getElementById("foodTotal");
  const clothingTotal = document.getElementById("clothingTotal");
  const billsTotal = document.getElementById("billsTotal");
  const expenseForm = document.getElementById("expenseForm");
  const insufficientFundsMessage = document.getElementById("insufficientFunds");
  let entertainmentExpense = 0;
  let foodExpense = 0;
  let clothingExpense = 0;
  let billsExpense = 0;
  let expenseTotal = 0;
  let newExpense = 0;
  let addedExpenseTotal = expenseTotal + expenseTotal;
  

  addExpensesButton.addEventListener("click", (event) => {
    event.preventDefault();
    entertainmentExpense += Number(entertainment.value);
    foodExpense += Number(food.value);
    clothingExpense += Number(clothing.value);
    billsExpense += Number(bills.value);
    expenseTotal = Number(entertainmentExpense + foodExpense + clothingExpense + billsExpense);
    remainingBudget();
    if (remainingBudget() >= 0) {

      remainingAmount.innerText = "$" + remainingBudget().toFixed(2);
      totalSpent.innerText = "$" + expenseTotal.toFixed(2);
      entertainmentTotal.innerText = "$" + entertainmentExpense.toFixed(2);
      foodTotal.innerText = "$" + foodExpense.toFixed(2);
      clothingTotal.innerText = "$" + clothingExpense.toFixed(2);
      billsTotal.innerText = "$" + billsExpense.toFixed(2);
      expenseForm.reset();
    } else {
      entertainmentExpense -= Number(entertainment.value);
      foodExpense -= Number(food.value);
      clothingExpense -= Number(clothing.value);
      billsExpense -= Number(bills.value);
      expenseTotal = Number(entertainmentExpense + foodExpense + clothingExpense + billsExpense);
      remainingAmount.innerText = "$" + remainingBudget().toFixed(2);
      totalSpent.innerText = "$" + expenseTotal.toFixed(2);
      entertainmentTotal.innerText = "$" + entertainmentExpense.toFixed(2);
      foodTotal.innerText = "$" + foodExpense.toFixed(2);
      clothingTotal.innerText = "$" + clothingExpense.toFixed(2);
      billsTotal.innerText = "$" + billsExpense.toFixed(2);
      expenseForm.reset();
      insufficientFundsMessage.classList.add("showMessage");
      setTimeout(() => {insufficientFundsMessage.classList.remove("showMessage")}, 5000);
    }
   
    })   
  



  