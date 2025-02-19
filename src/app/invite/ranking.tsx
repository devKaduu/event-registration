import { medalCooper, medalSilver, medalGold } from "@/assets";
import Image from "next/image";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">Ranking de Indicações</h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Henrique Demelo
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">300</span>
          <Image src={medalGold} alt="Medal Gold" className="absolute right-8 top-0" />
        </div>
        <div className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Carlos Eduardo
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">300</span>
          <Image src={medalSilver} alt="Medal Gold" className="absolute right-8 top-0" />
        </div>
        <div className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Arthur Marcio
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">300</span>
          <Image src={medalCooper} alt="Medal Gold" className="absolute right-8 top-0" />
        </div>
      </div>
    </div>
  );
}
