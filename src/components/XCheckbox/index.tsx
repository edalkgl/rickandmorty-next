import { cn } from "@/src/helpers/tailwindHelper";

import { CheckIcon } from "@heroicons/react/24/solid";

interface IProps {
  onChange: (checked: boolean) => void;
  text?: React.JSX.Element | string;
  checked: undefined | boolean;
  shape?: "square" | "round";
  errorMessage?: string;
  disabled?: boolean;
  label?: string;
}

export const XCheckbox: React.FC<IProps> = ({
  errorMessage,
  onChange,
  checked,
  label,
  text,
}) => {
  return (
    <div className="flex flex-col">
      {label && <label>{label}</label>}

      <div
        className="flex w-fit cursor-pointer items-center gap-2"
        onClick={() => onChange(!checked)}>
        <div
          className={cn(
            "relative flex size-6 items-center justify-center rounded-md bg-slate-200",
            {
              ["cursor-default bg-green-600"]: checked,
            }
          )}>
          {checked && <CheckIcon className="absolute size-5 text-white" />}
        </div>
        {text && <div className="text-sm text-white">{text}</div>}
      </div>

      {errorMessage && (
        <div className="text-left text-xs text-rose-700">{errorMessage}</div>
      )}
    </div>
  );
};
