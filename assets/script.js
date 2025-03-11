document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById('projects');

    for (let i = 0; i < 12; i++) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.id = `project-${i}`;

        if (i === 0) {
            projectDiv.classList.add('expanded');
        }

        projectDiv.innerHTML = ` 
            <h2>Project ${i + 1}</h2>
            <p>A sample project showcasing my work.</p>
            <div class="image-container">
                        <img src="https://via.placeholder.com/400" alt="Project ${i + 1} Image">
            </div>
        `;
        projectsContainer.appendChild(projectDiv);

        projectDiv.addEventListener("click", () => {
            document.querySelectorAll('.project').forEach(p => p.classList.remove("expanded"));
            projectDiv.classList.toggle("expanded");
        });
    }

    let activeProject = document.querySelector('.project.expanded');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const project = entry.target;
            if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
                if (activeProject && activeProject !== project) {
                    activeProject.classList.remove("expanded");
                }
                project.classList.add("expanded");
                activeProject = project;
            } else if (project === activeProject) {
                project.classList.remove("expanded");
                activeProject = null;
            }
        });
    }, { threshold: 0.6 });

    document.querySelectorAll('.project').forEach(project => {
        observer.observe(project);
    });
});
