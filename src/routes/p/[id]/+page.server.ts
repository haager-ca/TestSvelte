import prisma from "$lib/prisma";
import type { PageServerLoad } from './$types';

export const load = (async ({ params: { id } }) => {
    //2.
    const post = await prisma.post.findUnique({
        where: { id: Number(id) },
        include: { author: true },
    });

    //3. 
    return { post };
}) satisfies PageServerLoad;