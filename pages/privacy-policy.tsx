// src/PrivacyPolicy.jsx
import Link from 'next/link';
import React from 'react';
import { FaShieldAlt, FaArrowLeft } from 'react-icons/fa';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <nav className="bg-[#1F2937] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaShieldAlt className="text-[#00C896] text-2xl" />
            <span className="text-xl font-bold">TimerX</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/terms-of-services" className="hover:text-[#00C896] transition">Terms of Services</Link>
            <Link href="/privacy-policy" className="hover:text-[#00C896] transition">Privacy Policy</Link>
            <Link href="/#features" className="hover:text-[#00C896] transition">Features</Link>
            <Link href="/#how-it-works" className="hover:text-[#00C896] transition">How It Works</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 bg-white shadow-md my-8 rounded-lg">
        <div className="mb-6">
          <Link href="/" className="flex items-center text-[#3B5BA9] hover:underline">
            <FaArrowLeft className="mr-2" />
            Back to Main Site
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-[#1F2937] mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: 2025-03-04</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to TimerX ("we," "our," or "us"). At TimerX, we are committed to protecting your privacy and the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect your information when you use our website, extensions, and services (collectively, the "Services").
            </p>
            <p className="text-gray-600">
              This Privacy Policy applies to all visitors, users, and customers of TimerX and our related applications. By accessing or using our Services, you agree to this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect several types of information from and about users of our Services, including:
            </p>

            <h3 className="font-medium text-[#1F2937] mb-2">2.1 Google User Data</h3>
            <p className="text-gray-600 mb-4">
              When you connect your Google account to our Services, we collect the following Google user data:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Chrome Web Store Data:</strong> Information about your Chrome extensions, including extension IDs, names, versions, and permissions.</li>
              <li><strong>Basic Profile Information:</strong> Your name and email address for account creation and communication purposes.</li>
            </ul>

            <h3 className="font-medium text-[#1F2937] mb-2">2.2 Usage Information</h3>
            <p className="text-gray-600 mb-2">
              We automatically collect information about your interactions with our Services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Device information (browser type, operating system)</li>
              <li>IP address and general location data</li>
              <li>Pages visited and features used</li>
              <li>Actions taken within the application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">3. How We Use Your Information</h2>
            <h3 className="font-medium text-[#1F2937] mb-2">3.1 Google User Data</h3>
            <p className="text-gray-600 mb-3">We use Google user data solely for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Account Management:</strong> To create and manage your account, authenticate your identity, and provide personalized experiences.</li>
              <li><strong>Service Improvement:</strong> To improve our delivery systems.</li>
            </ul>

            <p className="text-gray-600 mb-4">
              We use your Google user data strictly to provide and improve our core Services functionality. We do not use this data for advertising, marketing, or any purpose unrelated to delivering our extension services.
            </p>

            <h3 className="font-medium text-[#1F2937] mb-2">3.2 Legal Basis for Processing</h3>
            <p className="text-gray-600">
              We process your information based on your consent, which you provide when connecting your Google account, and our legitimate interest in providing secure, functional Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">4. Sharing and Disclosure of Information</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer Google user data to third parties for marketing, advertising, or monetary gain. We may share your information in the following limited circumstances:
            </p>

            <h3 className="font-medium text-[#1F2937] mb-2">4.1 Service Providers</h3>
            <p className="text-gray-600 mb-4">
              We may share Google user data with trusted third-party service providers who help us operate, deliver, and improve our Services. These providers are contractually obligated to use the data solely to provide services to us and are prohibited from using the data for their own purposes. Our service providers include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li>Cloud hosting and infrastructure providers</li>
              <li>Security and fraud prevention services</li>
              <li>Analytics and performance monitoring tools</li>
              <li>Customer support services</li>
            </ul>

            <h3 className="font-medium text-[#1F2937] mb-2">4.2 Legal Requirements</h3>
            <p className="text-gray-600">
              We may disclose your information if required by law, regulation, legal process, or governmental request, or where we believe disclosure is necessary to protect our rights, enforce our policies, or address fraud and security issues.
            </p>
          </section>

          <section >
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">5. Data Security and Protection</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="font-medium text-[#1F2937] mb-2">5.1 Security Measures</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Encryption:</strong> All data transmitted between your browser and our servers is encrypted using TLS/SSL protocols. Sensitive data stored in our databases is encrypted at rest.</li>
              <li><strong>Access Controls:</strong> We implement strict access controls and authentication mechanisms to ensure only authorized personnel can access user data.</li>
              <li><strong>Regular Audits:</strong> We conduct regular security assessments and audits to identify and address potential vulnerabilities.</li>
              <li><strong>Data Minimization:</strong> We collect only the data necessary to provide our Services and limit access to sensitive information.</li>
            </ul>

            <h3 className="font-medium text-[#1F2937] mb-2">5.2 OAuth Token Handling</h3>
            <p className="text-gray-600">
              OAuth tokens from Google are stored securely with industry-standard encryption and are never exposed in client-side code. Access to these tokens is strictly limited to the specific API calls required to deliver our Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">6. Data Retention and Deletion</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal information for as long as necessary to provide you with our Services and for legitimate business purposes, such as maintaining the performance of our Services, preventing fraud, meeting regulatory obligations, and resolving disputes.
            </p>

            <h3 className="font-medium text-[#1F2937] mb-2">6.1 Retention Periods</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Account Information:</strong> We retain your account information for as long as your account is active or as needed to provide you with our Services.</li>
              <li><strong>Extension Data:</strong> Information about your extensions is stored while you are actively using our Services and updated during each scan.</li>
              <li><strong>Scan Results:</strong> We retain user history for up to 3 months to help you track your security posture over time.</li>
              <li><strong>Usage Logs:</strong> General usage logs are retained for up to 90 days for security and debugging purposes.</li>
            </ul>

            <h3 className="font-medium text-[#1F2937] mb-2">6.2 Account Deletion</h3>
            <p className="text-gray-600 mb-4">
              You can request deletion of your account and all associated data at any time by:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Contacting us at privacy@extensionguard.icu</li>
            </ul>
            <p className="text-gray-600">
              Upon receiving your request, we will delete your account and personal information within 30 days, except for information that we are required to retain for legal purposes or legitimate business interests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">7. Your Rights and Choices</h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Access and Portability:</strong> You can request a copy of your personal information we hold.</li>
              <li><strong>Correction:</strong> You can request that we correct inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You can request that we delete your personal information.</li>
              <li><strong>Restriction:</strong> You can request that we restrict the processing of your data.</li>
              <li><strong>Objection:</strong> You can object to our processing of your personal information.</li>
              <li><strong>Withdraw Consent:</strong> You can withdraw your consent at any time by disconnecting your Google account.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, please contact us at privacy@extensionguard.icu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">8. Children's Privacy</h2>
            <p className="text-gray-600">
              Our Services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at privacy@extensionguard.icu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. For significant changes, we will provide additional notice, such as an email notification. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 TimerX. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
