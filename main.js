const populate = async (value, currency) =>{
    let myStr = "";

    const URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_5UH9bwa6MH8jtEVtaAyXR6YVOJBwBLyhf9cwmcfQ&base_currency=INR&" + currency; // Add '?' and '&' here
    
    let response = await fetch(URL);
    let rJson = await response.json();

    document.querySelector(".output").style.display = "block";

    for (let key of Object.keys(rJson["data"])) {
        myStr += `<tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                  </tr>`;
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='Currency']").value;
    await populate(value, currency); // Await here to ensure proper execution
});
