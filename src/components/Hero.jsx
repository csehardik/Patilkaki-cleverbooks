import React from 'react'

const Hero = () => {
    return (
        <div className="m-12 my-20 lg:m-32 sm:flex sm:flex-col lg:flex-row space-x-32 font-proxima">
            <div className="text-white flex flex-col space-y-12 lg:w-1/2">
                <div>
                    <h1 className="md:text-4xl lg:text-6xl">Every order</h1>
                    <h1 className="md:text-4xl lg:text-6xl">fulfilled, on time</h1></div>
                <p className="md:text-md lg:text-xl">
                    
Eliminate inventory woes with Clever Book. Our expert-designed platform uses cutting-edge technology to perfectly balance your stock with demand. Grow your bookstore efficiently as we ensure you always have the right books available for your readers.
                </p>
                <div className="relative flex items-center ">
                    <button className="border border-pink-300 py-2 px-4 rounded-full text-pink-300 hover:text-white hover:bg-pink-btn">Get started with cleverbooks</button>
                    <img className="absolute mt-16 ml-60 " src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg" alt="" />
                </div>
            </div>
            <div className="flex items-center lg:w-1/2">
                <img
                    className="h-96"
                    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg"
                    loading="eager"
                    alt="every order fulfilled"
                />
            </div>
        </div>

    )
}

export default Hero
