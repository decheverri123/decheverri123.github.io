import React from "react";

type ShowLessButtonProps = {
  onClick: () => void;
};

export default function ShowLessButton({ onClick }: ShowLessButtonProps) {
  return (
    <div className="mt-4 text-right">
      <span className="cursor-pointer text-accent underline" onClick={onClick}>
        Show less ▲
      </span>
    </div>
  );
}
