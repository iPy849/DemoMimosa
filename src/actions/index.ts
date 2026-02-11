import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro/zod';

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(1, 'Name is required'),
      email: z.string().email('Invalid email address'),
      whatsapp: z.string().optional(),
      interest: z.string().optional(),
      message: z.string().optional(),
    }),
    handler: async (input) => {
      // In production, integrate with an email service (SendGrid, Resend)
      // or a CRM (HubSpot, Salesforce).
      console.log('[Contact Form Submission]', {
        ...input,
        timestamp: new Date().toISOString(),
      });

      return { success: true };
    },
  }),
};
