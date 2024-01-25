import React from 'react';
import Logo from '../../../public/logo.svg';
import Image from 'next/image';
import { Button } from '../Button';

const Header = () => {
  return (
    <header className="bg-white rounded-lg m-6">
      <nav className="flex justify-between p-4">
        <Image src={Logo} alt="Logo" width={146} height={32} />
        <div className="flex"></div>
        <div className="max-w-28 w-full">
          <Button body="Preview" variant="outlined" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
