import profilePic from './assets/profile.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" alt="profile picture" src={profilePic} />
            <h2 className="card-title">Emmar Caber</h2>
            <p className="card-text">Software Engineer | Fullstack Developer</p>
        </div>
    );
}

export default Card;