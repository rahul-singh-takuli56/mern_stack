import './Styles/Video.css'
function Video({ title, channel, views, time, id, verified }) {
    console.log(verified);
    return (
        <>
            <div className="container">
                <div className="pic"> <img src="https://picsum.photos/id/1/150/100" /></div>
                <div className="title"> {title}</div>
                <div className="channel">{channel} {verified ? '✅' : null}</div>
                <div className="views">{views} <span>.</span> {time}</div>
            </div>
        </>
    )
}


export default Video;