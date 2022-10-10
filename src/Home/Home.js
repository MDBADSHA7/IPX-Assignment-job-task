import React from 'react';
import coverImage from "../Images/Cover Image.png"
// import Vector from "../Images/Vector.png"
import Stripe from "../Images/Stripe_logo,_revised_2016 1.png"
import Paypal from "../Images/Paypal_2014_logo 1.png"
import "./Home.css"
const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-black">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={coverImage} alt="" />
                    <div>
                        <sm className="text text-white">investment Option</sm><br />
                        <h1 className='uppercase font-bold text-2xl text text-white'>Common Share</h1>
                        <div class="divider"></div>
                        <div className='flex'>
                            <div className='margin text text-white'>
                                <small>Project</small><br />
                                <b>Glitch</b>
                            </div>
                            <div className='margin text text-white'>
                                <small>Owned by</small><br />
                                <b>Rahul Roy</b>
                            </div>
                            <div className='margin text text-white'>
                                {/* <img src={Vector} alt="" /> */}
                                <b>Flow NFT</b>
                            </div>
                            <hr />
                        </div>
                        <p className='margin text text-white'>Sale ends on 20 june 2022 at 10:30PM, GTM: +5:30</p>
                        <div className='flex'>
                            <div className='margin text text-white'>
                                <small>Current Price</small><br />
                                <b>$ 500</b>
                            </div>
                            <div className='margin text text-white'>
                                <small>Unit Available</small><br />
                                <b>50</b>
                            </div>
                        </div>
                        <div>
                            <p className='margin text text-white'>Select how you want to pay</p>
                            <div className='margin-1 flex'>
                                <img src={Stripe} alt="" />
                                <img className='margin-1' src={Paypal} alt="" />
                            </div>
                        </div>
                        <div>
                            <div class="margin flex">
                                <input type="checkbox" checked="checked" class="checkbox checkbox-accent" />
                                <p className='margin-2 text text-white'>I understand the benifits, terms snd risks in buying this NFT</p>
                            </div>
                        </div>
                        <div className='flex margin'>
                            <button class="btn btn-primary margin-2">Bye Now</button>
                            <button class="btn btn-primary margin-2">Request Call Back</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
        </div>
    );
};

export default Home;