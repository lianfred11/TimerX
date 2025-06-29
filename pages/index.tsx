import { GoogleButton } from "@/lib/utils";
import Link from "next/link";
import { FaShieldAlt, FaCheckCircle, FaChartLine, FaLock } from 'react-icons/fa';

const destination = ""
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#EEF2F7]">
      {/* Navigation */}
      <nav className="bg-[#1F2937] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaShieldAlt className="text-[#00C896] text-2xl" />
            <span className="text-xl font-bold">TimerX</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/terms-of-services" className="hover:text-[#00C896] transition">Terms of Services</Link>
            <Link href="/privacy-policy" className="hover:text-[#00C896] transition">Privacy Policy</Link>
            <Link href="#how-it-works" className="hover:text-[#00C896] transition">How It Works</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight">
              Easily Add a Simple Usage Timer to Your Extensions
            </h1>
            <p className="mt-6 text-lg text-gray-600 mb-8">
              TimerX provides a simple usage timer for your installed extensions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <GoogleButton />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-6 bg-gradient-to-br from-[#3B5BA9] to-[#324d91] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white text-[#3B5BA9] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <p className="text-sm opacity-90">Sign in with your Google account and grant access to Chrome Web Store.</p>
            </div>

            <div className="text-center">
              <div className="bg-white text-[#3B5BA9] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="font-semibold mb-2">Scan</h3>
              <p className="text-sm opacity-90">We'll scan all your installed extensions to add timers.</p>
            </div>

            <div className="text-center">
              <div className="bg-white text-[#3B5BA9] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="font-semibold mb-2">Observe</h3>
              <p className="text-sm opacity-90">Now you can see the time usage of your installed extensions.</p>
            </div>

            <div className="text-center">
              <div className="bg-white text-[#3B5BA9] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="font-semibold mb-2">Done</h3>
              <p className="text-sm opacity-90">And now it's all complete!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Ready to see your usage?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of users who see their usages with TimerX.
          </p>
          <GoogleButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaShieldAlt className="text-[#00C896] text-2xl" />
              <span className="text-xl font-bold">TimerX</span>
            </div>

          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>© 2025 TimerX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
