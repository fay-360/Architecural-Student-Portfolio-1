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
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
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

      ${/* Model 2 commented out
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
      */ ""}

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
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
