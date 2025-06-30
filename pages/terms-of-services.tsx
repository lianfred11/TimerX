// src/TermsOfService.jsx
import Link from 'next/link';
import React from 'react';
import { FaShieldAlt, FaArrowLeft } from 'react-icons/fa';

function TermsOfService() {
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

        <h1 className="text-3xl font-bold text-[#1F2937] mb-6">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last Updated: 2025-03-03</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to our platform. Please read these Terms of Service ("Terms") carefully before using our website, applications, or any services provided by us (collectively, the "Services").
            </p>
            <p className="text-gray-600">
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">2. Definitions</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>"Company," "we," "us," and "our"</strong> refer to the entity that operates the Services.</li>
              <li><strong>"User," "you," and "your"</strong> refer to the individual or entity that accesses or uses our Services.</li>
              <li><strong>"Content"</strong> refers to any information, data, text, software, graphics, messages, or other materials displayed on or transmitted through the Services.</li>
              <li><strong>"Account"</strong> refers to a registered user profile created to access certain features of our Services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">3. Account Registration and Security</h2>
            <p className="text-gray-600 mb-4">
              Some features of our Services require account registration. When you register, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password confidential and secure</li>
              <li>Be responsible for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized access or use of your account</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We reserve the right to suspend or terminate accounts that contain false, outdated, or incomplete information, or if we reasonably believe there has been unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">4. OAuth Authentication and Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              Our Services may offer OAuth authentication methods through third-party platforms. By using these authentication methods, you authorize us to access and use certain data from your third-party accounts as described in our Privacy Policy.
            </p>
            <p className="text-gray-600 mb-4">
              You acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Your use of third-party services is subject to their respective terms of service and privacy policies</li>
              <li>We are not responsible for the practices of third-party services</li>
              <li>You can revoke our access to your third-party accounts at any time through the third-party platform's settings</li>
              <li>Revoking access may limit or disable certain features of our Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">5. User Responsibilities and Prohibited Activities</h2>
            <p className="text-gray-600 mb-4">
              You agree not to use our Services to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others, including intellectual property rights</li>
              <li>Transmit material that is harmful, obscene, defamatory, or otherwise objectionable</li>
              <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Violation of these prohibitions may result in termination of your access to the Services, and you may be reported to law enforcement authorities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">6. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-4">
              The Services and their original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-600 mb-4">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to use the Services for their intended purposes. This license does not include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for commercial purposes</li>
              <li>Attempting to decompile or reverse engineer any software contained in the Services</li>
              <li>Removing any copyright or other proprietary notations</li>
              <li>Transferring the materials to another person or entity</li>
            </ul>
            <p className="text-gray-600 mt-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">7. User Content</h2>
            <p className="text-gray-600 mb-4">
              You may have the opportunity to submit, post, or display content through our Services ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content in connection with providing and improving our Services.
            </p>
            <p className="text-gray-600 mb-4">
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You own or have the necessary rights to the User Content you submit</li>
              <li>The User Content does not infringe on any third party's intellectual property or privacy rights</li>
              <li>The User Content does not contain any defamatory, obscene, or otherwise unlawful material</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We reserve the right to remove any User Content that violates these Terms or that we find objectionable for any reason, without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">8. Subscription and Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              If we offer paid subscription plans, the following terms apply:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Pricing and payment terms will be clearly displayed before you complete a purchase</li>
              <li>Subscriptions automatically renew until canceled by you</li>
              <li>You may cancel your subscription at any time through your account settings</li>
              <li>No refunds will be provided for partial subscription periods unless required by law</li>
              <li>We reserve the right to change subscription prices with reasonable notice</li>
              <li>Price changes will take effect at the start of the next billing cycle</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Failure to maintain an active subscription may result in limited access to certain features of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">9. Warranty Disclaimer</h2>
            <p className="text-gray-600 mb-4 uppercase font-semibold">
              The Services are provided "as is" and "as available" without warranties of any kind, either express or implied.
            </p>
            <p className="text-gray-600 mb-4">
              To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Implied warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties of non-infringement of intellectual property rights</li>
              <li>Warranties regarding the security, reliability, timeliness, and performance of the Services</li>
              <li>Warranties regarding the accuracy or completeness of any information obtained through the Services</li>
              <li>Warranties that the Services will meet your requirements or be error-free</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Some jurisdictions do not allow the exclusion of implied warranties, so some of the above exclusions may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">10. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4 uppercase font-semibold">
              In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>
            <p className="text-gray-600 mb-4">
              To the maximum extent permitted by law, our liability for damages is limited to the amount you paid for the Services (if any) in the past 12 months.
            </p>
            <p className="text-gray-600">
              These limitations apply regardless of whether the damages are based on breach of contract, tort (including negligence), product liability, or any other legal theory, and regardless of whether we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">11. Service Modifications and Termination</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Modify, suspend, or discontinue the Services (or any part thereof) at any time</li>
              <li>Modify or change these Terms at any time</li>
              <li>Terminate or restrict your access to the Services for any reason, including violation of these Terms</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We will make reasonable efforts to provide notice of significant changes to the Services or these Terms. Your continued use of the Services after such changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">12. Indemnification</h2>
            <p className="text-gray-600">
              You agree to indemnify, defend, and hold harmless our company, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of the Services; (ii) your violation of these Terms; (iii) your violation of any third party rights, including without limitation any copyright, property, or privacy right; or (iv) any claim that your User Content caused damage to a third party.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">13. Dispute Resolution</h2>
            <p className="text-gray-600 mb-4">
              In the event of any dispute, claim, or controversy arising out of or relating to these Terms or the Services, the parties agree to the following:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Informal Resolution:</strong> Before filing a claim, the parties will attempt to resolve the dispute informally for at least 30 days.</li>
              <li><strong>Arbitration:</strong> If informal resolution is unsuccessful, disputes shall be resolved through binding arbitration administered by a mutually agreed-upon arbitration service.</li>
              <li><strong>Waiver of Class Actions:</strong> All disputes must be resolved on an individual basis, and not as part of a class or consolidated action.</li>
              <li><strong>Governing Law:</strong> These Terms shall be governed by the laws of the jurisdiction in which our company is headquartered, without regard to its conflict of law provisions.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Some jurisdictions do not allow the limitations on certain rights, such as the right to file a class action. If these limitations are not permitted under the laws of the jurisdiction where you reside, they may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">14. Severability and Entire Agreement</h2>
            <p className="text-gray-600 mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.
            </p>
            <p className="text-gray-600">
              These Terms, together with the Privacy Policy and any other legal notices published by us, constitute the entire agreement between you and us regarding the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">15. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-700">Email: lianfredra@gmail.com</p>
            </div>
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

export default TermsOfService;
