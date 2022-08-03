import styled, { css } from "styled-components";

export type StatusType = "online" | "busy";

export const BaseAvatarContainer = styled.div<{
  frame: boolean;
}>`
  position: relative;
  cursor: pointer;

  ${(props) =>
    props.frame &&
    css`
      :before {
        content: "";
        display: block;
        position: absolute;
        left: -4px;
        right: -4px;
        top: -4px;
        bottom: -4px;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.gray[50]};
      }
      :before {
        content: "";
        display: block;
        position: absolute;
        left: -4px;
        right: -4px;
        top: -4px;
        bottom: -4px;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.primary[500]};
        border-left-color: transparent;
        transform: rotate(45deg);
      }
    `}
`;
export const BaseAvatarImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;
export const BaseAvatarStatus = styled.span<{
  status?: StatusType;
}>`
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: ${({ status, theme }) =>
    status === "online"
      ? theme.colors.green[500]
      : status === "busy"
      ? theme.colors.red[500]
      : null};
  border: 3px solid ${({ theme }) => theme.colors.white.white};
  border-radius: 50%;
`;
export const BaseAvatarBadge = styled.span`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50%;
`;
export const BaseAvatarAltText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
