



const header = ()=> {
    return ` <header id="header">
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
  </header>`
}


export default {header};