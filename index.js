const key = "531041e8dd4fda0ab5d81a104b29b9ea";

const input_search = document.getElementById("input_search");
const btn_search = document.getElementById("btn_search");
const result_search = document.getElementById("result_search");

const formatTemperature =  (temp) => {
    return Math.round(temp);
}


const getWeather = () => {
    const inputCity = input_search.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&lang=pt_br&appid=${key}`;


    if (inputCity.length <= 0) {
        result_search.innerHTML = `<h2 class="msg" > Por favor digite uma cidade </h2>`

    } else {
        fetch(url).then((resp) => resp.json().then((data) => {
            let icon = data.weather[0].icon
            result_search.className = "result_search"  
            result_search.innerHTML =
                `<div class = "info">
                    <div>
                        <img src=https://openweathermap.org/img/wn/${icon}@2x.png>
                        <h1>${data.name}</h1>
                    </div>
                        <h2> ${formatTemperature(data.main.temp)} °C</h2>
                        <span>${data.weather[0].description} </span>
                </div>` 
            console.log(data)
            console.log(resp)
        })).catch(() => {
            result_search.innerHTML = `<h2 class="msg">Ops, não encontramos esta cidade.</h2>`
        });
    }
}

btn_search.addEventListener('click', getWeather);


