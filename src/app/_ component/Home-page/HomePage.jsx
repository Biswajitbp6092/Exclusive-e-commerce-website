import React from 'react'
import HeroSection from './Hero-section/HeroSection'
import FlashSales from './Flash-Sales/FlashSales'
import BrowseByCategory from './Browse-By-Category/BrowseByCategory'
import BestSellingProducts from './Best-Selling-Products/BestSellingProducts'
import Categories from './Categories/Categories'
import ExploreOurProducts from './Explore-Our-Products/ExploreOurProducts'
import NewArrival from './New-Arrival/NewArrival'
import CustomerSupport from '../Utilities/CustomerSupport/CustomerSupport'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <FlashSales/>
        <BrowseByCategory/>
        <BestSellingProducts/>
        <Categories/>
        <ExploreOurProducts/>
        <NewArrival/>
        <CustomerSupport/>
    </div>
  )
}

export default HomePage
