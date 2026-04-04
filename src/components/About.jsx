import { Heart, Target, Users } from 'lucide-react';

const values = [
  {
    title: 'Empathy-Driven',
    desc: 'High emotional intelligence with a genuine passion for understanding and supporting people.',
    icon: Heart
  },
  {
    title: 'Goal-Oriented',
    desc: 'Strategic problem-solver with analytical skills to support business objectives.',
    icon: Target
  },
  {
    title: 'Team Player',
    desc: 'Excellent team coordination and collaboration skills with active listening abilities.',
    icon: Users
  }
];

export default function About() {
  return (
    <section id="about" className="section reveal">
      <h3 className="section-title">About Me</h3>
      <p className="section-line" />
      <article className="glass-card content-card about-card">
        <p>
          Enthusiastic and adaptable aspiring Human Resources professional with a strong foundation in
          <strong> Organizational Behavior </strong>
          and
          <strong> Employee Management </strong>
          principles. Passionate about building positive workplace culture, recruitment support, and employee
          engagement initiatives.
        </p>
        <p>
          Seeking an HR internship to leverage my knowledge of Employee Management principles and Recruitment
          Support skills. Committed to contributing to a positive organizational culture and leveraging a
          well-rounded perspective for HR Consulting.
        </p>
      </article>

      <div className="three-grid">
        {values.map(({ title, desc, icon: Icon }) => (
          <article className="glass-card mini-card" key={title}>
            <span className="icon-wrap">
              <Icon size={24} />
            </span>
            <h4>{title}</h4>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
