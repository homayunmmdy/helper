"use client";
import { useState } from "react";
import InfoSection from "./components/InfoSection";
import PhoneNumberInput from "./components/PhoneNumberInput";
import MessageInput from "./components/MessageInput";
import CountrySelect from "./components/CountrySelect";
import { useGetCountries } from "./hooks/useGetCountries";
import GeneratedLink from "./components/GeneratedLink";



export default function Home() {
  const [countryCode, setCountryCode] = useState("+98");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedPhoneNumber = phoneNumber.replace(/^0+/, "");
    const fullPhoneNumber = `${countryCode}${formattedPhoneNumber}`;
    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/${fullPhoneNumber}?text=${encodedMessage}`;
    setGeneratedLink(link);
  };
  const countries = useGetCountries()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 md:p-8 w-full">
      <div className="w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-xl">
        {/* Header - Full Width */}
        <div className="bg-teal-700 px-8 py-6">
          <h1 className="text-center text-2xl font-bold text-white md:text-3xl">WhatsApp Link Generator
          </h1>
          <p className="mt-1 text-center text-sm text-gray-300">Create professional custom chat links instantly

</p>
        </div>

        {/* Two-column layout container */}
        <div className="flex flex-col md:flex-row">
          {/* Form Column */}
          <div className="w-full p-6 md:w-1/2 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <CountrySelect countries={countries} value={countryCode} onChange={setCountryCode} />
              <PhoneNumberInput value={phoneNumber} onChange={setPhoneNumber} />
              <MessageInput value={message} onChange={setMessage} />

              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-teal-700 px-6 py-3 font-medium text-white shadow-md transition duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Generate Link
              </button>

              {/* Generated Link Section - Visible on mobile */}
              {generatedLink && (
                <div className="mt-6 md:hidden">
                  <GeneratedLink link={generatedLink} />
                </div>
              )}
            </form>
          </div>

          {/* Info & Generated Link Column */}
          <div className="w-full border-t border-gray-200 bg-gray-50 p-6 md:w-1/2 md:border-l md:border-t-0 md:p-8">
            {/* Generated Link Section - Hidden on mobile, visible on desktop */}
            {generatedLink && (
              <div className="mb-8 hidden md:block">
                <GeneratedLink link={generatedLink} />
              </div>
            )}

            {/* Info Section */}
            <InfoSection />
          </div>
        </div>
      </div>
    </div>
  );
}