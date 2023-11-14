const AboutUs = () => {
    const title = 'Welcome to our app!';
    const description = 'This is our Staff Tracking app';
    return(
        <div className="content">
            <h1>{ title }</h1>
            <p>{ description }</p>
            <hr></hr>
            <br></br>
            <div className="home">
                <p>This web application operates through firing...</p>
            </div>
        </div>
    );
}


export default AboutUs;
