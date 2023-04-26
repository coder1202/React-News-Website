//rafce

//use.reducer.hooke and use context api context hook

import React, { } from 'react'
import { useGlobalContext } from './context';

const Stories = () => {

  const { hits, isLoading,removePost} = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <>
    <div className=" container row my-4">
    <h2 classname="container my-2">Today News Headline</h2>
          {hits.map((curPost) => {
        const { title, author, objectID, url, num_comments } = curPost;
        return (
            <div className='col md-4 my-3' key={objectID}>
              <div className="card" style={{ width: "18rem" }} >
                <div className="card-body">
                <div className = "col md-4"></div>
                  <h5 className="card-title">{title}...</h5>
                  <p>
                    By <span> {author}</span> | <span>{num_comments}</span>Comments
                  </p>
                  <a  href={url} targe="_blank" classname="btn btn-sm btn-primary">Read More</a>
                  <a href="/"   onClick={()=>removePost(objectID)}>Remove</a>
                </div>
              </div>
            </div>
        );
      })}
      </div>
    </>
  );
};
export default Stories;
