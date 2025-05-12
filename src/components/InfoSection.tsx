const InfoSection = () => {
  return (
    <div>
      <h2 className="mb-4 flex items-center text-xl font-bold text-gray-800">
        <svg
          className="mr-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        About WhatsApp Link Generator
      </h2>

      <div className="prose prose-sm text-gray-600">
        <p className="mb-4">
          WhatsApp requires users to save your phone number before messaging
          you. This tool eliminates that step by creating direct chat links that
          work instantly.
        </p>

        <div className="mb-6">
          <h3 className="mb-2 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-800">
            How It Works
          </h3>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Select your country code </li>
            <li>Enter your phone number without leading zeros </li>
            <li>Add an optional pre-filled message</li>
            <li>Generate and share your personalized link</li>
          </ol>
        </div>

        <div>
          <h3 className="mb-2 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-800">
            Perfect For
          </h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Business cards and marketing materials</li>
            <li>Email signatures and social media profiles</li>
            <li>Websites and online portfolios</li>
            <li>Streamlining customer communication</li>
          </ul>
        </div>

        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm italic text-gray-500">
            &quot;The WhatsApp Link Generator is an elegant solution for professionals who want to provide a direct communication channel without the friction of contact saving&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
