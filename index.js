fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`;
        document.getElementById("author").textContent = `By: ${data.user.name}`;
    })
    .catch(err => {
        document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1559666126-84f389727b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTcxNDI2NDQ&ixlib=rb-1.2.1&q=80&w=1080")`
        document.getElementById("author").textContent = `By: John Adams`;
    })


fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => res.json())
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
        <img src="${data.image.small}" alt="dogecoin thumbnail"/><span>${data.name}</span>`

        document.getElementById("crypto").innerHTML +=
            `<p>🎯: $${data.market_data.current_price.usd}</p>
        <p>📈: $${data.market_data.high_24h.usd}</p>
        <p>📉: $${data.market_data.low_24h.usd}</p>`

    })
    .catch(err => console.error(err))


function doDate() {
    const timeNow = new Date().toLocaleTimeString('en-US', { timeStyle: "short" })

    document.getElementById("time").textContent = timeNow
}
setInterval(doDate, 1000)



navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude)
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw error("Error")
            } else return res.json()

        })
        .then(data => {
            console.log(data)
            console.log(data.main.temp)
            console.log(data.weather[0].icon)
            document.getElementById("weather").innerHTML = `
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
            <p class="weather-temp">${Math.trunc(data.main.temp)}º</p>
            <p class="weather-city">${data.name}</p>`
        })
        .catch(err => console.error(err))
})


