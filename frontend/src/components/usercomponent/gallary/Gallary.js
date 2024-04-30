import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
    "https://picsum.photos/2000/2000",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/300/300?image=207",
    "https://picsum.photos/300/300?image=208",
    "https://picsum.photos/300/300?image=209",

]

const Gallery = () => {
    const [data, setData] = useState({img: '', i: 0})
    
    const viewImage = (img, i) => {
       setData({img, i})
        
    }
    const imgAction = (action) => {
        let i = data.i;
        if (action === 'next-img' && i < images.length - 1) {
            setData({ img: images[i + 1], i: i + 1 });
        }
        if (action === 'previous-img'  && i > 0) {
            setData({ img: images[i - 1], i: i - 1 });
        }

        if (!action) {
            setData({ img: '', i: 0 });
        }
    }
    return (
        <>
            { data.img &&
                    <div style={ {
                        width: '100%',
                        height: '100vh',
                        background: 'black',
                        position: 'fixed',
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        overflow: 'hidden',
                        paddingTop: '15px',
                        objectFit: 'cover' ,
                    } } >
                <button onClick={()=>imgAction()} style={ { position: 'absolute', top: '10px', right: '10px' } }>X</button>
                <button onClick={()=>imgAction('previous-img')}>Preview</button>
                <img src={ data.img } style={ { width: 'auto', maxWidth: '90%', maxHeight: '90%',  objectFit: 'cover' } } />
                <button onClick={()=>imgAction('next-img')}>Next</button>
            </div>
              
              }
            <div style={{padding: '10px'}}>
                <ResponsiveMasonry 
                    columnsCountBreakPoints={ { 350: 1, 750: 2, 900: 3 } }>
                    <Masonry gutter="20px">
                        { images.map((image, i) => (
                            <img
                              key={i}
                                src={ image }
                                style={ { width: '100%', cursor:'pointer', display: 'block',objectFit: 'cover'  } }
                                alt=''
                                onClick={()=>viewImage(image, i)}
                            />

                        ))}
                    </Masonry>
                    </ResponsiveMasonry>
            </div>
        </>
    );
}
export default Gallery;
