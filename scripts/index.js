"use strict";

window.onload = function () {
  var annuityButton = document.getElementById("calculateAnnuityPV");
  if (annuityButton) {
    annuityButton.onclick = calculateAnnuityPV;
  }

  var futureValueButton = document.getElementById("calculateFutureValue");
  if (futureValueButton) {
    futureValueButton.onclick = calculateFutureValue;
  }

  var mortgageButton = document.getElementById("calculateMortgage");
  if (mortgageButton) {
    mortgageButton.onclick = calculateMortgage;
  }
};

function calculateAnnuityPV() {
  var payment = parseFloat(document.getElementById("annuityPayment").value);
  var interestRate =
    parseFloat(document.getElementById("annuityInterestRate").value) / 100;
  var years = parseFloat(document.getElementById("annuityYears").value);
  var monthlyRate = interestRate / 12;
  var periods = years * 12;
  var presentValue =
    payment * ((1 - Math.pow(1 + monthlyRate, -periods)) / monthlyRate);
  document.getElementById("annuityPresentValue").innerText =
    presentValue.toFixed(2);
}

function calculateFutureValue() {
  var deposit = parseFloat(document.getElementById("initialDeposit").value);
  var interestRate =
    parseFloat(document.getElementById("annualInterest").value) / 100;
  var years = parseFloat(document.getElementById("depositYears").value);
  var compoundingsPerYear = 365;
  var futureValue =
    deposit *
    Math.pow(
      1 + interestRate / compoundingsPerYear,
      compoundingsPerYear * years,
    );
  var totalInterest = futureValue - deposit;
  document.getElementById("futureValue").innerText = futureValue.toFixed(2);
  document.getElementById("totalInterestEarned").innerText =
    totalInterest.toFixed(2);
}

function calculateMortgage() {
  var principal = parseFloat(
    document.getElementById("mortgagePrincipal").value,
  );
  var interestRate =
    parseFloat(document.getElementById("mortgageInterestRate").value) / 100;
  var years = parseFloat(document.getElementById("mortgageLoanTerm").value);
  var monthlyRate = interestRate / 12;
  var payments = years * 12;
  var monthlyPayment =
    (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));
  var totalInterest = monthlyPayment * payments - principal;
  document.getElementById("mortgageMonthlyPayment").innerText =
    monthlyPayment.toFixed(2);
  document.getElementById("mortgageTotalInterest").innerText =
    totalInterest.toFixed(2);
}
