function attachEvents() {
    let button = document.getElementById('submit');
    button.addEventListener('click', getWeather);


    function getWeather() {
        let url = 'https://judgetests.firebaseio.com/locations.json';
        fetch(url)
            .then(validate)
            .then(response => response.json())
            .then(getWeatherForLocation)
    }

    function getWeatherForLocation(data) {
        let requiredLocation = document.getElementById('location').value;
        let filteredResult = data.filter(x => x.name == requiredLocation)[0];
        if (!filteredResult) {
            printError();
        }
        let townId = filteredResult.code;
        let urlForTodayWeather = `https://judgetests.firebaseio.com/forecast/today/${townId}.json`;
        let urlFor3DayForecast = `https://judgetests.firebaseio.com/forecast/upcoming/${townId}.json`;

        fetch(urlForTodayWeather)
            .then(validate)
            .then(response => response.json())
            .then(printCurrentWeather);

        fetch(urlFor3DayForecast)
            .then(validate)
            .then(response => response.json())
            .then(print3DayForecast);

        document.getElementById('location').value = '';
    }

    function printCurrentWeather(data) {
        let townName = data.name;
        let condition = data.forecast.condition;
        let high = data.forecast.high;
        let low = data.forecast.low;

        let resultElement = document.getElementById('forecast');
        resultElement.style.display = 'block';

        let currentSection = document.getElementById('current');

        if (Array.from(currentSection.children).length > 1) {
            Array.from(currentSection.children)[1].remove();
        };

        let divForecasts = document.createElement('div');
        divForecasts.classList.add('forecasts');

        let spanSymbol = document.createElement('span');
        spanSymbol.classList.add('condition');
        spanSymbol.classList.add('symbol');
        if (condition == 'Rain') {
            spanSymbol.textContent = '☂';
        } else if (condition == 'Overcast') {
            spanSymbol.textContent = '☁';
        } else if (condition == 'Partly sunny') {
            spanSymbol.textContent = '⛅';
        } else if (condition == 'Sunny') {
            spanSymbol.textContent = '☀';
        }
        divForecasts.appendChild(spanSymbol);

        let spanCondition = document.createElement('span');
        spanCondition.classList.add('condition');

        let name = document.createElement('span');
        name.classList.add('forecast-data');
        name.textContent = townName;
        spanCondition.appendChild(name);

        let temp = document.createElement('span');
        temp.classList.add('forecast-data');
        temp.textContent = `${low}°/${high}°`;
        spanCondition.appendChild(temp);

        let weatherToday = document.createElement('span');
        weatherToday.classList.add('forecast-data');
        weatherToday.textContent = condition;
        spanCondition.appendChild(weatherToday);

        divForecasts.appendChild(spanCondition);
        currentSection.appendChild(divForecasts);


    }

    function print3DayForecast(data) {
        let futureSection = document.getElementById('upcoming');

        if (Array.from(futureSection.children).length > 1) {
            Array.from(futureSection.children)[1].remove();
        };

        let forecastInfo = document.createElement('div');
        forecastInfo.classList.add('forecast-info');
        for (let tokens of data.forecast) {
            let condition = tokens.condition;
            let high = tokens.high;
            let low = tokens.low;

            let upcomingSpan = document.createElement('span');
            upcomingSpan.classList.add('upcoming');

            let spanSymbol = document.createElement('span');
            spanSymbol.classList.add('symbol');
            if (condition == 'Rain') {
                spanSymbol.textContent = '☂';
            } else if (condition == 'Overcast') {
                spanSymbol.textContent = '☁';
            } else if (condition == 'Partly sunny') {
                spanSymbol.textContent = '⛅';
            } else if (condition == 'Sunny') {
                spanSymbol.textContent = '☀';
            }
            upcomingSpan.appendChild(spanSymbol);

            let temp = document.createElement('span');
            temp.classList.add('forecast-data');
            temp.textContent = `${low}°/${high}°`;
            upcomingSpan.appendChild(temp);

            let weatherToday = document.createElement('span');
            weatherToday.classList.add('forecast-data');
            weatherToday.textContent = condition;
            upcomingSpan.appendChild(weatherToday);

            forecastInfo.appendChild(upcomingSpan);
        }
        futureSection.appendChild(forecastInfo);

    }

    function validate(response) {
        if (response.status > 400) {
            printError();
        }
        return response;
    }

    function printError() {
        let resultElement = document.getElementById('forecast');
        resultElement.style.display = 'block';

        let currentSection = document.getElementById('current');

        if (Array.from(currentSection.children).length > 1) {
            Array.from(currentSection.children)[1].remove();
        };

        let divError = document.createElement('div');
        divError.classList.add('forecasts');

        let spanError = document.createElement('span');
            spanError.textContent = 'ERROR!';
      
        divError.appendChild(spanError);
        currentSection.appendChild(divError);

        let futureSection = document.getElementById('upcoming');

        if (Array.from(futureSection.children).length > 1) {
            Array.from(futureSection.children)[1].remove();
        };

        let divError1 = document.createElement('div');
        divError1.classList.add('forecast-info');
        let spanError1 = document.createElement('span');
        spanError1.textContent = 'ERROR!';

        divError1.appendChild(spanError1);
        futureSection.appendChild(divError1);
        
        document.getElementById('location').value = '';
        
        throw new Error('Something went wrong')
    }
}
attachEvents();