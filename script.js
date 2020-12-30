const balance = document.getElementById("balanceTime");

const time = document.getElementById("time");
const descText = document.getElementById("descText");

const list = document.getElementById("list");
const form = document.getElementById("form");

/* const dummyTransactions = [
	{ id: 1, descText: "At the park with Frank", time: 45 },
	{ id: 2, descText: "Lee Holden - swimming bear", time: 60 },
	{ id: 3, descText: "8 pieces at the park", time: 60 },
	{ id: 4, descText: "Sam kinstretch", time: 30 },
]; */

const localStorageTransactions = JSON.parse(
	localStorage.getItem("transactions")
);

let transactions =
	localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

//Add transaction
function addTransaction(e) {
	e.preventDefault();
	if (descText.value.trim() === "" || time.value.trim() === "") {
		alert("Please add description text and time");
	} else {
		const transaction = {
			id: generateID(),
			descText: descText.value,
			time: +time.value,
		};
		transactions.unshift(transaction);

		addTransactionDOM(transaction);

		updateValues();
		updateLocalStorage();
		//console.log(transactions);
		descText.value = "";
		time.value = "";
	}
}

//Generate random ID
function generateID() {
	return Math.floor(Math.random() * 100000000);
}

//Add transactions to the DOM list
function addTransactionDOM(transaction) {
	const item = document.createElement("li");

	item.innerHTML = `
    ${transaction.descText}<span>${transaction.time} min</span> <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
	`;
	let theFirstChild = list.firstChild;
	list.insertBefore(item, theFirstChild);
}

// Update the balance, income and expense
function updateValues() {
	const amounts = transactions.map((transaction) => transaction.time);

	const total = amounts.reduce((acc, item) => (acc += item), 0);
	//console.log(time, amounts, total);

	balance.innerText = `${total} min`;
}

// Remove transaction by ID
function removeTransaction(id) {
	transactions = transactions.filter((transaction) => transaction.id !== id);

	updateLocalStorage();

	init();
}
// Update local storage transactions
function updateLocalStorage() {
	localStorage.setItem("transactions", JSON.stringify(transactions));
}

//init app
function init() {
	list.innerHTML = "";
	transactions.forEach(addTransactionDOM);
	updateValues();
}

init();

form.addEventListener("submit", addTransaction);
