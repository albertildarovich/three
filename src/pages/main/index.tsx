import { RenderModel } from '../../shared/ui';
import { Fireflies } from './ui/Fireflies/Fireflies';
import { Totoro } from './ui/Totoro';
import { Totoro2 } from './ui/Totoro2';
import { Wrapper } from './ui/styled';

function Main() {
  return (
    <Wrapper>
      <Fireflies />
      <RenderModel>
        <>
          <Totoro />
          <Totoro2 />
        </>
      </RenderModel>
    </Wrapper>
  );
}

export default Main;
