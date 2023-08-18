import { Helmet } from "react-helmet";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Packages from "../components/packages/Packages";
import Section1 from "../components/section1/Section1";
import Section2 from "../components/section2/Section2";
import Section3 from "../components/section3/Section3";
import Section4 from "../components/section4/Section4";
import Section5 from "../components/section5/Section5";
import Section6 from "../components/section6/Section6";
import Section7 from "../components/section7/Section7";
import Services from "../components/services/Services";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AI Content Generation for your Business - deepline.ai</title>
        <meta
          name="description"
          content="Boost your online visibility with our AI-powered content generation services. From chat AI to email generation, we can help you create compelling content that will increase conversions."
        />
        <meta property="og:url" content={process.env.REACT_APP_BASE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AI Content Generation for your Business - deepline.ai"
        />
        <meta
          property="og:description"
          content="Boost your online visibility with our AI-powered content generation services. From chat AI to email generation, we can help you create compelling content that will increase conversions."
        />
        <meta
          property="og:image"
          content={process.env.REACT_APP_BASE_URL + "/meta.jpg"}
        />
      </Helmet>
      <Nav />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Packages />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
