console.log('hi');


const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint
}

projects =[
  {
      title: 'Project1',
      screenshot: 'https://images.unsplash.com/photo-1564694245232-0a1ad9f3cd38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
      description: 'This is the first project',
      technologiesUsed:'HTML, CSS, Vanilla Javascript, Version Control with Github',
      available: true,
      url: "https://github.com/nss-evening-cohort-10/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"

  },
  {
      title: 'Project2',
      screenshot: 'https://images.unsplash.com/photo-1564694245232-0a1ad9f3cd38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
      description: 'This is the second project',
      technologiesUsed:'HTML, CSS, Vanilla Javascript, Version Control with Github',
      available: true,
      url: "https://github.com/nss-evening-cohort-10/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"

  }
]


const createProjectCards = (projectsArray) => {
  let domString = ''
for (let i = 0; i < projectsArray.length; i++) {
    const projectCard = projectsArray[i]
    if (projectCard.available == true){
     domString += `
    <div class="card">
        <h2>${projectCard.title}</h2>
        <h3>${projectCard.description}</h3>
        <img src=${projectCard.screenshot} alt='Image of ${projectCard.title}' />
        <h3>${projectCard.technologiesUsed}</h3>
        <h3><a href=${projectCard.url}>url</a></h3>
        <h3><a href=${projectCard.githubUrl}>GitHub</a></h3>
    </div>
    `
}
printToDom(domString, 'projectsPage')
}
}




const eventLinks = () => {
  const navigationLink = document.getElementsById("navLinks");
  for (i = 0; i < a.length; i++) {
    a[i].addEventListener('click', (event) => {
      const aType = event.target.id;
      event.preventDefault();
      if (aType === "navToBio") {
        technologiesPage.setAttribute('style', 'display:none');
        projectsPage.setAttribute('style', 'display:none');
        bioPage.setAttribute('style', 'display:block')
      } else if (aType === "navToTechnologies") {
        bioPage.setAttribute('style', 'display:none');
        projectsPage.setAttribute('style', 'display:none');
        technologiesPage.setAttribute('style', 'display:block')
      } else if (aType === "navToProjects") {
        technologiesPage.setAttribute('style', 'display:none');
        bioPage.setAttribute('style', 'display:none');
        projectsPage.setAttribute('style', 'display:block')
      } 
    })
}
};

window.addEventListener('click', eventLinks);



const init = () => {
  createProjectCards(projects);
};

init();