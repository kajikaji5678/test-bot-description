import { createClient } from "@supabase/supabase-js";
import type {VercelRequest, VercelResponse} from "@vercel/node";

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
);

export default async function handler
(req: VercelRequest, res:VercelResponse) {

    console.log("body:", req.body);


    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method Not Allowed",
        });
    }

    const {user_id , candidate} = req.body

    console.log("user_id", user_id);
    console.log("candidate:", candidate);

    if (!user_id || !candidate) {
        return res.status(400).json({
            message: "必要な情報が不足しています",
        });
    }

    const {error} = await supabase
        .from("votes")
        .insert({
            user_id,
            candidate
        });

    if (error?.code === "23505") {
        return res.status(409).json({
            message: "すでに投票済みです"
        });
    }

    console.log(error);

    return res.status(200).json({
        message: "投票しました",
    });
}

// テスト