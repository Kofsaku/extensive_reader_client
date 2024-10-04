'use client'
import React from 'react';
import withSidebar from '@/components/withSidebar/page'; // Import the HOC
import PaymentSection from '@/components/payments/PaymentSection'; 

// Wrap MainSection with the HOC
const MainSectionWithSidebar = withSidebar(PaymentSection);

const Payment = () => {
  return <MainSectionWithSidebar />;
};

export default Payment;
