// REFERENCE ONLY — not part of the build.
//
// This is an example Next.js API route for handling the contact form on a
// server-rendered deployment (e.g. Vercel). It is kept here for reference
// in case this project is ever deployed somewhere that runs a Node server.
//
// It will NOT run on the deployed GitHub Pages site: this repo builds with
// `output: 'export'` (see next.config.mjs) for static hosting, and static
// exports cannot execute API routes. The contact form actually wired up in
// src/components/sections/contact.tsx posts to a static-friendly form
// endpoint (Formspree-style) with a mailto: fallback instead.
//
// To use this for real on a server deployment: move this file to
// `src/app/api/contact/route.ts`, remove `output: 'export'` from
// next.config.mjs, and point the contact form at `/api/contact`.

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  // Wire up an email provider (Resend, SendGrid, Nodemailer, etc.) here.
  // Left unimplemented since this route is not used in the static build.

  return NextResponse.json({ ok: true });
}
