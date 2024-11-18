import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { stack } from '@/data'

const Clients = () => {
    return (
        <div className='py-20' id="stack">
            <h1 className='heading'>
                My
                <span className='text-purple'> Developer Arsenal </span>
            </h1>
            <div className='flex flex-col items-center'>
                <div>
                    <InfiniteMovingCards
                        items={stack}
                        direction='right'
                        speed='normal'
                    />
                </div>

            </div>
        </div>
    )
}

export default Clients