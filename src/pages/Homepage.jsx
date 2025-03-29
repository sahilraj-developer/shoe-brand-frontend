import { useState } from 'react'
// import './App.css'
import Footer from '../components/Footer'
import Nav from '../components/Navbar'
import About from './About'

function Home() {


  return (
    <>
    <Nav/>




    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Plan Your Next Beautiful Adventure. </h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem consectetur tempora dignissimos quod pariatur, accusantium nam magni, perspiciatis officiis et unde nostrum ipsum hic expedita suscipit. Sed repellendus itaque ipsa mollitia impedit esse.
      </p>
      <button className="btn bg-amber-700">Explore More!</button>
    </div>
  </div>
</div>
   

    <About/>
    <Footer/>
    </>
  )
}

export default Home
