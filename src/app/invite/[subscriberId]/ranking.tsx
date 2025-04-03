import { getRankingUrl } from "@/app/services/api/api";
import { medalCooper, medalSilver, medalGold } from "@/assets";
import Image from "next/image";

export async function Ranking() {
  const { ranking } = await getRankingUrl();

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">Ranking de Indicações</h2>
      <div className="space-y-4">
        {ranking.map(({ name, score, id }, index) => {
          const rankingPosition = index + 1;
          return (
            <div key={id} className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º</span> | {name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">{score}</span>
              {rankingPosition === 1 && <Image src={medalGold} alt="Medal Gold" className="absolute right-8 top-0" />}
              {rankingPosition === 2 && <Image src={medalSilver} alt="Medal Silver" className="absolute right-8 top-0" />}
              {rankingPosition === 3 && <Image src={medalCooper} alt="Medal Cooper" className="absolute right-8 top-0" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
