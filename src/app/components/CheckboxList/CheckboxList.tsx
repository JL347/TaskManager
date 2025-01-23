"use client";

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

interface Item {
  id: number;
  title: string;
  completed: boolean;
  created: string;
}

export default function CheckboxList({ items }: { items: Item[] }) {
  const [checkedItems, setCheckedItems] = React.useState(items);

  const handleToggle = (id: number) => () => {
    const updatedItems = checkedItems.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setCheckedItems(updatedItems);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {checkedItems.map((item) => {
        const labelId = `checkbox-list-label-${item.id}`;

        return (
          <ListItem
            key={item.id}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(item.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}