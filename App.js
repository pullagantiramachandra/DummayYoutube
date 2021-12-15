// import {header} from "./header";
// import {Content} from "./content";

const root = document.getElementById("root");
let loader = false;
let posts = [];
const App = () => {
  // console.log(header)

  root.innerHTML = `<header id="header">
    <section class="logo-container">
      <span class="guide-icon" onmouseover="handleGuide()">
        <img src="./images/guide.PNG" alt="Guide" />
      </span>
      <span class="logo-icon" onmouseover="handleLogo()">
        <img src="./images/youtube.PNG" alt="Logo" srcset="" />
      </span>
    </section>
    <section class="search-container">
      <div class="form-group">
        <input type="text" class="form-control" onfocus="handleFocus(this,event)" onkeyup="handleSearch()" />
        <span class="search-icon" onclick="handleSearch()"
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
const handleLogo = () => {
  // alert("You clicked on logo")
  const loader = document.querySelector("#loader")
  loader.innerText = "You clicked on logo"
}
const handleGuide = () => {
  // alert("You clicked on Guide")
  const loader = document.querySelector("#loader")
  loader.innerText = "You clicked on Guide"
}
const handleFocus = (event,e) => {
  // alert("You clicked on Guide")
  // console.log(event);
  event.style.backgroundColor ="Yellow"
  const loader = document.querySelector(".form-group")
  loader.style.backgroundColor ="Yellow";
  e.stopPropagation();
}
// document.body.addEventListener("click", ()=> {
//   const loader = document.querySelector(".form-group")
//   loader.style.backgroundColor ="unset";
//   const control = document.querySelector(".form-control")
//   control.style.backgroundColor ="unset"
// })

const fetchPosts = () => {
  const loader = document.getElementById("loader");
  loader.style.display = "block";
  const content = document.getElementById("content");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      loader.style.display = "none";
      posts = json;
      if(json){
        renderPosts(posts);
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

const renderPosts = (items)=> {
  if(items.length > 0){
    items.forEach(item => {
      content.innerHTML += `<div class="thumbnail">
      <span class="id">${item.id}</span>
      <header class="title">${item.title}</header>
  
      <p class="desc">
      <img src=${item.thumbnailUrl} alt="" />
      </p>
      </div>`
    });
  }else{
    content.innerHTML = `<h1>there is no data with this search</h1>`
  }
 
}
fetchPosts();

const handleSearch = () => {
  const input = document.querySelector(".form-control").value
  console.log(input);
  content.innerHTML = "";
  if(input!== ''){
    const filterPosts = posts.filter(item => (item.id == input || item.title.includes(input)));
    
    renderPosts(filterPosts)
  }else{
    
    renderPosts(posts)
  }
 
}
