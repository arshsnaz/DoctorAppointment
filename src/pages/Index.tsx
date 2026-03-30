
import React, { useState, useEffect } from "react";

const testimonials = [
  {text: 'Dr. Montgomery is fantastic! He listened carefully to all my concerns and provided clear, actionable advice. I felt truly cared for and supported throughout the entire consultation process.', name: 'Sophia M.', date: 'November 16', img: '/src/assets/doctors/doc3.png'},
  {text: 'I highly recommend Dr. Harper for his professionalism and dedication. He made me feel comfortable and explained everything clearly.', name: 'James L.', date: 'October 2', img: '/src/assets/doctors/doc5.png'},
  {text: 'The best doctor I have ever visited. The appointment process was smooth and the care was exceptional.', name: 'Priya S.', date: 'September 21', img: '/src/assets/doctors/doc6.png'}
];

function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i+1)%testimonials.length), 3500);
    return () => clearInterval(timer);
  }, []);
  const t = testimonials[idx];
  return (
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'2em',maxWidth:'1100px',margin:'0 auto'}}>
      <div style={{flex:'1 1 320px',minWidth:'260px'}}>
        <h2 style={{fontSize:'2em',fontWeight:700,color:'#1a2236',marginBottom:'0.5em',textAlign:'left'}}>What Patients<br/>Say About Dr. Harper</h2>
        <div style={{color:'#6b7280',fontSize:'1.1em',marginBottom:'1.5em',textAlign:'left'}}>We're proud to have helped thousands of patients take steps toward better health.</div>
      </div>
      <div style={{flex:'2 1 420px',minWidth:'320px',background:'#fff',borderRadius:'1.2em',boxShadow:'0 8px 32px 0 rgba(44,83,100,0.22)',padding:'2em 2.5em',display:'flex',flexDirection:'column',gap:'1em',alignItems:'flex-start',position:'relative',overflow:'hidden',minHeight:'180px'}}>
        <div style={{color:'#2563eb',fontSize:'1.5em',fontWeight:700}}>&ldquo;</div>
        <div style={{fontSize:'1.1em',color:'#374151',marginBottom:'1em'}}>{t.text}</div>
        <div style={{display:'flex',alignItems:'center',gap:'0.8em',marginTop:'1em'}}>
          <img src={t.img} alt={t.name} style={{width:'38px',height:'38px',borderRadius:'50%',objectFit:'cover',background:'#f8fafc',border:'2px solid #fff',boxShadow:'0 2px 8px 0 rgba(44,83,100,0.08)'}} />
          <div>
            <div style={{fontWeight:600,color:'#222'}}>{t.name}</div>
            <div style={{fontSize:'0.95em',color:'#6b7280'}}>{t.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Index = () => {
  return (
    <main className="premium-homepage" style={{width:'100%',margin:'0 auto',padding:'0'}}>
      {/* Hero Section */}
      <section className="premium-hero-section" style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'flex-start',gap:'2.5em',padding:'3.5em 2em 2.5em 3em',background:'#fff',borderRadius:'2.5em',boxShadow:'0 16px 64px 0 rgba(44,83,100,0.22), 0 2px 24px 0 rgba(44,83,100,0.18)',margin:'2em 0',position:'relative',minHeight:'420px'}}>
        <div className="premium-hero-content" style={{flex:'1 1 480px',minWidth:'320px',maxWidth:'600px',display:'flex',flexDirection:'column',gap:'1.8em',justifyContent:'center',alignItems:'flex-start',textAlign:'left'}}>
          <span className="premium-hero-label" style={{fontSize:'1.2em',color:'#6b7280',fontWeight:500,marginBottom:'0.5em'}}>General Practitioner</span>
          <h1 className="premium-hero-title" style={{fontSize:'3.2em',fontWeight:800,lineHeight:1.1,marginBottom:'0.2em',color:'#1a2236'}}>
            Achieve the best version<br />of your <span className="premium-hero-highlight" style={{color:'#2563eb'}}>health</span>
          </h1>
          <p className="premium-hero-desc" style={{fontSize:'1.25em',color:'#374151',marginBottom:'1.2em'}}>Take the first step toward better health with personalized care.</p>
          <a href="/login" className="premium-hero-btn" style={{background:'#2563eb',color:'#fff',fontWeight:700,fontSize:'1.2em',borderRadius:'2em',padding:'1em 3em',textDecoration:'none',boxShadow:'0 2px 12px 0 rgba(37,99,235,0.10)',transition:'background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s',width:'fit-content'}}>Consultation</a>
        </div>
        <div style={{flex:'1 1 420px',minWidth:'320px',display:'flex',flexDirection:'column',alignItems:'center',gap:'0.2em',justifyContent:'center'}}>
          <img src="/src/assets/doctors/doc1.png" alt="Doctor" style={{width:'320px',height:'400px',objectFit:'contain',borderRadius:'1.2em',marginBottom:'-0.5em'}} />
          <span style={{color:'#2563eb',fontSize:'2.2em',fontWeight:700,marginTop:'0.1em'}}>&ldquo;</span>
          <span style={{fontSize:'1.18em',color:'#374151',fontStyle:'italic',lineHeight:1.6,display:'block',margin:'0.1em 0'}}>I'm here to provide expert care, guide you through your health concerns, and help you live a healthier life.</span>
          <span style={{color:'#2563eb',fontWeight:700,fontSize:'1.15em'}}>Dr. Harper Montgomery</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="premium-stats-section" style={{background:'#fff',borderRadius:'2em',boxShadow:'0 4px 32px 0 rgba(44,83,100,0.08)',margin:'2em 0',padding:'2.5em 1em'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2em',maxWidth:'900px',margin:'0 auto',textAlign:'left'}}>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'0.5em'}}>
            <div style={{fontWeight:600,fontSize:'1.2em',color:'#222'}}>Successful Diagnoses</div>
            <div style={{color:'#6b7280',fontSize:'1em',marginBottom:'0.5em'}}>Ensuring accurate and timely care.</div>
            <div style={{fontWeight:800,fontSize:'2.2em',color:'#2563eb'}}>1,200+</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'0.5em'}}>
            <div style={{fontWeight:600,fontSize:'1.2em',color:'#222'}}>On-Time Consultations</div>
            <div style={{color:'#6b7280',fontSize:'1em',marginBottom:'0.5em'}}>Your time is our priority.</div>
            <div style={{fontWeight:800,fontSize:'2.2em',color:'#2563eb'}}>99%</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'0.5em'}}>
            <div style={{fontWeight:600,fontSize:'1.2em',color:'#222'}}>Recovery Success Rate</div>
            <div style={{color:'#6b7280',fontSize:'1em',marginBottom:'0.5em'}}>Helping patients achieve optimal health outcomes.</div>
            <div style={{fontWeight:800,fontSize:'2.2em',color:'#2563eb'}}>99%</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'0.5em'}}>
            <div style={{fontWeight:600,fontSize:'1.2em',color:'#222'}}>Lifestyle Plans Delivered</div>
            <div style={{color:'#6b7280',fontSize:'1em',marginBottom:'0.5em'}}>Supporting healthier daily routines.</div>
            <div style={{fontWeight:800,fontSize:'2.2em',color:'#2563eb'}}>500+</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="premium-about-section" style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'2em',background:'#fff',borderRadius:'2em',boxShadow:'0 4px 32px 0 rgba(44,83,100,0.08)',margin:'2em 0',padding:'2.5em 1em'}}>
        <div className="premium-about-image" style={{flex:'1 1 320px',minWidth:'220px',maxWidth:'340px'}}>
          <img src="/src/assets/doctors/doc2.png" alt="About Dr. Harper Montgomery" style={{width:'100%',height:'auto',borderRadius:'2em',objectFit:'cover',boxShadow:'0 8px 32px 0 rgba(44,83,100,0.10)'}} />
        </div>
        <div className="premium-about-content" style={{flex:'2 1 400px',minWidth:'260px',textAlign:'left',alignItems:'flex-start',display:'flex',flexDirection:'column',gap:'1em'}}>
          <h2 style={{fontSize:'2.2em',fontWeight:700,marginBottom:'0.2em'}}>About Dr. Harper Montgomery</h2>
          <div style={{color:'#6b7280',fontWeight:500,marginBottom:'1em'}}>General Practitioner</div>
          <p style={{fontSize:'1.1em',marginBottom:'1em'}}>Dr. Harper Montgomery is a compassionate and highly skilled General Practitioner dedicated to providing personalized healthcare for patients of all ages. With over 10 years of experience in family medicine, Dr. Montgomery specializes in preventive care, chronic disease management, and holistic health solutions.</p>
          <p className="premium-about-quote" style={{fontStyle:'italic',color:'#2563eb',fontWeight:500,margin:'0.5em 0'}}>"Health is not just the absence of illness; it's about living your best life, physically and mentally. My mission is to help you achieve that balance."</p>
          <div className="premium-about-meta" style={{marginTop:'1em'}}>
            <span><b>Location:</b> San Francisco, California</span><br/>
            <span><b>Education:</b> M.D. Harvard Medical School · B.Sc. in Biology: UCLA</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="premium-testimonials-section" style={{margin:'2em 0',padding:'2.5em 1em',background:'#fff',borderRadius:'2em',boxShadow:'0 4px 32px 0 rgba(44,83,100,0.08)'}}>
        <TestimonialsCarousel />
      </section>


      <section style={{margin:'3em 0'}}>
        <h2 style={{textAlign:'left',fontSize:'2.4em',fontWeight:800,marginBottom:'1.8em',color:'#1a2236',marginLeft:'0.5em'}}>When Should You See a Doctor?</h2>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',
          gap:'2em',
          justifyContent:'flex-start',
          alignItems:'stretch',
          maxWidth:'1200px',
          margin:'0 auto'
        }}>
          {[
            {
              img: '/src/assets/doctors/doc1.png',
              title: 'Chronic Fatigue',
              desc: 'Feeling constantly tired despite adequate rest could indicate an underlying condition.'
            },
            {
              img: '/src/assets/doctors/doc2.png',
              title: 'Unexplained Weight Changes',
              desc: 'Sudden weight loss or gain without a clear cause should be addressed.'
            },
            {
              img: '/src/assets/doctors/doc3.png',
              title: 'Frequent Headaches',
              desc: 'Recurring headaches or migraines may require further evaluation.'
            },
            {
              img: '/src/assets/doctors/doc4.png',
              title: 'Digestive Issues',
              desc: 'Bloating, stomach pain, or irregular bowel movement may need attention.'
            },
            {
              img: '/src/assets/doctors/doc5.png',
              title: 'Shortness of Breath',
              desc: 'Difficulty breathing during normal activities could signal a serious health issue.'
            },
            {
              img: '/src/assets/doctors/doc6.png',
              title: 'Persistent Cough or Sore Throat',
              desc: 'Especially if it lasts more than two weeks or is accompanied by fever.'
            }
          ].map((item, idx) => (
            <div key={idx} style={{
              background:'#fff',
              borderRadius:'1.5em',
              boxShadow:'0 4px 32px 0 rgba(44,83,100,0.08)',
              border:'1.5px solid #f1f5f9',
              padding:'2.2em 2em 2em 2em',
              display:'flex',
              flexDirection:'column',
              alignItems:'flex-start',
              minHeight:'210px',
              position:'relative',
              transition:'box-shadow 0.2s',
              cursor:'pointer',
              overflow:'visible'
            }}>
              <img src={item.img} alt={item.title} style={{width:'48px',height:'48px',borderRadius:'50%',objectFit:'cover',position:'absolute',top:'-24px',left:'24px',boxShadow:'0 2px 8px 0 rgba(44,83,100,0.10)',border:'3px solid #fff'}} />
              <div style={{marginTop:'2em'}}>
                <div style={{fontWeight:700,fontSize:'1.18em',color:'#2563eb',marginBottom:'0.2em'}}>{item.title}</div>
                <div style={{color:'#374151',fontSize:'1.05em',marginTop:'0.2em',lineHeight:1.5}}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="premium-cta-section" style={{
        background:'linear-gradient(90deg, #2563eb 0%, #1e293b 100%)',
        color:'#fff',
        borderRadius:'2em',
        boxShadow:'0 8px 40px 0 rgba(44,83,100,0.18)',
        margin:'2em 0',
        padding:'0',
        overflow:'hidden',
        position:'relative',
        minHeight:'340px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexWrap:'wrap',
        gap:'0',
      }}>
        <div style={{
          flex:'1 1 340px',
          minWidth:'220px',
          maxWidth:'420px',
          width:'100%',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          background:'none',
          padding:'0',
        }}>
          <img src="/src/assets/doctors/doc3.png" alt="Doctor" style={{width:'100%',maxWidth:'320px',height:'auto',objectFit:'contain',borderRadius:'2em',background:'none',boxShadow:'none'}} />
        </div>
        <div style={{
          flex:'2 1 400px',
          minWidth:'260px',
          padding:'2em 1.5em',
          textAlign:'left',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          gap:'2em',
          width:'100%',
        }}>
          <h2 style={{fontSize:'2.1em',fontWeight:800,marginBottom:'0.5em',color:'#fff',lineHeight:1.2}}>Not sure if you need to see a doctor?</h2>
          <p style={{fontSize:'1.1em',fontWeight:500,marginBottom:'1.5em',color:'#e0e7ef',lineHeight:1.5}}>Book a consultation today, and we'll help you determine the next steps toward better health.</p>
          <a href="/login" className="premium-cta-btn" style={{background:'#fff',color:'#2563eb',fontWeight:700,fontSize:'1.08em',borderRadius:'2em',padding:'0.9em 2.2em',textDecoration:'none',boxShadow:'0 2px 12px 0 rgba(37,99,235,0.10)',transition:'background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s',width:'fit-content',maxWidth:'100%'}}>Book a Consultation &rarr;</a>
        </div>
      </section>
    </main>
  );
};

export default Index;
