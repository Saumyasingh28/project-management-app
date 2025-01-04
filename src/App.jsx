import ProjectContainer from "./components/ProjectContainer";
import SideNav from "./components/SideNav";
import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projects, setProject] = useState([
    { title: "Test Project", description: "Some text" },
  ]);
  const [isAddingProject, setIsAddingProject] = useState(false);

  function handleAddProject() {
    setIsAddingProject(true);
  }

  function handleCancel() {
    setIsAddingProject(false);
  }

  function handleSave(project) {
    setProject((prevProjects) => [...prevProjects, project]);
    setIsAddingProject(false);
  }

  return (
    <main className="h-screen flex gap-8">
      <SideNav onAddProject={handleAddProject} projects={projects} />
      <NoProjectSelected />
      <NewProject />
    </main>
  );
}

export default App;
