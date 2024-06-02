"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const Modal = ({ openModal, setOpenModal, products }) => {
  const [index, setIndex] = useState(() => products.indexOf(openModal));


  useEffect(() => {
    setIndex(products.indexOf(openModal));
  }, [openModal, products]);

  const left = () => {
    setIndex(prev => {
      const newIndex = (prev > 0) ? prev - 1 : products.length - 1;
      return newIndex;
    });
  };

  const right = () => {
    setIndex(prev => {
      const newIndex = (prev < products.length - 1) ? prev + 1 : 0;
      return newIndex;
    });
  };

  const currentProduct = products[index];
  console.log(currentProduct?.description)

  return (
    <>
      {openModal && currentProduct ? (
        <div className='fixed top-0 left-0 h-full w-full flex justify-center items-center z-50'>
          <div className='p-2 sm:p-6 rounded-sm relative bg-white flex flex-col shadow-2xl'>
            <button onClick={() => setOpenModal(null)} className='self-end'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className='h-[80vh] w-[85vw] flex sm:gap-4 justify-center items-center'>
                <button onClick={left} className='self-center hidden sm:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10 sm:size-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div className='max-h-[80vh] overflow-y-auto'>
                  <div className='flex flex-col lg:flex-row gap-4 justify-center items-center max-h-full'>
                    <div className={`w-full ${currentProduct.id.includes('dog') ? 'lg:w-[50vw]' : 'lg:w-[30vw]'} flex max-h-full overflow-hidden p-6`} >
                          <Image 
                              src={currentProduct.image} 
                              alt={currentProduct.title} 
                              className='w-full max-h-full my-auto mx-auto shadow-lg' 
                              objectFit='contain'
                              // width={500}
                              // height={500}
                              // layout="fill"
                              priority
                          />
                    </div>
                    <div className={`flex w-full ${currentProduct.id.includes('dog') ? 'lg:w-[20vw]' : 'lg:w-[40vw]'} flex-col items-center justify-center text-center`}>
                        <h1 className='text-2xl sm:text-3xl font-semibold mb-4'>{currentProduct.title}</h1>
                        <div className='text-md sm:text-md mb-3'>{currentProduct.description.split(/\n/g).map((s, idx) => (
                            <p key={`${currentProduct.title}-${idx}`}>{s}</p>
                        ))}</div>
                    </div>
                  </div>
                </div>
                <button onClick={right} className='self-center hidden sm:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10 sm:size-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;