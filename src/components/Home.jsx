import React from 'react'
import Banner from './HomeComponents/Banner'
import MidSection from './HomeComponents/MidSection'
import CourseBanner from './HomeComponents/CourseBanner'
import Descriptions from './HomeComponents/Descriptions'
import IndustryApplications from './HomeComponents/IndustryApplications'
import Locations from './HomeComponents/Locations'
import FAQ from './HomeComponents/FAQ'
import Partners from './HomeComponents/Partners'
import Contacts from './HomeComponents/Contacts'

const Home = () => {
  return (
    <div>
      <Banner />
      <MidSection />
      <CourseBanner />
      <Descriptions />
    <IndustryApplications />
        <FAQ />
      <Partners />
      <Locations />
      <Contacts />
    </div>
  )
}

export default Home