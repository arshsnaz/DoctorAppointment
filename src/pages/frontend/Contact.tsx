const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-foreground text-center mb-10">
        CONTACT <span className="text-primary">US</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600"
            alt="Contact"
            className="w-full rounded-xl object-cover h-[350px]"
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">OUR OFFICE</h3>
            <p className="text-sm text-muted-foreground">
              54709 Willms Station<br />
              Suite 350, Washington, USA
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Tel: (415) 555-0132<br />
              Email: prescripto@email.com
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">CAREERS AT PRESCRIPTO</h3>
            <p className="text-sm text-muted-foreground mb-4">Learn more about our teams and job openings.</p>
            <button className="border border-foreground px-8 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
