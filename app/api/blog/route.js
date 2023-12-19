export async function getBlogPosts(request) {
    return new Response("Hi from blog api")
}

export async function POST(request) {
    const body = await request.json()
    console.log(body);

    return new Response(JSON.stringify({hello: "world"}))
}