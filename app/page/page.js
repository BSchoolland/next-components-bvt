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
        <button onClick={() => addToast("Success!", {style: "success", duration: 3000})}>Add good Toast</button>

        <br/>
        <button onClick={() => addToast("ERROR!", {style: "error", duration: 5000, transitionDuration: 250})}>Add bad Toast</button>

        <Toast/>
    </>
  );
};

export default Page;
