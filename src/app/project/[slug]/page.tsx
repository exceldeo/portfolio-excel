'use client';

import React from 'react';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Project Page</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}
