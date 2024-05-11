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
  var payment = document.getElementById("annuityPayment").value;
  var interestRate = document.getElementById("annuityInterestRate").value;
  var years = document.getElementById("annuityYears").value;

  var rateDecimal = interestRate / 100;
  var monthlyRate = rateDecimal / 12;
  var periods = years * 12;
  var powCalculation = Math.pow(1 + monthlyRate, -periods);
  var subtractFromOne = 1 - powCalculation;
  var presentValue = payment * (subtractFromOne / monthlyRate);

  document.getElementById("annuityPresentValue").innerText = presentValue.toFixed(2);
}

function calculateFutureValue() {
  var deposit = document.getElementById("initialDeposit").value;
  var interestRate = document.getElementById("annualInterest").value;
  var years = document.getElementById("depositYears").value;

  var rateDecimal = interestRate / 100;
  var dailyRate = rateDecimal / 365;
  var compoundingPeriods = 365 * years;
  var growthFactor = 1 + dailyRate;
  var powGrowth = Math.pow(growthFactor, compoundingPeriods);
  var futureValue = deposit * powGrowth;
  var totalInterest = futureValue - deposit;

  document.getElementById("futureValue").innerText = futureValue.toFixed(2);
  document.getElementById("totalInterestEarned").innerText = totalInterest.toFixed(2);
}

function calculateMortgage() {
  var principal = document.getElementById("mortgagePrincipal").value;
  var interestRate = document.getElementById("mortgageInterestRate").value;
  var years = document.getElementById("mortgageLoanTerm").value;

  var rateDecimal = interestRate / 100;
  var monthlyRate = rateDecimal / 12;
  var payments = years * 12;
  var powMinusPayments = Math.pow(1 + monthlyRate, -payments);
  var oneMinusPow = 1 - powMinusPayments;
  var monthlyPayment = (principal * monthlyRate) / oneMinusPow;
  var totalPaid = monthlyPayment * payments;
  var totalInterest = totalPaid - principal;

  document.getElementById("mortgageMonthlyPayment").innerText = monthlyPayment.toFixed(2);
  document.getElementById("mortgageTotalInterest").innerText = totalInterest.toFixed(2);
}
