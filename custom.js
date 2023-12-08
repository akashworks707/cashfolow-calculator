 function calculateResult() {
	console.log("Inside calcualte method")
  let price__inp = filterVal(document.getElementById("price__inp").value) * 1;
  let deposit__inp =
    filterVal(document.getElementById("deposit__inp").value) / 100;
  let stampDuty__inp =
    filterVal(document.getElementById("stampDuty__inp").value) * 1;
  let solicitor__inp =
    filterVal(document.getElementById("solicitor__inp").value) * 1;
  let renovation__inp =
    filterVal(document.getElementById("renovation__inp").value) * 1;
  let weeklyRent__inp =
    filterVal(document.getElementById("weeklyRent__inp").value) * 1;
  let council__inp =
    filterVal(document.getElementById("council__inp").value) * 1;
  let water__inp = filterVal(document.getElementById("water__inp").value) * 1;
  let strate__inp = filterVal(document.getElementById("strate__inp").value) * 1;
  let buildIns__inp =
    filterVal(document.getElementById("buildIns__inp").value) * 1;
  let landlord__inp =
    filterVal(document.getElementById("landlord__inp").value) * 1;
  let total__out = document.getElementById("total__out");
  let depositSource__inp =
    filterVal(document.getElementById("depositSource__inp").value) * 1;
  let mortgage1Rate__inp =
    filterVal(document.getElementById("mortgage1Rate__inp").value) / 100;
  let mortgage1Amt__out = document.getElementById("mortgage1Amt__out");

  let mortgage2Amt__out = document.getElementById("mortgage2Amt__out");
  let mortgage2Rate__inp =
    filterVal(document.getElementById("mortgage2Rate__inp").value) / 100;
  /*let mortgage3Rate__inp =
    filterVal(document.getElementById("mortgage3Rate__inp").value) / 100;
  let mortgage3Amt__inp =
    filterVal(document.getElementById("mortgage3Amt__inp").value) * 1;*/
  let annualBorrowing__inp =
    filterVal(document.getElementById("annualBorrowing__inp").value) * 1;
  let propertyMngmtRate__inp =
    filterVal(document.getElementById("propertyMngmtRate__inp").value) / 100;
  let depreciationEstimate__inp =
    filterVal(document.getElementById("depreciationEstimate__inp").value) * 1;
  // let income__inp = filterVal(document.getElementById("income__inp").value) * 1;
  let lmi__inp = filterVal(document.getElementById("lmi__inp").value) * 1;

  let incomeTaxRate__inp =
    filterVal(document.getElementById("incomeTaxRate__inp").value) / 100;

  if (depositSource__inp == 0) {
    document.getElementById("mortgage2_rate").style.display = 'none'
    document.getElementById("mortgage2_amt").style.display = 'none'
  } else {
    document.getElementById("mortgage2_rate").style.display = 'block'
    document.getElementById("mortgage2_amt").style.display = 'block'
  }


  // Calculate Result
  // Hidden value
  let purchasePrice__hv = price__inp;
  let depositPer__hv = deposit__inp;
  console.log(depositPer__hv)
  let deposit__hv = purchasePrice__hv * depositPer__hv;
  console.log(deposit__hv)
  let stampDuty__hv = stampDuty__inp;
  let legal__hv = solicitor__inp;
  let renovation__hv = renovation__inp;
  let totalOutLayRequire__hv =
    deposit__hv + stampDuty__hv + legal__hv + renovation__hv;
  let e51__hv = purchasePrice__hv - deposit__hv;
  console.log("Purchase - deposit = " + e51__hv)
  let lmi___hv = lmi__inp;
  console.log(lmi___hv)
  let e56__hv = e51__hv + lmi___hv;

  // Value visible to users
  let totalVal =
    council__inp + water__inp + strate__inp + buildIns__inp + landlord__inp;
  // let mortgage1Amt__val = depositSource__inp == 1 ? 0 : totalOutLayRequire__hv;
  let mortgage2Amt__val = depositSource__inp == 0 ? 0 : totalOutLayRequire__hv;

  let mortgage1Amt__val = e56__hv;

  total__out.value = formatter.format(formateNumber(totalVal));
  mortgage1Amt__out.value = formatter.format(formateNumber(mortgage1Amt__val));
  mortgage2Amt__out.value = formatter.format(formateNumber(mortgage2Amt__val));
  console.log(lmi___hv)
  // lmi__inp.value = formatter.format(formateNumber(lmi___hv));
  let e43 = mortgage1Amt__val;
  let e44 = mortgage2Amt__val;
  // let e45 = mortgage3Rate__inp * mortgage3Rate__inp;
  // let e46 = e43 + e44 + e45;
  let f43 = mortgage1Rate__inp;
  let f44 = mortgage2Rate__inp;
  // let f45 = mortgage3Rate__inp;
  let g43 = e43 * f43;
  let g44 = e44 * f44;
  // let g45 = e45 * f45;
  let g46 = g43 + g44; // + g45;
  console.log(g46, g43, g44, e43, e44);

  let c19 = propertyMngmtRate__inp;

  let d32 = incomeTaxRate__inp;

  // Calculate Table Values
  let rent = [];
  let interestOnlyRepymt = [];
  let councilRate = [];
  let waterRate = [];
  let propertyAgent = [];
  let starta__body__corporate = [];
  let building__landlord__insurance = [];
  let annual__borrowing__costs = [];
  let totalExpenses = [];
  let netIncome = [];
  let non__cash__expense = [];
  let depreciation__estimate = [];
  let lmi__estimateOnly = [];
  let netTaxableGain = [];
  let taxReturn = [];
  let netCashOut = [];
  // Start Calculations
  rent[0] = weeklyRent__inp;
  rent[3] = weeklyRent__inp;
  rent[1] = rent[3] * 52;
  rent[2] = rent[1] / 12;
  // interestOnlyRepymt
  interestOnlyRepymt[0] = "";
  interestOnlyRepymt[1] = g46;
  interestOnlyRepymt[2] = interestOnlyRepymt[1] / 12;
  interestOnlyRepymt[3] = interestOnlyRepymt[1] / 52;
  // councilRate
  councilRate[0] = council__inp;
  councilRate[1] = councilRate[0]; // yearly
  councilRate[2] = councilRate[1] / 12; // monthly
  councilRate[3] = councilRate[1] / 52; // weekly
  // waterRate
  waterRate[0] = water__inp;
  waterRate[1] = waterRate[0]; // yearly
  waterRate[2] = waterRate[1] / 12 // monthly;
  waterRate[3] = waterRate[1] / 52; //weekly
  // propertyAgent
  propertyAgent[0] = "";
  propertyAgent[1] = rent[1] * c19;
  propertyAgent[2] = propertyAgent[1] / 12;
  propertyAgent[3] = propertyAgent[1] / 52;
  // starta__body__corporate
  starta__body__corporate[0] = strate__inp;
  starta__body__corporate[1] = starta__body__corporate[0];
  starta__body__corporate[2] = starta__body__corporate[1] / 12;
  starta__body__corporate[3] = starta__body__corporate[1] / 52;
  // building__landlord__insurance
  building__landlord__insurance[0] = buildIns__inp + landlord__inp;
  building__landlord__insurance[1] = building__landlord__insurance[0];
  building__landlord__insurance[2] = building__landlord__insurance[1] / 12;
  building__landlord__insurance[3] = building__landlord__insurance[1] / 52;
  // annual__borrowing__costs
  annual__borrowing__costs[0] = "";
  annual__borrowing__costs[1] = annualBorrowing__inp;
  annual__borrowing__costs[2] = annual__borrowing__costs[1] / 12;
  annual__borrowing__costs[3] = annual__borrowing__costs[1] / 52;
  // totalExpenses
  totalExpenses[0] =
    councilRate[0] +
    waterRate[0] +
    building__landlord__insurance[0] +
    starta__body__corporate[0];
  totalExpenses[1] =
    interestOnlyRepymt[1] +
    councilRate[1] +
    waterRate[1] +
    propertyAgent[1] +
    starta__body__corporate[1] +
    building__landlord__insurance[1] +
    annual__borrowing__costs[1];
  totalExpenses[2] =
    interestOnlyRepymt[2] +
    councilRate[2] +
    waterRate[2] +
    propertyAgent[2] +
    starta__body__corporate[2] +
    building__landlord__insurance[2] +
    annual__borrowing__costs[2];
  totalExpenses[3] =
    interestOnlyRepymt[3] +
    councilRate[3] +
    waterRate[3] +
    propertyAgent[3] +
    starta__body__corporate[3] +
    building__landlord__insurance[3] +
    annual__borrowing__costs[3];
  //  netIncome
  netIncome[0] = "";
  netIncome[1] = rent[1] - totalExpenses[1];
  netIncome[2] = rent[2] - totalExpenses[2];
  netIncome[3] = rent[3] - totalExpenses[3];
  //  non__cash__expense
  non__cash__expense[0] = "";
  non__cash__expense[1] = "";
  non__cash__expense[2] = "";
  non__cash__expense[3] = "";
  //  depreciation__estimate
  depreciation__estimate[0] = "";
  depreciation__estimate[1] = depreciationEstimate__inp;
  depreciation__estimate[2] = depreciation__estimate[1] / 12;
  depreciation__estimate[3] = depreciation__estimate[1] / 52;
  //  lmi__estimateOnly
  lmi__estimateOnly[0] = "";
  lmi__estimateOnly[1] = lmi___hv / 5;
  lmi__estimateOnly[2] = lmi__estimateOnly[1] / 12;
  lmi__estimateOnly[3] = lmi__estimateOnly[1] / 52;
  //  netTaxableGain
  netTaxableGain[0] = "";
  netTaxableGain[1] =
    netIncome[1] - depreciation__estimate[1] - lmi__estimateOnly[1];
  netTaxableGain[2] =
    netIncome[2] - depreciation__estimate[2] - lmi__estimateOnly[2];
  netTaxableGain[3] =
    netIncome[3] - depreciation__estimate[3] - lmi__estimateOnly[3];
  // taxReturn
  taxReturn[0] = d32;
  taxReturn[1] = -netTaxableGain[1] * d32;
  taxReturn[2] = -netTaxableGain[2] * d32;
  taxReturn[3] = -netTaxableGain[3] * d32;
  //  netCashOut
  netCashOut[0] = "";
  netCashOut[1] = netIncome[1] + taxReturn[1];
  netCashOut[2] = netIncome[2] + taxReturn[2];
  netCashOut[3] = netIncome[3] + taxReturn[3];
  console.log(netCashOut)

  // ///////////////////////////////////////////
  // UPDATE USER INTERFACE DOM MANIPULATION
  // //////////////////////////////////////////

  for (let x = 0; x < 4; x++) {
    document.querySelectorAll("#rent")[x].innerHTML = formatter.format(
      formateNumber(rent[x])
    );
    document.querySelectorAll("#interestOnly")[x].innerHTML = formatter.format(
      formateNumber(interestOnlyRepymt[x])
    );
    document.querySelectorAll("#councilRate")[x].innerHTML = formatter.format(
      formateNumber(councilRate[x])
    );
    document.querySelectorAll("#waterRate")[x].innerHTML = formatter.format(
      formateNumber(waterRate[x])
    );
    document.querySelectorAll("#propertyAgent")[x].innerHTML = formatter.format(
      formateNumber(propertyAgent[x])
    );
    document.querySelectorAll("#strate__body__corporate")[x].innerHTML =
      formatter.format(formateNumber(starta__body__corporate[x]));
    document.querySelectorAll("#building__landlord")[x].innerHTML =
      formatter.format(formateNumber(building__landlord__insurance[x]));
    document.querySelectorAll("#annualBorrowingCost")[x].innerHTML =
      formatter.format(formateNumber(annual__borrowing__costs[x]));
    document.querySelectorAll("#totalExpense")[x].innerHTML = formatter.format(
      formateNumber(totalExpenses[x])
    );
    document.querySelectorAll("#netIncome")[x].innerHTML = formatter.format(
      formateNumber(netIncome[x])
    );
    document.querySelectorAll("#non__cashExp")[x].innerHTML = formatter.format(
      formateNumber(non__cash__expense[x])
    );
    document.querySelectorAll("#depreciationEstimateOnly")[x].innerHTML =
      formatter.format(formateNumber(depreciation__estimate[x]));
    document.querySelectorAll("#lmi__estimateOnly")[x].innerHTML =
      formatter.format(formateNumber(lmi__estimateOnly[x]));
    document.querySelectorAll("#netTaxableGain")[x].innerHTML =
      formatter.format(formateNumber(netTaxableGain[x]));
    document.querySelectorAll("#taxReturnCashBack")[x].innerHTML =
      x == 0
        ? (taxReturn[x] * 100).toFixed(2) + "%"
        : formatter.format(formateNumber(taxReturn[x]));
    document.querySelectorAll("#netCashOut")[x].innerHTML =
      formatter.format(formateNumber(netCashOut[x]));
  }
  if (netCashOut[1] < 0) {
    // Red flag it
    document.querySelectorAll(".red__flag--nco").forEach((el) => {
      el.style.background = "#e74c3c";
      el.style.color = "#fff";
    });
  } else {
    // Green flag it
    // #27ae60
    document.querySelectorAll(".red__flag--nco").forEach((el) => {
      el.style.background = "#27ae60";
      el.style.color = "#fff";
    });
  }
  if (netIncome[1] < 0) {
    // Red flag it
    document.querySelectorAll(".red__flag").forEach((el) => {
      el.style.background = "#e74c3c";
      el.style.color = "#fff";
    });
  } else {
    // Green flag it
    // #27ae60
    document.querySelectorAll(".red__flag").forEach((el) => {
      el.style.background = "#27ae60";
      el.style.color = "#fff";
    });
  }

  if(lmi__estimateOnly[1] <= 0) {
    document.getElementById("lmi__estimateOnlyRow").style.display = 'none'
  } else {
    document.getElementById("lmi__estimateOnlyRow").style.display = ''
  }
  if(depreciation__estimate[1] <= 0) {
    document.getElementById("depreciationEstimateOnlyRow").style.display = 'none'
  } else {
    document.getElementById("depreciationEstimateOnlyRow").style.display = ''
  }
  if(starta__body__corporate[1] <= 0) {
    document.getElementById("strate__body__corporate_Row").style.display = 'none'
  } else {
    document.getElementById("strate__body__corporate_Row").style.display = ''
  }
  console.log(interestOnlyRepymt);
}

