const input = document.querySelector('.input');
const button = document.querySelector('.btn')
const result = document.querySelector('.result')

button.addEventListener('click', () => {
    let whereto = input.value

    fetch (`https://api.weatherapi.com/v1/current.json?key=86ce6bfef994499ea9d55219233003&q=${whereto}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            result.innerHTML = `<h4>Country: ${data.location.country}</h4>
                                <h4>City: ${data.location.name}</h4>
                                <h4>Current Weather: ${data.current.temp_c}</h4>`
        })
})


