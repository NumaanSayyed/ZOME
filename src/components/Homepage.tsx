import { Carousel } from "@material-tailwind/react";

export function Homepage() {
  const carouselImages = [
    "https://i.postimg.cc/yYjMpwwc/Screenshot-2023-08-21-225311.png",
    "https://i.postimg.cc/901Nnzc3/Screenshot-2023-08-22-151956.png",
    "https://i.postimg.cc/Ssdry53C/Screenshot-2023-08-22-152107.png",
  ];
  const faq = [
   
    {
      "question": "Are t-shirts available in different sizes?",
      "answer": "  Absolutely! Our t-shirts come in a range of sizes, from small to extra-large. Check our Size Guide to find the perfect fit for you."
    },
    {
      "question": "How can I get in touch with customer support?",
      "answer": " For any questions or assistance, you can reach out to our customer support team via email at xyzome03@gmail.com or through our Contact Us page."
    },
    {
      "question": "Do we offer bulk discounts for larger orders?",
      "answer": " Yes, we offer bulk discounts for larger orders. If you're interested in placing a bulk order, please contact our customer support for more information."
    },
    {
      "question": "How long will it take to receive my order?",
      "answer": "Delivery times vary based on your location. Generally, you can expect your t-shirts to be delivered within 3-4 business days. "
    },
    {
      "question": " Are there any discounts for customers?",
      "answer": " Yes, we offer a 15% special discount on purchasing more than 5 Tees "
    },

  ];

  return (
    <>
      {/* Image Carousel  */}
      <Carousel
        autoplay={true}
        loop={true}
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        placeholder={<div>Your placeholder content here</div>} 
      >
        {carouselImages.map((imageUrl, index) => (
          <div key={index} className="h-[200px] md:h-[500px] w-full">
            <img
              src={imageUrl}
              alt={`image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Carousel>


      {/* GALLERY COLLECTION  */}
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mt-4 text-gray-900 ">OUR COLLECTION</h1>
        </div>
      </div>
      <div className="container mx-auto  cursor-pointer px-5 lg:px-32 ">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
            </div>
          </div>
        </div>
      </div>

      {/* Statistic  */}
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center md:text-left">
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
            <div className="flex flex-wrap items-center">
              <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img src="https://i.postimg.cc/zDCyYFf5/organic-flat-feedback-concept-illustrated-23-2148951369.jpg" alt="Trendy Pants and Shoes" className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-6 pb-2 text-3xl font-bold">
                    Affordable Cloths
                  </h2>
                  <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                    Our satisfied services we provide to our customers,place your order by directly call us through call to action button.
                  </p>
                  <div className="mb-6 flex flex-wrap">
                    
                    <div className="mb-4 w-full md:w-4/12">
                      <p className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-80">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Cheapest Price
                      </p>
                    </div>
                    <div className="mb-4 w-full md:w-4/12">
                      <p className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-80">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Variety
                      </p>
                    </div>
                    <div className="mb-4 w-full md:w-4/12">
                      <p className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-80">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Satisfaction
                      </p>
                    </div>
                    <div className="mb-4 w-full md:w-4/12">
                      <p className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-80">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Quality
                      </p>
                    </div>
                    <div className="mb-4 w-full md:w-4/12">
                      <p className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-80">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Reliable Delivery
                      </p>
                    </div>
                  </div>
                  <a href="tel:8657655887"
                    className="text-black bg-gradient-to-r from-white to-white hover:from-black hover:to-black border hover:border-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-black/50 dark:shadow-lg dark:shadow-gray-800-800/80 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                  >
                    Call To Action
                  </a>


                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SERVICE  */}
      <div className="container px-5 pb-20 mx-auto  ">
        <div className="text-center mb-20">

          <h1 className="sm:text-3xl text-2xl font-bold title-font text-black  mb-4">Trusted Customer delivered
          </h1>

          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-gray -500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white   mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" /> </svg>

              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-black font-bold text-lg title-font mb-3">4.8 rating</h2>
              <p className="leading-relaxed text-base">Cherished by Our Loyal, Trusted Customers.</p>

            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white   mb-5 flex-shrink-0">
                <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <style type="text/css" dangerouslySetInnerHTML={{ __html: " .st0{fill:#000000;} " }} /> <g> <path className="st0" d="M311.069,130.515c-0.963-5.641-5.851-9.768-11.578-9.768H35.43c-7.61,0-13.772,6.169-13.772,13.765 c0,7.61,6.162,13.772,13.772,13.772h64.263c7.61,0,13.772,6.17,13.772,13.773c0,7.603-6.162,13.772-13.772,13.772H13.772 C6.169,175.829,0,181.998,0,189.601c0,7.603,6.169,13.764,13.772,13.764h117.114c6.72,0,12.172,5.46,12.172,12.18 c0,6.72-5.452,12.172-12.172,12.172H68.665c-7.61,0-13.772,6.17-13.772,13.773c0,7.602,6.162,13.772,13.772,13.772h45.857 c6.726,0,12.179,5.452,12.179,12.172c0,6.719-5.453,12.172-12.179,12.172H51.215c-7.61,0-13.772,6.169-13.772,13.772 c0,7.603,6.162,13.772,13.772,13.772h87.014l5.488,31.042h31.52c-1.854,4.504-2.911,9.421-2.911,14.598 c0,21.245,17.218,38.464,38.464,38.464c21.237,0,38.456-17.219,38.456-38.464c0-5.177-1.057-10.094-2.911-14.598h100.04 L311.069,130.515z M227.342,352.789c0,9.146-7.407,16.553-16.553,16.553c-9.152,0-16.56-7.407-16.56-16.553 c0-6.364,3.627-11.824,8.892-14.598h15.329C223.714,340.965,227.342,346.424,227.342,352.789z" /> <path className="st0" d="M511.598,314.072l-15.799-77.941l-57.689-88.759H333.074l32.534,190.819h38.42 c-1.846,4.504-2.904,9.421-2.904,14.598c0,21.245,17.219,38.464,38.456,38.464c21.246,0,38.464-17.219,38.464-38.464 c0-5.177-1.057-10.094-2.91-14.598h16.741c6.039,0,11.759-2.708,15.582-7.386C511.273,326.136,512.8,319.988,511.598,314.072z M392.529,182.882h26.314l34.162,52.547h-51.512L392.529,182.882z M456.14,352.789c0,9.146-7.407,16.553-16.56,16.553 c-9.138,0-16.552-7.407-16.552-16.553c0-6.364,3.635-11.824,8.892-14.598h15.329C452.513,340.965,456.14,346.424,456.14,352.789z" /> </g> </g></svg>

              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-black font-bold text-lg title-font mb-3">Pay After Delivery</h2>
              <p className="leading-relaxed text-base">For Long Distance Delivery Charges Applies</p>

            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white   mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16"> <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" /> </svg>

              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-black font-bold text-lg title-font mb-3">50+ rupee</h2>
              <p className="leading-relaxed text-base">For Long Distance Delivery Charges Applies</p>

            </div>
          </div>
          

        </div>

      </div>

      {/* CUSTOMER VIEW  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-20 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">OUR SATISFIED CUSTOMER </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Elevate Your Wardrobe with Our Exclusive Collection of Trendy Men's T-shirts. Unleash Your Unique Style, Boost Your Confidence..</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src="https://i.postimg.cc/GtgP6srZ/Screenshot-2023-05-02-204001.png" className="rounded-full" alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Hamza</h2>
                <p className="leading-relaxed text-base">I am thoroughly impressed with this website! The quality of the Men's T-shirts exceeded my expectations – each piece reflects true craftsmanship. The dedication to providing top-notch service is evident from start to finish. </p>

              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Adan </h2>
                <p className="leading-relaxed text-base">Five stars for impeccable product quality! The Men's T-shirts I ordered from this website are a true testament to excellence. The attention to detail, the comfort, and the durability have left me thoroughly impressed. I appreciate the commitment to delivering.</p>

              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Lavish</h2>
                <p className="leading-relaxed text-base">Exceeding expectations on quality! The Men's T-shirts I received from this site are a cut above the rest. The fabric, the fit, and the overall craftsmanship speak volumes about the brand's commitment to excellence.</p>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* FAQ  */}
      <div className="w-full px-8 mt-20 space-y-2  lg:max-w-md">
        {faq.map(item => (
          <details className="p-4 rounded-lg">
            <summary className="font-semibold text-lg cursor-pointer">{item.question}</summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                {item.answer}             </p>
            </div>
          </details>
        ))}




      </div>
     
    
    </>

  );
}

export default Homepage;
