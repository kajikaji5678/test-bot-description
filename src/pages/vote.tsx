import Header from "../components/Header";

type Candidate = {
  name: string,
  image: string
};

function Vote() {
  const candidates: Candidate[] = [
    {
      name: "二一(ふたかず)",
      image: "/vote/hutakazu.png"
    },
    {
      name: "舵斗",
      image: "/vote/kajito.png"
    },
    {
      name: "球体紳士",
      image: "/vote/a.png"
    },
    {
      name: "ユルハ",
      image: "/vote/yuruha.jpg"
    },
    {
      name: "kaji店長",
      image: "/vote/kaji-tentyou.png"
    },
    {
      name: "幸村",
      image: "/vote/satimura.png"
    },
    {
      name: "クーちゃん",
      image: "/vote/ku-tyan.jpg"
    },
    {
      name: "稲造",
      image: "/vote/inazou.png"
    },
    {
      name: "patrick-bot",
      image: "/vote/patrick-bot.png"
    },
    {
      name: "揺花-YOUKA",
      image: "/vote/i.png"
    }
  ];

  const handleVote = async (candidate: Candidate) => {
    const confirmed = window.confirm(`${candidate.name}に投票しますか？`);

    if (!confirmed) return;

    const res = await fetch("/api/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: "test-user",
        candidate: candidate.name
      })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message ?? "投票できませんでした");
      return;
    }

    alert("投票しました");
  }

  return (
    <>
      <main className="min-h-screen bg-[#010b1d] pt-24">
        <Header />

        <section className="max-w-6xl rounded mx-auto px-6 py-9 bg-[#21242C]">
          <h1 className="text-3xl font-bold text-white">
            投票ページ
          </h1>
          <p className="mt-4 text-slate-300">
            New Eron Botのアイコン投票ページです
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {candidates.map((candidate) => (
              <div key={candidate.name} className="rounded-lg bg-black/20 p-4 text-white">
                <img src={candidate.image} className="w-full aspect-square object-cover rounded-lg" />
                <p className="mt-3 text-center text-lg font-semibold">
                  {candidate.name}
                </p>
                <button 
                className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                onClick={() => handleVote(candidate)}>
                  投票する
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Vote;