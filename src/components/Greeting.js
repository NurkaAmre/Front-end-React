import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveGreetings());
  }, []);

  return <h1>{greetings.message}</h1>;
};

export default Greeting;
