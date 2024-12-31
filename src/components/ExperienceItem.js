// src/components/ExperienceItem.js
export default function ExperienceItem({ 
  title, 
  company, 
  date, 
  description, 
  technologies 
}) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {date}
      </header>
      
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base">
            {title} · <span className="ml-1">{company}</span>
          </div>
        </h3>
        
        <p className="mt-2 text-sm leading-normal">
          {description}
        </p>
        
        {technologies && (
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech) => (
              <li className="mr-1.5 mt-2" key={tech}>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}