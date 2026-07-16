import Header from "../components/Header";

type agreement = {
  title: string,
  description: string[]
}

const agreements: agreement[] = [
  {
    title: "サービスについて",
    description: ["原則としてマニア雑談鯖にて機能を提供するサービスです", "提供内容は予告なく変更される場合があります"]
  },
  {
    title: "禁止事項",
    description: ["最低限のセキュリティは担保していますが悪用はおやめください"]
  },
  {
    title: "免責事項",
    description: ["メンテナンスによって一時的にサービスを利用できない恐れがあります。"]
  }
]

const policy: agreement[] = [
  {
    title: "取得する情報",
    description: ["不要に個人情報を収集しません、絶対に、確信しています"]
  }
]

function List({ items }: { items: agreement[] }) {
  return (
    <>
      {items.map((agreement) => (
        <div key={agreement.title} className="relative pl-10 mt-6 first:mt-0">
          <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500" />
          <h3 className="text-xl font-bold text-white">
            {agreement.title}
          </h3>
          <ul className="mt-2 space-y-1 text-slate-300">
            {agreement.description.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default function Agreements() {
  return (
    <main className="bg-[#010b1d] min-h-screen pt-24">
      <Header />
      <section className="mt-12 max-w-6xl rounded mx-auto px-6 py-12 bg-[#21242C]">
        <h2 className="mb-8 text-3xl font-bold text-white">
          利用規約
        </h2>
        <List items={agreements}></List>
        <h2 className="mb-8 text-3xl mt-6 font-bold text-white">
          プライバシーポリシー
        </h2>
        <List items={policy}></List>
      </section>
    </main>
  );
}
