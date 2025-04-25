
import ExperienceCard from './ExperienceCard';
import { Swiper, SwiperSlide } from 'swiper/react'; //swipper core
import { Navigation, Pagination } from 'swiper/modules'; //swipper required modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const futureJobs = [
    { title: "Tech Lead", place: "Meta", desc: "Liderar proyectos de innovación en Web3." },
  ];
  
  const presentJobs = [
    { title: "Frontend Dev", place: "Startup XYZ", desc: "React, Tailwind y diseño centrado en UX." },
    { title: "Frontend Dev", place: "Startup XYZ", desc: "React, Tailwind y diseño centrado en UX." },
  ];
  
  const pastJobs = [
    { title: "Junior Dev", place: "Dev Company", desc: "Primeros pasos en el desarrollo profesional." },
    { title: "Frontend Dev", place: "Startup XYZ", desc: "React, Tailwind y diseño centrado en UX." },
    { title: "Frontend Dev", place: "Startup XYZ", desc: "React, Tailwind y diseño centrado en UX." },
  ];

export default function Experience() {
  const isMobile = window.innerWidth < 768; // puedes refinar con useMediaQuery

  const renderCards = (jobs) =>
    isMobile ? (
    //   <Swiper spaceBetween={20} slidesPerView={1}>
    <Swiper
    spaceBetween={20}
    slidesPerView={1}
    pagination={{ clickable: true }}
    navigation
    className="swiper-container"
    >
        {jobs.map((job, i) => (
          <SwiperSlide key={i}>
            <ExperienceCard
              frontTitle={job.title}
              frontPlace={job.place}
              backDescription={job.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      <div className="flex flex-col items-center gap-4">
        {jobs.map((job, i) => (
          <ExperienceCard
            key={i}
            frontTitle={job.title}
            frontPlace={job.place}
            backDescription={job.desc}
          />
        ))}
      </div>
    );

  return (
    <section id="experience" className="py-12 bg-background text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl text-center mb-4">Future</h3>
          {renderCards(futureJobs)}
        </div>

        <div>
          <h3 className="text-xl text-center mb-4">Present</h3>
          {renderCards(presentJobs)}
        </div>

        <div>
          <h3 className="text-xl text-center mb-4">Past</h3>
          {renderCards(pastJobs)}
        </div>
      </div>
    </section>
  );
}



/*
import ExperienceCard from './ExperienceCard';

const futureJobs = [
  { title: "Tech Lead", place: "Meta", desc: "Liderar proyectos de innovación en Web3." },
];

const presentJobs = [
  { title: "Frontend Dev", place: "Startup XYZ", desc: "React, Tailwind y diseño centrado en UX." },
  { title: "Frontend Dev", place: "Startup XYZ", desc: "React, Tailwind y diseño centrado en UX." },
];

const pastJobs = [
  { title: "Junior Dev", place: "Dev Company", desc: "Primeros pasos en el desarrollo profesional." },
  { title: "Frontend Dev", place: "Startup XYZ", desc: "React, Tailwind y diseño centrado en UX." },
  { title: "Frontend Dev", place: "Startup XYZ", desc: "React, Tailwind y diseño centrado en UX." },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 bg-background text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl text-center mb-4">Future</h3>
          <div className="flex flex-col items-center gap-4">
            {futureJobs.map((job, i) => (
              <ExperienceCard key={i} frontTitle={job.title} frontPlace={job.place} backDescription={job.desc} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl text-center mb-4">Present</h3>
          <div className="flex flex-col items-center gap-4">
            {presentJobs.map((job, i) => (
              <ExperienceCard key={i} frontTitle={job.title} frontPlace={job.place} backDescription={job.desc} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl text-center mb-4">Past</h3>
          <div className="flex flex-col items-center gap-4">
            {pastJobs.map((job, i) => (
              <ExperienceCard key={i} frontTitle={job.title} frontPlace={job.place} backDescription={job.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  */