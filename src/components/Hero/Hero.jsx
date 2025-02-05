// import hero from '../../assets/Hero (4).png'

// const Hero = () => {
//     return (
//         <div className="bg-purple-600 py-[200px] rounded-xl">
//             <div className="container mx-auto text-center text-white">
//             <h1 className="text-6xl text-center ">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
//             <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
//             <button>Shop now</button>
//             </div>
//             <div>
//                 <img src={hero} alt="" />
//             </div>
//         </div>
//     );
// };

// export default Hero;


import hero from '../../assets/Hero (4).png';

const Hero = () => {
    return (
        <div className="relative">
            <div className="container mx-auto bg-purple-600 text-center px-6 pt-[100px] pb-[300px] rounded-xl text-white mb-[400px]">
                <h1 className="md:text-5xl text-2xl font-bold leading-tight">
                    Upgrade Your Tech, Accessorize with <br /> Gadget Heaven Accessories
                </h1>
                <p className="mt-4 text-lg">
                    Explore the latest gadgets that will take your experience to the next level. 
                    From smart devices to <br /> the coolest accessories, we have it all!
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
                    Shop Now
                </button>
            </div>
            <div className="mt-10 flex justify-center absolute top-[400px] left-[410px]">
                <img src={hero} alt="Gadget Heaven" className="rounded-lg shadow-lg w-full" />
            </div>
        </div>
    );
};

export default Hero;
