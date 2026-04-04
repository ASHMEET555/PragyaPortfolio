import { BookOpen, Award, CalendarDays } from 'lucide-react';

const projects = [
  {
    title: 'Organizational Behavior Analysis',
    icon: BookOpen,
    badge: 'Academic Project',
    desc: 'Analyzed 75+ business case studies focusing on Employee Management and Interpersonal Dynamics, enhancing critical thinking and strategic problem-solving skills necessary for HR scenarios.',
    points: ['75+ Case Studies', 'Employee Management', 'Strategic Problem-Solving']
  },
  {
    title: 'Event Management & Stakeholder Engagement',
    icon: CalendarDays,
    badge: 'Professional Development',
    desc: 'Supported the coordination of key summits (CXO/CMO/CFO Summits), managing logistics for guest speakers and attendees, and facilitating professional networking.',
    points: ['CXO/CMO/CFO Summits', 'Logistics Management', 'Professional Networking']
  },
  {
    title: 'Advanced Certificate in HR Operations',
    icon: Award,
    badge: 'Certification',
    desc: 'Actively pursuing specialized certification to build role-relevant knowledge in HR operations, recruitment processes, and employee lifecycle management.',
    points: ['HR Operations', 'Recruitment Processes', 'Employee Lifecycle']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section reveal">
      <h3 className="section-title">Projects & Professional Development</h3>
      <p className="section-line" />
      <div className="three-grid">
        {projects.map(({ title, desc, icon: Icon, badge, points }) => (
          <article className="glass-card mini-card project-card" key={title}>
            <span className="icon-wrap icon-pink"><Icon size={24} /></span>
            <p className="project-badge">{badge}</p>
            <h4>{title}</h4>
            <p>{desc}</p>
            <ul className="project-points">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
