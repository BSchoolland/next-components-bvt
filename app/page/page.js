'use client';
import React from 'react';
import { useToasts } from '@/components/visual/toast';
import { Toast } from '@/components/visual/toast';
const Page = () => {
  const { addToast } = useToasts();
  return (
    <>
        <div>
            <h1>Hello, Next.js!</h1>
        </div>
        <button onClick={() => addToast("Hello, Toast!", {type: "error", duration: 3000})}>Add Toast</button>
        <Toast/>
    </>
  );
};

export default Page;
