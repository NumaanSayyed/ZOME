import { Link } from "react-router-dom";
import { useEffect } from "react";
function bottomToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}
function Footer() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <footer className="relative bg-blueGray-200 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Find us on any of these platforms,our team will respond you as soon as possible.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                             
                                <a href="https://www.facebook.com/xyzome03?mibextid=ZbWKwL">
                                    <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <i className="fab fa-facebook-square"></i></button></a>

                                <a href="https://instagram.com/x_y_zome_03">
                                    <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <i className="fab fa-instagram"></i></button></a>

                                <a href="https://youtube.com/@X_Y_ZOME">
                                    <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <i className="fab fa-youtube"></i></button> </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={'/'} onClick={bottomToTop}>Home</Link>
                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={'/gallery'} onClick={bottomToTop}>Gallery</Link>
                                        </li>
                                       
                                     
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                    
                                        <li>
                                            <Link to='/terms' className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" onClick={bottomToTop}>Terms & Condition</Link>
                                        </li>
                                        <li>
                                            <Link to='/PrivacyPolicy' className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" onClick={bottomToTop}>Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={'/contact'}
                                            onClick={bottomToTop}>Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2023 XYZOME</span>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
