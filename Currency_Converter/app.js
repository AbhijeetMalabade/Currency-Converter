const apiKey = "a07b98f700b585f3505239321f0efa5f";
const apiUrl = `https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;

const amountInput = document.querySelector(".amount input");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const exchangeRateTxt = document.querySelector(".exchange-rate");
const getButton = document.querySelector("form button");

// List of currency codes and their corresponding country codes
const currencies = [
  { code: "AFN", country: "af" },
  { code: "ALL", country: "al" },
  { code: "DZD", country: "dz" },
  { code: "EUR", country: "eu" },
  { code: "AOA", country: "ao" },
  { code: "XCD", country: "ag" },
  { code: "ARS", country: "ar" },
  { code: "AMD", country: "am" },
  { code: "AUD", country: "au" },
  { code: "AZN", country: "az" },
  { code: "BSD", country: "bs" },
  { code: "BHD", country: "bh" },
  { code: "BDT", country: "bd" },
  { code: "BBD", country: "bb" },
  { code: "BYN", country: "by" },
  { code: "BZD", country: "bz" },
  { code: "XOF", country: "bj" },
  { code: "BTN", country: "bt" },
  { code: "BOB", country: "bo" },
  { code: "BAM", country: "ba" },
  { code: "BWP", country: "bw" },
  { code: "BRL", country: "br" },
  { code: "BND", country: "bn" },
  { code: "BGN", country: "bg" },
  { code: "BIF", country: "bi" },
  { code: "CVE", country: "cv" },
  { code: "KHR", country: "kh" },
  { code: "XAF", country: "cm" },
  { code: "CAD", country: "ca" },
  { code: "CLP", country: "cl" },
  { code: "CNY", country: "cn" },
  { code: "COP", country: "co" },
  { code: "KMF", country: "km" },
  { code: "CDF", country: "cd" },
  { code: "CRC", country: "cr" },
  { code: "HRK", country: "hr" },
  { code: "CUP", country: "cu" },
  { code: "CZK", country: "cz" },
  { code: "DKK", country: "dk" },
  { code: "DJF", country: "dj" },
  { code: "DOP", country: "do" },
  { code: "USD", country: "us" },
  { code: "EGP", country: "eg" },
  { code: "ERN", country: "er" },
  { code: "SZL", country: "sz" },
  { code: "ETB", country: "et" },
  { code: "FJD", country: "fj" },
  { code: "GMD", country: "gm" },
  { code: "GEL", country: "ge" },
  { code: "GHS", country: "gh" },
  { code: "GTQ", country: "gt" },
  { code: "GNF", country: "gn" },
  { code: "GYD", country: "gy" },
  { code: "HTG", country: "ht" },
  { code: "HNL", country: "hn" },
  { code: "HKD", country: "hk" },
  { code: "HUF", country: "hu" },
  { code: "ISK", country: "is" },
  { code: "INR", country: "in" },
  { code: "IDR", country: "id" },
  { code: "IRR", country: "ir" },
  { code: "IQD", country: "iq" },
  { code: "ILS", country: "il" },
  { code: "JMD", country: "jm" },
  { code: "JPY", country: "jp" },
  { code: "JOD", country: "jo" },
  { code: "KZT", country: "kz" },
  { code: "KES", country: "ke" },
  { code: "KWD", country: "kw" },
  { code: "KGS", country: "kg" },
  { code: "LAK", country: "la" },
  { code: "LBP", country: "lb" },
  { code: "LSL", country: "ls" },
  { code: "LRD", country: "lr" },
  { code: "LYD", country: "ly" },
  { code: "CHF", country: "ch" },
  { code: "MGA", country: "mg" },
  { code: "MWK", country: "mw" },
  { code: "MYR", country: "my" },
  { code: "MVR", country: "mv" },
  { code: "MRU", country: "mr" },
  { code: "MUR", country: "mu" },
  { code: "MXN", country: "mx" },
  { code: "MDL", country: "md" },
  { code: "MNT", country: "mn" },
  { code: "MAD", country: "ma" },
  { code: "MZN", country: "mz" },
  { code: "MMK", country: "mm" },
  { code: "NAD", country: "na" },
  { code: "NPR", country: "np" },
  { code: "NZD", country: "nz" },
  { code: "NIO", country: "ni" },
  { code: "NGN", country: "ng" },
  { code: "KPW", country: "kp" },
  { code: "NOK", country: "no" },
  { code: "OMR", country: "om" },
  { code: "PKR", country: "pk" },
  { code: "PAB", country: "pa" },
  { code: "PGK", country: "pg" },
  { code: "PYG", country: "py" },
  { code: "PEN", country: "pe" },
  { code: "PHP", country: "ph" },
  { code: "PLN", country: "pl" },
  { code: "QAR", country: "qa" },
  { code: "RON", country: "ro" },
  { code: "RUB", country: "ru" },
  { code: "RWF", country: "rw" },
  { code: "WST", country: "ws" },
  { code: "SAR", country: "sa" },
  { code: "RSD", country: "rs" },
  { code: "SCR", country: "sc" },
  { code: "SLL", country: "sl" },
  { code: "SGD", country: "sg" },
  { code: "SBD", country: "sb" },
  { code: "ZAR", country: "za" },
  { code: "KRW", country: "kr" },
  { code: "SSP", country: "ss" },
  { code: "LKR", country: "lk" },
  { code: "SDG", country: "sd" },
  { code: "SRD", country: "sr" },
  { code: "SEK", country: "se" },
  { code: "TWD", country: "tw" },
  { code: "TJS", country: "tj" },
  { code: "TZS", country: "tz" },
  { code: "THB", country: "th" },
  { code: "TOP", country: "to" },
  { code: "TTD", country: "tt" },
  { code: "TND", country: "tn" },
  { code: "TRY", country: "tr" },
  { code: "TMT", country: "tm" },
  { code: "UGX", country: "ug" },
  { code: "UAH", country: "ua" },
  { code: "AED", country: "ae" },
  { code: "GBP", country: "gb" },
  { code: "UYU", country: "uy" },
  { code: "UZS", country: "uz" },
  { code: "VUV", country: "vu" },
  { code: "VEF", country: "ve" },
  { code: "VND", country: "vn" },
  { code: "YER", country: "ye" },
  { code: "ZMW", country: "zm" },
  { code: "ZWL", country: "zw" },
];

// Populate the currency dropdowns with flags and codes
function populateDropdown() {
  currencies.forEach((currency) => {
    const optionFrom = document.createElement("option");
    optionFrom.value = currency.code;
    optionFrom.dataset.flag = `https://flagsapi.com/${currency.country.toUpperCase()}/flat/64.png`;
    optionFrom.textContent = currency.code;

    const optionTo = optionFrom.cloneNode(true);
    fromCurrency.appendChild(optionFrom);
    toCurrency.appendChild(optionTo);
  });

  // Add flags to dropdown options
  const currencyDropdowns = document.querySelectorAll(".currency-dropdown");

  currencyDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("change", function () {
      const flagURL = this.selectedOptions[0].dataset.flag;
      this.style.backgroundImage = `url(${flagURL})`;
      this.style.backgroundSize = "20px";
      this.style.backgroundRepeat = "no-repeat";
      this.style.backgroundPosition = "left center";
      this.style.paddingLeft = "30px";
    });
  });
}

populateDropdown();

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

function getExchangeRate() {
  const amountVal = amountInput.value;
  const fromCurrencyVal = fromCurrency.value;
  const toCurrencyVal = toCurrency.value;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.rates[toCurrencyVal] && data.rates[fromCurrencyVal]) {
        const rate = data.rates[toCurrencyVal] / data.rates[fromCurrencyVal];
        const exchangeRate = (amountVal * rate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrencyVal} = ${exchangeRate} ${toCurrencyVal}`;
      } else {
        exchangeRateTxt.innerText = "Invalid currency code.";
      }
    })
    .catch((error) => {
      console.error("Error fetching exchange rates:", error);
      exchangeRateTxt.innerText =
        "Error fetching exchange rates. Please try again later.";
    });
}
