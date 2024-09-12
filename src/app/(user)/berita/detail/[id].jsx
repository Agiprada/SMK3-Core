import React from 'react'
import { useRouter } from 'next/router'
import { DUMMY_PRODUCT } from '@/libs/dummy-berita'
import Header from '@/shared/header'
import Footer from '@/shared/footer'

export default function DetailBerita() {
  const router = useRouter()
  const { id } = router.query

  // Tambahkan pengecekan jika id belum tersedia
  if (!id) {
    return <div>Loading...</div>
  }

  // Cari berita berdasarkan id yang ada di URL
  const news = DUMMY_PRODUCT.find((newsItem) => newsItem.id === parseInt(id))

  // Jika tidak ada berita yang ditemukan
  if (!news) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Berita tidak ditemukan</h1>
          <p>Maaf, berita yang Anda cari tidak ditemukan.</p>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{news.title}</h1>
        <p className="text-gray-600 text-sm mb-4">{news.date}</p>
        <p className="text-gray-700 mb-8">{news.desc}</p>
        <Link href="/berita" className="text-blue-600 hover:underline">Kembali ke daftar berita</Link>
      </main>
      <Footer />
    </>
  )
}
