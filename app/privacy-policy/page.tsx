export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This page explains how we collect, use, and protect your information.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Information Collection</h2>
      <p className="mb-4">
        We do not collect personal information unless voluntarily provided, such as email for contact purposes.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
      <p className="mb-4">
        This site may use cookies for analytics and better user experience. No personal data is shared.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services like Google AdSense. Please review their privacy policies as well.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p>
        For privacy-related concerns, contact us at <a href="mailto:your@email.com" className="text-blue-400 underline">your@email.com</a>.
      </p>
    </div>
  );
}
