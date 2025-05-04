export default function Body() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Engineer Your Perfect Resume
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            AI-powered resume analysis and feedback specifically designed for
            software engineers, by software engineers.
          </p>
          <a
            href="#"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg inline-block transition-colors"
          >
            Try It Now
          </a>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 animate-fadeIn max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center">
              Get Your Resume Reviewed
            </h2>
            <p className="text-gray-500 mb-8 text-center">
              Upload your resume and receive AI-powered feedback in seconds.
            </p>

            <div
              className="border-2 border-dashed border-gray-200 hover:border-indigo-400 rounded-xl p-10 text-center cursor-pointer transition-colors"
              id="upload-area"
            >
              <div className="text-gray-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2"></h3>
              <input
                type="file"
                id="file-input"
                className="text-lg font-semibold mb-2"
                placeholder="Drag and drop your resume here"
                accept=".pdf, .docx, .txt"
              />
              <p className="text-gray-400 text-sm mt-4">
                Supported formats: PDF, DOCX, TXT
              </p>
            </div>

            <div
              className="bg-gray-100 rounded-lg px-4 py-3 mt-6 hidden"
              id="selected-file"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  <span id="filename">resume.pdf</span>
                </div>
                <button
                  className="text-gray-400 hover:text-gray-600"
                  id="remove-file"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <button
                href="#"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                id="upload-btn"
              >
                Generate Resume
              </button>
              <button
                href="#"
                className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors hidden"
                id="review-btn"
              >
                Review Resume
              </button>
              <button
                href="#"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                View Sample Report
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Software Engineers Love Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover-grow">
              <div className="text-indigo-600 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Technical Skill Analysis
              </h3>
              <p className="text-gray-600">
                Advanced AI that understands programming languages, frameworks,
                and tech stacks.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover-grow">
              <div className="text-indigo-600 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Role-Specific Feedback</h3>
              <p className="text-gray-600">
                Tailored advice for frontend, backend, ML, DevOps and other
                specialized engineering roles.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover-grow">
              <div className="text-indigo-600 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">ATS Optimization</h3>
              <p className="text-gray-600">
                Ensure your resume passes through Applicant Tracking Systems
                with keyword analysis.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover-grow">
              <div className="text-indigo-600 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Peer Benchmarking</h3>
              <p className="text-gray-600">
                Compare your resume with successful engineers who landed jobs at
                top tech companies.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover-grow">
              <div className="text-indigo-600 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Portfolio Integration</h3>
              <p className="text-gray-600">
                Connect GitHub, Stack Overflow, and other coding profiles for a
                holistic review.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover-grow">
              <div className="text-indigo-600 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Direct Edits & Suggestions
              </h3>
              <p className="text-gray-600">
                One-click improvements with context-aware rewrites for your
                experience statements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
