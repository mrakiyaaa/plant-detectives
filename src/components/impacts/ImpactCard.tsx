import { ImpactCard as ImpactCardType } from "@/constants/impactsData";

interface ImpactCardProps {
  impact: ImpactCardType;
  colorScheme: "environment" | "health";
  index: number;
  totalCards: number;
}

export default function ImpactCard({ impact, colorScheme }: ImpactCardProps) {
  const environmentColors = {
    gradient: "from-emerald-400 to-teal-500",
    border: "border-emerald-200",
  };

  const healthColors = {
    gradient: "from-rose-400 to-orange-500",
    border: "border-rose-200",
  };

  const colors = colorScheme === "environment" ? environmentColors : healthColors;

  return (
    <div
      className={`shrink-0 w-80 h-64 bg-white rounded-2xl shadow-lg ${colors.border} border-2 overflow-hidden hover:shadow-xl transition-shadow duration-200`}
    >
      {/* Header with gradient */}
      <div className={`h-24 bg-linear-to-r ${colors.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent" />
        <div className="relative p-4 flex items-center gap-3">
          <div className="text-3xl">{impact.icon}</div>
          <h3 className="font-bold text-white text-xl leading-tight">{impact.title}</h3>
        </div>
      </div>

      {/* Description — always visible */}
      <p className="text-slate-700 text-sm leading-relaxed p-4">
        {impact.description}
      </p>
    </div>
  );
}
