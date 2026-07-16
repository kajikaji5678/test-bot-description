type LogItem = {
  data: string;
  version: string;
  title: string;
  description: string[];
};

const logs: LogItem[] = [
  {
    data: "2026/07/01",
    version: "v1.0.0",
    title: "リリース",
    description: ["2026年初頭から不具合が多かったBotの代替案としてリリース"]
  },
  {
    data: "2026/07/03",
    version: "v1.1.0",
    title: "スラッシュコマンド初登場",
    description: ["手動コマンドを廃止し、スラッシュコマンドに対応",
      "クールタイムを1分に縮小"]
  },
  {
    data: "2026/07/03",
    version: "v1.1.1",
    title: "除外タグ",
    description: ["AIの画像を無くしたいなどという要望に応え、除外タグを設立",
      "擬似的な人気順ソートを追加"]
  },
  {
    data: "2026/07/07",
    version: "v1.1.3",
    title: "多彩な小機能を追加",
    description: ["ディス速コマンド叩き起こし隊を発足。", "デスバトル機能(GIF対応)を新たに追加", "Hikakin_Newsやコメントランキングを追加"]
  },
  {
    data: "2026/07/10",
    version: "v1.2.0",
    title: "⭐︎につぐ新たな統計",
    description: ["「げ」リアクションの獲得ランキングを表示", "お天気情報を9時12時18時にわけて表示"]
  },
  {
    data: "2026/07/15",
    version: "v1.2.1",
    title: "新たな試みが開始されるデスバトル",
    description: ["技を登録・編集できる機能を追加", "二つの職業選択でデスバトルがよりおもしろくなる"]
  }
]


export default function Logs() {
  return (
    <section className="mt-9 max-w-6xl rounded mx-auto px-6 py-12 bg-[#21242C]">
      {logs.map((log) =>
        <div key={log.version} className="relative pl-10 mt-4 first:mt-0">
          <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500" />
          <p className="text-slate-400">{log.data}</p>
          <h3 className="text-xl font-bold text-white">
            {log.version}
          </h3>
          <p className="text-white">
            {log.title}
          </p>
          <ul className="mt-2 space-y-1 text-slate-300">
            {log.description.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}