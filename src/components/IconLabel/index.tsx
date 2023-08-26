import { IconLabelContainer, IconLabelVariant } from "./styles";

interface IconLabelProps {
  variant: IconLabelVariant;
  icon: React.ReactNode;
}

export function IconLabel({ variant = "purple", icon: Icon }: IconLabelProps) {
  return <IconLabelContainer variant={variant}>{Icon}</IconLabelContainer>;
}
