// import {header} from "./header";
// import {Content} from "./content";

const root = document.getElementById("root");
let loader = false;
let posts = [];
const App = () => {
  // console.log(header)

  root.innerHTML = `<header id="header">
    <section class="logo-container">
      <span class="guide-icon">
        <img src="./images/guide.PNG" alt="Guid" />
      </span>
      <span class="logo-icon">
        <img src="./images/youtube.PNG" alt="Logo" srcset="" />
      </span>
    </section>
    <section class="search-container">
      <div class="form-group">
        <input type="text" class="form-control" />
        <span class="search-icon"
          ><img src="./images/search.PNG" alt="search"
        /></span>
      </div>
      <span class="voice-icon"
        ><img src="./images/voice.PNG" alt="Recorder"
      /></span>
    </section>
    <section class="profile-container">
      <div class="video-record">
        <span class="recorder-icon"
          ><img src="./images/recorder.PNG" alt="video-recorder"
        /></span>
      </div>
      <div class="all-apps">
        <span class="all-apps-icon"
          ><img src="./images/allApps.PNG" alt="All apps"
        /></span>
      </div>
      <div class="notification">
        <span class="notification-icon"
          ><img src="./images/notification.PNG" alt="Notification"
        /></span>
      </div>
      <div class="profile">
        <span class="profile-icon">
          <!-- <img src="" alt=""> -->
        </span>
      </div>
    </section>
  </header>
  <section id="content">
    <p id="loader">Loading...</p>
    
  </section>
  `;
};
App();
const fetchPosts = () => {
  const loader = document.getElementById("loader");
  loader.style.display = "block";
  const content = document.getElementById("content");
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((json) => {
      loader.style.display = "none";
      posts = json;
      if(json){
        renderPosts();
      }
      
    }).catch(error => {
      console.log(error);
     loader.style.display = "none";
      content.innerHTML = `<div class="error">
      <h1>404 Error</h1>
      There is an error please contact administrator
      </div>`
    });
};

const renderPosts = ()=> {
  posts.forEach(item => {
    content.innerHTML += `<div class="thumbnail">
    <span class="id">${item.id}</span>
    <header class="title">${item.title}</header>

    <p class="desc">
    <img src=${item.thumbnailUrl} alt="" />
    </p>
    </div>`
  });
}
fetchPosts();
