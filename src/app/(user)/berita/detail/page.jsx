import React from 'react'
import Header from '../../shared/header'
import Footer from '../../shared/footer'
import { DUMMY_PRODUCT } from '@/libs/dummy-berita'
import { notFound } from 'next/navigation'

export default function BeritaDetail({ params }) {
  const { id } = params
  const news = DUMMY_PRODUCT.find(item => item.id === id)

  if (!news) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
          <p className="text-gray-600 mb-6">{news.date}</p>
          <div className="prose prose-lg">
            {news.fullDesc.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}