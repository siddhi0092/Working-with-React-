import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './Components/HeroSection';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
     
     

      {/* Developers and Employers Section */}
      <section className="py-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Developers</h2>
              <p className="mt-2 mb-4">
                Browse our React jobs and start your career today
              </p>
              <a
                href="/jobs.html"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Browse Jobs
              </a>
            </div>
            <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Employers</h2>
              <p className="mt-2 mb-4">
                List your job to find the perfect developer for the role
              </p>
              <a
                href="/add-job.html"
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
              >
                Add Job
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Jobs Section */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Job Listings */}
            {/* Repeat for other listings */}
            <div className="bg-white rounded-xl shadow-md">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Full-Time</div>
                  <h3 className="text-xl font-bold">Senior React Developer</h3>
                </div>
                <div className="mb-5">
                  We are seeking a talented Front-End Developer to join our team
                  in Boston, MA. The ideal candidate will have strong skills in
                  HTML, CSS, and JavaScript...
                </div>
                <h3 className="text-indigo-500 mb-2">$70 - $80K / Year</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Boston, MA
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View All Jobs */}
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
