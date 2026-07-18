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
        "https://discord.com/api/v10/oauth2/token",
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
                redirect_uri: "https://test-bot-description.vercel.app/callback",
            }),
        }
    );

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
        return res.status(400).json({
            message: "アクセストークン取得失敗",
            tokenData,
        });
    }

    console.log("token status:" , tokenResponse.status);
    console.log("token data:", tokenData);

    // access_tokenでユーザー取得
    const userResponse = await fetch(
        "https://discord.com/api/v10/users/@me",
        {
            headers: {
                Authorization: `Bearer ${tokenData.access_token}`,
            },
        }
    );

    const user = await userResponse.json();

    console.log("user status:", userResponse.status);
    console.log("user data", user);

    return res.status(200).json({
        id: user.id,
        username: user.username,
    });
}