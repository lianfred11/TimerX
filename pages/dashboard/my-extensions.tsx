// src/Extensions.jsx
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
  FaFilter,
  FaCheckCircle,
  FaExclamationTriangle,
  FaDownload,
  FaTrash,
  FaEllipsisV,
  FaInfoCircle
} from 'react-icons/fa';
import Image from 'next/image';

function Extensions() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/");
    }
  });

  const [extensions, setExtensions] = useState<{
    id: string;
    name: string;
    status: string;
    risk: string;
    permissions: string[];
    lastUpdated: string;
    version: string;
    publisher: string;
    description: string;
    downloads: string;
  }[]>([]);


  // Placeholder data - no real logic
  const dummyExtensions = [
    {
      id: "jfpaflmpckblieefkegjncjoceapakdf",
      name: 'obsidian-livesync-webclip',
      status: 'secure',
      risk: 'Low',
      permissions: ['tabs', 'storage'],
      lastUpdated: '2024-11-05',
      version: '0.6',
      publisher: 'vrtmrz',
      description: `Webclipper for Obsidian LiveSync

Clip web pages to markdown, and send them to Obsidian via Obsidian-livesync.
You can keep online content as a local notebook, and reallege, collect, and add your comments as markdown.

Images are also captured. Therefore, you can view the content while you are off the line.

Self-hosted livesync and obsidian-live-sync-webcip are made in OpenSource. If you feel anything worries, check the repo. You can control all your data completely.

Note:
- Obsidian, and your own server or SaaS account are required. for more information, check the repo.
- Your Cloudant or CouchDB instance should allow the CORS request from the URI you have clipped.`,
      downloads: '1,000'
    }
  ];

  useEffect(() => {
    if (session?.user?.email === "zinanreolan2330@gmail.com") {
      setExtensions(dummyExtensions);
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
                  <Link href="/dashboard/my-extensions" className="flex items-center px-2 py-2 rounded-md bg-[#3B5BA9] bg-opacity-30 text-white">
                    <FaList className="mr-3 text-[#00C896]" />
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
            <h1 className="text-xl font-semibold text-[#1F2937]">My Extensions</h1>
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

        {/* Extensions Content */}
        <main className="p-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex flex-wrap justify-between items-center">
              <h2 className="font-semibold text-[#1F2937]">All Extensions ({extensions.length})</h2>
              <div className="flex space-x-4 mt-2 sm:mt-0">
                <div className="relative">
                  <button className="flex items-center text-sm font-medium text-gray-600 hover:text-[#3B5BA9] transition">
                    <FaFilter className="mr-2" />
                    Filter
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
                <button className="px-4 py-1 text-sm font-medium bg-[#3B5BA9] text-white rounded hover:bg-opacity-90 transition">
                  Run Security Scan
                </button>
              </div>
            </div>

            {/* Filter chips - would be dynamic based on filters applied */}
            <div className="p-3 bg-gray-50 border-b flex flex-wrap gap-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#3B5BA9] bg-opacity-10 text-[#3B5BA9]">
                All Extensions
                <button className="ml-1 hover:text-[#324d91]">×</button>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Security Warnings
                <button className="ml-1 hover:text-yellow-900">×</button>
              </div>
              <button className="text-xs text-[#3B5BA9] hover:text-[#324d91] font-medium">
                Clear All
              </button>
            </div>

            {/* Extensions Grid */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {extensions.map(ext => (
                <div key={ext.id} className={`border rounded-lg p-4 relative hover:shadow-md transition ${ext.status === 'critical' ? 'border-red-200 bg-red-50' :
                  ext.status === 'warning' ? 'border-yellow-200 bg-yellow-50' :
                    'border-gray-200'
                  }`}>
                  {/* Status indicator */}
                  <div className="absolute top-4 right-4">
                    {ext.status === 'secure' && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <FaCheckCircle className="mr-1" /> Secure
                      </span>
                    )}
                    {ext.status === 'warning' && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <FaExclamationTriangle className="mr-1" /> Warning
                      </span>
                    )}
                    {ext.status === 'critical' && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <FaExclamationTriangle className="mr-1" /> Critical
                      </span>
                    )}
                  </div>

                  {/* Extension info */}
                  <div className="flex items-start">
                    <div>
                      <h3 className="font-medium text-[#1F2937]">{ext.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">by {ext.publisher}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-3 line-clamp-2">{ext.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {ext.permissions.map((perm, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        {perm}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 text-xs text-gray-500 flex justify-between">
                    <span>v{ext.version}</span>
                    <span>Updated {ext.lastUpdated}</span>
                  </div>

                  {/* Warning message for risky extensions */}
                  {ext.status !== 'secure' && (
                    <div className="mt-3 text-xs p-2 rounded bg-yellow-100 text-yellow-800 flex items-start">
                      <FaInfoCircle className="mr-1 flex-shrink-0 mt-0.5" />
                      <span>
                        {ext.status === 'critical'
                          ? 'This extension requests excessive permissions and may pose security risks.'
                          : 'This extension has some permissions that require attention.'}
                      </span>
                    </div>
                  )}

                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-500">
                      <FaDownload className="mr-1" />
                      {ext.downloads} downloads
                    </div>

                    <div className="flex space-x-2">
                      <button className="text-[#3B5BA9] hover:text-[#324d91] p-1">
                        <FaInfoCircle />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 p-1">
                        <FaEllipsisV />
                      </button>
                      {ext.status !== 'secure' && (
                        <button className="text-red-500 hover:text-red-700 p-1">
                          <FaTrash />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
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

export default Extensions;
