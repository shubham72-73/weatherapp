import React from 'react';

// Define the interfaces
interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}

interface WeekForecastProps {
  data: {
    forecast?: {
      forecastday: DayForecast[];
    };
  };
}

// The Forecast component
const Forecast: React.FC<WeekForecastProps> = ({ data }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-fit'>
      {data.forecast?.forecastday.map((day, index) => (
        <div key={index} className='bg-white/40 p-8 text-center rounded-lg flex flex-col items-center'>
          <p>{new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}</p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <div>
            <p>H {day.day.maxtemp_c}&deg;C</p>
            <p>L {day.day.mintemp_c}&deg;C</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
