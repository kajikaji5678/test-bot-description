import Header from "../components/Header.js";
import Feature from "../components/feature.js";
import Logs from "../components/logs.js";
import Serverinfo from "../components/ServerInfo.js";

function Homes() {
    return (
        <>
            <main className="bg-[#010b1d] pt-24">
                <Header />
                <Feature />
                <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 px-4 lg:grid-cols-2">
                    <div>
                        <Logs />
                    </div>
                    <div>
                        <Serverinfo />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Homes;