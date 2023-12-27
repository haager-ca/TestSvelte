import prisma from '$lib/prisma';
import { Page } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    //1.
    const response = await prisma.post.findMany({
        where: { published: false },
        include: { author: true },
    })

    //2.
    return { drafts: response };
}) satisfies PageServerLoad;