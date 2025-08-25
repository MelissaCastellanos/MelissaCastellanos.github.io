function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
}
function expandProject(id) {
  const projects = document.querySelectorAll('.project');
  projects.forEach((proj, idx) => {
    const details = proj.querySelector('.details');
    const summary = proj.querySelector('.summary');
    if (idx === id - 1) {
      proj.classList.add('expanded');
      details.classList.remove('hidden');
      summary.classList.add('hidden');
    } else {
      proj.style.display = 'none';
    }
  });
}
function collapseProjects(event) {
  event.stopPropagation();
  const projects = document.querySelectorAll('.project');
  projects.forEach((proj) => {
    proj.style.display = 'block';
    proj.classList.remove('expanded');
    proj.querySelector('.details').classList.add('hidden');
    proj.querySelector('.summary').classList.remove('hidden');
  });
}
