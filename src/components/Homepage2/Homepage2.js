import React from "react";
import BrowserHistory from "./BrowserHistory.js/BrowserHistory";
import HempProduct from "./HempProducts/HempProduct";
import HempProductMIni from "./HempProducts/HempProductMIni";
import TrendingNow from "./TrendingNow/TrendingNow";
import ViewedToday from "./ViewedToday/ViewedToday";
import catagory1 from "../../assets/catagory1.png";
import catagory2 from "../../assets/catagory2.png";
import trendingNow from "../../assets/TrendingNows.png";
import Banner from "./HempProducts/Banner";
import {
  SimilarProductsContainer,
  ViewTodayContainer,
} from "./StyledHomepage2";
import FashionDiscount from "../Homepage/FashionDiscount/FashionDiscount";
import mensFashionDiscount from "../../assets/mensFashionDiscount.svg";
import interOrg1 from "../../assets/interOrg1.svg";
import interOrg2 from "../../assets/interOrg2.svg";
import interOrg3 from "../../assets/interOrg3.svg";
import interOrg4 from "../../assets/interOrg4.svg";
import interOrg5 from "../../assets/interOrg5.svg";
import followUs1 from "../../assets/twitter.svg";
import followUs2 from "../../assets/facebook.svg";
import followUs3 from "../../assets/youtube.svg";
import followUs4 from "../../assets/snapchat.svg";
import followUs5 from "../../assets/www.svg";
import followUs6 from "../../assets/messenger.svg";
import followUs7 from "../../assets/instagram.svg";
import followUs8 from "../../assets/linkdin.svg";
import hygie1 from "../../assets/hygie1.svg";
import hygie2 from "../../assets/hygie2.svg";
import hygie3 from "../../assets/hygie3.svg";
import hygie4 from "../../assets/hygie4.svg";
import hygie5 from "../../assets/hygie5.svg";
import hygie6 from "../../assets/hygie6.svg";
import hygie7 from "../../assets/hygie7.svg";
import hygie8 from "../../assets/hygie8.svg";
import hygie9 from "../../assets/hygie9.svg";
import TrustedSuppliers from "../Homepage/TrustedSuppliers/TrustedSuppliers";
import Footer from "../Homepage/Footer/Footer";
import SSL from "../Homepage/SSL/SSL";
import Quote from "../Homepage/Quote/Quote";
import Terms from "../Terms/Terms";
import aboveCopyright1 from "../../assets/aboveCopyright1.svg";
import aboveCopyright2 from "../../assets/aboveCopyright2.svg";
import aboveCopyright3 from "../../assets/aboveCopyright3.svg";
import aboveCopyright4 from "../../assets/aboveCopyright4.svg";
import aboveCopyright5 from "../../assets/aboveCopyright5.svg";
import aboveCopyright6 from "../../assets/aboveCopyright6.svg";
import aboveCopyright7 from "../../assets/aboveCopyright7.svg";
import aboveCopyright8 from "../../assets/aboveCopyright8.svg";
import FollowUs from "../Homepage/FollowUs/FollowUs";
import AgenciesHeader from "../AgenciesPage/AgenciesHeader/AgenciesHeader";
import FeatureMarketContainer from "../Homepage/FeatureMarketplace/FeatureMarketContainer";
import TrendingNow1 from "./TrendingNow/TrendingNow1";
import HomePageNav from "./HomePageNav";

