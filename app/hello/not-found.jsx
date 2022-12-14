import { notFound } from 'next/organization';

async function fetchUser(id) {
    let res = await fetch('https://httpstat.us/404');
    if(!res.ok) {
        return undefined;
    }
    return res.json();
}

export default async function HelloPage() {
    let user = await fetchUser();

    if(!user) {
        notFound();
    }

    return <p>{user.name}</p>
}