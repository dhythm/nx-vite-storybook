import styled from '@emotion/styled';
import { Checkbox } from '@nvs/components';

/* eslint-disable-next-line */
export interface SomethingProps {}

const StyledSomething = styled.div`
  color: pink;
`;

export function Something(props: SomethingProps) {
  return (
    <StyledSomething>
      <Checkbox checked />
    </StyledSomething>
  );
}

export default Something;
