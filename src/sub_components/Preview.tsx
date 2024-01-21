import { useLocation, Link} from 'react-router-dom';
import { useEffect } from 'react';
// import { Pannellum } from "pannellum-react";

function bottomToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}


 function Preview() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  
  const location = useLocation();
  const { from } = location.state;
  console.log(from);


  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">

            {/* <div className="w-full lg:w-1/3 lg:h-auto h-96 sm:h-64 object-cover object-center rounded">

            <Pannellum
              // width="50%"
              // height="500px"
              image={from.imageUrl}
              pitch={10}
              yaw={180}
              hfov={110}
              autoLoad
              onLoad={() => {
                console.log("panorama loaded");
              }}
              />
              </div> */}


            <img
              alt="ecommerce"
              src={from.imageUrl}
              className="w-full lg:w-1/3 lg:h-auto h-96 sm:h-64 object-cover object-center rounded"
            />     

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{from.brand}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Elevate Your Style </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3" >4 Star</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
               
                </span>
              </div>
              <p className="leading-relaxed">{from.desc.name}</p>
              <p className="leading-relaxed">Fabric : {from.desc.fabric}</p>
              <p className="leading-relaxed">Sleeve : {from.desc.sleeve_length}</p>
              <p className="leading-relaxed">Net Quantity : {from.desc.net_quantity}</p>
              <p className="leading-relaxed">Size : {from.desc.size.join(', ')}</p>
            
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
</div>
              <span className="title-font font-medium text-2xl text-gray-900">&#x20B9; {from.price}</span>

              <Link to='/order' state={{ from: from}} >
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={bottomToTop}>Order</button>
                </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          <Link to='/order'>
              <div className="group relative" onClick={bottomToTop}>
                <div className="w-full flex justify-center">
                
                  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-80 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <img
                      src="https://i.postimg.cc/TwKVhnsX/71d-FMe8x5g-L-AC-UY1100.jpg"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className=" px-8 font-extrabold  inset-0" />
                        Oversize
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 px-16 ">Blue</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 px-16">&#x20B9;500</p>
                </div>
              </div>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
