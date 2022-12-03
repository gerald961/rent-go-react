import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Our Mission' cover={img} />
        <div className='container flex mtop'>
          <div className='text'>
            <Heading title='Our Agency Story' subtitle='Who We Are And What We Do' />

            <p>It all started with a dream and mission to connect buyers and sellers. We are building an agency that is obsessed with our customers, whether you intend on buying, selling, leasing or renting.</p>
            <p>Our mission is to give our customers a wide variety of options to choose from. We want to empower our customers, let them know their options and guide them through their search for a new property.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='image'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About