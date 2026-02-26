import React from 'react'
import { Link } from 'react-router-dom'

const listings = [
    { title: "Luxury House in Greenville", price: "$860,000", image: "/Images/contact-01.webp" },
    { title: "Modern Condo for Sale", price: "$150,000", image: "/Images/contact-02.webp" },
    { title: "Apartment with Subunits", price: "$999", image: "/Images/contact-03.webp" },
    { title: "Three Room Apartment", price: "$550,000", image: "/Images/contact-04.webp" },
    { title: "Suburb Home for Sale", price: "$1,000,000", image: "/Images/contact-05.webp" }
]

const ContactDetails = () => {
    return (
        <>
            <div className='contact-details bg-[#f9f9f9] px-4 md:px-6 lg:px-10 xl:px-20 py-20'>

                {/* LEFT SIDE */}
                <div className="lg:col-span-2 space-y-8">
                    <div className='bg-white p-8 rounded'>
                        <h3 className='text-2xl font-semibold text-gray-900 mb-6'>
                            Get in touch
                        </h3>

                        <form className='space-y-4'>

                            <input
                                type="text"
                                placeholder='Your Name'
                                className='w-full py-2 px-4 rounded border border-gray-300 focus:outline-[#6919dd]'
                            />

                            <input
                                type="text"
                                placeholder='Your Email'
                                className='w-full py-2 px-4 rounded border border-gray-300 focus:outline-[#6919dd]'
                            />

                            <input
                                type="number"
                                placeholder='Your Phone'
                                className='w-full py-2 px-4 rounded border border-gray-300 focus:outline-[#6919dd]'
                            />

                            <textarea
                                placeholder='Type your message'
                                rows={4}
                                className='w-full py-2 px-4 rounded border border-gray-300 focus:outline-[#6919dd]'
                            />

                            <button
                                type='submit'
                                className='btn w-full text-white font-semibold cursor-pointer rounded relative py-3 bg-[#6919dd] hover:bg-[#5a14c9] active:bg-[#4c0fb0] transition-all duration-300'
                            >
                                <Link to="/contact" className='relative z-10'>
                                    Send Message
                                </Link>
                            </button>

                        </form>
                    </div>
                </div>


                
            </div>
        </>
    )
}

export default ContactDetails
