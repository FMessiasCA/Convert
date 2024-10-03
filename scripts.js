const USD = 5.44;
const EUR = 6.01;
const GBP = 7.22;

const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g;

    amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
    event.preventDefault();

    switch(currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, 'US$');
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, '€');
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, '£');
            break;
    }
};

/**
 * 
 * @param {Number} amount 
 * @param {Number} price 
 * @param {String} symbol 
 */
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        let total = price * amount;
        result.textContent = `${formatCurrencyBRL(total)}`

        footer.classList.add('show-result');
    } catch (error) {
        console.log(error);
        footer.classList.remove('show-result');
        alert('Nâo foi possível converter. Tente novamente mais tarde.');
    }
}

/**
 * 
 * @param {Number} value 
 */
function formatCurrencyBRL(value) {
    return value.toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL"
    })
};