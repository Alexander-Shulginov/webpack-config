import { apiKey } from "./options";
import '../scss/style.css';

// CONFIG
const entryPoint: string = 'http://api.weatherapi.com/v1/';
const requestType: RequestType = 'current';
const responseFormat: ResponseFormat = 'json';
const myCity: string = '55.5725,39.5368';
// CONFIG END

// TYPES
type RequestType = 'current' | 'forecast';
type ResponseFormat = 'json' | 'xml';

const enum WindDirections {
  West = 'Западный',
  North = 'Северный',
  South = 'Южный',
  East = 'Восточный',
  Unknown = 'Неизвестно'
}

interface WeatherResponse {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
    pressure_mb: number;
    wind_dir: string;
    wind_kph: number;
    windchill_c: number;
    humidity: number;
  };
}
// TYPES END

// HELPERS
function statusIsSuccess(): boolean {
  return xhr.status >= 200 && xhr.status < 300;
}

function getPressure(num: number): number {
  const value = num * 0.750063755419211;
  return Number(value.toFixed());
}

function getWindDirectoin(dir: string): string {
  const direction: string = dir.charAt(0);
  switch (direction) {
    case 'W': return WindDirections.West;
    case 'N': return WindDirections.North;
    case 'S': return WindDirections.South;
    case 'E': return WindDirections.East;
    default: return WindDirections.Unknown;
  }
}

function getWindSpeed(speed: number): number {
  const value: number = speed / 3.6;
  return Number(value.toFixed());
}


function getResponse(): WeatherResponse {
  return JSON.parse(xhr.response)
}
// HELPERS END

let data: WeatherResponse | null = null;

const xhr: XMLHttpRequest = new XMLHttpRequest();

const url: string = `${entryPoint}${requestType}.${responseFormat}?key=${apiKey}&q=auto:ip&lang=ru`;

xhr.open('get', url, true)

xhr.send();

xhr.onprogress = () => {
  if (!statusIsSuccess()) {
    console.log(`Код ошибки ${xhr.status}`);
  }
}
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const conditionElement = document.getElementById('condition');
const pressureElement = document.getElementById('pressure');
const windDirectionElement = document.getElementById('wind-direction');
const windSpeedElement = document.getElementById('wind-speed');
const windchillElement = document.getElementById('windchill');
const humidityElement = document.getElementById('humidity');
xhr.onload = () => {
  if (statusIsSuccess()) {
    data = getResponse()
    console.log(data)
    console.log(`Погода в городе ${data.location.name} ${data.current.temp_c}℃`)
    console.log(`За окном ${data.current.condition.text}`)
    console.log(`Давление ${getPressure(data.current.pressure_mb)} мм.рт.ст`)
    console.log(`Ветер ${getWindDirectoin(data.current.wind_dir)}`)
    console.log(`Скорость ветра ${getWindSpeed(data.current.wind_kph)} м/с`)
    console.log(`Температура ветра ${data.current.windchill_c}℃`)
    console.log(`Влажность ${data.current.humidity}%`)
    if (cityElement) {
      cityElement.textContent = `Погода в городе: ${data.location.name}`;
    }
    if (temperatureElement) {
      temperatureElement.textContent = `Температура: ${data.current.temp_c}℃`;
    }
    if (conditionElement) {
      conditionElement.textContent = `За окном: ${data.current.condition.text}`;
    }
    if (pressureElement) {
      pressureElement.textContent = `Давление: ${getPressure(data.current.pressure_mb)} мм.рт.ст`;
    }
    if (windDirectionElement) {
      windDirectionElement.textContent = `Ветер: ${getWindDirectoin(data.current.wind_dir)}`;
    }
    if (windSpeedElement) {
      windSpeedElement.textContent = `Скорость ветра: ${getWindSpeed(data.current.wind_kph)} м/с`;
    }
    if (windchillElement) {
      windchillElement.textContent = `Температура ветра: ${data.current.windchill_c}℃`;
    }
    if (humidityElement) {
      humidityElement.textContent = `Влажность: ${data.current.humidity}%`;
    }
  }
}


window.addEventListener('click', () => location.reload());
