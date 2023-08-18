import { Helmet } from "react-helmet";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

export default function FAQs() {
  return (
    <>
      <Helmet>
        <title>
          FAQ for AI Content Generation, Chat AI, email generation - deepline.ai
        </title>
        <meta
          name="description"
          content="Get to know more about our AI-powered content services that will help you boost your business visibility and conversions."
        />

        <meta
          property="og:url"
          content={process.env.REACT_APP_BASE_URL + "/faqs"}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="FAQ for AI Content Generation, Chat AI, email generation - deepline.ai"
        />
        <meta
          property="og:description"
          content="Get to know more about our AI-powered content services that will help you boost your business visibility and conversions."
        />
        <meta
          property="og:image"
          content={process.env.REACT_APP_BASE_URL + "/meta.jpg"}
        />
      </Helmet>

      {/* Hero Section starts here  */}
      <div className="faq-hero-sect position-relative">
        <div className="container-fluid p-0">
          <Nav transparent="1" />
        </div>
        <div className="head-text py-5rem text-center">
          <p className="display-5 fw-bold font-inter fst-normal text-white">
            Frequently Asked Questions
          </p>
          <p className="text-white-0p8 fs-6 font-inter lh-1">
            Find the answers to the most common questions we get.
          </p>
        </div>
      </div>
      <div className="faq-categories">
        <div className="container py-2">
          <ul
            className="nav nav-pills d-flex justify-content-md-between justify-content-evenly"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a href="#pills-general" className="text-decoration-none">
                <button
                  id="pills-general-tab-1"
                  className="nav-link active fs-15px font-dm-sans text-dark-black fw-bold fst-normal"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-general"
                  type="button"
                  role="tab"
                  aria-controls="pills-general"
                  aria-selected="true"
                >
                  General
                </button>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="#pills-pricing" className="text-decoration-none">
                <button
                  id="pills-pricing-tab-2"
                  className="nav-link fs-15px font-dm-sans text-dark-black fw-bold fst-normal"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-pricing"
                  type="button"
                  role="tab"
                  aria-controls="pills-pricing"
                  aria-selected="false"
                >
                  Pricing
                </button>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="#pills-features" className="text-decoration-none">
                <button
                  id="pills-features-tab-3"
                  className="nav-link fs-15px font-dm-sans text-dark-black fw-bold fst-normal"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-features"
                  type="button"
                  role="tab"
                  aria-controls="pills-features"
                  aria-selected="false"
                >
                  Features
                </button>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="#pills-payments" className="text-decoration-none">
                <button
                  id="pills-payments-tab-4"
                  className="nav-link fs-15px font-dm-sans text-dark-black fw-bold fst-normal"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-payments"
                  type="button"
                  role="tab"
                  aria-controls="pills-payments"
                  aria-selected="false"
                >
                  Payments
                </button>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="#pills-security" className="text-decoration-none">
                <button
                  id="pills-security-tab-5"
                  className="nav-link fs-15px font-dm-sans text-dark-black fw-bold fst-normal"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-security"
                  type="button"
                  role="tab"
                  aria-controls="pills-security"
                  aria-selected="false"
                >
                  Security
                </button>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="#pills-global" className="text-decoration-none">
                <button
                  id="pills-global-tab-6"
                  className="nav-link fs-15px font-dm-sans text-dark-black fw-bold fst-normal"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-global"
                  type="button"
                  role="tab"
                  aria-controls="pills-global"
                  aria-selected="false"
                >
                  Global
                </button>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="#pills-porting" className="text-decoration-none">
                <button
                  id="pills-porting-tab-7"
                  className="nav-link fs-15px font-dm-sans text-dark-black fw-bold fst-normal"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-porting"
                  type="button"
                  role="tab"
                  aria-controls="pills-porting"
                  aria-selected="false"
                >
                  Porting
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="faq-big-heading text-center p-0 my-3p1rem">
          <span
            className="fs-3p25rem fw-bold font-inter qoute-black fst-normal display-5"
          >
            Frequently Asked
            <br /> Questions
          </span>
        </div>
        {/* Faq Categories Questins */}
        <div
          className="faq-categories-content tab-content"
          id="pills-tabContent"
        >
          <div
            className="tab-pane fade show active"
            id="pills-general"
            role="tabpanel"
            aria-labelledby="pills-general-tab"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                <div className="faq-category-heading py-3">GENERAL</div>
              </div>
              <div className="col-md-8 col-sm-11 col-12 d-flex justify-content-center p-0 px-sm-0 px-4">
                <div
                  className="accordion accordion-flush w-100"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        How does deepline.ai work?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        deepline.ai uses AI technology to simplify the content
                        creation experience. As a user, you input information
                        such as keywords, the title, etc., and instructions
                        (e.g., generate, re-write, check) into the AI template.
                        With the help of natural language processing, our
                        software instantly generates high-quality written
                        content that is SEO optimized and curated for your
                        target audience. With deepline.ai’s templates and
                        add-ons, you can skip the tedious process of creating
                        content. Our AI technology does it for you.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        What templates does deepline.ai offer?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        deepline.ai offers AI templates for short and long-form
                        text creation, as well as templates that allow you to
                        improve existing writing. The short-form content
                        templates include templates for Product Descriptions and
                        Amazon Product Descriptions, Meta Descriptions, and
                        Social Media Posts + Ads. deepline.ai’s long-form
                        content templates include the Email Generator, Blog Post
                        Generator, and the Long-Form (Doc-Style) Writing
                        template. In addition to these templates, you can also
                        use the Paragraph Re-Writing template to develop and
                        improve any existing writing or text you may already
                        have. To learn more about which plans give you access to
                        which templates, click here.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Which template works best for what I need?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        The best choice of template will depend greatly on the
                        content you wish to create. As we offer a range of
                        templates, you should first choose whether you would
                        like to improve existing content (opt for our Paragraph
                        Re-Writing template) or create new content (choose one
                        of our long or short-form content creation templates).
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Short-Form Content
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        If you wish to create shorter texts and need to generate
                        a large number of descriptions, our Amazon Product
                        Descriptions and Product Descriptions templates are the
                        best options for you. If you are interested in creating
                        captions or advertising for social media, our Social
                        Media Posts + Ads template will help you easily create
                        short texts and ads that are targeted toward your
                        specific audience. As the name suggests, our Meta
                        Description Template writes meta descriptions for your
                        website, creating brief, unique, and actionable
                        descriptions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        Long-Form Content
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        If you are looking to create a blog or article that will
                        attract readers, our Blog Post Generator is the perfect
                        template for you. Our Email Generator template is ideal
                        if you need help with your day-to-day business
                        communication. Use the Email Generator to write emails
                        that are direct, informative, and have a professional
                        tone and style. If you are looking for help with writing
                        long texts and documents, our Long-Form Writing
                        (Doc-Style) template is the best option for you. <br />
                        <br />
                        All content created using our AI templates is
                        search-engine optimized, giving you the best chances to
                        stand out and grow your business.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        How difficult is it to use deepline.ai?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingSix"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        deepline.ai is very easy to use thanks to our
                        user-friendly interface. Once you know what content you
                        wish to create, pick a template and input your product
                        information and any keywords or features you want
                        included, select the tone of voice you want for the
                        text, the number of texts you want, and click
                        “Generate”. Our AI software will immediately generate
                        your requested texts.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSeven"
                        aria-expanded="false"
                        aria-controls="flush-collapseSeven"
                      >
                        Does deepline.ai have a plagiarism checker?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingSeven"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Yes, deepline.ai offers an add-on Plagiarism Checker
                        that you can use to check your text for any instances of
                        plagiarism. Our Plagiarism Checker is available as part
                        of the Enterprise Mode and Business plans. You get an
                        unlimited number of plagiarism checks with both plans.
                        To learn more about the different features that come
                        with each plan, click here.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseEight"
                        aria-expanded="false"
                        aria-controls="flush-collapseEight"
                      >
                        What add-ons are available with deepline.ai?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingEight"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Yes. Your plan will renew automatically, whether you are
                        on a monthly or annual subscription. If you would like
                        to turn off automatic renewal, simply go to your account
                        and click on “turn off auto-renew”.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingNine">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseNine"
                        aria-expanded="false"
                        aria-controls="flush-collapseNine"
                      >
                        What is AI Chat Assistance?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseNine"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingNine"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        AI Chat Assistance is an AI-powered chat that can assist
                        you with all your content creation needs. This powerful
                        tool allows you to ask questions and give instructions
                        such as “write a blog post about...” or “create a
                        caption…”. The AI Chat Assistance will answer your
                        questions and generate content based on the instructions
                        you give. AI Chat Assistance is available as part of the
                        Enterprise Mode plan and the Business plan.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTen"
                        aria-expanded="false"
                        aria-controls="flush-collapseTen"
                      >
                        What integrations do you offer?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTen"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTen"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        AI Chat Assistance is an AI-powered chat that can assist
                        you with all your content creation needs. This powerful
                        tool allows you to ask questions and give instructions
                        such as “write a blog post about...” or “create a
                        caption…”. The AI Chat Assistance will answer your
                        questions and generate content based on the instructions
                        you give. AI Chat Assistance is available as part of the
                        Enterprise Mode plan and the Business plan.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading11">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse11"
                        aria-expanded="false"
                        aria-controls="flush-collapse11"
                      >
                        Can I use deepline.ai on other platforms like Gmail,
                        Google Docs, etc.?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse11"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading11"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        You can use deepline.ai on Gmail, Google Docs, and other
                        platforms with the help of our Chrome Extension
                        integration, which is available as part of the
                        Enterprise Mode and Business plan.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading12">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse12"
                        aria-expanded="false"
                        aria-controls="flush-collapse12"
                      >
                        Can I use deepline.ai for other languages?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse12"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading12"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        With our Translator add-on, you can easily translate any
                        content you create into 29+ languages. The Translator
                        add-on is available as part of the Enterprise Mode and
                        Business plans.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading13">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse13"
                        aria-expanded="false"
                        aria-controls="flush-collapse13"
                      >
                        What are credits?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse13"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading13"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Credits are a simple way of measuring a thousand words.
                        1 credit = 1000 words, 10 credits = 10,000 words, 100
                        credits=100,000 words. Credits will help you quickly and
                        easily keep track of the number of words you still have
                        available each month.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading14">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse14"
                        aria-expanded="false"
                        aria-controls="flush-collapse14"
                      >
                        How many credits do I get?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse14"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading14"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        With the Starter plan, you get 35 credits a month, or
                        35,000 words. With Enterprise Mode you get 100 credits,
                        i.e., 100,000 words. With our Business plan, you can
                        customize the number of credits and words you want per
                        month.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading15">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse15"
                        aria-expanded="false"
                        aria-controls="flush-collapse15"
                      >
                        What if I run out of credits?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse15"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading15"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        If you run out of credits, i.e., words, for the month,
                        you can simply purchase extra credits. Credit purchases
                        are available as bundles. To learn more about credit
                        bundles and to purchase extra credits, click here.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading16">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse16"
                        aria-expanded="false"
                        aria-controls="flush-collapse16"
                      >
                        What if I run out of credits?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse16"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading16"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        If you run out of credits, i.e., words, for the month,
                        you can simply purchase extra credits. Credit purchases
                        are available as bundles. To learn more about credit
                        bundles and to purchase extra credits, click here.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading17">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse17"
                        aria-expanded="false"
                        aria-controls="flush-collapse17"
                      >
                        What if I run out of credits?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse17"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading17"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        If you run out of credits, i.e., words, for the month,
                        you can simply purchase extra credits. Credit purchases
                        are available as bundles. To learn more about credit
                        bundles and to purchase extra credits, click here.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading18">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse18"
                        aria-expanded="false"
                        aria-controls="flush-collapse18"
                      >
                        What is the difference between the Starter, Enterprise
                        Mode, and Business Plan?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse18"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading18"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        The Starter plan is perfect for professionals who are
                        just starting out and want help with generating creative
                        content. You get access to a selection of the most
                        popular deepline.ai templates that allow you to quickly
                        create short-form content such as product descriptions,
                        social media posts and ads, as well as long-form content
                        such as blog posts and emails. One Starter plan can be
                        used by up to 5 users. <br />
                        <br />
                        The Enterprise Mode is ideal for established
                        professionals and mid-size teams looking to further
                        develop their existing business and brand. Enterprise
                        Mode gives you full access to all our AI templates,
                        including long-form document-style writing templates.
                        You also gain access to our Plagiarism Checker and
                        Chrome Extension. Enterprise Mode can be used by up to
                        10 users. <br />
                        <br />
                        The Business Plan is the best solution for organizations
                        looking for customized solutions for their content
                        creation needs. With custom word and user packages,
                        access to all deepline.ai integrations, as well as
                        onboarding and an account manager, the Business Plan can
                        help your team streamline its content creation process.{" "}
                        <br />
                        <br />
                        For a more detailed overview of what each plan offers,
                        click here.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading19">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse19"
                        aria-expanded="false"
                        aria-controls="flush-collapse19"
                      >
                        How many users can use one deepline.ai plan?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse19"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading19"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        If you have the Starter plan, up to 5 users can use the
                        same plan. If you have the Enterprise Mode plan, up to
                        10 other users can use this plan. With the Business
                        plan, you can customize the number of users who can use
                        the plan.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading20">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse20"
                        aria-expanded="false"
                        aria-controls="flush-collapse20"
                      >
                        How can I switch to a different plan?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse20"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading20"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        If you would like to switch to a different plan, simply
                        go to your account, select “change plan”, and choose the
                        new plan you want. Once you have confirmed your change
                        of plan, your account will be updated and your payments
                        will change with the next billing cycle.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading21">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse21"
                        aria-expanded="false"
                        aria-controls="flush-collapse21"
                      >
                        Will my plan renew automatically?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse21"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading21"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Yes. Your plan will renew automatically, whether you are
                        on a monthly or annual subscription. If you would like
                        to turn off automatic renewal, simply go to your account
                        and click on “turn off auto-renew”.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading22">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse22"
                        aria-expanded="false"
                        aria-controls="flush-collapse22"
                      >
                        My team is interested in the Business plan. How do I get
                        a quote?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse22"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading22"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        To get a quote for your team or organization, please
                        contact our Sales Team at{" "}
                        <a
                          href="mailto:info@deepline.ai"
                          style={{
                            color: "black",
                            textDecorationColor: "black",
                          }}
                        >
                          info@deepline.ai
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading23">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse23"
                        aria-expanded="false"
                        aria-controls="flush-collapse23"
                      >
                        What payment methods can I use to sign up for
                        deepline.ai?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse23"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading23"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        You can pay using Google Pay, Apple Pay, Visa,
                        Mastercard, American Express, or Diners.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading24">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse24"
                        aria-expanded="false"
                        aria-controls="flush-collapse24"
                      >
                        What is deepline.ai’s refund policy?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse24"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading24"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        If you haven’t used your deepline.ai plan, you can
                        contact us at [help@deepline.ai] within 10 days of your
                        purchase and request a refund. <br />
                        <br />
                        If you’d like to keep your subscription, but stop future
                        payments, you can do so by accessing your account and
                        turning off the auto-renew option. <br />
                        <br />
                        Please note, if you are outside the 10-day window or if
                        you have used deepline.ai, you are not entitled to a
                        refund, and canceling your subscription will not
                        generate a refund.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading25">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse25"
                        aria-expanded="false"
                        aria-controls="flush-collapse25"
                      >
                        Can I cancel my subscription?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse25"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading25"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Yes. You can cancel your subscription by going to your
                        account and clicking “cancel subscription”. Your account
                        will remain active until the next billing cycle.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading26">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse26"
                        aria-expanded="false"
                        aria-controls="flush-collapse26"
                      >
                        Can I switch from monthly to annual payments?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse26"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading26"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Yes, you can switch from monthly to annual payments at
                        any time and your payment fee will be updated with the
                        next billing cycle.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading27">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse27"
                        aria-expanded="false"
                        aria-controls="flush-collapse27"
                      >
                        How do I become a deepline.ai partner?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse27"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading27"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Being a deepline.ai partner comes with a range of
                        benefits and perks, including bonuses, better visibility
                        for your profile and business, and more. To discover all
                        about becoming a partner, click here.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pricing */}
          <div
            className="tab-pane fade"
            id="pills-pricing"
            role="tabpanel"
            aria-labelledby="pills-pricing-tab"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                <div className="faq-category-heading py-3">PRICING</div>
              </div>
              <div className="col-md-8 col-sm-11 col-12 d-flex justify-content-center p-0 px-sm-0 px-4">
                <div
                  className="accordion accordion-flush w-100"
                  id="accordionPricing"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pricing-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#pricing-collapseOne"
                        aria-expanded="false"
                        aria-controls="pricing-collapseOne"
                      >
                        What templates does deepline.ai offer?
                      </button>
                    </h2>
                    <div
                      id="pricing-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="pricing-headingOne"
                      data-bs-parent="#accordionPricing"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Minima, veritatis ad. Facilis aspernatur impedit
                        maxime est illum autem possimus qui.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pricing-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#pricing-collapseTwo"
                        aria-expanded="false"
                        aria-controls="pricing-collapseTwo"
                      >
                        Which template works best for what I need?
                      </button>
                    </h2>
                    <div
                      id="pricing-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="pricing-headingTwo"
                      data-bs-parent="#accordionPricing"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore possimus facere nostrum nobis sunt dolor impedit
                        est fugit? Reiciendis nesciunt, qui veritatis dolores
                        inventore fugiat eos odio commodi voluptatum odit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pricing-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#pricing-collapseThree"
                        aria-expanded="false"
                        aria-controls="pricing-collapseThree"
                      >
                        Does deepline.ai have a plagiarism checker?
                      </button>
                    </h2>
                    <div
                      id="pricing-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="pricing-headingThree"
                      data-bs-parent="#accordionPricing"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores quibusdam iste facilis sed tenetur
                        ullam molestiae aliquam accusamus, velit, nesciunt
                        impedit autem quia delectus alias hic natus odio rem
                        excepturi suscipit. Expedita ut recusandae rem
                        aspernatur numquam enim saepe ea non voluptatibus
                        mollitia doloribus, quidem veniam dicta nesciunt
                        molestiae dolor debitis in odio? Ipsam cupiditate est
                        fuga animi iste dolor impedit, commodi consectetur
                        delectus neque, hic, reiciendis perspiciatis. Ipsum,
                        accusantium.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pricing-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#pricing-collapseFour"
                        aria-expanded="false"
                        aria-controls="pricing-collapseFour"
                      >
                        What is AI Chat Assistance?
                      </button>
                    </h2>
                    <div
                      id="pricing-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="pricing-headingFour"
                      data-bs-parent="#accordionPricing"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aut explicabo aspernatur quod quia obcaecati autem
                        corporis facere atque praesentium sint laudantium
                        doloremque rem tenetur facilis enim suscipit odit,
                        reprehenderit dolorum minima perferendis! Voluptate
                        magni atque voluptates, sunt, nisi itaque tempore quasi
                        nobis esse eveniet eaque molestiae, blanditiis ipsum!
                        Soluta culpa ducimus iusto quibusdam atque harum optio
                        deserunt eum rerum id.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pricing-headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#pricing-collapseFive"
                        aria-expanded="false"
                        aria-controls="pricing-collapseFive"
                      >
                        What integrations do you offer?
                      </button>
                    </h2>
                    <div
                      id="pricing-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="pricing-headingFive"
                      data-bs-parent="#accordionPricing"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem nostrum quibusdam porro rerum voluptatibus
                        quisquam, mollitia eius at aut cupiditate suscipit eum
                        sit est magnam illo quae debitis minima perspiciatis?{" "}
                        <br />
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam mollitia quidem numquam eligendi maiores at
                        recusandae quam cumque officia excepturi.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pricing-headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#pricing-collapseSix"
                        aria-expanded="false"
                        aria-controls="pricing-collapseSix"
                      >
                        Can I use deepline.ai on other platforms like Gmail,
                        Google Docs, etc.?
                      </button>
                    </h2>
                    <div
                      id="pricing-collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="pricing-headingSix"
                      data-bs-parent="#accordionPricing"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias, fugiat optio tempore recusandae aliquid
                        voluptatem similique voluptas aliquam nostrum modi
                        labore esse culpa odit repellat, cupiditate nam quia
                        ratione ad numquam, iure quidem sapiente! Nobis,
                        eveniet. Sunt, mollitia quae nihil fuga sequi
                        consequatur ratione officia perspiciatis optio ipsum
                        molestias quaerat dolorem accusantium exercitationem
                        temporibus distinctio modi quibusdam reiciendis expedita
                        minima esse. Optio, voluptatibus fuga aliquid amet quas
                        accusamus excepturi soluta iusto minima in unde
                        molestias atque quibusdam, eos qui error.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pricing-headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#pricing-collapseSeven"
                        aria-expanded="false"
                        aria-controls="pricing-collapseSeven"
                      >
                        Can I use deepline.ai for other languages?
                      </button>
                    </h2>
                    <div
                      id="pricing-collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="pricing-headingSeven"
                      data-bs-parent="#accordionPricing"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio eos repellat sed fugit ullam dolores officia
                        reprehenderit dolorum excepturi molestiae.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Features */}
          <div
            className="tab-pane fade"
            id="pills-features"
            role="tabpanel"
            aria-labelledby="pills-features-tab"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                <div className="faq-category-heading py-3">FEATURES</div>
              </div>
              <div className="col-md-8 col-sm-11 col-12 d-flex justify-content-center p-0 px-sm-0 px-4">
                <div
                  className="accordion accordion-flush w-100"
                  id="accordionFeatures"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="feature-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-collapseOne"
                        aria-expanded="false"
                        aria-controls="feature-collapseOne"
                      >
                        What templates does deepline.ai offer?
                      </button>
                    </h2>
                    <div
                      id="feature-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="feature-headingOne"
                      data-bs-parent="#accordionFeatures"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Minima, veritatis ad. Facilis aspernatur impedit
                        maxime est illum autem possimus qui.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="feature-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-collapseTwo"
                        aria-expanded="false"
                        aria-controls="feature-collapseTwo"
                      >
                        Which template works best for what I need?
                      </button>
                    </h2>
                    <div
                      id="feature-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="feature-headingTwo"
                      data-bs-parent="#accordionFeatures"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore possimus facere nostrum nobis sunt dolor impedit
                        est fugit? Reiciendis nesciunt, qui veritatis dolores
                        inventore fugiat eos odio commodi voluptatum odit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="feature-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-collapseThree"
                        aria-expanded="false"
                        aria-controls="feature-collapseThree"
                      >
                        Does deepline.ai have a plagiarism checker?
                      </button>
                    </h2>
                    <div
                      id="feature-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="feature-headingThree"
                      data-bs-parent="#accordionFeatures"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores quibusdam iste facilis sed tenetur
                        ullam molestiae aliquam accusamus, velit, nesciunt
                        impedit autem quia delectus alias hic natus odio rem
                        excepturi suscipit. Expedita ut recusandae rem
                        aspernatur numquam enim saepe ea non voluptatibus
                        mollitia doloribus, quidem veniam dicta nesciunt
                        molestiae dolor debitis in odio? Ipsam cupiditate est
                        fuga animi iste dolor impedit, commodi consectetur
                        delectus neque, hic, reiciendis perspiciatis. Ipsum,
                        accusantium.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="feature-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-collapseFour"
                        aria-expanded="false"
                        aria-controls="feature-collapseFour"
                      >
                        What is AI Chat Assistance?
                      </button>
                    </h2>
                    <div
                      id="feature-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="feature-headingFour"
                      data-bs-parent="#accordionFeatures"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aut explicabo aspernatur quod quia obcaecati autem
                        corporis facere atque praesentium sint laudantium
                        doloremque rem tenetur facilis enim suscipit odit,
                        reprehenderit dolorum minima perferendis! Voluptate
                        magni atque voluptates, sunt, nisi itaque tempore quasi
                        nobis esse eveniet eaque molestiae, blanditiis ipsum!
                        Soluta culpa ducimus iusto quibusdam atque harum optio
                        deserunt eum rerum id.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="feature-headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-collapseFive"
                        aria-expanded="false"
                        aria-controls="feature-collapseFive"
                      >
                        What integrations do you offer?
                      </button>
                    </h2>
                    <div
                      id="feature-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="feature-headingFive"
                      data-bs-parent="#accordionFeatures"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem nostrum quibusdam porro rerum voluptatibus
                        quisquam, mollitia eius at aut cupiditate suscipit eum
                        sit est magnam illo quae debitis minima perspiciatis?{" "}
                        <br />
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam mollitia quidem numquam eligendi maiores at
                        recusandae quam cumque officia excepturi.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="feature-headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-collapseSix"
                        aria-expanded="false"
                        aria-controls="feature-collapseSix"
                      >
                        Can I use deepline.ai on other platforms like Gmail,
                        Google Docs, etc.?
                      </button>
                    </h2>
                    <div
                      id="feature-collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="feature-headingSix"
                      data-bs-parent="#accordionFeatures"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias, fugiat optio tempore recusandae aliquid
                        voluptatem similique voluptas aliquam nostrum modi
                        labore esse culpa odit repellat, cupiditate nam quia
                        ratione ad numquam, iure quidem sapiente! Nobis,
                        eveniet. Sunt, mollitia quae nihil fuga sequi
                        consequatur ratione officia perspiciatis optio ipsum
                        molestias quaerat dolorem accusantium exercitationem
                        temporibus distinctio modi quibusdam reiciendis expedita
                        minima esse. Optio, voluptatibus fuga aliquid amet quas
                        accusamus excepturi soluta iusto minima in unde
                        molestias atque quibusdam, eos qui error.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="feature-headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-collapseSeven"
                        aria-expanded="false"
                        aria-controls="feature-collapseSeven"
                      >
                        Can I use deepline.ai for other languages?
                      </button>
                    </h2>
                    <div
                      id="feature-collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="feature-headingSeven"
                      data-bs-parent="#accordionFeatures"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio eos repellat sed fugit ullam dolores officia
                        reprehenderit dolorum excepturi molestiae.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Credets */}
          <div
            className="tab-pane fade"
            id="pills-payments"
            role="tabpanel"
            aria-labelledby="pills-payments-tab"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                <div className="faq-category-heading py-3">
                  PAYMENT & SUBSCRIPTIONS
                </div>
              </div>
              <div className="col-md-8 col-sm-11 col-12 d-flex justify-content-center p-0 px-sm-0 px-4">
                <div
                  className="accordion accordion-flush w-100"
                  id="accordionPayments"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="payments-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#payments-collapseOne"
                        aria-expanded="false"
                        aria-controls="payments-collapseOne"
                      >
                        What payment methods can I use to sign up for
                        deepline.ai?
                      </button>
                    </h2>
                    <div
                      id="payments-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="payments-headingOne"
                      data-bs-parent="#accordionPayments"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Minima, veritatis ad. Facilis aspernatur impedit
                        maxime est illum autem possimus qui.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="payments-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#payments-collapseTwo"
                        aria-expanded="false"
                        aria-controls="payments-collapseTwo"
                      >
                        What is deepline.ai’s refund policy?
                      </button>
                    </h2>
                    <div
                      id="payments-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="payments-headingTwo"
                      data-bs-parent="#accordionPayments"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore possimus facere nostrum nobis sunt dolor impedit
                        est fugit? Reiciendis nesciunt, qui veritatis dolores
                        inventore fugiat eos odio commodi voluptatum odit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="payments-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#payments-collapseThree"
                        aria-expanded="false"
                        aria-controls="payments-collapseThree"
                      >
                        Can I cancel my subscription?
                      </button>
                    </h2>
                    <div
                      id="payments-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="payments-headingThree"
                      data-bs-parent="#accordionPayments"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores quibusdam iste facilis sed tenetur
                        ullam molestiae aliquam accusamus, velit, nesciunt
                        impedit autem quia delectus alias hic natus odio rem
                        excepturi suscipit. Expedita ut recusandae rem
                        aspernatur numquam enim saepe ea non voluptatibus
                        mollitia doloribus, quidem veniam dicta nesciunt
                        molestiae dolor debitis in odio? Ipsam cupiditate est
                        fuga animi iste dolor impedit, commodi consectetur
                        delectus neque, hic, reiciendis perspiciatis. Ipsum,
                        accusantium.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="payments-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#payments-collapseFour"
                        aria-expanded="false"
                        aria-controls="payments-collapseFour"
                      >
                        Can I switch from monthly to annual payments?
                      </button>
                    </h2>
                    <div
                      id="payments-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="payments-headingFour"
                      data-bs-parent="#accordionPayments"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aut explicabo aspernatur quod quia obcaecati autem
                        corporis facere atque praesentium sint laudantium
                        doloremque rem tenetur facilis enim suscipit odit,
                        reprehenderit dolorum minima perferendis! Voluptate
                        magni atque voluptates, sunt, nisi itaque tempore quasi
                        nobis esse eveniet eaque molestiae, blanditiis ipsum!
                        Soluta culpa ducimus iusto quibusdam atque harum optio
                        deserunt eum rerum id.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Security */}
          <div
            className="tab-pane fade"
            id="pills-security"
            role="tabpanel"
            aria-labelledby="pills-security-tab"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                <div className="faq-category-heading py-3">SECURITY</div>
              </div>
              <div className="col-md-8 col-sm-11 col-12 d-flex justify-content-center p-0 px-sm-0 px-4">
                <div
                  className="accordion accordion-flush w-100"
                  id="accordionSecurity"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="security-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#security-collapseOne"
                        aria-expanded="false"
                        aria-controls="security-collapseOne"
                      >
                        What payment methods can I use to sign up for
                        deepline.ai?
                      </button>
                    </h2>
                    <div
                      id="security-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="security-headingOne"
                      data-bs-parent="#accordionSecurity"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Minima, veritatis ad. Facilis aspernatur impedit
                        maxime est illum autem possimus qui.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="security-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#security-collapseTwo"
                        aria-expanded="false"
                        aria-controls="security-collapseTwo"
                      >
                        What is deepline.ai’s refund policy?
                      </button>
                    </h2>
                    <div
                      id="security-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="security-headingTwo"
                      data-bs-parent="#accordionSecurity"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore possimus facere nostrum nobis sunt dolor impedit
                        est fugit? Reiciendis nesciunt, qui veritatis dolores
                        inventore fugiat eos odio commodi voluptatum odit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Global */}
          <div
            className="tab-pane fade"
            id="pills-global"
            role="tabpanel"
            aria-labelledby="pills-global-tab"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                <div className="faq-category-heading py-3">GLOBAL</div>
              </div>
              <div className="col-md-8 col-sm-11 col-12 d-flex justify-content-center p-0 px-sm-0 px-4">
                <div
                  className="accordion accordion-flush w-100"
                  id="accordionGlobal"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="global-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#global-collapseOne"
                        aria-expanded="false"
                        aria-controls="global-collapseOne"
                      >
                        What payment methods can I use to sign up for
                        deepline.ai?
                      </button>
                    </h2>
                    <div
                      id="global-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="global-headingOne"
                      data-bs-parent="#accordionGlobal"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Minima, veritatis ad. Facilis aspernatur impedit
                        maxime est illum autem possimus qui.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="global-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#global-collapseTwo"
                        aria-expanded="false"
                        aria-controls="global-collapseTwo"
                      >
                        What is deepline.ai’s refund policy?
                      </button>
                    </h2>
                    <div
                      id="global-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="global-headingTwo"
                      data-bs-parent="#accordionGlobal"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore possimus facere nostrum nobis sunt dolor impedit
                        est fugit? Reiciendis nesciunt, qui veritatis dolores
                        inventore fugiat eos odio commodi voluptatum odit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Porting  */}
          <div
            className="tab-pane fade"
            id="pills-porting"
            role="tabpanel"
            aria-labelledby="pills-porting-tab"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                <div className="faq-category-heading py-3">PORTING</div>
              </div>
              <div className="col-md-8 col-sm-11 col-12 d-flex justify-content-center p-0 px-sm-0 px-4">
                <div
                  className="accordion accordion-flush w-100"
                  id="accordionPorting"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="porting-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#porting-collapseOne"
                        aria-expanded="false"
                        aria-controls="porting-collapseOne"
                      >
                        What payment methods can I use to sign up for
                        deepline.ai?
                      </button>
                    </h2>
                    <div
                      id="porting-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="porting-headingOne"
                      data-bs-parent="#accordionPorting"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Minima, veritatis ad. Facilis aspernatur impedit
                        maxime est illum autem possimus qui.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="porting-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#porting-collapseTwo"
                        aria-expanded="false"
                        aria-controls="porting-collapseTwo"
                      >
                        What is deepline.ai’s refund policy?
                      </button>
                    </h2>
                    <div
                      id="porting-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="porting-headingTwo"
                      data-bs-parent="#accordionPorting"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore possimus facere nostrum nobis sunt dolor impedit
                        est fugit? Reiciendis nesciunt, qui veritatis dolores
                        inventore fugiat eos odio commodi voluptatum odit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer /> 
    </>
  );
}
