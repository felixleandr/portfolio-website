'use client'

import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

export type Theme = 'light' | 'dark';

export default function ThemeToogle() {
    const [theme, setTheme] = useState<Theme>('light');

    const toogleTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light')
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme') as Theme | null

        if(localTheme){
            setTheme(localTheme)

            if(localTheme === 'dark'){
                document.documentElement.classList.add('dark')
            }

        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, [])

  return (
    <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-[#0000FE] border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white dark:border-opacity-50'
    onClick={toogleTheme}
    >
        {
            theme === 'light' ? <BsSun/> : <BsMoon/>
        }
    </button>
  )
}
