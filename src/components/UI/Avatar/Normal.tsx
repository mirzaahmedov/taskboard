import React from "react";
import styled from "styled-components";

import {
  BaseAvatarContainer,
  BaseAvatarImage,
  BaseAvatarAltText,
  BaseAvatarBadge,
  BaseAvatarStatus,
  StatusType,
} from "./Base";

const Container = styled(BaseAvatarContainer)``;
const Image = styled(BaseAvatarImage)`
  width: 40px;
  height: 40px;
`;
const AltText = styled(BaseAvatarAltText)`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.primary[500]};
  background-color: ${({ theme }) => theme.colors.primary[100]};
`;
const Badge = styled(BaseAvatarBadge)`
  padding: 2px 6px;
  font-size: 10px;
  font-weight: 900;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.white.white};
  background-color: ${({ theme }) => theme.colors.red[500]};
`;
const Status = styled(BaseAvatarStatus)`
  width: 13px;
  height: 13px;
`;

const Avatar = ({
  image,
  alt,
  frame = false,
  badge,
  status,
}: {
  image: string;
  alt: string;
  frame?: boolean;
  badge?: number;
  status?: StatusType;
}) => {
  return (
    <Container frame={frame}>
      {badge && <Badge>{badge}</Badge>}
      {image ? (
        <Image src={image} alt={alt} />
      ) : (
        <AltText>
          {alt
            .split(" ")
            .slice(0, 2)
            .reduce(
              (result, word) => result + word.charAt(0).toUpperCase(),
              ""
            )}
        </AltText>
      )}
      {status && <Status status={status} />}
    </Container>
  );
};

export default Avatar;
