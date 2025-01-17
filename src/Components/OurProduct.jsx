import React, { useEffect, useState } from "react";

function OurProduct() {
  const [objects, setObjects] = useState([]);

  const tab = [
    <div className="pt-16 p-4 flex items-center justify-center flex-row flex-wrap gap-2 ">
        <div className="relative group w-full bg-gradient-to-br from-red-100 via-red-200 to-green-300 rounded-2xl p-2 sm:p-5 md:p-8 shadow-xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-16 -left-16 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-orange-400 via-red-300 to-green-400 opacity-20 rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tl from-green-400 via-red-300 to-orange-400 opacity-25 rounded-full"></div>
          </div>

          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 tracking-wide text-center group-hover:text-red-700 transition-colors duration-500">
              🌟 Student Immersion Program
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-xl lg:max-w-2xl mx-auto mb-8 text-justify">
              Our Student Immersion Program is designed to provide students with
              motivating, life-changing opportunities to learn and live in another
              culture. Participants can experience the world’s best infrastructure,
            
              clean environment, discipline, and safety in the setting of our
              academic cultural activity programs, which are also structured to
              offer opportunities for lifelong friendships.
            </p>

            <div className="mt-12">
              {/* <h4 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 group-hover:text-red-700 transition-colors duration-500">
                Highlights of the Student Immersion Program
              </h4> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {[
                  {
                    icon: "🌍",
                    title: "Cultural Immersion",
                    description:
                      "Explore local traditions, food, festivals, and customs for an authentic cultural experience.",
                  },
                  {
                    icon: "🎓",
                    title: "Academic Exposure",
                    description:
                      "Attend lectures, seminars, and workshops to understand the educational approaches of Japan or India. Visit schools, universities, and research institutes. Group and One-to-one interactions to answer curiosities and questions about living and work cultures.",
                  },
                  {
                    icon: "💡",
                    title: "Innovation & Technology Workshops",
                    description:
                      "Participate in hands-on sessions to learn about cutting-edge technologies and innovations shaping the future. Opportunity to intern at prestigious companies.",
                  },
                  {
                    icon: "🏢",
                    title: "Industry Visits",
                    description:
                      "Experience the environment of leading industries through company visits and talks by professionals.",
                  },
                  {
                    icon: "🏠",
                    title: "Homestays",
                    description:
                      "Experience local hospitality through homestay options, allowing students to understand family life in a different culture.",
                  },
                  {
                    icon: "🤝",
                    title: "Study, Networking & Business Opportunities",
                    description:
                      "Empowering individuals through education, global connections, and professional growth opportunities.",
                  },
                ].map((highlight, index) => (
                  <div
                    key={index}
                    className={`relative bg-white bg-opacity-70 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 backdrop-blur`}
                  >
                    <div className="text-3xl sm:text-4xl text-center mb-4 text-red-500 group-hover:scale-125 transition-transform duration-500">
                      {highlight.icon}
                    </div>
                    <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-center">
                      {highlight.title}
                    </h5>
                    <p className="text-sm sm:text-base text-gray-700 text-center">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 sm:mt-16 text-center">
              <button className="px-4 sm:px-6 py-2 mb-3 sm:py-3 bg-red-600 text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <a href="#">Learn More →</a>
                
              </button>          
            </div>
          </div>
        </div>       
    </div>,



    // <div className="pt-14 flex px-2 items-center justify-center flex-row flex-wrap gap-2">
    //   <div className="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
    //     <div className="flex flex-row">
    //       <div className="h-28 w-24  flex justify-center items-center  p-3">
    //         <img src="/OurProducts/Healthcare/clinic.png" alt="" />
    //       </div>
    //       <div className="flex flex-col justify-center">
    //         <p className="font-bold">Hospital Automanager</p>
    //         <p>Advance Hospital Management System Software</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
    //     <div className="flex flex-row">
    //       <div className="h-28 w-24  flex justify-center items-center  p-3">
    //         <img src="/OurProducts/Healthcare/doctor.png" alt="" />
    //       </div>
    //       <div className="flex flex-col justify-center">
    //         <p className="font-bold">Hospital</p>
    //         <p>Hospital Management System with Website</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
    //     <div className="flex flex-row">
    //       <div className="h-28 w-24  flex justify-center items-center  p-3">
    //         <img
    //           src="/OurProducts/Healthcare/domain-registration.png"
    //           alt=""
    //         />
    //       </div>
    //       <div className="flex flex-col justify-center">
    //         <p className="font-bold">Pharma Care</p>
    //         <p>Pharmacy Software Made Easy</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
    //     <div className="flex flex-row">
    //       <div className="h-28 w-24  flex justify-center items-center  p-3">
    //         <img
    //           src="/OurProducts/Healthcare/healthcare1.png"
    //           alt=""
    //         />
    //       </div>
    //       <div className="flex flex-col justify-center">
    //         <p className="font-bold">Multi-Hospital</p>
    //         <p>Best Hospital Management System (SaaS App)</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
    //     <div className="flex flex-row">
    //       <div className="h-28 w-24  flex justify-center items-center  p-3">
    //         <img
    //           src="/OurProducts/Healthcare/management-service.png"
    //           alt=""
    //         />
    //       </div>
    //       <div className="flex flex-col justify-center">
    //         <p className="font-bold">Clinic365</p>
    //         <p>Clinic Management System</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
    //     <div className="flex flex-row">
    //       <div className="h-28 w-24  flex justify-center items-center  p-3">
    //         <img src="/OurProducts/Healthcare/payment.png" alt="" />
    //       </div>
    //       <div className="flex flex-col justify-center">
    //         <p className="font-bold">Doctors</p>
    //         <p>Doctor Appointment and Prescription System with Website</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
    //     <div className="flex flex-row">
    //       <div className="h-28 w-24  flex justify-center items-center  p-3">
    //         <img src="/OurProducts/Healthcare/pharmacy.png" alt="" />
    //       </div>
    //       <div className="flex flex-col justify-center">
    //         <p className="font-bold">G-Priscription</p>
    //         <p>Gynaecology & OBS Consultation Software</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>,
  ];

  useEffect(() => {
    setObjects(tab[0]);
  }, []);

  return (
    <>
      <div className="mx-6">
        <div className="flex text-center flex-col px-8 py-2">
          <div className="text-center mb-2">
            <p className="text-4xl font-extrabold pb-2 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative">
              Program We Offer
              <div className="relative">
                <img className="mx-auto opacity-30 mt-2" width={300} src="/underline.png" alt="" />
              </div>
            </p>
          </div>


          <p className="text-xl font-light pb-2">
            We aim to nurture a global perspective in
            students and professionals by creating opportunities to experience the
            best of Japanese and Indian cultures
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap text-white font-semibold gap-12 ">
          <button
            className="bg-customBlue hover:bg-customLiteBlue px-8 py-1.5 rounded-xl"
          // onClick={() => setObjects(tab[0])}
          >
            Student Immersion Program
          </button>

          {/* <button
            className="bg-customBlue hover:bg-customLiteBlue  px-8 py-1.5 rounded-xl"
           
          >
            Highlights of the Student Immersion Program
          </button> */}

          <button
            className="bg-customBlue hover:bg-customLiteBlue  px-8 py-1.5 rounded-xl"
          // onClick={() => setObjects(tab[2])}
          >
            Academic Exposure
          </button>

          <button
            className="bg-customBlue hover:bg-customLiteBlue  px-8 py-1.5 rounded-xl"
          // onClick={() => setObjects(tab[3])}
          >
            Innovation & Technology Workshops
          </button>

          <button
            className="bg-customBlue hover:bg-customLiteBlue  px-8 py-1.5 rounded-xl "
          // onClick={() => setObjects(tab[4])}
          >
            Industry Visits
          </button>
          <button
            className="bg-customBlue hover:bg-customLiteBlue  px-8 py-1.5 rounded-xl "
          // onClick={() => setObjects(tab[4])}
          >
            Homestays
          </button>
        </div>

        <div> {objects}</div>

        <div></div>
      </div>
    </>
  );
}

export default OurProduct;






// Our goal is to To foster creativity, innovation, and intercultural understanding through immersive exchange programs, educational initiatives, and technological collaboration. Our goal is We aim to nurture a global perspective in students and professionals by creating opportunities to experience the best of Japanese and Indian cultures.