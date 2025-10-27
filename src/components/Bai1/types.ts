    export interface WeatherData {
    current_condition: CurrentCondition[];
    weather: Weather[];
}

export interface CurrentCondition {
    temp_C: string;
    weatherDesc: WeatherDescription[];
}

export interface Weather {
    date: string;
    avgtemp_C: string;
    hourly: HourlyWeather[];
}

export interface HourlyWeather {
    time: string;
    temp_C: string;
    weatherDesc: WeatherDescription[];
}

export interface WeatherDescription {
    value: string;
}