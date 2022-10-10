import React from 'react';
import "./Section4.css"
const Section4 = () => {
    return (
        <div className='bg-black mt-2 p-10'>
            <div className='border p-5'>
                <h1 className='text text-white text-3xl mb-5'>How to buy</h1>
                <hr />
                {/* Blank square made */}
                <div className='grid grid-cols-2 p-5 gap-10'>
                    <div className='square'>
                    </div>
                    <div>
                        <h1 className='text text-white font-bold text-lg mt-3'>Should we put all four in the discription?</h1>
                        <p className='text text-white mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quos eos voluptatibus, suscipit, autem excepturi repudiandae id placeat rerum numquam praesentium veritatis? Magni explicabo iure officiis blanditiis, nobis neque, laudantium dignissimos numquam porro dolore alias laborum nulla nisi ratione! Esse optio atque similique nemo deleniti eaque explicabo accusamus doloremque magnam, dignissimos cupiditate sit temporibus culpa neque consequatur beatae harum amet!</p>
                        <hr />
                        <p className='text text-white font-bold text-lg mt-2 mb-2'>Infographic with icons, Would like more info about e-commerce platforms for books and games.</p>
                        <hr />
                        <p className='text text-white font-bold text-lg mt-2'>Infographic with icons, Would like more info about e-commerce platforms for books and games.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Section4;