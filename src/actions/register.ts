'use server';

import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function registerBusiness(formData: FormData) {
  try {
    const businessName = formData.get('businessName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!businessName || !email || !password) {
      return { error: 'All fields are required.' };
    }

    // Generate Subdomain
    // Example: "Lapter Technologies" -> "laptertechnologies.laptertech.store"
    const cleanName = businessName.toLowerCase().replace(/[^a-z0-9]/g, '');
    let subdomain = `${cleanName}.laptertech.store`;

    // Check if subdomain exists
    let existingBusiness = await prisma.business.findUnique({ where: { subdomain } });
    if (existingBusiness) {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      subdomain = `${cleanName}${randomSuffix}.laptertech.store`;
    }

    // Check if user email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { error: 'A user with this email already exists.' };
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create Business and User inside a transaction
    const business = await prisma.business.create({
      data: {
        name: businessName,
        subdomain: subdomain,
        tier: 'STARTER',
        users: {
          create: {
            email,
            passwordHash,
            role: 'OWNER',
          }
        }
      },
      include: {
        users: true
      }
    });

    return { success: true, subdomain: business.subdomain };
  } catch (error) {
    console.error('Registration Error:', error);
    return { error: 'Failed to create account. Please try again.' };
  }
}
