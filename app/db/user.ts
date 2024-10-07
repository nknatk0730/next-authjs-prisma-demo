import { prisma } from '@/globals/db';

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);  // エラーをログに出力
    return null;
  }
};