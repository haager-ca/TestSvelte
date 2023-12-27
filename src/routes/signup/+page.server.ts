import { fail, redirect } from '@sveltejs/kit';
import prisma from "$lib/prisma";
import type { Actions } from './$types';

const validateEmail = (email: string) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}
