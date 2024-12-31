import { experiences, projects } from '../data/index.js';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Inter } from 'next/font/google';
import ExperienceItem from '../components/ExperienceItem';
import ProjectCard from '../components/ProjectCard';
import Spotlight from '../components/Spotlight';
import assetPrefix from '../utils/assetPrefix';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-slate-900 text-slate-400 relative`}>
      <Spotlight />
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column - Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Andrew Sosa Guaita
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200">
                Applied Mathematics @ UC Berkeley
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                Experience building data-driven applications at Driscoll's and Motorola Solutions.
              </p>
              
              {/* Navigation */}
              <nav className="hidden lg:block mt-16">
                <ul className="space-y-5">
                  {['About', 'Experience', 'Projects'].map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item.toLowerCase()}`}
                        className="group flex items-center py-3"
                      >
                        <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                          {item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <ul className="ml-1 mt-8 flex items-center gap-5">
              {[
                { href: 'https://github.com/andrewsosag', Icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/andrewsosaguaita/', Icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:andrewsosaguaita@berkeley.edu', Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                </li>
              ))}
            </ul>
          </header>

          {/* Right Column - Main Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">
                About
              </h2>
              <div className="space-y-4">
                <p>
                  I'm an Applied Mathematics student at UC Berkeley, focusing on statistics
                  and machine learning.
                </p>
                <p>
                  From optimizing food supply chains at Driscoll's to helping students
                  find affordable housing with BerkeleyNest, I'm passionate about using
                  technology to solve meaningful problems.
                </p>
                <p>
                  When I'm not coding or analyzing data, I'm probably working on personal
                  projects or exploring new technologies in machine learning and data science.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">
                Experience
              </h2>
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <ExperienceItem key={index} {...experience} />
                ))}
              </div>
              <div className="mt-12">
                <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                    href={`${assetPrefix}/docs/resume.pdf`}  // Updated this line
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="View Full Résumé (opens in a new tab)"
                  >
                  <span>
                    View Full{' '}
                    <span className="inline-block">
                      Résumé
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </section>
            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">
                Projects
              </h2>
              <div className="space-y-12">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}