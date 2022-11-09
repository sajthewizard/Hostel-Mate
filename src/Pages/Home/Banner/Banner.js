import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full h-1/4">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className='carousel-img'>
                    <img src="https://media.product.which.co.uk/prod/images/original/253630f52e2d-washing-machine2.jpg" className="w-full h-full rounded-xl" /></div>

                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold '>
                        Your <br />
                        Daily <br />
                        Household <br />
                        Friend
                    </h1>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='text-xl'> We are here to make your life easier with all of your daily works. So call us and live a stressless life. Maybe starting with House Cleaning</p>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img'><img src="https://assets.agentfire3.com/uploads/sites/121/2022/08/Seller-Home-Cleaning-Tips.jpeg" className="w-full h-full rounded-xl" /></div>

                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold '>
                        Your <br />
                        Daily <br />
                        Household <br />
                        Friend
                    </h1>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='text-xl'> We are here to make your life easier with all of your daily works. So call us and live a stressless life. Maybe you need Help with House Cleaning.</p>

                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full rounded-xl">
                <div className='carousel-img'><img src="https://assets.bonappetit.com/photos/5f3bffa3b62c45d85d5245df/master/w_1500,h_1000,c_limit/Stop-Cooking-Like-a-Chef-Meherwan-Irani.jpg" className="w-full h-full rounded-xl" /></div>

                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold '>
                        Your <br />
                        Daily <br />
                        Household <br />
                        Friend
                    </h1>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='text-xl'> We are here to make your life easier with all of your daily works. So call us and live a stressless life. Having a Chef is not a bad Idea.</p>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='carousel-img' ><img src="https://assets-us-01.kc-usercontent.com/ffacfe7d-10b6-0083-2632-604077fd4eca/3cdc314c-c0f4-41a3-a7ba-2807979051a4/Rental-Assistance-Programs-For-Seniors-iStock-1330032284-2022-05-Hero-1336x614.jpg?w=486&dpr=2&fm=pjpg&q=60" className="w-full h-full rounded-xl" /></div>

                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold '>
                        Your <br />
                        Daily <br />
                        Household <br />
                        Friend
                    </h1>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='text-xl'> We are here to make your life easier with all of your daily works. So call us and live a stressless life. We are there if you have No One!</p>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;