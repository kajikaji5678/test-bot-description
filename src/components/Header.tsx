function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b-2 border-black/10 bg-linear-to-r from-[#3D0E66] to-[#2C75FF] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_40%)]" />
      <div className="relative z-10 max-w-6xl mx-auto py-6 px-4 flex items-center justify-between">
        <p className="font-semibold text-[20px]">Egg Server Bot</p>
        <nav>
          <ul className="flex items-center gap-8 text-slate-300">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">
                ホーム
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">
                コマンド
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">
                機能
              </a>
            </li>
            <li>
              <a href="/agreements" className="hover:text-white transition-colors duration-200">
                利用規約
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header