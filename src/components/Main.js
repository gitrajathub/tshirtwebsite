import React from 'react';
import img1 from '../images/001.png'
import img2 from '../images/002.png'
import img3 from '../images/003.png'
import img4 from '../images/004.png'
import img5 from '../images/005.png'
import img6 from '../images/006.png'
import img7 from '../images/007.png'
import img8 from '../images/008.png'
import img9 from '../images/009.png'


const Products = () => {
  const products = [
    {
      id: 1,
      name: "I just can't",
      description: 'Oversized Tshirt | Black',
      price: 'Rs. 645.00',
      image: img1,
      code: '001',
    },
    {
      id: 2,
      name: "No Smoking, unless it's good shit",
      description: 'A stylish v-neck t-shirt for casual wear.',
      price: 'Rs. 645.00',
      image: img2,
      code: '002',
    },
    {
      id: 3,
      name: 'Do not give me a cigarette',
      description: 'A graphic t-shirt with a unique design.',
      price: 'Rs. 645.00',
      image: img3,
      code: '003',
    },
    {
        id: 4,
        name: 'Living just in case',
        description: 'A graphic t-shirt with a unique design.',
        price: 'Rs. 645.00',
        image: img4,
        code: '004',
      },
      {
        id: 5,
        name: 'Everything i do is illegal',
        description: 'A graphic t-shirt with a unique design.',
        price: 'Rs. 645.00',
        image: img5,
        code: '005',
      },
      {
        id: 6,
        name: 'I may be cringe',
        description: 'A graphic t-shirt with a unique design.',
        price: 'Rs. 645.00',
        image: img6,
        code: '006',
      },
      {
        id: 7,
        name: 'My last year being broke',
        description: 'A graphic t-shirt with a unique design.',
        price: 'Rs. 645.00',
        image: img7,
        code: '007',
      },
      {
        id: 8,
        name: 'Not in my lane',
        description: 'A graphic t-shirt with a unique design.',
        price: 'Rs. 645.00',
        image: img8,
        code: '008',
      },
      {
        id: 9,
        name: 'Insecurity (Back)',
        description: 'A graphic t-shirt with a unique design.',
        price: 'Rs. 645.00',
        image: img9,
        code: '009',
      },
      
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-600 mb-4"><span className='font-semibold'>Tshirt Code:</span> {product.code}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-800">{product.price}</span>
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add to Cart
                </button> */}
              </div>
              <p className='text-green-700'>Free Delivery</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
