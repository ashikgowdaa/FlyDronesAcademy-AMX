import Banner from '../CareerComponents/Banner';
import MidSection from '../CareerComponents/MidSection';
import CourseBanner from '../CareerComponents/CourseBanner';
import Descriptions from '../CareerComponents/Descriptions';
import IndustryApplications from '../CareerComponents/IndustryApplications';
import Locations from '../CareerComponents/Locations';
import FAQ from '../CareerComponents/FAQ';
import Partners from '../CareerComponents/Partners';
import Contacts from '../CareerComponents/Contacts';

const Careers = () => {
  return (
    <div>
      <div id="banner">
        <Banner />
      </div>
      <div id="mid-section">
        <MidSection />
      </div>
      <div id="course-banner">
        <CourseBanner />
      </div>
      <div id="descriptions">
        <Descriptions />
      </div>
      <div id="industry-applications">
        <IndustryApplications />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="locations">
        <Locations />
      </div>
      <div id="contacts">
        <Contacts />
      </div>
    </div>
  );
};


export default Careers