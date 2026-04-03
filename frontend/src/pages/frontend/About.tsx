import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-2xl font-bold text-foreground text-center mb-10">
        ABOUT <span className="text-primary">US</span>
      </h1>

      <div className="grid gap-10 mb-16 items-start md:grid-cols-[minmax(0,360px)_1fr]">
        <img src={aboutImage} alt="About us" className="w-full rounded-xl object-cover aspect-[4/3]" loading="lazy" />
        <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <h3 className="text-foreground font-bold mt-4">Our Vision</h3>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-foreground mb-6">
          WHY <span className="text-primary">CHOOSE US</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            { title: "Efficiency", desc: "Streamlined appointment scheduling that fits into your busy lifestyle." },
            { title: "Convenience", desc: "Access to a network of trusted healthcare professionals in your area." },
            { title: "Personalization", desc: "Tailored recommendations and reminders to help you stay on top of your health." },
          ].map((item, i) => (
            <div key={i} className="border border-border p-10 flex flex-col gap-3 hover:bg-primary hover:text-primary-foreground transition-colors group cursor-pointer">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
