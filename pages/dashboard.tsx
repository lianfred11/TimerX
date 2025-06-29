// src/Dashboard.jsx
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  FaShieldAlt,
  FaTachometerAlt,
  FaList,
  FaHistory,
  FaSignOutAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaSearch
} from 'react-icons/fa';

function Dashboard() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/");
    }
  });

  // Placeholder data - no real logic
  const [extensionStats, setExtensionStats] = useState<{
    total: number;
    secure: number;
    warning: number;
    critical: number;
  }>({ total: 0, secure: 0, warning: 0, critical: 0 });

  const dummyExtensionsStats = {
    total: 1,
    secure: 1,
    warning: 0,
    critical: 0
  };

  const [recentScans, setRecentScans] = useState<{
    id: number;
    date: string;
    result: string;
    extensions: number;
  }[]>([]);

  const dummyRecentScans: {
    id: number;
    date: string;
    result: string;
    extensions: number;
  }[] = [];

  const [extensions, setExtensions] = useState<{
    id: string;
    name: string;
    status: string;
    imageUrl: string;
    risk: string;
  }[]>([]);

  const dummyExtensions = [
    { id: "jfpaflmpckblieefkegjncjoceapakdf", name: 'obsidian-livesync-webclip', status: 'secure', imageUrl: 'https://lh3.googleusercontent.com/nsm3G9RtY2s94FU4x4eFlDCHs-sbSst1TxGDXk0lngbzHF-AKVwDauZ2YdIIAvw7cyFZNqxNWCxxQJDnYQF6aHdmKQ=s60', risk: 'Low' },
  ];

  useEffect(() => {
    if (session?.user?.email === "clientgroverdc@gmail.com") {
      setExtensionStats(dummyExtensionsStats);
      setRecentScans(dummyRecentScans);
      setExtensions(dummyExtensions);
    }
  }, [session]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#1F2937] text-white">
        <div className="p-4 flex items-center space-x-2 border-b border-gray-700">
          <FaShieldAlt className="text-[#00C896] text-xl" />
          <span className="font-bold text-lg">Extension Timer</span>
        </div>

        <div className="px-4 py-6">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2 pl-2">Main</p>
              <ul className="space-y-1">
                <li>
                  <Link href="/dashboard" className="flex items-center px-2 py-2 rounded-md bg-[#3B5BA9] bg-opacity-30 text-white">
                    <FaTachometerAlt className="mr-3 text-[#00C896]" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/my-extensions" className="flex items-center px-2 py-2 rounded-md text-gray-300 hover:bg-[#3B5BA9] hover:bg-opacity-30 hover:text-white transition">
                    <FaList className="mr-3 text-gray-400" />
                    My Extensions
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/scan-history" className="flex items-center px-2 py-2 rounded-md text-gray-300 hover:bg-[#3B5BA9] hover:bg-opacity-30 hover:text-white transition">
                    <FaHistory className="mr-3 text-gray-400" />
                    Scan History
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2 pl-2">Account</p>
              <ul className="space-y-1">
                <li>
                  <button onClick={() => signOut()} className="flex items-center px-2 py-2 rounded-md text-gray-300 hover:bg-[#3B5BA9] hover:bg-opacity-30 hover:text-white transition">
                    <FaSignOutAlt className="mr-3 text-gray-400" />
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-[#1F2937]">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search extensions..."
                  className="pl-9 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#3B5BA9] w-64"
                />
                <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
              </div>
              <div className="flex items-center space-x-2">
                <Image alt="user" src={session?.user?.image!} width="32" height="32" className="w-8 h-8 rounded-full bg-[#3B5BA9] flex items-center justify-center text-white font-medium" />
                <span className="text-sm font-medium">{session?.user?.email}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Security Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="rounded-full bg-[#3B5BA9] bg-opacity-10 p-3 mr-4">
                <FaShieldAlt className="text-[#3B5BA9] text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Extensions</p>
                <p className="text-2xl font-bold text-[#1F2937]">{extensionStats?.total}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <FaCheckCircle className="text-green-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Modified</p>
                <p className="text-2xl font-bold text-[#1F2937]">{extensionStats?.secure}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Current Extensions */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b flex justify-between items-center">
                  <h2 className="font-semibold text-[#1F2937]">Your Extensions</h2>
                  <button className="text-[#3B5BA9] text-sm font-medium hover:underline">View All</button>
                </div>
                <div className="p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b">
                        <th className="pb-3 font-medium">Name</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Usage</th>
                        <th className="pb-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {extensions.map(ext => (
                        <tr key={ext.id} className="border-b last:border-b-0">
                          <td className="py-3 flex items-center">
                            <Image alt="extension" src={ext.imageUrl} height={32} width={32} className="mr-2 text-lg rounded" />
                            {ext.name}
                          </td>
                          <td className="py-3">{ext.risk}</td>
                          <td className="py-3">
                            <Link className="text-[#3B5BA9] hover:text-[#324d91] font-medium mr-3" href={"/dashboard/extensions/" + ext.id}>
                              Details
                            </Link>
                            {ext.status !== 'secure' && (
                              <button className="text-red-600 hover:text-red-800 font-medium">
                                Fix
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow h-full">
                <div className="p-4 border-b">
                  <h2 className="font-semibold text-[#1F2937]">Recent Scans</h2>
                </div>
                <div className="p-4">
                  <ul className="space-y-4">
                    {recentScans.map(scan => (
                      <li key={scan.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium">{scan.date}</p>
                          {scan.result === 'clean' ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                              Clean
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                              Issues Found
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Scanned {scan.extensions} extensions</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <button className="w-full bg-[#3B5BA9] hover:bg-opacity-90 text-white py-2 rounded-md font-medium transition">
                      Run New Scan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
