import React from 'react';
import discord from "../Images/discord.png"
import facebook from "../Images/facebook.png"
import twiter from "../Images/twiter.png"
import instagram from "../Images/instagram.png"
import arrow from "../Images/arrow.jpg"
import "./Section5.css"
const Section5 = () => {
    return (
        <div className='bg-black mt-2 p-10'>
            <div className='border p-5'>
                <h1 className='text text-white text-3xl mb-5'>Stay Connected</h1>
                <hr />
                {/* Blank square made */}
                <div className='grid grid-cols-3 p-5 gap-10'>
                    <div className='square p-10'>
                        <h1 className='text text-white text-lg'>Join</h1>
                        <p className='text text-white text-2xl font-bold'>Discord</p>
                        <img className='discord' src={discord} alt="" />
                    </div>
                    <div className='square p-10'>
                        <h1 className='text text-white text-lg'>Share</h1>
                        <p className='text text-white text-2xl font-bold'>Link</p>
                        <div className='flex'>
                            <img className='discord' src={facebook} alt="" />
                            <img className='twiter' src={twiter} alt="" />
                            <img className='instagram' src={instagram} alt="" />
                        </div>
                    </div>
                    <div className='square p-10'>
                        <h1 className='text text-white text-lg'>Share</h1>
                        <p className='text text-white text-2xl font-bold'>Link</p>
                        <img className='arrow' src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Section5;