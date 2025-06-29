// src/ExtensionDetail.jsx
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  FaShieldAlt,
  FaTachometerAlt,
  FaList,
  FaHistory,
  FaSignOutAlt,
  FaExclamationTriangle,
  FaDownload,
  FaEye,
  FaCheck,
  FaExternalLinkAlt,
  FaCopy
} from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

function ExtensionDetail() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/");
    }
  });

  const [extension, setExtension] = useState<{
    id: string,
    name: string,
    version: string,
    status: string,
    risk: string,
    users: number,
    lastUpdated: string,
    creator: string,
    description: string,
    storeUrl: string,
    permissions: { name: string, risk: string, reason: string }[],
    issues: { type: string; title: string; description: string; code: string; fix: string; }[],
    analytics: { installs: number[], uninstalls: number[], activeUsers: number[], ratings: number[] }
  }>();

  // Placeholder extension data - no real logic
  const dummyExtension = {
    id: 'jfpaflmpckblieefkegjncjoceapakdf',
    name: 'obsidian-livesync-webclip',
    version: '0.6',
    status: 'secure',
    risk: 'Low',
    users: 1000,
    lastUpdated: '2024-11-05',
    creator: 'vrtmrz',
    description: `Webclipper for Obsidian LiveSync

Clip web pages to markdown, and send them to Obsidian via Obsidian-livesync.
You can keep online content as a local notebook, and reallege, collect, and add your comments as markdown.

Images are also captured. Therefore, you can view the content while you are off the line.

Self-hosted livesync and obsidian-live-sync-webcip are made in OpenSource. If you feel anything worries, check the repo. You can control all your data completely.

Note:
- Obsidian, and your own server or SaaS account are required. for more information, check the repo.
- Your Cloudant or CouchDB instance should allow the CORS request from the URI you have clipped.`,
    storeUrl: 'https://chromewebstore.google.com/detail/obsidian-livesync-webclip/jfpaflmpckblieefkegjncjoceapakdf',
    permissions: [
      { name: 'activeTab', risk: 'low', reason: 'Needed to analyze current shopping page' },
      { name: 'storage', risk: 'low', reason: 'Stores user preferences' },
      { name: 'cookies', risk: 'medium', reason: 'Used to maintain shopping sessions' },
      { name: 'webRequest', risk: 'high', reason: 'Monitors network requests to detect shopping activities' },
      { name: 'tabs', risk: 'medium', reason: 'Used to open deal pages in new tabs' },
    ],
    issues: [
      {
        type: 'critical',
        title: 'Excessive Data Collection',
        description: 'Your extension is collecting user browsing data beyond what is needed for its core functionality.',
        code: 'chrome.webRequest.onBeforeRequest.addListener(\n  function(details) {\n    sendToAnalytics(details.url, details.requestBody);\n    return {cancel: false};\n  },\n  {urls: ["<all_urls>"]},\n  ["blocking", "requestBody"]\n);',
        fix: 'Limit data collection to only shopping-related domains and collect minimal required information.'
      },
      {
        type: 'warning',
        title: 'Outdated API Usage',
        description: 'Your extension uses deprecated Chrome API methods that may be removed in future browser versions.',
        code: 'chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {\n  // handle message\n});',
        fix: 'Replace with chrome.runtime.onMessage.addListener()'
      }
    ],
    analytics: {
      installs: [1250, 1340, 1490, 1620, 1580, 1780, 1850],
      uninstalls: [120, 145, 135, 180, 210, 160, 190],
      activeUsers: [12500, 13700, 15200, 16800, 18400, 22300, 24700],
      ratings: [4.2, 4.3, 4.3, 4.1, 4.2, 4.0, 3.8]
    }
  };

  useEffect(() => {
    if (session?.user?.email === "clientgroverdc@gmail.com") {
      setExtension(dummyExtension);
    }
  }, [session]);

  async function onFixIssues() {
    toast.info(`Trying to fix the issues...`);
    await new Promise((r) => setTimeout(r, 5000));
    toast.success(`All issues are successfully solved.`);
    const newExtension = { ...extension };
    newExtension.issues = [];
    setExtension(newExtension as any);
  }

  async function onUpdateExtension() {
    toast.info(`Extension is sent for an update.`);
    await new Promise((r) => setTimeout(r, 1000));
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar - Same as Dashboard */}
      <div className="w-64 bg-[#1F2937] text-white">
        <div className="p-4 flex items-center space-x-2 border-b border-gray-700">
          <FaShieldAlt className="text-[#00C896] text-xl" />
          <span className="font-bold text-lg">Extension Timer          </span>
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
                  <a href="#" className="flex items-center px-2 py-2 rounded-md text-gray-300 hover:bg-[#3B5BA9] hover:bg-opacity-30 hover:text-white transition">
                    <FaSignOutAlt className="mr-3 text-gray-400" />
                    Log out
                  </a>
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
          <div className="flex items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-[#1F2937]">{extension?.name}</h1>
              <span className="ml-3 text-sm text-gray-500">v{extension?.version}</span>
              {extension?.status === 'critical' && (
                <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  <FaExclamationTriangle className="mr-1" /> Critical Issues
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Extension Detail Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Extension Overview */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <h2 className="font-semibold text-[#1F2937]">Extension Overview</h2>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="font-medium text-green-600 flex items-center">
                        <FaCheck className="mr-1" /> Secure
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Extension ID</p>
                      <div className="flex items-center">
                        <p className="font-medium text-gray-700 truncate pr-2">
                          {extension?.id.substring(0, 8)}...
                        </p>
                        <button className="text-gray-500 hover:text-gray-700">
                          <FaCopy />
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Last Updated</p>
                      <p className="font-medium text-gray-700">{extension?.lastUpdated}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Users</p>
                      <p className="font-medium text-gray-700">{extension?.users.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-medium text-[#1F2937] mb-2">Description</h3>
                    <p className="text-gray-600 text-sm">{extension?.description}</p>
                  </div>

                  <div className="mt-4 flex space-x-4">
                    <a
                      href={extension?.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3B5BA9] text-sm font-medium flex items-center hover:underline"
                    >
                      View in Chrome Web Store <FaExternalLinkAlt className="ml-1 text-xs" />
                    </a>
                    <button className="text-[#3B5BA9] text-sm font-medium flex items-center hover:underline">
                      <FaDownload className="mr-1" /> Download Source Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Security Issues */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b flex justify-between items-center">
                  <h2 className="font-semibold text-[#1F2937]">Security Issues</h2>
                  <span className="bg-red-100 text-red-800 text-xs font-medium rounded-full px-2.5 py-0.5">
                    {extension?.issues.length} Issues Found
                  </span>
                </div>
                <div className="p-4">
                  <div className="space-y-6">
                    {extension?.issues.map((issue, index) => (
                      <div key={index} className={`border-l-4 ${issue.type === 'critical' ? 'border-red-500' : 'border-yellow-500'} pl-4 py-1`}>
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-[#1F2937] flex items-center">
                              {issue.type === 'critical' ? (
                                <FaExclamationTriangle className="text-red-500 mr-2" />
                              ) : (
                                <FaExclamationTriangle className="text-yellow-500 mr-2" />
                              )}
                              {issue.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">{issue.description}</p>
                          </div>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${issue.type === 'critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {issue.type === 'critical' ? 'Critical' : 'Warning'}
                          </span>
                        </div>

                        {issue.code && (
                          <div className="mt-3 bg-gray-800 rounded-md p-3 overflow-x-auto">
                            <pre className="text-gray-200 text-xs">{issue.code}</pre>
                          </div>
                        )}

                        <div className="mt-3">
                          <h4 className="text-sm font-medium text-[#1F2937] mb-1">Recommended Fix:</h4>
                          <p className="text-sm text-gray-600">{issue.fix}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button onClick={onFixIssues} className="bg-[#3B5BA9] hover:bg-opacity-90 text-white px-4 py-2 rounded-md font-medium transition">
                      Fix All Issues
                    </button>
                    <button className="ml-3 border border-[#3B5BA9] text-[#3B5BA9] px-4 py-2 rounded-md font-medium hover:bg-gray-50 transition">
                      Ignore Issues
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <h2 className="font-semibold text-[#1F2937]">Developer Actions</h2>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <button className="w-full border border-[#3B5BA9] text-[#3B5BA9] py-2 rounded-md font-medium hover:bg-gray-50 transition flex items-center justify-center">
                      <FaEye className="mr-2" /> Preview in Store
                    </button>
                    <button onClick={onUpdateExtension} className="w-full border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50 transition flex items-center justify-center">
                      Update Extension
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ExtensionDetail;
