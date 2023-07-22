import React from 'react';
import Button from './ui/Button';

export default function CategoryCard({ category, setCategory }) {
  return <Button text={category} onClick={() => setCategory(category)} />;
}
