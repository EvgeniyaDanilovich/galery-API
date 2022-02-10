window.onload = function () {
	input.focus();
	input.select();
}

const input = document.querySelector('.search__input');
const btn = document.querySelector('.search__btn');
let tmp = 'search';



let url = `https://api.unsplash.com/search/photos?query=${tmp}&client_id=yp-8LChNIuFJyZE7IyfPg4KGxoNQGkbZmO11z7avuRE`;
const imgContainer = document.querySelector('.search__container');

const showData = (data) => {

	if (imgContainer.hasChildNodes()) {
		imgContainer.innerHTML = '';
	}

	for (let i = 0; i <= 9; i++) {
		let url = data['results'][i]['urls']['regular'];
		const img = `<img class="search__img" src="${url}" alt='image'>`;
		imgContainer.insertAdjacentHTML('beforeend', img);
	}
}

async function getData(link) {
	const res = await fetch(link);
	const data = await res.json();
	showData(data);
}
getData(url);


btn.addEventListener('click', function (e) {
	e.preventDefault();
	tmp = input.value;
	url = `https://api.unsplash.com/search/photos?query=${tmp}&client_id=yp-8LChNIuFJyZE7IyfPg4KGxoNQGkbZmO11z7avuRE`;
	let link = url;
	getData(link);
})

//======================================

