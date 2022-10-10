import React from 'react';
import image from "../Images/unsplash_3Sf_G9m0gcQ.png"
import "./Section6.css"
const Section6 = () => {
    return (
        <div className='bg-black mt-2 p-10'>
            <div className='border p-5'>
                <h1 className='text text-white text-3xl mb-5'>More from this project</h1>
                <hr />
                <div className='grid grid-cols-3 gap-5 mt-3 project justify-items-center'>
                    <div class="card card-compact w-96 bg-black shadow-xl">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div class="card-body mt-5">
                            <div className='flex'>
                                <div class="avatar">
                                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <div>
                                    <h2 class="card-title text-white">Lambiyan</h2>
                                    <p className='text text-white'>Owned by - Pallav Baijuri</p>
                                </div>
                            </div>
                            <div class="card-actions justify-end">
                                <p className='text text-white mt-3 text-lg font-bold'>Price - IMR 5,73,000</p>
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact w-96 bg-black shadow-xl">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div class="card-body">
                            <div class="avatar">
                                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact w-96 bg-black shadow-xl">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div class="card-body">
                            <div class="avatar">
                                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Section6;