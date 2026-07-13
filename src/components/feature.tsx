import { JSX } from "react/jsx-dev-runtime";
import weatherImage from "../assets/weather.jpg"
import EggImage from "../assets/egg.png"
import deathBattleImage from "../assets/deathbattleImage.png"

type FeatureItem = {
    title: string;
    description: string;
    icon: string;
    image: string;
};

const features: FeatureItem[] = [
    {
        title: '天気をお知らせ',
        description: '毎日の天気予報を3回に分けて自動で送信します',
        icon: '☀️',
        image: weatherImage,
    },
    {
        title: 'ヒカマニ情報',
        description: '過去のヒカマニ情報をお届けします',
        icon: '📢',
        image: EggImage
    },
    {
        title: 'デスバトル',
        description: 'ユーザー同士で対戦できるゲーム機能です',
        icon: '🗡️',
        image: deathBattleImage
    }
];

export default function Feature(): JSX.Element {
    return (
        <section className="mt-12 max-w-6xl rounded mx-auto px-6 py-12 bg-[#21242C]">
            <h2 className="mb-8 text-3xl font-bold text-white">
                主な機能
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
                {features.map((feature) =>
                    <div key={feature.title}
                        className="group relative overflow-hidden rounded-2xl border-2 border-white py-4 px-6">
                        <img
                            src={feature.image}
                            className="absolute inset-0 h-full w-full object-cover
                                duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50"/>
                        <div className="absolute inset-0 dot-pattern dot-area"/>
                        <div className="relative z-10 flex h-full flex-col justify-start">
                            <div className="mb-2 text-4xl">
                                {feature.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-300">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}