import { useEffect } from "react";

export default function Callback() {
    useEffect(() => {
        const getUser = async () => {
            const params = new URLSearchParams(window.location.search);
            const code = params.get("code");

            if (!code) {
                console.error("認証コードがありません");
                return;
            }

            const response = await fetch("/api/discord-auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    code,
                }),
            });

            const user = await response.json();

            console.log(user);

            // 一旦保存
            localStorage.setItem(
                "discordUser",
                JSON.stringify(user)
            );

            // 投票ページへ戻す
            window.location.href = "/vote";
        };

        getUser();
    }, []);

    return (
        <div>
            Discord認証中...
        </div>
    );
}