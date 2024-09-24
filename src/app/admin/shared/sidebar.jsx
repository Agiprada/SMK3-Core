import React from 'react';
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white fixed">
            <h2 className="text-center text-2xl font-bold my-6">Admin Panel</h2>
            <ul className="space-y-4">
                <li className="text-left ml-10">
                    <Link href="/admin/dashboard" className="text-lg hover:underline">Dashboard</Link>
                </li>
                <li className="text-left ml-10">
                    <Link href="/admin/pendaftar" className="text-lg hover:underline">Data Pendaftars</Link>
                </li>
                <li className="text-left ml-10">
                    <Link href="/admin/mitra-magang" className="text-lg hover:underline">Mitra Magang</Link>
                </li>
                <li className="text-left ml-10">
                    <Link href="/reports" className="text-lg hover:underline">Daftar Siswa</Link>
                </li>
                <li className="text-left ml-10">
                    <Link href="/logout" className="text-lg hover:underline">Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;