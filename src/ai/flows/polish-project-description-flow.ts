'use server';
/**
 * @fileOverview An AI agent that refines and professionalizes project descriptions.
 *
 * - polishProjectDescription - A function that handles the project description polishing process.
 * - ProjectDescriptionInput - The input type for the polishProjectDescription function.
 * - ProjectDescriptionOutput - The return type for the polishProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  description: z.string().describe('The raw project description to be refined.'),
});
export type ProjectDescriptionInput = z.infer<typeof ProjectDescriptionInputSchema>;

const ProjectDescriptionOutputSchema = z.object({
  polishedDescription: z.string().describe('The refined and professionalized project description.'),
});
export type ProjectDescriptionOutput = z.infer<typeof ProjectDescriptionOutputSchema>;

export async function polishProjectDescription(
  input: ProjectDescriptionInput
): Promise<ProjectDescriptionOutput> {
  return polishProjectDescriptionFlow(input);
}

const polishProjectDescriptionPrompt = ai.definePrompt({
  name: 'polishProjectDescriptionPrompt',
  input: {schema: ProjectDescriptionInputSchema},
  output: {schema: ProjectDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in creating clear, concise, and impactful project descriptions for software development portfolios.

Your task is to take a raw project description and refine it to make it more professional and engaging for potential employers and collaborators.
Focus on highlighting the project's purpose, key features, and the technologies used, ensuring it is easy to read and understand.

Project Name: {{{projectName}}}
Raw Description: {{{description}}}

Refined Description:`,
});

const polishProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'polishProjectDescriptionFlow',
    inputSchema: ProjectDescriptionInputSchema,
    outputSchema: ProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await polishProjectDescriptionPrompt(input);
    return output!;
  }
);
