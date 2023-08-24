import { Link } from 'react-router-dom';
import { useEffect } from 'react';
interface Product {
    id: number;
    name: string;
    color: string;
    price: number;
    imageUrl: string;
}

interface CollectionProps {
    products: Product[];
}
function bottomToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}
function Collection(props: CollectionProps) {
    const { products } = props;
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div className="bg-white">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <Link to={'/preview'} state={{ from: product }} >

                        <div key={product.id} className="group relative" onClick={bottomToTop}>
                            <div className="w-full flex justify-center">
                                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-80 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className=" px-8 font-extrabold  inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500 px-16 ">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900 px-16">&#x20B9;{product.price}</p>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    );
}
export default Collection;