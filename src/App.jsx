import React from 'react';
import Video from './Components/Video';
import './Components/Styles/App.css'
function App() {

  let videos = [{
    title: "Node Js Tutorial",
    views: "100K",
    time: "2 WEEKS AGO",
    channel: "Rahul Tech",
    id: 1,
    verified: true
  }, {
    title: " Mongodb Tutorial",
    views: "10K",
    time: "2 days ago",
    channel: "Thapa Techincal",
    id: 3,
    verified: false
  }, {
    title: "Machine Learning Tutorial",
    views: "1 M",
    time: "1 day ago",
    channel: "Coder dost",
    id: 4,
    verified: true
  }, {
    title: "Python Tutorial",
    views: "10 M",
    time: "3 months ago",
    channel: "Coder gyan",
    id: 5,
    verified:  false
  }]
  return (
    <>
      <div className='App'>
        <div> Videos</div>
        <div className='body'>

          <Video title="React Js Tutorial"
            views="200K"
            time="2 years ago"
            channel="Manas Tech"
            id='1'
            verified="false"
          />
          {
            videos.map((video) => <Video
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              id={video.id}
              verified={video.verified}
            > </Video>)
          }

        </div>
      </div>
    </>
  );
}

export default App;
