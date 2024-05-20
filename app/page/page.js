'use client';
import React from 'react';
import { useToasts, Toast } from '@/components/toast';

const Page = () => {
  const { addToast } = useToasts();
  return (
    <>
        <button onClick={() => addToast("Success!", {duration: 3000})}>Click to add a toast</button>
        <Toast/>
    </>
  );
};

export default Page;
