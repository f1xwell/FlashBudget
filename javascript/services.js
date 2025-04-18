const addTransaction = document.getElementById("addTransaction");

addTransaction.addEventListener("click", (e) => {
  e.preventDefault();
  const inputDate = document.getElementById("date").value;
  const inputDetailInformation =
    document.getElementById("detailInformation").value;
  const typeOfCashFlow = document.getElementById("typeCashFlow").value;
  const currencyInformation = document.getElementById("currencyInformation");
  const currencyAddTotalValue = Number(
    document.getElementById("currencyAddTotal").value
  );

  if (inputDate == "" && currencyAddTotalValue == "") {
    alert("Maaf, input tanggal dan jumlah tidak boleh kosong!");
  } else if (inputDate == "") {
    alert("Maaf, input tanggal laporan anda!");
  } else if (currencyAddTotalValue == "") {
    alert("Maaf, input jumlah yang ingin anda masukkan!");
  } else {
    const dateInformation = document.getElementById("dateInformation");
    const date = new Date();
    dateInformation.textContent = date.toString();

    conditionalCurrencyInformation =
      Number(currencyInformation) - currencyAddTotalValue < 0;

    if (currencyAddTotalValue < 0 || conditionalCurrencyInformation) {
      alert("Maaf,saldo anda tidak cukup");
    } else {
      currencyInformation.textContent = `Rp ${currencyAddTotalValue.toLocaleString(
        "id-ID"
      )}`;
    }
  }
});
