export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">About & Contact</h1>

      <p className="mb-4">
        This website helps users download YouTube thumbnails easily. Built with Next.js, Tailwind, and Framer Motion.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p className="mb-2">
        For inquiries or support, reach out via email: <a href="mailto:your@email.com" className="text-blue-400 underline">your@email.com</a>
      </p>

      <h2 className="text-2xl font-semibold mb-2">Connect</h2>
      <p>
        You can also connect on social media:  
        <a href="https://twitter.com/yourprofile" target="_blank" className="text-blue-400 underline ml-1">Twitter</a> |  
        <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-blue-400 underline ml-1">LinkedIn</a>
      </p>
    </div>
  );
}
