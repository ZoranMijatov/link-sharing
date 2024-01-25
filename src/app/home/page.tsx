import { Button } from '@/components/Button';
import Header from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import Image from 'next/image';
import React from 'react';
import GetStarted from '../../../public/get-started.svg';

const Home = () => {
  return (
    <main>
      <Header />
      <div className="flex gap-6 mr-6 mb-6">
        <Sidebar />
        <article className="rounded-lg bg-white basis-2/3">
          <div className="px-10 pt-10">
            <h1 className="font-bold text-3xl text-clr-black">
              Customize your links
            </h1>
            <p className="mt-2 mb-10 text-clr-darkgray">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <Button variant="outlined" body="+ Add new link" />
            <div className="text-center bg-clr-off-white mt-6 mb-10">
              <div className="pt-16" />
              <div className="relative w-64 h-40 mx-auto">
                <Image
                  src={GetStarted}
                  alt="Hand pointing on a tablet/mobile screen"
                  layout="fill"
                />
              </div>
              <h2 className="font-bold text-3xl text-clr-black mt-10 mb-6">
                Let’s get you started
              </h2>
              <p className="text-clr-darkgray w-2/4 mx-auto pb-16">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>
          <hr className="block h-[1px]" />
          <div className="max-w-24 w-full ml-auto py-6 mr-10">
            <Button variant="primary" body="Save" disabled />
          </div>
        </article>
      </div>
    </main>
  );
};

export default Home;