const Homepage2 = () => {
  const styles = {
    margin: "1rem 2rem",
    border: "none",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    padding: " 0 2rem",
  };
  const fashionDiscountImgs = [
    mensFashionDiscount,
    mensFashionDiscount,
    mensFashionDiscount,
    mensFashionDiscount,
    mensFashionDiscount,
    mensFashionDiscount,
  ];
  const mensProducts = [
    trendingNow,
    catagory1,
    catagory2,
    catagory1,
    catagory2,
    catagory1,
  ];
  const products = [
    trendingNow,
    trendingNow,
    trendingNow,
    trendingNow,
    trendingNow,
    trendingNow,
    trendingNow,
  ];
  const historyProducts = [
    catagory2,
    trendingNow,
    catagory1,
    trendingNow,
    catagory2,
    catagory1,
    trendingNow,
    catagory2,
  ];
  const trustedOrganizations = [
    interOrg1,
    interOrg2,
    interOrg3,
    interOrg4,
    interOrg5,
    interOrg1,
  ];
  const followUsImgs = [
    { img: followUs1, title: "Twitter" },
    { img: followUs2, title: "Facbook" },
    { img: followUs3, title: "Youtube" },
    { img: followUs4, title: "TencentQQ" },
    { img: followUs5, title: "Vkontakte" },
    { img: followUs6, title: "Messenger" },
    { img: followUs7, title: "Instagram" },
    { img: followUs8, title: "LinkedIn" },
  ];
  const hygieImgs = [
    { img: hygie1, title: "Europe" },
    { img: hygie2, title: "USA" },
    { img: hygie3, title: "Canada" },
    { img: hygie4, title: "Qatar" },
    { img: hygie5, title: "Dubai" },
    { img: hygie6, title: "Spain" },
    { img: hygie7, title: "Qatar" },
    { img: hygie8, title: "Spain" },
    { img: hygie9, title: "Dubai" },
  ];
  const aboveCopyrightImgs = [
    aboveCopyright1,
    aboveCopyright2,
    aboveCopyright3,
    aboveCopyright6,
    aboveCopyright4,
    aboveCopyright5,
    aboveCopyright7,
    aboveCopyright8,
  ];

  return (
    <>
      <AgenciesHeader />
      <HomePageNav />
      <FeatureMarketContainer order="first" />
      <HempProduct />
      <TrendingNow1
        heading="Trending"
        description="These are all our trending products that users buy most frequently across the platform."
        section='trending'
      />
      <ViewTodayContainer>
        <ViewedToday section='trending-add' />
      </ViewTodayContainer>
      <TrendingNow1
        heading="Products"
        description="These are all our Rx products across the platform which our customer recommeds to our everyone."
        section="onlyProduct"
      />
      <ViewTodayContainer>
        <ViewedToday  section='onlyProduct-add' />
      </ViewTodayContainer>
      <TrendingNow1
        heading="Therapeautic"
        description="These are all our therapeutic products across the platform that our customer recommends to everyone."
        section="therapeautic"
      />
      <ViewTodayContainer>
        <ViewedToday  section='therapeautic-add' />
      </ViewTodayContainer>
      <TrendingNow1
        heading="Marketplace"
        description="These are all our therapeautic products across the platform which our customer recommeds to our everyone."
        section="marketPlace"
      />
      <ViewTodayContainer>
        <ViewedToday  section='marketPlace-add' />
      </ViewTodayContainer>
      <TrendingNow1
        heading="Industry"
        description="These are all our therapeautic products across the platform which our customer recommeds to our everyone."
        section="industry"
      />
      <ViewTodayContainer>
        <ViewedToday  section='industry-add' />
      </ViewTodayContainer>
      <TrendingNow1
        heading="Home"
        description="These are all our therapeautic products across the platform which our customer recommeds to our everyone."
        section="home"
      />
      <ViewTodayContainer>
        <ViewedToday  section='home-add' />
      </ViewTodayContainer>
      <TrendingNow1
        heading="Men"
        description="These are all our therapeautic products across the platform which our customer recommeds to our everyone."
        section="menProduct"
      />
      <ViewTodayContainer>
        <ViewedToday  section='menProduct-add' />
      </ViewTodayContainer>
      <TrendingNow1
        heading="Women"
        description="These are all our therapeautic products across the platform which our customer recommeds to our everyone."
        section="ladiesProduct"
      />
      {/* <FashionDiscount imgs={fashionDiscountImgs} /> */}
      {/* <HempProductMIni className='Last Month Top Categories' /> */}
      {/* <TrendingNow heading="Man's Product" imgs={mensProducts} />
      <TrendingNow heading="Ladies Product" imgs={mensProducts} /> */}
      {/* <FashionDiscount imgs={fashionDiscountImgs} /> */}
      {/* <BrowserHistory imgs={historyProducts} />
      <ViewedToday heading="Wishlist" /> */}
      {/* <div className="mt-3-2">
        <Banner />
      </div> */}
      {/* <TrendingNow
        heading="Products you brought recently"
        imgs={mensProducts}
      /> */}
      {/* <div className="mt-3-2">
        <Banner />
      </div>
      <TrendingNow
        heading="Products you may like from your recent choices"
        imgs={mensProducts}
      /> */}
      {/* <div className="mt-3-2">
        <Banner />
      </div> */}
      {/* <SimilarProductsContainer>
        <ViewedToday heading="Similar Trending Products" />
      </SimilarProductsContainer> */}
      <TrustedSuppliers
        imgs={trustedOrganizations}
        head="Trusted International Organizations"
      />
      <FollowUs
        imgs={followUsImgs}
        head="Follow Us"
        imgs1={hygieImgs}
        head1="Hygieia Apothecary"
      />
      <Footer />
      <SSL />
      <hr style={styles} />
      <TrustedSuppliers imgs={aboveCopyrightImgs} head="" />
      <Terms />
      <Quote />
    </>
  );
};

export default Homepage2;
