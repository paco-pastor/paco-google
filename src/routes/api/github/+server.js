import { Octokit } from "octokit";

export async function GET() {
    console.log("👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽")
    console.log(process.env.GITHUB_API_KEY)
    const octokit = new Octokit({ 
        auth: process.env.GITHUB_API_KEY
    });

    const   user = await octokit.request('GET /user')

    return new Response(JSON.stringify(user), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
