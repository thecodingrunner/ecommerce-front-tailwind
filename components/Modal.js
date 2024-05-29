"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import PreloadSteveImages from './PreloadImages';

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

  return (
    <>
      {openModal ? (
        <div className='fixed top-0 left-0 h-full w-full flex justify-center items-center z-100'>
          <div className='p-6 rounded-sm relative bg-white flex flex-col shadow-2xl'>
            <button onClick={() => setOpenModal(null)} className='self-end'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className='min-h-[80vh] w-[80vw] flex gap-4 justify-center'>
                <button onClick={left} className='self-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div className={`w-[30vw] ${currentProduct?.id.includes('dog') ? 'w-[60vw]' : ''}`} >
                    <Image 
                        src={currentProduct?.image} 
                        alt={currentProduct?.title} 
                        // width={500} 
                        // height={500} 
                        className='object-contain h-full w-full shadow-xl mr-10' 
                        priority
                    />
                </div>
                <div className='flex w-[40vw] flex-col items-center justify-center text-center'>
                    <h1 className='text-3xl font-semibold mb-4'>{currentProduct?.title}</h1>
                    <p className='text-md'>{currentProduct?.description?.split(/\n/g).map(s => (
                        <p key={currentProduct.title}>{s}</p>
                    ))}</p>
                </div>
                <button onClick={right} className='self-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-14">
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