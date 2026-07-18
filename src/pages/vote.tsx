import Header from "../components/Header";

function Vote() {
  const candidates = [
    "アイコン候補1",
    "アイコン候補2"
  ];

  return (
    <>
      <main className="min-h-screen bg-[#010b1d] pt-24">
        <header></header>

        <section className="max-w-6xl rounded mx-auto px-6 py-12 bg-[#21242C]">
          <h1 className="text-3xl font-bold text-white">
            投票ページ
          </h1>
          <p className="mt-4 text-slate-300">
            New Eron Botのアイコン投票ページです
          </p>
        </section>
      </main>
    </>
  )
}

export default Vote;