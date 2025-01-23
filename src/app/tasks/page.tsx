"use client";

import { useEffect, useState } from 'react';
import CheckboxList from '../components/CheckboxList/CheckboxList';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/tasks.json')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  console.log(tasks)

  return (
    <div>
      <CheckboxList items={tasks} />
    </div>
  );
}
