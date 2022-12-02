const API_KEY = "db7cdbd7ea68fd672b149196c4596a1e";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const onGeoSuccess = (position) => {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log(`You live in ${lat}, ${lon}`);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	console.dir(position);
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
		});
};

const onGeoError = () => {
	alert("위치를 찾을 수 없습니다 날씨 검색 불가");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
