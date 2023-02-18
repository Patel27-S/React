function ProfileCard({title, handle, image}){

    // const title = whatever.title;
    // const handle = whatever.handle;

    // Below we are grabbing the properties out
    // of an object : 'whatever'. It is known as
    // Destructuring.
    // const {title, handle} = whatever;
    
    return( 
    <div>

        {/* <div>ProfileCard</div> */}
        <img src={image}/>
        <div>Title is {title}</div>
        <div>Handle is {handle}</div>


    </div>
    )
}

export default ProfileCard;