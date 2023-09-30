'use client';

import { motion } from 'framer-motion';
import React from 'react';
type Props = {
  children?: React.ReactNode;
};

export default function KrausNavLayout(props: Props) {
  const { children } = props;

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      className="grid w-full items-center justify-items-center font-inter"
    >
      <main className="mb-8 mt-8 grid items-center justify-items-center rounded-2xl p-8 leading-relaxed max-xl:mx-2 max-lg:mb-2 max-lg:mt-2 max-sm:mb-20 xl:w-10/12 xl:px-2 2xl:w-1/2">
        {children}
      </main>
    </motion.div>
  );
}
