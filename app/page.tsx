"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Calendar, User, Globe, Heart, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResumePage() {
  const experiences = [
    {
      period: "Aug 2025 - Present",
      title: "Senior Test Automation Engineer",
      company: "Mondia",
      location: "New Cairo, Cairo",
      responsibilities: [
        "Leading the design and implementation of scalable test automation frameworks across multiple projects and teams.",
        "Driving adoption of modern tools and technologies such as Playwright, Selenium, and API automation frameworks to improve test coverage.",
        "Collaborating with cross-functional stakeholders to define quality strategies and integrate testing into CI/CD pipelines.",
        "Mentoring and coaching junior and mid-level QA engineers to elevate automation standards across the organization.",
        "Contributing to process improvements, automation best practices, and ensuring alignment with Agile methodologies.",
      ],
    },
    {
      period: "Mar 2023 - Jul 2025",
      title: "Senior Test Automation Engineer",
      company: "Rasan",
      location: "New Cairo, Cairo",
      responsibilities: [
        "Spearheaded the design and implementation of TestGenius, an AI-powered solution that eliminated inefficiencies of manual test case creation and was applied company-wide across all teams and projects.",
        "Designed and delivered a performance-focused automation solution that reduced the execution time of a critical module by more than 10x, significantly accelerating release cycles.",
        "Automated end-to-end test scenarios for health and fintech applications, reducing regression execution time by 50%.",
        "Designed and executed test cases in Azure DevOps, ensuring full alignment with business requirements.",
        "Developed SQL scripts to validate backend data consistency across multiple services.",
        "Collaborated with product managers and developers to refine requirements and improve test coverage.",
        "Authored detailed bug reports and tracked issues to closure, improving defect turnaround.",
      ],
    },
    {
      period: "Feb 2023 - Mar 2023",
      title: "Senior Test Automation Engineer",
      company: "VOIS",
      location: "Smart Village, Giza",
      responsibilities: [
        "Automated billing system test flows using a Selenium-based framework, increasing test efficiency.",
        "Executed Smoke, Sanity, Integration, and Regression test cycles to ensure stable releases.",
        "Collaborated with developers to quickly identify and resolve billing-related defects.",
      ],
    },
    {
      period: "Oct 2019 - Jan 2023",
      title: "Software Test Engineer",
      company: "DXC Technology",
      location: "Smart Village, Giza",
      project: "Misr Insurance Company (MIC) Project",
      responsibilities: [
        "Worked on the Misr Insurance Company (MIC) project, leading testing and UAT activities for Claims, Reports, and Collections modules across 7–8 different lines of business.",
        "Gathered requirements, collaborated with stakeholders, and contributed to system design to ensure functional accuracy and compliance.",
        "Designed, executed, and maintained functional, regression, and integration test suites for core insurance applications.",
        "Created reusable test cases and managed test data to streamline execution across multiple business domains.",
        "Logged and triaged defects with severity analysis, accelerating defect resolution cycles.",
        "Partnered with business stakeholders during UAT, ensuring smooth sign-off for production releases.",
        "Recognized with the Employee of the Quarter award for outstanding delivery and contribution to the MIC project.",
        "Trained and mentored junior testers, raising team productivity and quality standards.",
      ],
    },
    {
      period: "Jul 2017 - Oct 2019",
      title: "Software Test Engineer",
      company: "Egyptian Life Takaful GIG",
      location: "Cairo, Egypt",
      responsibilities: [
        "Developed and executed test scenarios to validate insurance applications against regulatory requirements.",
        "Maintained detailed inspection and testing reports for compliance audits.",
        "Streamlined QA processes by designing reusable test templates and documentation.",
        "Coordinated with cross-functional teams to implement corrective actions, improving product reliability.",
      ],
    },
  ]

  const tools = [
    "Java SE with OOP",
    "Python",
    "SQL",
    "Azure DevOps",
    "Jira",
    "HP ALM",
    "Selenium WebDriver",
    "Playwright",
    "SHAFT Engine",
    "Robot Framework",
    "Postman",
    "Rest Assured",
    "Jenkins",
    "GitHub",
    "Linux",
    "Google Cloud Platform",
  ]

  const personalSkills = [
    "Strong documentation and reporting skills",
    "Interpersonal, collaboration, and problem-solving skills",
    "Effective communication and negotiation skills",
    "Self-learner with passion for quality",
    "Team efficiency and cross-functional collaboration",
  ]

  const technicalSkills = [
    "Create and execute comprehensive test plans ensuring full functional coverage.",
    "Convert end-to-end user scenarios into detailed test cases.",
    "Execute manual and automated test cases to uncover defects, regression issues, and edge cases.",
    "Perform API testing using Robot Framework, Postman, and Rest Assured.",
    "Apply strong knowledge in Java (OOP), Python, and SQL for building and maintaining test automation frameworks.",
    "Develop and maintain automation frameworks using Selenium WebDriver, Playwright, SHAFT Engine, and JUnit.",
    "Integrate test automation with CI/CD pipelines using Jenkins and GitHub.",
    "Utilize bug tracking and test management tools including Azure DevOps, Jira, and HP ALM.",
    "Collaborate with Agile teams to refine user stories, acceptance criteria, and align test coverage with business requirements.",
    "Work across multiple environments and platforms including Linux, Google Cloud Platform, and WordPress.",
  ]

  const projects = [
    {
      name: "TestGenius",
      period: "2025",
      description:
        "AI-powered web application that accelerates the software testing lifecycle by automatically generating high-quality test cases from Azure DevOps user stories.",
      tech: ["Next.js", "Tailwind CSS", "ShadCN UI", "Google Genkit", "Azure DevOps REST APIs"],
      highlights: [
        "Spearheaded design and implementation at Rasan, applied company-wide across all projects and teams.",
        "Implemented seamless Azure DevOps integration to fetch work items, refine acceptance criteria, and push generated test cases directly into test plans and suites.",
        "Leveraged Google Gemini models via Genkit to generate positive, negative, edge, and integration test scenarios for comprehensive coverage.",
        "Built modern and intuitive UI using Next.js, Tailwind CSS, and ShadCN UI, enabling users to edit, refine, and export test cases in CSV format.",
        "Enabled test case management features such as editing AI-generated cases, creating manual cases, and choosing to append or replace existing ones.",
      ],
    },
  ]

  const certificates = [
    "ISTQB FL (International Software Testing Qualification Board)",
    "Robot Framework Test Automation (LinkedIn Learning)",
    "Automation Testing with Selenium Web Driver (Self Study)",
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
        <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div
            className={`text-center space-y-6 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 animate-glow">
              <div className="bg-black rounded-full p-1">
                <img
                  src="/images/ahmed-profile.jpg"
                  alt="Ahmed Salah Eldin - Senior Test Automation Engineer"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover animate-float"
                />
              </div>
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-4 animate-typing leading-tight">
                Ahmed Salah Eldin
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-green-300 font-mono animate-fade-in-delayed">
                Senior Test Automation Engineer
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-6 text-gray-300 animate-fade-in-delayed-2">
              <div className="flex items-center justify-center gap-2 hover:text-green-400 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-center">Nasr City, Cairo, Egypt</span>
              </div>
              <div className="flex items-center justify-center gap-2 hover:text-green-400 transition-colors duration-300">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">+201127682716</span>
              </div>
              <div className="flex items-center justify-center gap-2 hover:text-green-400 transition-colors duration-300">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">ahmedsalahghobish@hotmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 hover:text-green-400 transition-colors duration-300">
                <Linkedin className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/iamsalaheldin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-sm sm:text-base break-all"
                >
                  linkedin.com/in/iamsalaheldin
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
        <section className="text-center" data-animate id="professional-summary">
          <Card
            className={`bg-gray-900/50 border-green-500/20 backdrop-blur-sm transition-all duration-700 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 ${visibleSections.has("professional-summary") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-2xl text-green-400 font-mono">PROFESSIONAL SUMMARY</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Senior Test Automation Engineer with 8+ years of experience driving quality initiatives across insurance
                and fintech industries. Proven expertise in designing and scaling automation frameworks and leading QA
                teams in Agile environments. Spearheaded the development of TestGenius, an AI-powered solution adopted
                company-wide at Rasan that eliminated inefficiencies in manual test case creation. Delivered a
                performance-focused framework that reduced critical module execution time by over 10x. Currently at
                Mondia, leading organization-wide automation strategies, mentoring QA engineers, and championing the
                adoption of modern testing tools such as Playwright, Selenium, and API automation frameworks. Recognized
                for strong collaboration, innovation, and a track record of delivering high-quality, reliable systems.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section data-animate id="experience">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-green-400 mb-6 sm:mb-8 font-mono text-center transition-all duration-700 ${visibleSections.has("experience") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
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
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-lg sm:text-xl text-green-300 leading-tight">{exp.title}</CardTitle>
                      <p className="text-cyan-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">{exp.location}</p>
                      {exp.project && <p className="text-gray-500 text-xs sm:text-sm italic">{exp.project}</p>}
                    </div>
                    <div className="flex justify-start">
                      <Badge
                        variant="outline"
                        className="border-green-500/50 text-green-400 font-mono text-xs sm:text-sm px-2 py-1"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2 sm:space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section data-animate id="projects">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-green-400 mb-6 sm:mb-8 font-mono text-center transition-all duration-700 ${visibleSections.has("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            FEATURED PROJECTS
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-gray-900/50 border-green-500/20 backdrop-blur-sm hover:border-green-400/40 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/10 ${visibleSections.has("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                        <CardTitle className="text-xl sm:text-2xl text-green-300">{project.name}</CardTitle>
                        <Badge
                          variant="outline"
                          className="border-green-500/50 text-green-400 font-mono text-xs sm:text-sm px-2 py-1 w-fit"
                        >
                          {project.period}
                        </Badge>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tech.map((tech, idx) => (
                          <Badge key={idx} className="bg-cyan-500/20 text-cyan-400 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2 sm:space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">{highlight}</span>
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
            className={`text-2xl sm:text-3xl font-bold text-green-400 mb-6 sm:mb-8 font-mono text-center transition-all duration-700 ${visibleSections.has("education") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            EDUCATION
          </h2>
          <Card
            className={`bg-gray-900/50 border-green-500/20 backdrop-blur-sm transition-all duration-700 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 ${visibleSections.has("education") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-green-300">B.Sc. in Computer Science</CardTitle>
                  <p className="text-cyan-400">Faculty of Computers & Information, Zagazig University</p>
                </div>
                <Badge variant="outline" className="border-green-500/50 text-green-400 font-mono w-fit">
                  Sep 2013 - May 2017
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div>
                <h4 className="text-green-300 font-semibold mb-2">Graduation Project: Vehicular Traffic Analytics</h4>
                <p className="text-gray-300">
                  Analyzed large volumes of traffic data to understand congestion behavior and summarize traffic
                  insights for specific roads or cities.
                </p>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-300 font-semibold">
                  🏆 Ranked among the top 3 runners in the Dell EMC "Envision the Future" competition across Turkey,
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
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-2xl text-green-400 font-mono">PERSONAL SKILLS</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
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
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-2xl text-green-400 font-mono">TECHNICAL SKILLS</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
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
            className={`text-2xl sm:text-3xl font-bold text-green-400 mb-6 sm:mb-8 font-mono text-center transition-all duration-700 ${visibleSections.has("tools") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            TOOLS & TECHNOLOGIES
          </h2>
          <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className={`p-3 sm:p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center hover:bg-green-500/20 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-green-500/20 cursor-pointer ${visibleSections.has("tools") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="text-green-300 font-medium text-sm sm:text-base">{tool}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certificates */}
        <section data-animate id="certificates">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-green-400 mb-6 sm:mb-8 font-mono text-center transition-all duration-700 ${visibleSections.has("certificates") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            CERTIFICATES & COURSES
          </h2>
          <Card
            className={`bg-gray-900/50 border-green-500/20 backdrop-blur-sm transition-all duration-700 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 ${visibleSections.has("certificates") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardContent className="p-4 sm:p-6 pt-6">
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
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-2xl text-green-400 font-mono flex items-center gap-2">
                <Globe className="w-6 h-6" />
                LANGUAGES
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
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
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-2xl text-green-400 font-mono flex items-center gap-2">
                <User className="w-6 h-6" />
                PERSONAL INFO
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
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
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
          <p className="text-gray-400 font-mono text-sm sm:text-base">
            © 2025 Ahmed Salah Eldin. Crafted with precision and passion for quality.
          </p>
        </div>
      </footer>
    </div>
  )
}
