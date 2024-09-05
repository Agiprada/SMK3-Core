import React from 'react'
import Header from '../shared/header'
import Footer from '../shared/footer'
import Home from './home'
import Profil from './profile'
import Jurusan from './jurusan'

export default function Dashboard() {
  return (
    <div>
        <Header />
        <Home/>
        <Profil />
        <Jurusan/>
        <Footer/>
    </div>
  )
}
