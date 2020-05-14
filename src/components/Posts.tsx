import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import axios from 'axios';

const Card = (prop: any) => {
  const { id, title, thumb, tag } = prop;

  const tagRef = useRef(null);

  useLayoutEffect(() => {
    if (tagRef.current) {
      const el = tagRef.current! as HTMLElement;
      el.style!.left = `-${el.clientWidth - 15}px`;
    }
  });

  return (
    <div className='col-lg-6 my-3'>
      <div className='card'>
        <img src={`/img/${thumb}`} alt='' className='car-img-top' />
        <div className='card-body'>
          <div className='card-title'>{title}</div>
          <Link className='text-uppercase' to={`/detail/${id}`}>
            <small>&mdash; View Case Study</small>
          </Link>
        </div>
      </div>
      <span className='tag' ref={tagRef}>
        {tag}
      </span>
    </div>
  );
};

const Posts = (props: RouteComponentProps) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3500/api/posts/');
      setPosts(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className='posts row'>
      {posts.map((post, i) => {
        const { id } = post;
        return <Card key={id} {...post} />;
      })}
    </div>
  );
};

export default Posts;
