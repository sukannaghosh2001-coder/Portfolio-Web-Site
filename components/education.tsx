export default function Education() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'MAKAUT, Meghnad Saha Institute of Technology',
      duration: '2024 - 2026',
      cgpa: '8.31/10',
      description: 'Advanced studies in computer applications with focus on web development and software engineering.',
    },
    {
      degree: 'Bachelor of Science (General)',
      institution: 'University of Calcutta, Basanti Devi College',
      duration: '2020 - 2023',
      cgpa: '8.52/10',
      description: 'Comprehensive foundation in computer science, mathematics, and related disciplines.',
    },
    {
      degree: 'Class XII (WBCHSE)',
      institution: 'Kamala Girls School, Kolkata',
      duration: '2020',
      percentage: '91%',
      description: 'Higher secondary education with strong performance in science and mathematics.',
    },
    {
      degree: 'Class X (WBCHSE)',
      institution: "Beltala Girls' High School",
      duration: '2018',
      percentage: '86.85%',
      description: 'Secondary education foundation with comprehensive academic excellence.',
    },
  ]

  return (
    <section id="education" className="min-h-screen px-6 md:px-12 py-24 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Education</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Academic Journey & Achievements
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-semibold mt-2">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">{edu.duration}</p>
                  <p className="text-2xl font-bold text-primary">
                    {edu.cgpa || edu.percentage}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div>
            <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Certifications & Workshops</h3>
            <h4 className="text-2xl font-bold text-foreground mb-6">Learning</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground">Diploma in Computer Application - WEBEL</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground">Unity Game Development Workshop</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground">Arduino Hands-on Workshop</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground">AI Tools Workshop 2024 - be10X</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Languages</h3>
            <h4 className="text-2xl font-bold text-foreground mb-6">Communication</h4>
            <div className="flex flex-wrap gap-3">
              {['English (Professional)', 'Hindi (Professional)', 'Bangla (Native)'].map((lang) => (
                <span key={lang} className="px-4 py-2 bg-secondary rounded-lg text-foreground font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Interests</h3>
            <h4 className="text-2xl font-bold text-foreground mb-6">Hobbies</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground">Reading Story Books</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground">Trying different AI models</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
