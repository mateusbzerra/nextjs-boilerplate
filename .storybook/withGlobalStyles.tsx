import { StoryFn } from '@storybook/addons';
import GlobalStyle from '../src/styles/global';

const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export default withGlobalStyles;
