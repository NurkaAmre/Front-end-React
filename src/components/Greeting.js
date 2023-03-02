import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveGreetings } from '../redux/greetings/greetings';

export default function Greeting () {
  const data = useSelector((state) => state.text);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveGreetings());
  }, [dispatch]);
  return (
    <div>
      <h2>{data}</h2>
    </div>   
  );
};