import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                </div>
            </div>
        </nav>
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <Link href={'/dashboard'} className='text-white'>Home</Link>
                        </li>
                        <li>
                            <Link href={'/berita'} className='text-white'>Berita</Link>
                        </li>
                        <li>
                           <Link href={'/pendaftaran'} className='text-white'>Pendaftaran</Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
