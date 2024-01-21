import { useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

function bottomToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}

function Order() {
 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        size: "",
        quantity: "",
        mobile: "",
        address: "",
    });
    const [validationErrors, setValidationErrors] = useState({
        name: "",
        email: "",
        size: "",
        quantity: "",
        mobile: "",
        address: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setValidationErrors({ ...validationErrors, [name]: "" });
    };

    const validateForm = () => {
        const isNameValid = /^[A-Za-z\s]+$/.test(formData.name);
        const isEmailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(formData.email);
        const isMobileValid = /^\d{10}$/.test(formData.mobile);

        const errors = {
            name: isNameValid ? "" : "Please enter a valid name",
            email: isEmailValid ? "" : "Please enter a valid email address",
            size: formData.size.trim() ? "" : "Please select a size",
            quantity: /^[1-9]\d*$/.test(formData.quantity) ? "" : "Please enter a valid quantity",
            mobile: isMobileValid ? "" : "Please enter a valid 10-digit mobile number",
            address: formData.address.trim() ? "" : "Please enter your address",
        };

        setValidationErrors(errors);

        // Check if there are no errors
        return Object.values(errors).every(error => error === '');
    };

    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    console.log(state);
    const formRef = useRef<HTMLFormElement | null>(null);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyuiQv5zGlLn_5b4UMAO9ewL80I3bwz5Qk_E7tMBiH4ViHhZoYx1bR-mdhHNMMFWjqogA/exec";
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            setLoading(true);

            if (formRef.current) {
                fetch(scriptUrl, {
                    method: 'POST',
                    body: new FormData(formRef.current),
                }).then(_res => {
                    Swal.fire({
                      title: "Order Received!",
                      text: "You'll get your order soon",
                      icon: "success",
                      // timer:3000,
                      allowOutsideClick:false,
                      showCancelButton: true,
                      confirmButtonText: "Continue Shopping",
                      cancelButtonText: "Cancel",
                        
                    }).then((result)=>{
                      if(result.isConfirmed){
                        navigate('/gallery')
                        setTimeout(() => bottomToTop(), 300); // Delay the smooth scrolling
                      }else if(result.dismiss === Swal.DismissReason.cancel){
                        navigate('/')
                        setTimeout(() => bottomToTop(), 300); // Delay the smooth scrolling
                      }
                    })

                    // setTimeout(() => {
                    //     // Navigate to another page after the timer expires
                    //     navigate(-2);
                    // }, 3000);

                    // setTimeout(function () { window.location.reload(); }, 5000); 
                    setLoading(false);
                }).catch(err => console.log(err));
            }
        }
    };

    return (
        <>
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-semibold mb-4"> Fill the form To Place Your Order !</h1>
                <form className="bg-white p-6 shadow-md rounded-lg" ref={formRef} name="google-sheet">
                    <input value={state && state.from.id} id="product_id" name="product_id" className="h-0" required />

                    <input value={state && state.from.name} id="category" name="category" className="h-0" required />

                    <input value={state && state.from.price} id="price" name="price" className="h-0" required />

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${validationErrors.name && "border-red-500"
                                }`}
                            placeholder="Name"
                        />
                        {validationErrors.name && (
                            <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${validationErrors.email && "border-red-500"
                                }`}
                            placeholder="Email"
                        />
                        {validationErrors.email && (
                            <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
                        <select
                            id="size"
                            name="size"
                            value={formData.size}
                            onChange={handleInputChange}
                            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${validationErrors.size && "border-red-500"
                                }`}
                        >
                            <option value="">Select Size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xl">XL</option>
                        </select>
                        {validationErrors.size && (
                            <p className="text-red-500 text-xs mt-1">{validationErrors.size}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min={1}
                            value={formData.quantity}
                            onChange={handleInputChange}
                            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${validationErrors.quantity && "border-red-500"
                                }`}
                            placeholder="Quantity"
                        />
                        {validationErrors.quantity && (
                            <p className="text-red-500 text-xs mt-1">{validationErrors.quantity}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${validationErrors.mobile && "border-red-500"
                                }`}
                            placeholder="Mobile"
                        />
                        {validationErrors.mobile && (
                            <p className="text-red-500 text-xs mt-1">{validationErrors.mobile}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${validationErrors.address && "border-red-500"
                                }`}
                            placeholder="Address"
                        />
                        {validationErrors.address && (
                            <p className="text-red-500 text-xs mt-1">{validationErrors.address}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <input
                            type="submit"
                            onClick={handleSubmit}
                            value={loading ? "Receiving Order..." : "Place Order"}
                            className="text-white cursor-pointer bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Order;
