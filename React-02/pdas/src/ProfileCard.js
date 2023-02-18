function ProfileCard({title, handle, image, description}){

    // const title = whatever.title;
    // const handle = whatever.handle;

    // Below we are grabbing the properties out
    // of an object : 'whatever'. It is known as
    // Destructuring.
    // const {title, handle} = whatever;
    
    return (
        <div className="card">
          <div className="card-image">
            <figure className="image is-1by1">
              <img src={image} alt="pda logo" />
            </figure>
          </div>
    
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{handle}</p>
            </div>
            <div className="content">{description}</div>
          </div>
        </div>
      );
    }

export default ProfileCard;