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
  const sizeStyles = customSize || { width: "40px", height: "40px" };

  return (
    <div className="flex flex-col items-center gap-2 rounded-lg bg-base-300 p-4 transition-colors hover:bg-base-100">
      {Icon && SecondaryIcon ? (
        <div className="flex gap-2">
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
        <Icon
          className={iconSize}
          style={{ color: iconColor, ...sizeStyles }}
        />
      ) : null}
      <span className="text-sm">{label}</span>
    </div>
  );
}
