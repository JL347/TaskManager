"use client";

import { useEffect, useState } from 'react';
import CheckboxList from '../components/CheckboxList/CheckboxList';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/tasks.json')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(setError);
  }, []);

  console.log(tasks)

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ height: '100vh' }}>
        <CheckboxList items={tasks} />
      </Box>
    </Container>
  );
}
