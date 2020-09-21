import React, {useContext} from "react"
import Context from "../Context"

const WeatherData = () => {
    const {weather,city} = useContext(Context)
    const {temp,humidity,pressure} = weather

    return (
        <div className="weather-data">
            <p className="weather__tagline">Prognoza pogody dla <span className="weather-data__city">{city}</span></p>
            <div className="weather-data__box">
                <span className="weather-data__property">
                <p className="weather-data__title">Temperatura</p>
                <p className="weather-data__value">{temp}</p>
                </span>
                <span className="weather-data__property">
                <p className="weather-data__title">Wilgotność</p>
                <p className="weather-data__value">{humidity}</p>
                </span>
                <span className="weather-data__property">
                <p className="weather-data__title">Ciśnienie</p>
                <p className="weather-data__value">{pressure}</p>
                </span>
            </div>
        </div>
    )

}
export default WeatherData