import React from "react";

const testimonials = [
  {
    name: "Abeebah Olaosebikan",
    text: "Amatip IT transformed the way our startup operates. From the inception of our custom software to flawless execution, their expertise is unmatched. And the post-launch support? Simply phenomenal!",
    img: "/abeebah.jpg",
  },
  {
    name: "Adigun Tawakalit",
    text: "Our e-commerce platform had its fair share of challenges. Partnering with Amatip IT was the best decision. Their innovative solutions not only resolved our issues but also enhanced our user experience significantly.",
    img: "/adigun.jpg",
  },
  {
    name: "Eng. Muh",
    text: "Transitioning to the tech world seemed daunting until I enrolled in Amatip IT’s courses. The clarity, depth, and practical knowledge they offer is beyond anything I’ve experienced.",
    img: "/eng-muh.jpg",
  },
];

function TestimonialScroll() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 scrollbar-hide">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-sm snap-center bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between"
          >
            <p className="text-gray-600 italic mb-4">“{t.text}”</p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <div className="flex text-yellow-500">★★★★★</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialScroll;