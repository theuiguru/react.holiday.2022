export default async function HelloPage() {
    // let req = await fetch("http://localhost:3000/api/hello");
    // let data = await req.json();

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    let res = await fetch('https://httpstat.us/500');
    let data = await res.json();

    return <p>{data.name}</p>;
}