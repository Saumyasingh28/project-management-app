import Button from "./Button";

export default function SideNav({ onAddProject, projects }) {
  return (
    <aside className="w-1/3 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl px-8 py-16">
      <h2 className="uppercase mb-8 text-stone-200 font-bold md:text-xl">
        Your Projects
      </h2>
      <Button label="+ Add Project" onAddProject={onAddProject} />
      <ol>
        {projects.map((project, index) => (
          <li key={index} className="text-stone-400">
            {project.title}
          </li>
        ))}
      </ol>
    </aside>
  );
}
