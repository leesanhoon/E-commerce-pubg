'use client';

import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import CategoryList from '../components/categories/CategoryList';

export default function CategoriesPage() {
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Quản lý danh mục
        </Typography>
        <CategoryList />
      </Paper>
    </Container>
  );
}