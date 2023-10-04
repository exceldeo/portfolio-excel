import { NextResponse } from 'next/server';

import projectDatas from '@/data/projectData';

export async function GET(request: Request) {
  const slug = request.url.split('/').pop();
  const project = projectDatas.find((project) => project.slug === slug);
  if (project) {
    return NextResponse.json({ data: project });
  }

  return NextResponse.json({ data: projectDatas });
}
