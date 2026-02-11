export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, whatsapp, interest, message } = data;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Log the contact request (in production, integrate with an email service
    // like SendGrid, Resend, or a CRM like HubSpot)
    console.log('[Contact Form Submission]', {
      name,
      email,
      whatsapp: whatsapp || 'N/A',
      interest: interest || 'N/A',
      message: message || 'N/A',
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Contact form submitted successfully.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request body.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
