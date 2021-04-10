function getCredit(argument) {
  var result;
  var p = document.getElementById("para");
  var input = document.getElementById("principalInput").value;
  var inputScale = document.getElementById("scaleInput").value;
  var validate = validateInput(input);
  if (!input || !inputScale) p.innerHTML = `<p>No Input Provided</p>`;
  else {
    if (validate) {
      result =
        argument === "credit"
          ? Number(input) + Number(inputScale)
          : Number(input) - Number(inputScale);
      p.innerHTML =
        argument === "credit"
          ? `<p>Credited Amount is ${result} </p>`
          : argument === "debit"
          ? `<p>Debited Amount is ${result} </p>`
          : null;
    } else p.innerHTML = `<p>Principal Amount Should be between 2000 and 10,000</p>`;
  }
}

function getTaxRate() {
  var result;
  var p = document.getElementById("paraRate");
  var input = Number(document.getElementById("principalAmt").value);
  var rate = Number(document.getElementById("rate").value);
  var validate = validateInput(input);
  if (!input || !rate) p.innerHTML = `<p>No Input Provided</p>`;
  else {
    if (validate) {
      result = input + (rate / 100) * input;
      p.innerHTML = `<p>Total Tax Rate Amount is ${result} </p>`;
    } else p.innerHTML = `<p>Principal Amount Should be between 2000 and 10,000</p>`;
  }
}

function validateInput(input) {
  if (input >= 2000 && input <= 10000) return true;
}
