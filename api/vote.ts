import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
);

export default async function handler(req: any, res:any) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method Not Allowed",
        });
    }

    const {user_id , candidate} = req.body

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

    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }

    console.log(error);

    return res.status(200).json({
        message: "投票しました",
    });
}

// テスト