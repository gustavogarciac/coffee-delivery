import styled from "styled-components";

export type IconLabelVariant = "purple" | "yellow";

interface IconLabelContainerProps {
  variant: IconLabelVariant;
}

const iconVariants = {
  purple: "purple",
  yellow: "yellow",
};

export const IconLabelContainer = styled.div<IconLabelContainerProps>`
  color: ${(props) => props.theme[iconVariants[props.variant]]};
`;
