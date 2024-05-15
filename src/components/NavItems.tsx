'use client'

import { PRODUCT_CATEGORIES } from '@/config';
import React, { useState } from 'react';
import NavItem from './NavItem';

function NavItems() {
    const [activeIndex, setactiveIndex] = useState<null | number>(null)

    const isAnyOpen = activeIndex !== null

    return (
        <div className='flex gap-4 h-full'>
            {PRODUCT_CATEGORIES.map((category, index) => {

                const handleOpen = () => {
                    if (activeIndex === index) {
                        setactiveIndex(null)
                    } else {
                        setactiveIndex(index)
                    }
                }

                const isOpen = index === activeIndex

                return (
                    <NavItem
                        category={category}
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                        isAnyOpen={isAnyOpen}
                        key={category.value}
                    />
                )
            })}
        </div>
    );
}

export default NavItems;