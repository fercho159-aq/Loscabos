'use server';

import { z } from 'zod';
import sql from '@/lib/db';
import { revalidatePath } from 'next/cache';

// Para crear la tabla, ejecuta esta sentencia SQL en tu base de datos de Neon:
// CREATE TABLE contacts (
//   id SERIAL PRIMARY KEY,
//   firstName TEXT,
//   lastName TEXT,
//   email TEXT,
//   subject TEXT,
//   message TEXT,
//   createdAt TIMESTAMP DEFAULT NOW()
// );

const schema = z.object({
  firstName: z.string().min(1, { message: 'El nombre es requerido.' }),
  lastName: z.string().min(1, { message: 'El apellido es requerido.' }),
  email: z.string().email({ message: 'Por favor ingresa un email válido.' }),
  subject: z.string().min(1, { message: 'El asunto es requerido.' }),
  message: z.string().min(1, { message: 'El mensaje es requerido.' }),
});

export async function saveContact(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Por favor revisa los campos.',
    };
  }

  const { firstName, lastName, email, subject, message } = validatedFields.data;

  try {
    await sql`
      INSERT INTO contacts (firstName, lastName, email, subject, message)
      VALUES (${firstName}, ${lastName}, ${email}, ${subject}, ${message})
    `;
    revalidatePath('/contacto');
    return { message: '¡Gracias! Tu mensaje ha sido enviado.' };
  } catch (e) {
    console.error(e);
    return {
      message: 'Error de base de datos: No se pudo guardar el mensaje.',
    };
  }
}
