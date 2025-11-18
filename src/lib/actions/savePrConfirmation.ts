
'use server';

import { z } from 'zod';
import sql from '@/lib/db';
import { revalidatePath } from 'next/cache';

// Para crear la tabla, ejecuta esta sentencia SQL en tu base de datos de Neon:
// CREATE TABLE pr_confirmations (
//   id SERIAL PRIMARY KEY,
//   firstName TEXT,
//   lastName TEXT,
//   email TEXT,
//   attending BOOLEAN,
//   plusOne BOOLEAN,
//   interestedDays TEXT,
//   createdAt TIMESTAMP DEFAULT NOW()
// );

const schema = z.object({
  firstName: z.string().min(1, { message: 'El nombre es requerido.' }),
  lastName: z.string().min(1, { message: 'El apellido es requerido.' }),
  email: z.string().email({ message: 'Por favor ingresa un email válido.' }),
  attendance: z.enum(['si', 'no'], {
    errorMap: () => ({ message: 'Debes seleccionar una opción de asistencia.' }),
  }),
  plusOne: z.string().optional(),
  interestedDays: z.preprocess((val) => (Array.isArray(val) ? val : [val].filter(Boolean)), z.array(z.string()).optional()),
});


export async function savePrConfirmation(prevState: any, formData: FormData) {
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    attendance: formData.get('attendance'),
    plusOne: formData.get('plusOne'),
    interestedDays: formData.getAll('interestedDays'),
  };

  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Por favor revisa los campos.',
      fields: data,
    };
  }

  const { firstName, lastName, email, attendance, plusOne, interestedDays } = validatedFields.data;
  
  const willAttend = attendance === 'si';
  const hasPlusOne = willAttend && plusOne === 'on';
  const days = (willAttend && interestedDays && interestedDays.length > 0) 
    ? interestedDays.join(', ') 
    : null;

  try {
    await sql`
      INSERT INTO pr_confirmations (firstName, lastName, email, attending, plusOne, interestedDays)
      VALUES (${firstName}, ${lastName}, ${email}, ${willAttend}, ${hasPlusOne}, ${days})
    `;
    
    revalidatePath('/confirmacion-pr');
    return { message: 'Tu respuesta ha sido registrada. ¡Gracias!', errors: {}, fields: {} };
  } catch (e) {
    console.error(e);
    return {
      message: 'Error de base de datos: No se pudo guardar tu respuesta.',
      errors: {},
      fields: data,
    };
  }
}
