import { IconType } from "react-icons";

interface SkillCardProps {
  icon?: IconType;
  secondaryIcon?: IconType;
  label: string;
  iconColor?: string;
  secondaryIconColor?: string;
  iconSize?: string;
  customSize?: { width: string; height: string };
}

export default function SkillCard({
  icon: Icon,
  secondaryIcon: SecondaryIcon,
  label,
  iconColor,
  secondaryIconColor,
  iconSize = "text-4xl",
  customSize,
}: SkillCardProps) {
  const sizeStyles = customSize || { width: "38px", height: "38px" };

  return (
    <div className="group flex w-40 flex-col items-center justify-center gap-2.5 rounded-xl border border-secondary/10 bg-base-300/80 p-4 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-secondary/50 hover:bg-base-100 hover:scale-105 hover:shadow-md">
      {Icon && SecondaryIcon ? (
        <div className="flex items-center gap-2 transition-transform duration-300 group-hover:scale-110">
          <Icon
            className={iconSize}
            style={{ color: iconColor, ...sizeStyles }}
          />
          <SecondaryIcon
            className={iconSize}
            style={{ color: secondaryIconColor || iconColor, ...sizeStyles }}
          />
        </div>
      ) : Icon ? (
        <div className="transition-transform duration-300 group-hover:scale-110">
          <Icon
            className={iconSize}
            style={{ color: iconColor, ...sizeStyles }}
          />
        </div>
      ) : null}
      <span className="text-xs sm:text-sm font-medium text-base-content/90 transition-colors group-hover:text-white">
        {label}
      </span>
    </div>
  );
}
