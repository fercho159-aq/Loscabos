
'use server';

import { z } from 'zod';
import sql from '@/lib/db';
import { revalidatePath } from 'next/cache';

const FormSchema = z.object({
  firstName: z.string().min(1, { message: 'El nombre es requerido.' }),
  lastName: z.string().min(1, { message: 'El apellido es requerido.' }),
  email: z.string().email({ message: 'Por favor ingresa un email válido.' }),
  attendance: z.enum(['si', 'no'], {
    required_error: 'Debes seleccionar una opción de asistencia.',
  }),
  plusOne: z.preprocess((val) => val === 'on', z.boolean().optional()),
  interestedDays: z.preprocess(
    (val) => (Array.isArray(val) ? val.filter(Boolean) : val ? [val] : []),
    z.array(z.string())
  ),
});


export type State = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    attendance?: string[];
    plusOne?: string[];
    interestedDays?: string[];
  };
  message?: string | null;
  fields?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    attendance?: string;
    plusOne?: boolean;
    interestedDays?: string[];
  }
};


export async function savePrConfirmation(prevState: State, formData: FormData): Promise<State> {
  const rawData = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    attendance: formData.get('attendance'),
    plusOne: formData.get('plusOne'),
    interestedDays: formData.getAll('interestedDays'),
  };
  
  console.log('Raw FormData:', {
    firstName: rawData.firstName,
    lastName: rawData.lastName,
    email: rawData.email,
    attendance: rawData.attendance,
    plusOne: rawData.plusOne,
    interestedDays: rawData.interestedDays,
  });

  const validatedFields = FormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Por favor revisa los campos.',
      fields: {
        firstName: rawData.firstName as string,
        lastName: rawData.lastName as string,
        email: rawData.email as string,
        attendance: rawData.attendance as string,
        plusOne: rawData.plusOne === 'on',
        interestedDays: rawData.interestedDays as string[],
      }
    };
  }

  const { firstName, lastName, email, attendance, plusOne, interestedDays } = validatedFields.data;
  
  const willAttend = attendance === 'si';
  const hasPlusOne = willAttend && plusOne;
  const days = (willAttend && interestedDays && interestedDays.length > 0) 
    ? interestedDays.join(', ') 
    : null;

  try {
    await sql`
      INSERT INTO pr_confirmations (firstName, lastName, email, attending, plusOne, interestedDays)
      VALUES (${firstName}, ${lastName}, ${email}, ${willAttend}, ${hasPlusOne}, ${days})
    `;
    
    revalidatePath('/confirmacion-pr');
    return { message: 'Tu respuesta ha sido registrada. ¡Gracias!' };
  } catch (e) {
    console.error(e);
    return {
      message: 'Error de base de datos: No se pudo guardar tu respuesta.',
      fields: {
        firstName: rawData.firstName as string,
        lastName: rawData.lastName as string,
        email: rawData.email as string,
        attendance: rawData.attendance as string,
        plusOne: rawData.plusOne === 'on',
        interestedDays: rawData.interestedDays as string[],
      }
    };
  }
}
