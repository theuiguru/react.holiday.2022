export default async function HelloPage() {
    let req = await fetch("http://localhost:3000/api/hello");
    let data = await req.json();

    return <p>{data.name}</p>;
}