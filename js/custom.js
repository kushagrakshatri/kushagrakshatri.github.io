document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-button');
  const projects = document.querySelectorAll('.project');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.dataset.filter;

      projects.forEach(project => {
        if (filter === 'all') {
          project.style.display = 'block';
        } else if (project.classList.contains(filter)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
});