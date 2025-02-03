import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.png",
  "./cubeDrawings/cube2.png",
  "./cubeDrawings/cube3.png",
  "./cubeDrawings/cube4.png",
  "./cubeDrawings/cube5.png",
  "./cubeDrawings/cube6.png",
];

const trees = [
  "./treeDrawings/tree1.png",
  "./treeDrawings/tree2.png",
  "./treeDrawings/tree3.png",
  "./treeDrawings/tree4.png",
  "./treeDrawings/tree5.png",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
     1.0 Cadavre Exquis 
        <div class="three-model">
        <a href="https://favour-roraogor.vercel.app/cubeDrawings/cube0.png" target="_blank">
          <img src="./cubeDrawings/cube0.png" id="model1" alt="Model 1 Image" />
        </div>
        <div id="images-description">
          <div id="images">
             <a href="https://favour-roraogor.vercel.app/cubeDrawings/cube1.png" target="_blank">
               <img src="./cubeDrawings/cube1.png" alt="cube1" />
             </a>
             <a href="https://favour-roraogor.vercel.app/cubeDrawings/cube2.png" target="_blank">
              <img src="./cubeDrawings/cube2.png" alt="cube2" />
             </a>
             <a href="https://favour-roraogor.vercel.app/cubeDrawings/cube3.png" target="_blank">
               <img src="./cubeDrawings/cube3.png" alt="cube3" />
             </a>
             <a href="https://favour-roraogor.vercel.app/cubeDrawings/cube4.png" target="_blank">
               <img src="./cubeDrawings/cube4.png" alt="cube4" />
             </a>
              <a href="https://favour-roraogor.vercel.app/cubeDrawings/cube5.png" target="_blank">
               <img src="./cubeDrawings/cube5.png" alt="cube5" />
             </a>
              <a href="https://favour-roraogor.vercel.app/cubeDrawings/cube6.png" target="_blank">
               <img src="./cubeDrawings/cube6.png" alt="cube6" />
             </a>
          </div>
          <h4 id="description">Escape from Gaia reflects a world consumed by climate change and a collective fear of the apocalypse. Earth, personified as Gaia, unleashes fiery wrath in response to humanity’s exploitation. In an act of desperation, the inhabitant tears open a portal to escape this crumbling reality, finding refuge in a cave that offers solace and defies gravity itself.

The cave, adorned with glowing crystals, feels solid and permanent but exists only in the inhabitant’s imagination. Subtle signs of life—a chair and a book—show attempts to create a home. Beyond the cave, spaceships hint at other life forms charting their own paths in the galaxy.

Yet true escape proves impossible. Cracks appear in the cave walls, and burning hands breach the sanctuary, pulling the inhabitant back to Earth. In the end, they must confront the unavoidable reality of a world on fire.</h4>
        </div>
      </div>

      <section id="projects">
     
     <div id="project-row">
      2.0 Interop(erability)
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
             <a href="https://favour-roraogor.vercel.app/treeDrawings/tree1.png" target="_blank">
               <img src="./treeDrawings/tree1.png" alt="tree1" />
             </a>
             <a href="https://favour-roraogor.vercel.app/treeDrawings/tree2.png" target="_blank">
              <img src="./treeDrawings/tree2.png" alt="tree2" />
             </a>
             <a href="https://favour-roraogor.vercel.app/treeDrawings/tree3.png" target="_blank">
               <img src="./treeDrawings/tree3.png" alt="tree3" />
             </a>
             <a href="https://favour-roraogor.vercel.app/treeDrawings/tree4.png" target="_blank">
               <img src="./treeDrawings/tree4.png" alt="tree4" />
             </a>
              <a href="https://favour-roraogor.vercel.app/treeDrawings/tree5.png" target="_blank">
               <img src="./treeDrawings/tree5.png" alt="tree5" />
             </a>
          </div>
          <h4 id="description">Over two weeks, I explored how digital objects change when transferred between 3D modeling platforms, specifically from Blender to Rhino. This investigation emphasized the importance of interoperability—studying how data, geometry, and properties remain intact or change during format conversions. I found that even small differences in import/export settings or file formats can subtly alter geometry, affecting mesh topology and surface smoothness. Choosing the right format and understanding software-specific conversion algorithms is crucial for design integrity. The major focus of my study was to compare mesh and NURBS modeling, which are two distinct approaches to representing geometry in 3D space. Overall, This research reinforced the importance of careful file management and conversion choices. Understanding how geometry changes across platforms will help me make more intentional design decisions, whether working with urban spaces or digital forms.</h4>
        </div>
      </div>

       ${/* Model 3 commented out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */ ""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
