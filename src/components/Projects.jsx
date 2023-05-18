import React from 'react';
import clouds from '../assets/projects/clouds-social-media.png';
import currency from '../assets/projects/currency-converter.png';
import weather from '../assets/projects/weather-app.png';
import uberz from '../assets/projects/uberz-zpa.png';

const Projects = () => {
  return (
    <div name='projects' className='bg-gradient-to-b from-emerald-950 to-emerald-950 text-slate-300 w-full md:h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <h1 className='text-4xl font-bold inline border-b-4 border-sky-600'>Projects</h1>
            <p className='text-3xl pt-6'>Applications / Websites</p>
        </div>
        
        {/* Project Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
            <div className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage: `url(${clouds})`}}>
                
                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-100 duration-500'>
                    <span className='text-2xl font-bold text-white tracking-wider text-center block'>
                        clouds.
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://ronniejames-clouds.netlify.app/' target="_blank" rel="noreferrer noopener">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>

                        <a href='https://github.com/RonnieJames98/clouds-social-media-app' target="_blank" rel="noreferrer noopener">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                        <p>A Pinterest social media clone. Built using Google OAuth API and Sanity.io database management</p>
                    </div>
                </div>
            </div>

            {/* Grid Item */}
            <div className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage: `url(${weather})`}}>
                
                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-100 duration-500 text-center block'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Weather App
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://ronniejames98.github.io/WeatherAppReact/' target="_blank" rel="noreferrer noopener">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>

                        <a href='https://github.com/RonnieJames98/WeatherAppReact' target="_blank" rel="noreferrer noopener">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                        <p>React Application that uses GeoDB Cities and openWeatherMap API to forecast weather</p>
                    </div>
                </div>
            </div>

            {/* Grid Item */}
            <div className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage: `url(${currency})`}}>
                
                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-100 duration-500'>
                    <span className='text-2xl font-bold text-white tracking-wider text-center block'>
                        Currency Converter
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://ronniejames98.github.io/CurrencyConverter/' target="_blank" rel="noreferrer noopener">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>

                        <a href='https://github.com/RonnieJames98/CurrencyConverter' target="_blank" rel="noreferrer noopener">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                        <p>React Application that uses fixer.io API to receive currency codes and convert them real time. (Limited to only 100 requests per month)</p>
                    </div>
                </div>
            </div>

            {/* Grid Item */}
            <div className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage: `url(${uberz})`}}>
                
                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-100 duration-500 text-center block'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        UBERZ
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='http://zpawebdevproject.com/' target="_blank" rel="noreferrer noopener">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>

                        <a href='#' target="_blank" rel="noreferrer noopener">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                        <p>A raw HTML/CSS/JS website that is built during the web development course at Zenith Prep Academy</p>
                    </div>
                </div>
            </div>

            
        </div>

      </div>
    </div>
  )
}

export default Projects