function OnDepositChange(inputFields) {
  let inputValue = inputFields.value;
  inputValue = inputValue.replace(/[%,]/g, ""); // remove % and comma
  let lmi__inp = document.getElementById("lmi__inp")
  const deposit = inputValue / 100
  if (deposit < 0.2) {
    document.getElementById("lmi").style.display = 'block'
    let price__inp = filterVal(document.getElementById("price__inp").value) * 1;

    let lmi__hv = deposit < 0.2 ? 0.02 : 0;
    let deposit__hv = price__inp * deposit;
    let owing_amt = price__inp - deposit__hv;

    let lmi___hv = owing_amt * lmi__hv;
    lmi__inp.value = formatter.format(formateNumber(lmi___hv));
  } else {
    lmi__inp.value = formatter.format(formateNumber(0));
    document.getElementById("lmi").style.display = 'none'
  }
  inputFields.value = inputValue + "%";
  calculateResult()
}

function calculateStampDuty(x) {
  const dictObj = {
    'WA' : 3.18,
  'NT' : 4.33,
  'NSW' : 3.36,
  'VIC' : 4.83,
  'QLD' : 2.98,
  'TAS' : 3.55,
  'SA' : 3.92,
  'ACT' : 3.75
  }
  let price__inp = filterVal(document.getElementById("price__inp").value) * 1;
  stamp_duty =  (dictObj[x.value] / 100) * price__inp
  document.getElementById("stampDuty__inp").value = numberWithCommas(stamp_duty)
  calculateResult()
}



function numberWithCommas(x) {
  return formatter.format(x);
}
function formateNumber(val) {
  if (isNaN(val)) return 0;
  if (!isFinite(val)) return 0;
  return val;
}
function filterVal(val) {
  return val.toString().replace("$", "").replace(/,/g, "").replace("%", "") * 1;
}
function formatValue(inputFields) {
  let inputValue = inputFields.value;
  inputValue = inputValue.replace(/[$,]/g, ""); // remove $ and comma
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    // maximumFractionDigits: 0,
  }).format(inputValue);
  inputFields.value = formattedValue;
  let state__inp = document.getElementById("state__inp");
  calculateStampDuty(state__inp)
}
function formatPercentage(inputFields) {
  let inputValue = inputFields.value;
  inputValue = inputValue.replace(/[%,]/g, ""); // remove % and comma

  inputFields.value = inputValue + "%";
  calculateResult();
}
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  minimumFractionDigits: 0,
});

calculateResult();