import prisma from "$lib/prisma";
import { redirect } from "@sveltejs/kit";
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

export const actions = {
    //2.
    publishPost: async ({ params: { id } }) => {
        await prisma.post.update({
            where: { id: Number(id) },
            data: {
                published: true,
            },
        });

        throw redirect(303, `/p/${id}`);
    },

    //3.
    deletePost: async ({ params: { id } }) => {
        await prisma.post.delete({
            where: { id: Number(id) },
        });

        throw redirect(303, '/')
    }
}   