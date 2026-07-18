import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method Not Allowed",
        });
    }

    const { code } = req.body;

    if (!code) {
        return res.status(400).json({
            message: "codeがありません",
        });
    }

    // code → access_token へ交換
    const tokenResponse = await fetch(
        "https://discord.com/api/oauth2/token",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                client_id: process.env.DISCORD_CLIENT_ID!,
                client_secret: process.env.DISCORD_CLIENT_SECRET!,
                grant_type: "authorization_code",
                code,
                redirect_uri: "http://localhost:5173/callback",
            }),
        }
    );

    const tokenData = await tokenResponse.json();

    // access_tokenでユーザー取得
    const userResponse = await fetch(
        "https://discord.com/api/users/@me",
        {
            headers: {
                Authorization: `Bearer ${tokenData.access_token}`,
            },
        }
    );

    const user = await userResponse.json();

    return res.status(200).json({
        id: user.id,
        username: user.username,
    });
}