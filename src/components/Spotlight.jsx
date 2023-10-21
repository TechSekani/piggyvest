import React from "react";

const Spotlight = () => {
  return (
    <section className=" px-[90px] py-[150px] text-center">
      <h3 className=" text-5xl font-[Eina01Bold]">
        Meet Our Saver Of The Month
      </h3>
      <p className=" text-2xl mt-6 w-[70%] mx-auto">
        Every month, we shine a spotlight on one saver, asking them about their
        savings culture and how piggyvest has helped them.
      </p>
      <iframe
      className=" mt-20 mx-auto  border-8 border-white rounded-3xl"
        width="60%"
        height="465"
        src="https://www.youtube.com/embed/8XzCzC9pFGM?si=6V7PLhAQyZQ3ZTJQ?autoplay=1"
      ></iframe>
    </section>
  );
};

export default Spotlight;
