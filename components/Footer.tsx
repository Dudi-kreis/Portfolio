import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className='w-full mb-[100px] md:mb-5 pb-10' id="contact">
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-h-[45vw]'>Ready to take <span className='text-purple'>your </span>digital presence to the next level?</h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Reach me out today and let&apos;s talk</p>
                <a href="mailto:dudikreis@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 David Kreis</p>
                <div className='flex items-center md:gap-2 gap-6'>
                    {socialMedia.map((profile) => (
                        <a
                            href={profile.link}
                            key={profile.id}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 border border-black-100 rounded-lg'
                        >
                            <img src={profile.img} alt="profile" width={20} height={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer >
    )
}

export default Footer