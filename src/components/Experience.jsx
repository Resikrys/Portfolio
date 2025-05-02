//Modo light-dark
import ExperienceCard from './ExperienceCard';
import dinoIcon from '../images/dino_icon.png';
import { Swiper, SwiperSlide } from 'swiper/react'; //swipper core
import { Navigation, Pagination } from 'swiper/modules'; //swipper required modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const futureJobs = [
  { title: "Product Owner", place: "Freelance", desc: "Desarrollo de página web y mobile app fitness para la comunidad." },
  { title: "Fullstack Dev", place: "Freelance", desc: "React, Tailwind y diseño centrado en UX. Backend con Java/Spring & C#/.NET. DDBB con SQL & MongoDB" },
];

const presentJobs = [
  // { title: "Fullstack Dev", place: "Freelance", desc: "React, Tailwind y diseño centrado en UX." },
  { title: "Junior Dev", place: "Claimy", desc: "Primeros pasos en el desarrollo profesional. Frontend developer para la startup AM5." },
  { title: "Personal Trainer", place: "Synergym", desc: "Monitora de actividades dirigidas y entrenadora personal." },
];

const pastJobs = [
  // { title: "Junior Dev", place: "Claimy", desc: "Primeros pasos en el desarrollo profesional. Frontend developer para la startup AM5." },
  { title: "Técnico de laboratorio", place: "Hospital Vall d'Hebron", desc: "Procesamiento de muestras biológicas y cultivos celulares para ensayos oncológicos fase I." },
  { title: "Técnico de anatomía", place: "Hospital Vall d'Hebron", desc: "Procesamiento de muestras biológicas, técnicas de immunofluorescencia y análisis microscópico." },
];

export default function Experience() {
  const isMobile = window.innerWidth < 768;

  const renderCards = (jobs) =>
    isMobile ? (
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
    
    <section
      id="experience"
      className="py-12 bg-[var(--background-color)] text-[var(--white)]"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-[var(--primary-color)]">
        Experience
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-[var(--rosado-color)]">
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
      <div className="flex items-center justify-center my-12">
        {/* Línea izquierda con degradado */}
        <div className="h-[4px] w-1/4 bg-gradient-to-r from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
      
        {/* Icono central */}
        <img
          src={dinoIcon}
          alt="Separador dino"
          className="mx-4 w-10 h-10 object-contain"
        />
      
        {/* Línea derecha con degradado */}
        <div className="h-[4px] w-1/4 bg-gradient-to-l from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
      </div>
    </section>
  );
}


//Componente funcional
/*
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
*/



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