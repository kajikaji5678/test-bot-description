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
        title: "微調整",
        description: ["手動コマンドを廃止し、スラッシュコマンドに対応",
        "クールタイムを1分に縮小"]
    }
]


export default function Logs() {
    return(
        <section className="mt-3 max-w-6xl rounded mx-auto px-6 py-12 bg-[#21242C]">
            {logs.map((log) => 
                <div className="relative pl-10 mt-4">
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