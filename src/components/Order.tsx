import { useState, useRef } from "react";
import { useLocation,useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";



function Order() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
console.log(state)
    const formRef = useRef<HTMLFormElement | null>(null);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyuiQv5zGlLn_5b4UMAO9ewL80I3bwz5Qk_E7tMBiH4ViHhZoYx1bR-mdhHNMMFWjqogA/exec";
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);

        if (formRef.current) {
            fetch(scriptUrl, {
                method: 'POST',
                body: new FormData(formRef.current),
            }).then(_res => {
              Swal.fire({
                title: "Order Received!",
                text: "You'll get your order soon ",
                icon: "success",
                timer: 3000,
                showConfirmButton: false
              });

              setTimeout(() => {
                // Navigate to another page after the timer expires
                navigate(-2); 
              }, 3000);

              // setTimeout(function () { window.location.reload(); }, 5000); 
                    setLoading(false);
                }).catch(err => console.log(err));
        }
    };

  return (
 <>
       <div className="container mx-auto py-8">
              <h1 className="text-2xl font-semibold mb-4"> T-shirt Order Form</h1>
          <form className="bg-white p-6 shadow-md rounded-lg" ref={formRef} name="google-sheet">
          <label htmlFor="product_id" className="block text-sm font-medium text-gray-700"></label>
          <input value={state && state.from.id} id="product_id" name="product_id" className="h-0" required/>
            
          <label htmlFor="cateogry" className="block text-sm font-medium text-gray-700"></label>
          <input value={state && state.from.name} id="cateogry" name="cateogry" className="h-0" required/>
            
            <label htmlFor="price" className="block text-sm font-medium text-gray-700"></label>
            <input value={state&& state.from.price} id="price" name="price" className="h-0" required/>

    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" required/>
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" required />
    </div>
    <div className="mb-4">
      <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
      <select id="size" name="size" className="mt-1 p-2 w-full border rounded-md" required>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="xl">XL</option>
      </select>
    </div>
    <div className="mb-4">
      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                      <input type="number" id="quantity" name="quantity" min={1} className="mt-1 p-2 w-full border rounded-md" required />
    </div>
                  <div className="mb-4">
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
                      <input type="number" id="mobile" name="mobile" className="mt-1 p-2 w-full border rounded-md" />
                  </div>
                  <div className="mb-4">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                      <textarea  id="address" name="address" className="mt-1 p-2 w-full border rounded-md" required />
                  </div>
     
    <div className="mb-4">
            <input type="submit" onClick={handleSubmit} value={loading ? "Receiving Order..." : "Place Order"} className=" text-white cursor-pointer bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" />  
    </div>
  </form>
</div>


 </>
  )
}

export default Order
