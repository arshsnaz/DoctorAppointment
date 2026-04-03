import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import doc1 from "@/assets/doctors/doc1.png";
import doc2 from "@/assets/doctors/doc2.png";
import doc3 from "@/assets/doctors/doc3.png";
import doc4 from "@/assets/doctors/doc4.png";
import doc5 from "@/assets/doctors/doc5.png";
import doc6 from "@/assets/doctors/doc6.png";

const testimonials = [
  {
    text: "Dr. Montgomery is fantastic! He listened carefully to all my concerns and provided clear, actionable advice. I felt truly cared for and supported throughout the entire consultation process.",
    name: "Sophia M.",
    date: "November 16",
    img: doc3,
  },
  {
    text: "I highly recommend Dr. Harper for his professionalism and dedication. He made me feel comfortable and explained everything clearly.",
    name: "James L.",
    date: "October 2",
    img: doc5,
  },
  {
    text: "The best doctor I have ever visited. The appointment process was smooth and the care was exceptional.",
    name: "Priya S.",
    date: "September 21",
    img: doc6,
  },
];

const warningCards = [
  {
    img: doc1,
    title: "Chronic Fatigue",
    desc: "Feeling constantly tired despite adequate rest could indicate an underlying condition.",
  },
  {
    img: doc2,
    title: "Unexplained Weight Changes",
    desc: "Sudden weight loss or gain without a clear cause should be addressed.",
  },
  {
    img: doc3,
    title: "Frequent Headaches",
    desc: "Recurring headaches or migraines may require further evaluation.",
  },
  {
    img: doc4,
    title: "Digestive Issues",
    desc: "Bloating, stomach pain, or irregular bowel movement may need attention.",
  },
  {
    img: doc5,
    title: "Shortness of Breath",
    desc: "Difficulty breathing during normal activities could signal a serious health issue.",
  },
  {
    img: doc6,
    title: "Persistent Cough or Sore Throat",
    desc: "Especially if it lasts more than two weeks or is accompanied by fever.",
  },
];

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % testimonials.length), 3500);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          What Patients
          <br />
          Say About Dr. Harper
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          We&apos;re proud to have helped thousands of patients take steps toward better health.
        </p>
      </div>

      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-4 text-4xl font-bold leading-none text-primary">&ldquo;</div>
        <p className="text-sm leading-7 text-foreground/80 sm:text-base">{testimonial.text}</p>
        <div className="mt-6 flex items-center gap-3">
          <img
            src={testimonial.img}
            alt={testimonial.name}
            className="h-10 w-10 rounded-full border-2 border-background object-cover shadow-sm"
          />
          <div>
            <div className="font-semibold text-foreground">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{testimonial.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Index = () => {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] bg-white p-6 shadow-[0_16px_64px_rgba(44,83,100,0.16)] sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground sm:text-sm">General Practitioner</span>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Achieve the best version of your <span className="text-primary">health</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
              Take the first step toward better health with personalized care.
            </p>
            <div className="mt-8">
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:px-8 sm:py-3.5 sm:text-base"
              >
                Consultation
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-full max-w-md rounded-[2rem] bg-slate-50 p-4 shadow-sm sm:p-6">
              <img src={doc1} alt="Doctor" className="mx-auto w-full max-w-[340px] object-contain" />
            </div>
            <div className="max-w-md rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="text-3xl font-bold leading-none text-primary">&ldquo;</div>
              <p className="mt-2 text-sm leading-7 text-foreground/80 sm:text-base">
                I&apos;m here to provide expert care, guide you through your health concerns, and help you live a healthier life.
              </p>
              <p className="mt-4 text-right text-sm font-semibold text-primary sm:text-base">Dr. Harper Montgomery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-[2rem] bg-white p-5 shadow-sm sm:grid-cols-4 sm:p-8">
          {[
            { label: "Successful Diagnoses", value: "1,200+", desc: "Ensuring accurate and timely care." },
            { label: "On-Time Consultations", value: "99%", desc: "Your time is our priority." },
            { label: "Recovery Success Rate", value: "99%", desc: "Helping patients achieve optimal health outcomes." },
            { label: "Lifestyle Plans Delivered", value: "500+", desc: "Supporting healthier daily routines." },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-slate-50 p-4 sm:p-5">
              <div className="text-sm font-semibold text-foreground">{stat.label}</div>
              <div className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">{stat.desc}</div>
              <div className="mt-4 text-2xl font-extrabold text-primary sm:text-3xl">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-sm lg:grid-cols-[320px_1fr] lg:p-8">
          <div className="overflow-hidden rounded-[1.5rem]">
            <img src={doc2} alt="About Dr. Harper Montgomery" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="flex flex-col gap-4 text-left">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">About Dr. Harper Montgomery</h2>
            <div className="text-sm font-medium text-muted-foreground sm:text-base">General Practitioner</div>
            <p className="text-sm leading-7 text-foreground/80 sm:text-base">
              Dr. Harper Montgomery is a compassionate and highly skilled General Practitioner dedicated to providing personalized healthcare for patients of all ages. With over 10 years of experience in family medicine, Dr. Montgomery specializes in preventive care, chronic disease management, and holistic health solutions.
            </p>
            <p className="rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm font-medium italic text-primary sm:text-base">
              &ldquo;Health is not just the absence of illness; it&apos;s about living your best life, physically and mentally. My mission is to help you achieve that balance.&rdquo;
            </p>
            <div className="text-sm leading-7 text-muted-foreground sm:text-base">
              <div><span className="font-semibold text-foreground">Location:</span> San Francisco, California</div>
              <div><span className="font-semibold text-foreground">Education:</span> M.D. Harvard Medical School · B.Sc. in Biology: UCLA</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-extrabold text-foreground sm:text-4xl">When Should You See a Doctor?</h2>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {warningCards.map((item) => (
            <article key={item.title} className="group relative rounded-[1.5rem] border border-border bg-white p-6 pt-10 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                className="absolute left-6 top-0 h-12 w-12 -translate-y-1/2 rounded-full border-4 border-white object-cover shadow-sm"
              />
              <h3 className="text-lg font-bold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/80">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-primary to-slate-900 text-white shadow-[0_8px_40px_rgba(44,83,100,0.18)]">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="flex items-center justify-center rounded-[1.5rem] bg-white/10 p-4">
              <img src={doc3} alt="Doctor" className="w-full max-w-[320px] object-contain" />
            </div>
            <div className="flex flex-col justify-center gap-5">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Not sure if you need to see a doctor?</h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Book a consultation today, and we&apos;ll help you determine the next steps toward better health.
              </p>
              <Link
                to="/login"
                className="inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.03] sm:px-8"
              >
                  Book a Consultation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
