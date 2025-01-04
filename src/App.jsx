import SelectedProject from "./components/SelectedProject";
import SideNav from "./components/SideNav";
import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSave(project) {
    const newProject = {
      ...project,
      id: Math.random(),
    };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== id),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  return (
    <main className="h-screen flex gap-8">
      <SideNav
        onAddProject={handleAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected onAddProject={handleAddProject} />
      )}
      {projectsState.selectedProjectId === null && (
        <NewProject onCancel={handleCancel} onSave={handleSave} />
      )}
      {projectsState.selectedProjectId !== undefined &&
        projectsState.selectedProjectId !== null && (
          <SelectedProject
            project={selectedProject}
            onDelete={handleDeleteProject}
          />
        )}
    </main>
  );
}

export default App;
