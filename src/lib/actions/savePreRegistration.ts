'use server';
import 'dotenv/config';

import { z } from 'zod';
import sql from '@/lib/db';
import { revalidatePath } from 'next/cache';

const schema = z.object({
    firstName: z.string().min(1, { message: 'El nombre es requerido.' }),
    lastName: z.string().min(1, { message: 'El apellido es requerido.' }),
    email: z.string().email({ message: 'Por favor ingresa un email válido.' }),
    age: z.string().optional(),
    instagram: z.string().optional(),
    state: z.string().min(1, { message: 'El estado es requerido.' }),
    city: z.string().min(1, { message: 'La ciudad es requerida.' }),
    industry: z.string().min(1, { message: 'La industria es requerida.' }),
    professionalStatus: z.string().min(1, { message: 'El estatus es requerido.' }),
});

export async function savePreRegistration(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    age: formData.get('age'),
    instagram: formData.get('instagram'),
    state: formData.get('state'),
    city: formData.get('city'),
    industry: formData.get('industry'),
    professionalStatus: formData.get('professionalStatus'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Por favor revisa los campos.',
    };
  }

  const { firstName, lastName, email, age, instagram, state, city, industry, professionalStatus } = validatedFields.data;

  try {
    await sql`
      INSERT INTO preregistrations (firstName, lastName, email, age, instagram, state, city, industry, professionalStatus)
      VALUES (${firstName}, ${lastName}, ${email}, ${age || null}, ${instagram || null}, ${state}, ${city}, ${industry}, ${professionalStatus})
    `;
    revalidatePath('/pre-registro');
    return { message: '¡Gracias! Tu pre-registro ha sido completado.' };
  } catch (e) {
    console.error(e);
    return {
      message: 'Error de base de datos: No se pudo guardar el pre-registro.',
    };
  }
}
