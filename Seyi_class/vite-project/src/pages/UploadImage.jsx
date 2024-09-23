import axios from 'axios'
import React, { useState } from 'react'

const uploadImage = () => {
    
    const [image, setImage] = useState("")

    const [media, setMedia] = useState("")
    let url = "http://localhost:5000/product/uploadImage"

const handleImageChange = (e) =>{
    let reader = new FileReader()
    let imageInfo = e.target.files[0]
    reader.readAsDataURL(imageInfo)

    reader.onload = () =>{
        setMedia(reader.result)
    }
}


const handleSubmit = () =>{
    axios.post (url, {media}, {headers:{"Content-Type": "application/json"}})
    .then ((res) => {
        setImage (res.data.mediaUrl)
    })
    .catch (err => console.log(err))
}
  return (
    <>
    <section>
<input type="file" name="" id="" onChange={handleImageChange}/>
<button type='submit' onClick={handleSubmit}>Upload</button>


<main style={{display:'flex', justifyContent:"center", gap:"40px"}}> 
<div style={{width:"fit-content", height:"fit-content"}}>
    <img src={image} style= {{width:"300px", height:"300px"}}alt="" />
</div>

</main>
    </section>
    </>
  )
}

export default uploadImage