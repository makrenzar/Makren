const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      } else {
        entry.target.classList.remove('animate__animated', 'animate__fadeInUp');
      }
    });
  });

  const projects = document.querySelector('.projects');
  observer.observe(projects);