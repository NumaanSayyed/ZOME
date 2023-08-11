import { Carousel } from "@material-tailwind/react";

export function Homepage() {
  const carouselImages = [
    "https://i.postimg.cc/zBKj0jK0/Whats-App-Image-2022-11-07-at-4-34-19-PM.jpg",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
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
      >
        {carouselImages.map((imageUrl, index) => (
          <div key={index} className="h-[200px] md:h-[500px] w-full"> {/* Adjusted height for mobile */}
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
                    Cheapest Cloths
                  </h2>
                  <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                    Our satisfied services we provide to our customers,place your order by directly call us through call to action button.
                  </p>
                  <div className="mb-6 flex flex-wrap">
                    <div className="mb-4 w-full md:w-4/12">
                      <p className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-80">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Support 24/7
                      </p>
                    </div>
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


      {/* CUSTOMER VIEW  */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
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
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Billu Bhaynkar Bhaye 👺</h2>
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
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Mushtaq </h2>
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
</>
    
  );
}

export default Homepage;
