const API_KEY = `d08a1c18446e2ecc98a077c977c293ac
`;

const SearchWeather = () => {
  const SearchInput = document.getElementById("search-input").value;
  // console.log(SearchInput);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${SearchInput}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(res => res.json())
  .then(data =>DisplayTemprature(data))
//   console.log(url);
};
// const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityNameText}&appid=${API_KEY}&units=metric`;



const getInnerText = (id,text) => {

  document.getElementById(id).innerText = text;


}

const DisplayTemprature = (tempRature) =>{

  getInnerText("city-name",tempRature.name);
  getInnerText("tempareture-condition",tempRature.main.temp);
  getInnerText("name-of-weather",tempRature.weather[0].main);
  getInnerText("weather-icon",tempRature.weather[0].icon);


  // const CityName = document.getElementById("city-name");
  // let CityNameText =CityName.innerText


  // CityNameText=tempRature.name;

  // console.log(CityName);

  const url = `http://openweathermap.org/img/wn/${tempRature.weather[0].icon}@2x.png`

const ImgIcon = document.getElementById('weather-icon');
ImgIcon.setAttribute("src",url);


          console.log(tempRature);





          
}