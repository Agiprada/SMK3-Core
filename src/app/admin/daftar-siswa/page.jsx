import React from 'react';
import Sidebar from '../shared/sidebar';

export default function DaftarSiswa() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 flex-1">
        <h1 className="text-3xl font-bold mb-6">Data Siswa</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Card 1</h2>
            <p>Some content for card 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Card 2</h2>
            <p>Some content for card 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Card 3</h2>
            <p>Some content for card 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
}