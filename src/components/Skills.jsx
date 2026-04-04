import {
  Users,
  Laptop,
  Brain,
  Heart,
  UsersRound,
  BarChart3,
  Lightbulb,
  FileSpreadsheet,
  Palette,
  Database,
  Share2,
  Shield,
  Ear
} from 'lucide-react';

const groups = [
  {
    title: 'Core HR Competencies',
    icon: Users,
    tone: 'pink',
    items: [
      { label: 'Employee Engagement', icon: Heart },
      { label: 'Recruitment Support', icon: UsersRound },
      { label: 'Performance Management', icon: BarChart3 },
      { label: 'HR Operations', icon: Lightbulb }
    ]
  },
  {
    title: 'Technical & Tools',
    icon: Laptop,
    tone: 'purple',
    items: [
      { label: 'MS Office (Excel, PPT)', icon: FileSpreadsheet },
      { label: 'Canva / Design', icon: Palette },
      { label: 'Data Entry & Analysis', icon: Database },
      { label: 'Social Media Sourcing', icon: Share2 }
    ]
  },
  {
    title: 'Soft Skills',
    icon: Brain,
    tone: 'green',
    items: [
      { label: 'Emotional Intelligence', icon: Heart },
      { label: 'Confidentiality', icon: Shield },
      { label: 'Active Listening', icon: Ear },
      { label: 'Team Coordination', icon: Users }
    ]
  }
];

const tones = {
  pink: {
    card: 'tinted-pink',
    icon: 'icon-pink',
    chip: 'chip-pink'
  },
  purple: {
    card: 'tinted-purple',
    icon: 'icon-purple',
    chip: 'chip-purple'
  },
  green: {
    card: 'tinted-green',
    icon: 'icon-green',
    chip: 'chip-green'
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section reveal">
      <h3 className="section-title">Skills & Expertise</h3>
      <p className="section-line" />
      <div className="three-grid">
        {groups.map(({ title, icon: Icon, items, tone }) => (
          <article className={`glass-card mini-card ${tones[tone].card}`} key={title}>
            <span className={`icon-wrap ${tones[tone].icon}`}><Icon size={24} /></span>
            <h4>{title}</h4>
            <ul className="chip-list">
              {items.map(({ label, icon: ItemIcon }) => (
                <li key={label} className={tones[tone].chip}>
                  <ItemIcon size={16} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
