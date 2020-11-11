import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
//import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
//import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01 h-full body-wrap" />
      {/*<FeaturesTiles />*/}
      <FeaturesSplit topDivider className="illustration-section-02" id="app-list" />
      {/*<Testimonial topDivider />*/}
      <Cta topDivider />
    </>
  );
}

export default Home;
