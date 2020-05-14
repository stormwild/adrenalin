import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import axios from 'axios';

interface DetailProps extends RouteComponentProps {
  id?: number;
}

const Detail = ({ id: postId }: DetailProps) => {
  const initialPost = {
    id: 0,
    title: '',
    title_long: '',
    image: '',
    tag: '',
    questions: [],
  };

  const [post, setPost] = useState(initialPost);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3500/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [postId]);

  const tagRef = useRef(null);
  useLayoutEffect(() => {
    if (tagRef.current) {
      const el = tagRef.current! as HTMLElement;
      el.style!.left = `-${el.clientWidth}px`;
    }
  });

  if (post.id > 0) {
    const { title, title_long, tag, image, questions } = post;

    return (
      <div className='detail row'>
        <div className='col-lg-6'>
          <figure>
            <img className='img-fluid' src={`/img/${image}`} alt={title} />
            <span className='tag' ref={tagRef}>
              {tag}
            </span>
          </figure>
        </div>
        <div className='col-lg-6'>
          <h1 className='mb-5'>{title_long}</h1>
          <div>
            {questions.map((q, i) => (
              <div key={i}>
                <h5>Question {i + 1}</h5>
                <p>{q}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    const { message } = error!;
    return <div className='alert alert-danger'>{message}</div>;
  }

  return <div className='alert alert-info'>...Loading</div>;
};

export default Detail;
