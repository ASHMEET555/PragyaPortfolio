import { GraduationCap, CalendarDays } from 'lucide-react';

const educationData = [
  {
    institution: 'PES University',
    degree: 'Bachelor of Business Administration (BBA)',
    duration: '2023 - 2026',
    details: 'Specializing in Human Resources Management with a focus on Organizational Behavior and Employee Management.'
  },
  {
    institution: 'SMIM College',
    degree: 'Primary Education',
    duration: '2016 - 2023',
    details: 'Completed comprehensive primary and secondary education with strong academic performance.'
  }
];

export default function Education() {
  return (
    <section id="education" className="section reveal">
      <h3 className="section-title">Education</h3>
      <p className="section-line" />
      <div className="stack-cards">
        {educationData.map((item) => (
          <article className="glass-card row-card" key={item.institution}>
            <span className="icon-wrap large"><GraduationCap size={28} /></span>
            <div>
              <h4>{item.institution}</h4>
              <p className="meta">{item.degree}</p>
              <p className="meta icon-meta"><CalendarDays size={16} /> {item.duration}</p>
              <p>{item.details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
