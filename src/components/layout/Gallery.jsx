import React from 'react'

const Gallery = () => {
    const images = [
        "https://live.staticflickr.com/65535/53018266631_b31b649809_z.jpg",
        "https://cdn.rafled.com/anime-icons/images/aAEcJIFNZMK4FFpVZHkb5KtlrWIxpboD.jpg"

    ];



  return (
    <section>
        {
            images.map((src, index) => (
                <img key={index} src={src} alt={`imagen${index+1}`}/>

            ))
        }
    </section>
    
  )
}

export default Gallery