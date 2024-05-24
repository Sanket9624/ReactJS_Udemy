import './ProfileCard.css'
function ProfileCard({title,handle,images,description}) {
           
            return (
                        <>
                                   <div className=" ProfileCard flex flex-col m-3 pb-2 rounded-lg max-w-60 h-96">
                                    <div><img className=' w-full' src={images} alt = "Images"></img></div>
                                    <div className="flex flex-col gap-1  p-2">
                                    <p>{title}</p>
                                    <p>{handle}</p>
                                    <p>{description}</p>
                                    </div>
                                   </div>
                        </>
            )           
}

export default ProfileCard