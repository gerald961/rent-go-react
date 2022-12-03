import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"

const Listings = () => {
  return (
    <>
      <section className='listings-out mb'>
        <Back name='Listings' title='Listings Grid - Our Listings' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Listings