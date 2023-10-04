import { NextResponse } from 'next/server';

import projectDatas from '@/data/projectData';

export async function GET() {
  return NextResponse.json({ data: projectDatas });
}
