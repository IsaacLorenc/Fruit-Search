document.addEventListener('DOMContentLoaded', function () {
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	if (str.length > 0) {
        results = fruit.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));
    }
	return results;
}

function searchHandler() {
	const inputVal = input.value.trim();
	const results = search(inputVal);
    showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        suggestions.appendChild(listItem);
    });
	if (inputVal === '' || results.length === 0) {
        suggestions.style.display = 'none';
    } else {
        suggestions.style.display = 'block';
    }
}

function useSuggestion(e) {
	const clickedFruit = e.target.textContent;
    input.value = clickedFruit;
    suggestions.style.display = 'none';

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
});