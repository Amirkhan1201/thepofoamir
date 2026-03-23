"use client";
import Image from "next/image";
import Link from "next/link";

type WorkItem = {
  title: string;
  slug: string;
  image: string;
  client: string;
};

const workData: WorkItem[] = [
  {
    title: "Raqamyah Platform UI Development",
    slug: "https://raqamyah.com/en",
    image: "/images/work/work-img-91.jpg",
    client: "Raqamyah",
  },
  {
    title: "Citibank Hong Kong Web Interface",
    slug: "https://www.citibank.com.hk/portal/home_english/hkcb_Home.htm",
    image: "/images/work/work-img-22.jpg",
    client: "Citibank",
  },
  {
    title: "Hold The Magic Website",
    slug: "https://holdthemagic.com/",
    image: "/images/work/work-img-90.jpg",
    client: "Hold The Magic",
  },
];

const LatestWork = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100">
      <div className="container py-16 xl:py-32">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black pb-7 mb-12">
          <h2 className="text-2xl xl:text-3xl font-semibold">
            Latest Works
          </h2>
          <p className="text-lg text-orange-500 font-medium">( 04 )</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workData.map((item, index) => (
            
            <div
              key={index}
              className="group flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2"
            >
              
              {/* Image */}
              <div className="relative w-full h-[260px] overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition">

                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Hover Button */}
                <Link
                  href={item.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full text-sm font-medium">
                    View Project →
                  </span>
                </Link>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <Link href={item.slug} target="_blank">
                  <h5 className="text-lg font-semibold transition group-hover:text-orange-500">
                    {item.title}
                  </h5>
                </Link>

                <p className="text-sm text-gray-500">
                  {item.client}
                </p>
              </div>

            </div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestWork;