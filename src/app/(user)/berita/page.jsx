import React from 'react'
import Link from 'next/link'
import Header from '../shared/header'
import Footer from '../shared/footer'
import { DUMMY_PRODUCT } from '@/libs/dummy-berita'

export default function Berita() {
  return (
    <>
      <Header/>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Berita</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_PRODUCT.map((news) => (
            <div key={news.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{news.date}</p>
                <p className="text-gray-700 mb-4">{news.desc}</p>
                <Link href={`/berita/detail/${news.id}`} className="text-blue-600 hover:underline">
                  Baca selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  )
}