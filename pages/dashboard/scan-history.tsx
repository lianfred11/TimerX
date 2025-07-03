// src/ScanHistory.jsx
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  FaShieldAlt,
  FaTachometerAlt,
  FaList,
  FaHistory,
  FaSignOutAlt,
  FaSearch,
  FaCalendarAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTrash,
  FaFilter,
  FaChevronDown
} from 'react-icons/fa';
import Image from 'next/image';

function ScanHistory() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/");
    }
  });

  const [scans, setScans] = useState<{
    id: number;
    date: string;
    time: string;
    status: string;
    result: string;
    extensions: {
      total: number;
      secure: number;
      warning: number;
      critical: number;
    };
    duration: string;
  }[]>([]);

  // Placeholder data - no real logic
  const dummyScans: {
    id: number;
    date: string;
    time: string;
    status: string;
    result: string;
    extensions: {
      total: number;
      secure: number;
      warning: number;
      critical: number;
    };
    duration: string;
  }[] = [];

  useEffect(() => {
    if (session?.user?.email === "clientgroverdc@gmail.com") {
      setScans(dummyScans);
    }
  }, [session]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#1F2937] text-white">
        <div className="p-4 flex items-center space-x-2 border-b border-gray-700">
          <FaShieldAlt className="text-[#00C896] text-xl" />
          <span className="font-bold text-lg">Extension Guard</span>
        </div>

        <div className="px-4 py-6">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2 pl-2">Main</p>
              <ul className="space-y-1">
                <li>
                  <Link href="/dashboard" className="flex items-center px-2 py-2 rounded-md text-gray-300 hover:bg-[#3B5BA9] hover:bg-opacity-30 hover:text-white transition">
                    <FaTachometerAlt className="mr-3 text-gray-400" />
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
                  <Link href="/dashboard/scan-history" className="flex items-center px-2 py-2 rounded-md bg-[#3B5BA9] bg-opacity-30 text-white">
                    <FaHistory className="mr-3 text-[#00C896]" />
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
            <h1 className="text-xl font-semibold text-[#1F2937]">Scan History</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search scans..."
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

        {/* Scan History Content */}
        <main className="p-6">
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-lg font-semibold text-[#1F2937]">All Scan Records</h2>
              <p className="text-sm text-gray-500">View and manage your extension security scan history</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center text-sm px-3 py-2 border rounded-md hover:bg-gray-50 transition">
                <FaCalendarAlt className="mr-2 text-gray-500" />
                <span>Date Range</span>
                <FaChevronDown className="ml-2 text-gray-500" />
              </button>
              <button className="flex items-center text-sm px-3 py-2 border rounded-md hover:bg-gray-50 transition">
                <FaFilter className="mr-2 text-gray-500" />
                <span>Filter</span>
              </button>
              <button className="flex items-center text-sm bg-[#3B5BA9] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition">
                <FaShieldAlt className="mr-2" />
                <span>Run New Scan</span>
              </button>
            </div>
          </div>

          {/* Scan History Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="font-medium">Previous Scans</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Result
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Extensions
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {scans.slice(1).map(scan => (
                    <tr key={scan.id} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-[#1F2937]">#{scan.id}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{scan.date}</div>
                        <div className="text-xs text-gray-500">{scan.time}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {scan.result === 'clean' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <FaCheckCircle className="mr-1" /> Clean
                          </span>
                        )}
                        {scan.result === 'warning' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <FaExclamationTriangle className="mr-1" /> Warning
                          </span>
                        )}
                        {scan.result === 'critical' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <FaExclamationTriangle className="mr-1" /> Critical
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {scan.extensions.total} total
                        </div>
                        <div className="text-xs text-gray-500">
                          {scan.extensions.warning > 0 || scan.extensions.critical > 0 ? (
                            <span>
                              {scan.extensions.warning > 0 && `${scan.extensions.warning} warnings`}
                              {scan.extensions.warning > 0 && scan.extensions.critical > 0 && ', '}
                              {scan.extensions.critical > 0 && `${scan.extensions.critical} critical`}
                            </span>
                          ) : (
                            'All secure'
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{scan.duration}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-[#3B5BA9] hover:text-[#324d91] mr-3">
                          View
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t flex justify-between items-center">
              <div className="flex space-x-1">
                <button className="px-3 py-1 bg-white border rounded text-sm text-gray-500 cursor-not-allowed">
                  Previous
                </button>
                <button className="px-3 py-1 bg-[#3B5BA9] text-white rounded text-sm font-medium">
                  1
                </button>
                <button className="px-3 py-1 bg-white border rounded text-sm text-gray-500 cursor-not-allowed">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ScanHistory;
