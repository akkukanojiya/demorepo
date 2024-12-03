import Nabbar from "./Nabbar";

function HeroCarousel() {
  return (
    <div className="relative w-full">
      <Nabbar />

      <div
        id="carouselExampleInterval"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active" data-bs-interval="4500">
            <div className="relative">
              <img
                src="/HeroCarousel-pics/slider1.jpg"
                className="d-block w-full h-[50vh] pt-0 sm:h-[60vh] md:h-[70vh] lg:h-[100vh] object-cover rounded-xl opacity-50"
                alt="Slider 1"
              />
              <div className="absolute top-1/2 left-10 sm:left-24 lg:left-40 transform -translate-y-1/2 px-8 sm:px-16 lg:px-24 text-customBlue">
                <div className="text-shadow-xl animate__animated animate__fadeIn animate__delay-1s">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-wide">
                    Welcome to JIITECH.
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg opacity-90 max-w-xl">
                    Japan India Innovation Technology Education Cultural Hub (JIITECH) is a pioneering initiative bridging the cultures of Japan and India through education, technology, and cultural exchange.
                  </p>
                  <div className="mt-4 sm:mt-8">
                    <a
                      href="#"
                      className="inline-block bg-red-600 text-white text-sm sm:text-base px-3 py-2 rounded-full hover:bg-red-700 transition duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item" data-bs-interval="4500">
            <div className="relative">
              <img
                src="/HeroCarousel-pics/slider2.jpg"
                className="d-block w-full h-[50vh] pt-0 sm:h-[60vh] md:h-[70vh] lg:h-[100vh] object-cover rounded-xl opacity-50"
                alt="Slider 2"
              />
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item" data-bs-interval="4500">
            <div className="relative">
              <img
                src="/HeroCarousel-pics/slider3.jpg"
                className="d-block w-full h-[50vh] pt-0 sm:h-[60vh] md:h-[70vh] lg:h-[100vh] object-cover rounded-xl opacity-50"
                alt="Slider 3"
              />
              <div className="absolute top-1/2 left-10 sm:left-24 lg:left-40 transform -translate-y-1/2 px-8 sm:px-16 lg:px-24 text-customBlue">
                <div className="text-shadow-xl opacity-90 animate__animated animate__fadeIn animate__delay-1s">
                  {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight tracking-wide">
                    An Integral Part of Corporate India’s&Japan’s Journey
                  </h2> */}
                  {/* <p className="text-sm sm:text-base lg:text-lg opacity-90 max-w-xl">
                    Trusted advisors to multinationals, leading Indian & Japanese businesses, and leadership professionals.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-white"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-black p-3 rounded-full shadow-lg"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-1/2 right-0 transform -translate-y-1/2 text-white"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-black p-3 rounded-full shadow-lg"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}

export default HeroCarousel;
