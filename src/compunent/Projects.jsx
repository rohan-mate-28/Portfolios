const projects = [
  {
    title: "Job Portal",
    description: "A full-featured job portal connecting employers and candidates with real-time updates and advanced search.",
    stack: "React, Node.js, Express, MongoDB",
    liveLink: "https://your-jobportal-live-link.com",
    githubLink: "https://github.com/yourusername/job-portal",
    screenshot: "https://colorlib.com/wp/wp-content/uploads/sites/2/jobportal-free-template.jpg",
  },
  {
    title: "Task Management System",
    description: "Organize and track your tasks efficiently with this intuitive task manager supporting multiple users.",
    stack: "React, Redux, Node.js, MongoDB",
    liveLink: "https://your-taskmanager-live-link.com",
    githubLink: "https://github.com/yourusername/task-management-system",
    screenshot: "https://th.bing.com/th/id/OIP.98sq8ri7BduXk8m-22jb5QHaFQ?rs=1&pid=ImgDetMain",
  },
  {
    title: "Landing Page",
    description: "A modern, responsive landing page optimized for conversions and user engagement.",
    stack: "React, Tailwind CSS",
    liveLink: "https://your-landingpage-live-link.com",
    githubLink: "https://github.com/yourusername/landing-page",
    screenshot: "https://th.bing.com/th/id/OIP.Uw_P813RAQLJoZdeqooEHQHaEK?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

export default function Projects() {
  return (
    <section id="Projects" className="projects-section max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Our Work</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map(({ title, description, stack, liveLink, githubLink, screenshot }) => (
          <div key={title} className="project-card bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <img src={screenshot} alt={`${title} screenshot`} className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 flex-grow">{description}</p>
              <p className="mt-3 italic text-sm text-gray-500">Stack: {stack}</p>
              <div className="mt-4 flex gap-3">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  View Live
                </a>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-100 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
