import { z } from "zod";

const name = z.string().trim().min(2, "Enter your name.").max(80);
const email = z.string().trim().email("Enter a valid email address.").max(160);

export const newsletterSchema = z.object({
  name,
  email,
});

export const contactSchema = z.object({
  name,
  email,
  message: z.string().trim().min(12, "Write a message with at least 12 characters.").max(2000),
});

export const feedbackSchema = z.object({
  name,
  email,
  feedback: z.string().trim().min(12, "Share feedback with at least 12 characters.").max(2000),
});

export const commentSchema = z.object({
  articleId: z.string().trim().min(1).max(120),
  parentId: z.string().trim().max(120).optional(),
  name,
  comment: z.string().trim().min(8, "Write a comment with at least 8 characters.").max(280),
});

export const contentSchema = z.object({
  title: z.string().trim().min(4).max(180),
  slug: z.string().trim().min(3).max(180).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: z.string().trim().min(20).max(320),
  author: z.string().trim().min(2).max(100),
  coverImage: z.string().trim().url().optional().or(z.literal("")),
  categoryId: z.string().trim().optional(),
  tags: z.array(z.string().trim().min(1).max(40)).max(12),
  readingTime: z.string().trim().min(3).max(40),
  featured: z.boolean(),
  published: z.boolean(),
  content: z.string().trim().min(40),
  seoTitle: z.string().trim().max(180).optional(),
  seoDescription: z.string().trim().max(320).optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type FeedbackInput = z.infer<typeof feedbackSchema>;
export type CommentInput = z.infer<typeof commentSchema>;
export type ContentInput = z.infer<typeof contentSchema>;
