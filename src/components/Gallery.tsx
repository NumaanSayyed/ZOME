import  { useState, useEffect } from 'react';
import Gal from './Gallery.json'
function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('Gallery.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="text-gray-600 body-font" >
      <div className="container  px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
      {Gal.map(item => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.img} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.cat}</h3>
                  <p className="mt-1">{item.price}</p>
                </div>
              </div>
      ))}
          </div>
            </div>
        </section>
  );
}

export default Gallery;
