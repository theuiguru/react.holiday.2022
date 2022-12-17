export default async function Home({ params }) {
    return (
        <main>
            <h1>{params.name}</h1>
        </main>
    )
}