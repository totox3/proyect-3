import imageShow from ' ./ImageShow '

function imageList ({images}){
    const rederImage = images.map((image)  =>{
        return <ImageShow key={image.id} image={image}/>

    }) 

    return(
        <div>
            <h1> {renderImage} </h1>
        </div>
    )
}
export default ImageList 
