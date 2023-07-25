import React from 'react'
import { useGlobalContext } from '../context';


function Stories() {
    const { hits, nbPages, isLoading ,removePost} = useGlobalContext();

    if (isLoading) {
        return (
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        )
    }

    return (
        <div className='stories-div'>

            
            {hits.map((item) => {
                const { title, author, objectID, num_comments, url } = item;
                return(
                     

                    <div className="card" key={objectID}>
                        <h2>{title}</h2>
                        <p>
                            By <span>{author}</span> | <span> {num_comments} </span> comments
                        </p>
                        <div className='card-button'>
                            <a href={url} target='_blank'> Read More </a>
                            <a href='#' onClick={()=>removePost(objectID)}> Remove</a>

                        </div>
                    </div>

                
                )
            }
            )
            }

        </div>
    )
}


export default Stories;