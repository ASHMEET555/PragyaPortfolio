import { BriefcaseBusiness, CalendarDays, MapPin, TrendingUp } from 'lucide-react';

const experiences = [
  {
    role: 'Corporate Internship',
    org: 'Skyway Realty',
    duration: 'June 2025 - July 2025',
    location: 'Bangalore',
    type: 'Internship',
    points: [
      'Acquired practical insights into consumer behavior and sales coordination, applying analytical skills in market analysis to support business goals.',
      'Gained hands-on experience in business operations and internal logistics by coordinating client engagement activities.',
      'Supported team efficiency and developed analytical and reporting skills by managing strategies and tracking progress against targets.'
    ]
  },
  {
    role: 'Social Internship',
    org: 'Amogh Trust',
    duration: 'June 2024 - July 2024',
    location: 'Bangalore',
    type: 'Internship',
    points: [
      'Managed and coordinated volunteer scheduling and activities, ensuring smooth execution of daily tasks and improving operational efficiency.',
      'Enhanced stakeholder engagement by 20% through the authorship, design, and presentation of the Annual Report.',
      'Applied high emotional intelligence and adaptability while gaining insights into the management of special needs programs.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section reveal">
      <h3 className="section-title">Experience</h3>
      <p className="section-line" />
      <div className="stack-cards">
        {experiences.map((item) => (
          <article className="glass-card row-card experience-card" key={item.role + item.org}>
            <span className="icon-wrap large icon-purple"><BriefcaseBusiness size={28} /></span>
            <div>
              <div className="experience-head">
                <h4>{item.role}</h4>
                <span className="experience-pill">{item.type}</span>
              </div>
              <p className="meta">{item.org}</p>
              <p className="meta icon-meta"><CalendarDays size={16} /> {item.duration}</p>
              <p className="meta icon-meta"><MapPin size={16} /> {item.location}</p>
              <ul className="point-list">
                {item.points.map((point) => (
                  <li key={point}><TrendingUp size={16} /> {point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
