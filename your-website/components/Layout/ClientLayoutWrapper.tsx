'use client';

import React from 'react';
import MainNav from '@/components/Navigation/MainNav';
import PageTransition from '@/components/Animation/PageTransition';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNav />
      <PageTransition>
        <main className="flex-grow pt-16">{children}</main>
      </PageTransition>
    </>
  );
}