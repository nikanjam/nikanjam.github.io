"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

export default function Home() {
  const [image, setImage] = useState<HTMLImageElement | null>(null)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      setImage(img)
    }
    img.src = "/photo.png"
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12">
        <header className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                {image ? (
                    <img
                    src={image.src}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <div className="text-muted-foreground">Loading...</div>
                  </div>
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
                AMIR<br />NIKANJAM
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-primary mb-8 font-medium">
                Junior Solutions Architect | Linux, Automation &amp; SRE
              </p>
              <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground">
                <a
                  href="https://github.com/nikanjam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <Github className="w-5 h-5" />
                  nikanjam
                </a>
                <a
                  href="https://linkedin.com/in/amir-nikanjam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="mailto:amirnikanjam3000@gmail.com"
                  
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <a
                  href="https://t.me/amirnikanjam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <MessageCircle className="w-5 h-5" />
                  @amirnikanjam
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3 inline-block">
              SUMMARY
            </h2>
            <p className="text-foreground leading-relaxed text-lg whitespace-pre-line">
              I am a Linux-focused Site Reliability Engineer with strong experience in automation, monitoring, and infrastructure operations. I work hands-on with production systems, designing reliable workflows using Bash scripting, CI/CD pipelines, and open-source tools. I enjoy simplifying complex infrastructure problems through automation and am actively growing toward a Junior Solutions Architect role in remote, open-source-driven environments.

            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              PROFESSIONAL EXPERIENCE
            </h2>
            
            <div className="space-y-10">
              <div className="relative pl-8 border-l-4 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Site Reliability Engineer (SRE)
                  </h3>
                  <span className="text-primary font-medium text-lg">Dec 2024 – Present</span>
                </div>
                <p className="text-primary mb-5 font-medium text-lg">Limoohost</p>
                <ul className="space-y-2.5 text-foreground list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Automated infrastructure operations using 50+ Bash scripts (deployment, backup, monitoring, user management).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Implemented Prometheus and Grafana for system and service monitoring.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Improved performance and reliability using NFS shared storage.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Managed Linux systems and secured servers with iptables, UFW, and CSF.</span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-4 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Technical Support Specialist
                  </h3>
                  <span className="text-primary font-medium text-lg">Mar 2024 – Dec 2024</span>
                </div>
                <p className="text-primary mb-5 font-medium text-lg">Limoohost</p>
                <ul className="space-y-2.5 text-foreground list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Provided Linux hosting support and server troubleshooting.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Assisted with server administration to maintain uptime and service stability.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Troubleshot server, email, domain, and service-related issues for hosting customers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Assisted with server administration tasks to maintain uptime and reliability.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              PROJECTS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-colors shadow-lg ">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Mail Transfer
                  </h3>
                  <span className="text-primary font-medium">Jan 2024 – Present</span>
                </div>
                <p className="text-foreground mb-3 text-sm">This project involves creating a simple and effective email transfer system using open-source tools.</p>
                <ul className="space-y-2 text-foreground list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Developed a tool for secure and reliable email transfer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Implemented authentication mechanisms and logging features.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Integrated with common email servers for smooth communication.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

<section>
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3 inline-block">
              VOLUNTEERING
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Open Source Contributor
                  </h3>
                  <span className="text-primary font-medium">Jan 2024 – Present</span>
                </div>
                <p className="text-primary mb-3 font-medium text-lg">GitHub</p>
                <p className="text-foreground">
                  Contributing to open-source projects by fixing bugs, writing documentation, and adding new features.
                </p>
                <br />
                <a href="https://github.com/nikanjam" target="_blank" rel="noopener noreferrer" className="text-primary font-bold">View Profile</a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              SKILLS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-semibold text-primary mb-4 text-lg">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Linux &amp; Systems", "Automation &amp; SRE", "Monitoring &amp; Observability", "CI/CD &amp; Containers", "Security &amp; Networking"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-semibold text-primary mb-4 text-lg">Platforms & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Bash", "Prometheus", "Grafana", "NFS", "iptables", "UFW", "CSF"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-semibold text-primary mb-4 text-lg">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Communication", "Teamwork"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              EDUCATION
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Bachelor&#039;s degree, Computer Software
                  </h3>
                  <span className="text-primary font-medium">2022 – 2025</span>
                </div>
                <p className="text-muted-foreground">Montazeri University</p>
              </div>
            </div>
          </section>

          <section className="pb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3 inline-block">
              LANGUAGES
            </h2>
            
            <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
              <ul className="space-y-3 text-foreground list-none">
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span className="text-lg">Persian</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span className="text-lg">English</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
