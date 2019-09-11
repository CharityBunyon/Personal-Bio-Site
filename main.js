console.log('hi');

const printToDom = (divId, textToPrint) => {
  document.getElementById(divId).innerHTML = textToPrint
};


const projects = [
    {
      title: "Project 1", 
      screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
      description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
      technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
      available: true,
      url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },

    {
      title: "Project 2", 
      screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
      description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
      technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
      available: true,
      url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },

    {
      title: "Project 3", 
      screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
      description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
      technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
      available: true,
      url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },

    {
      title: "Project 4", 
      screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
      description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
      technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
      available: true,
      url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },

];





const createProjectCards =(projectArr) => {
  let domString = '';
  for (let i = 0; i < projectArr.length; i++) {
    const project = projectsArr[i];
    if (project.available === true) {
      domString += `
        <div id= "card">
          <h2>${project.title}</h2>
          <img src = ${project.screenshot} alt= 'Image of ${project.title}'/>
          <h3>${project.description}</h3>
          <h3> ${project.technologiesUsed}</h3>
          <h3><a href=${project.url}>url</a></h3>
          <h3><a href=${project.githubUrl}>GitHub</a></h3>
        </div>
      `
    }
    printToDom('projectsPage', domString);
  }
};

createProjectCards(projects);