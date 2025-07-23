"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Calendar, User, Globe, Heart, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResumePage() {
  const experiences = [
    {
      period: "Mar 2023 - Present",
      title: "Software Test Engineer",
      company: "Rasan",
      project: "Tameeni Health Project",
      responsibilities: [
        "Developing Health and Fintech Applications",
        "Reviewing and analyzing project requirements",
        "Collaborating in the creation and implementation of test cases using Azure DevOps",
        "Composing comprehensive bug reports",
        "Utilizing Microsoft SQL Server",
        "API testing with Robot Framework",
        "Design Testing Release Note",
      ],
    },
    {
      period: "Feb 2023 - Mar 2023",
      title: "Software Test Engineer",
      company: "VOIS",
      responsibilities: [
        "Conduct testing procedures on the billing system",
        "Automated testing using a selenium framework",
        "Administer Smoke, Sanity, Integration, and Regression tests",
      ],
    },
    {
      period: "Oct 2019 - Jan 2023",
      title: "Professional Test Engineer",
      company: "DXC Technology Egypt",
      project: "Misr Insurance Company Project",
      responsibilities: [
        "Understanding the user's requirements to check the system's feasibility",
        "Creating and execution of test cases and preparation of test data",
        "Functional testing of the product",
        "Working on bugs and product enhancement requests",
        "Reporting bugs with detailed steps and severity analysis",
        "Verify bug resolutions to ensure product quality",
        "Lead BUs training and UAT sessions",
      ],
    },
    {
      period: "Jul 2017 - Oct 2019",
      title: "System Quality Control",
      company: "Egyptian Life Takaful GIG",
      responsibilities: [
        "Full testing for all company system new projects internal & external development",
        "Monitoring the life production system",
      ],
    },
  ]

  const tools = [
    "Java SE with OOP",
    "SQL",
    "HP ALM",
    "Azure DevOps",
    "Jira",
    "Selenium Web Driver",
    "SHAFT Engine",
    "Robot Framework",
    "Playwright",
    "Postman",
    "Rest Assured",
  ]

  const personalSkills = [
    "Strong documentation and reporting skills",
    "Interpersonal, collaboration, and problem-solving skills",
    "Effective communication and negotiation skills",
    "Self-learner",
    "Efficiency to work with a team",
  ]

  const technicalSkills = [
    "Create and execute comprehensive test plans based on functional coverage",
    "Convert end-to-end user scenarios to test cases",
    "Execute defined test cases to uncover bugs and regression issues",
    "API testing with Robot Framework",
    "Experience with bug tracking tools like Azure DevOps & HP ALM",
    "Coached and mentored junior software testers",
  ]

  const certificates = [
    "ISTQB FL (International Software Testing Qualification Board)",
    "Automation Testing Selenium Web Driver (Self Study)",
    "Robot Framework Test Automation (LinkedIn Learning)",
  ]

  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())

  useEffect(() => {
    setIsLoaded(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-100">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 border-b border-green-500/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-pulse-slow"></div>
        <div className="relative container mx-auto px-6 py-16">
          <div
            className={`text-center space-y-6 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 animate-glow">
              <div className="bg-black rounded-full p-1">
                <img
                  src="/images/ahmed-profile.jpg"
                  alt="Ahmed Salah Eldin - Senior Software Testing Engineer"
                  className="w-32 h-32 rounded-full object-cover animate-float"
                />
              </div>
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-4 animate-typing">
                Ahmed Salah Eldin
              </h1>
              <p className="text-xl md:text-2xl text-green-300 font-mono animate-fade-in-delayed">
                Senior Software Testing Engineer
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300 animate-fade-in-delayed-2">
              <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>Nasr City, Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300">
                <Phone className="w-4 h-4 text-green-400" />
                <span>01127682716</span>
              </div>
              <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300">
                <Mail className="w-4 h-4 text-green-400" />
                <span>ahmedsalahghobish@hotmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300">
                <Linkedin className="w-4 h-4 text-green-400" />
                <a
                  href="https://www.linkedin.com/in/iamsalaheldin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/iamsalaheldin
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-16">
        {/* Objective Section */}
        <section className="text-center" data-animate id="objective">
          <Card
            className={`bg-gray-900/50 border-green-500/20 backdrop-blur-sm transition-all duration-700 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 ${visibleSections.has("objective") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-green-400 font-mono">OBJECTIVE</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 leading-relaxed">
                Seeking a position in a company, where my technical and interpersonal skills can be demonstrated and
                developed in software testing.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section data-animate id="experience">
          <h2
            className={`text-3xl font-bold text-green-400 mb-8 font-mono text-center transition-all duration-700 ${visibleSections.has("experience") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            EXPERIENCE
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`bg-gray-900/50 border-green-500/20 backdrop-blur-sm hover:border-green-400/40 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/10 hover:scale-[1.02] ${visibleSections.has("experience") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-green-300">{exp.title}</CardTitle>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                      {exp.project && <p className="text-gray-400 text-sm mt-1">{exp.project}</p>}
                    </div>
                    <Badge variant="outline" className="border-green-500/50 text-green-400 font-mono">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section data-animate id="education">
          <h2
            className={`text-3xl font-bold text-green-400 mb-8 font-mono text-center transition-all duration-700 ${visibleSections.has("education") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            EDUCATION
          </h2>
          <Card
            className={`bg-gray-900/50 border-green-500/20 backdrop-blur-sm transition-all duration-700 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 ${visibleSections.has("education") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-green-300">B.Sc. in Computer Science</CardTitle>
                  <p className="text-cyan-400">Faculty of Computers & Information, Zagazig University</p>
                </div>
                <Badge variant="outline" className="border-green-500/50 text-green-400 font-mono">
                  2013 - 2017
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-green-300 font-semibold mb-2">Graduation Project: VEHICULAR TRAFFIC ANALYTICS</h4>
                <p className="text-gray-300">
                  The proposed project uses a big volume of traffic data to understand the traffic congestion behavior
                  and summarize the traffic data for a given road or city.
                </p>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-300 font-semibold">
                  🏆 Ranked among the top 3 runners of the Dell EMC Envision the future competition among Turkey,
                  Africa, and the Middle East.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8" data-animate id="skills">
          {/* Personal Skills */}
          <Card
            className={`bg-gray-900/50 border-green-500/20 backdrop-blur-sm transition-all duration-700 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 ${visibleSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-green-400 font-mono">PERSONAL SKILLS</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {personalSkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card
            className={`bg-gray-900/50 border-green-500/20 backdrop-blur-sm transition-all duration-700 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 ${visibleSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-green-400 font-mono">TECHNICAL SKILLS</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {technicalSkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Tools & Technologies */}
        <section data-animate id="tools">
          <h2
            className={`text-3xl font-bold text-green-400 mb-8 font-mono text-center transition-all duration-700 ${visibleSections.has("tools") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            TOOLS & TECHNOLOGIES
          </h2>
          <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className={`p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-center hover:bg-green-500/20 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-green-500/20 cursor-pointer ${visibleSections.has("tools") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="text-green-300 font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certificates */}
        <section data-animate id="certificates">
          <h2
            className={`text-3xl font-bold text-green-400 mb-8 font-mono text-center transition-all duration-700 ${visibleSections.has("certificates") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            CERTIFICATES & COURSES
          </h2>
          <Card
            className={`bg-gray-900/50 border-green-500/20 backdrop-blur-sm transition-all duration-700 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 ${visibleSections.has("certificates") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {certificates.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8" data-animate id="additional-info">
          {/* Languages */}
          <Card
            className={`bg-gray-900/50 border-green-500/20 backdrop-blur-sm transition-all duration-700 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 ${visibleSections.has("additional-info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-green-400 font-mono flex items-center gap-2">
                <Globe className="w-6 h-6" />
                LANGUAGES
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Arabic</span>
                  <Badge className="bg-green-500/20 text-green-400">Mother tongue</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">English</span>
                  <Badge className="bg-cyan-500/20 text-cyan-400">Good</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card
            className={`bg-gray-900/50 border-green-500/20 backdrop-blur-sm transition-all duration-700 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 ${visibleSections.has("additional-info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-green-400 font-mono flex items-center gap-2">
                <User className="w-6 h-6" />
                PERSONAL INFO
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-green-400" />
                  <span>Date of Birth: 23-07-1995</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-green-400" />
                  <span>Nationality: Egyptian</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-green-400" />
                  <span>Military status: Postponed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-4 h-4 text-green-400" />
                  <span>Marital status: Married</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-500/20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-gray-400 font-mono">
            © 2024 Ahmed Salah Eldin. Crafted with precision and passion for quality.
          </p>
        </div>
      </footer>
    </div>
  )
}
