import React from 'react';
import Preview from '../../../public/sidebar-preview.svg';
import Image from 'next/image';

export const Sidebar = () => {
  return (
    <aside className="relative basis-1/3 bg-white ml-6 rounded-lg">
      <Image
        className="max-h-phone-preview my-auto"
        src={Preview}
        alt="Mobile with social links"
        layout="fill"
      />
    </aside>
  );
};
