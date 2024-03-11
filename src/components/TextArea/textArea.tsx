import Button from '../Button/button';
import Text from '../Text/text';
import { StyledTextArea } from './style';

export default function TextArea() {
  return (
    <StyledTextArea>
      <Text tag="h1">title</Text>
      <Text tag="p">sinopse</Text>
      <Button>Button</Button>
    </StyledTextArea>
  );
}
