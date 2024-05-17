'use client';
import React from 'react';
import { useToasts } from '@/components/visual/toast/toastProvider';
import { Toast } from '@/components/visual/toast/index';
const Page = () => {
  const { addToast } = useToasts();
  return (
    <>
        <div>
            <h1>Hello, Next.js!</h1>
        </div>
        <button onClick={() => addToast("Hello, Toast!")}>Add Toast</button>
        <Toast />
    </>
  );
};

export default Page;
