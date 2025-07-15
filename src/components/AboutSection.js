import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-emerald-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Honoring the Forest & Its People
        </h2>
        <p className="text-lg mb-6">
          Our products come directly from indigenous artisans and forest
          families who harvest and craft in harmony with nature. Every purchase
          supports cultural preservation, sustainable living, and reforestation
          efforts in the Amazon rainforest.
        </p>
        <Image
          src="https://res.cloudinary.com/dy8q4hf0k/image/upload/v1752588044/amazon-people_m6nuzd.jpg"
          alt="Indigenous people"
          width={800}
          height={400}
          className="rounded-xl mx-auto"
        />
      </div>
    </section>
  );
}
