import React from 'react';
import Hero from '../sections/Hero';
import TradingModel from '../sections/TradingModel';
import ParentCompany from '../sections/ParentCompany';

// Import other sections as we build them
import WealthGrowthChart from '../sections/WealthGrowthChart';
import GrowthCalculator from '../sections/GrowthCalculator';
import InvestmentJourney from '../sections/InvestmentJourney';
import WhyChooseUs from '../sections/WhyChooseUs';
import FAQ from '../sections/FAQ';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <TradingModel />
      <ParentCompany />
      <WealthGrowthChart />
      <InvestmentJourney />
      <GrowthCalculator />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
};

export default Home;
