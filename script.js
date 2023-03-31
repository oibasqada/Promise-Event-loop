const input = document.querySelector('.input');
const button = document.querySelector('.btn')
const result = document.querySelector('.result')

const handleFetch = (arg) => {
    if (!!arg) {

        result.innerHTML = ''

        fetch (`http://api.weatherapi.com/v1/current.json?key=86ce6bfef994499ea9d55219233003&q=${arg}&lang=ru`)
            .then(res => {
                if (res.status !== 200) {
                    result.innerHTML += `<h5>No matched locations</h5>`
                } else {
                    return res.json()
                }
            })

            .then(data => {
                console.log(data)
                result.innerHTML = `<h4>Country: ${data.location.country}</h4>
                                    <h4>City: ${data.location.name}</h4>
                                    <h4>Current Weather:  ${data.current.temp_c} °C</h4>
                                    <h4>Feels Like:  ${data.current.feelslike_c} °C</h4>
                                    <h4>Wind speed:  ${data.current.wind_kph} KM/h</h4>
                                    <img src="${data.current.condition.icon}">`
            })
    }
}



button.addEventListener('click', (e) => {
    if (!!input.value) {
        handleFetch(input.value)
    }

})

input.addEventListener('keypress', function (e) {
    // console.log(e)
    if (e.key === 'Enter') {
        handleFetch(e.target.value)
    }
})


