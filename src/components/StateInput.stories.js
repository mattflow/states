import React from 'react';

import StateInput from './StateInput';

const Template = (args) => <StateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  value: '',
};

export const Correct = Template.bind({});
Correct.args = {
  ...Default.args,
  state: 'CORRECT',
};

export const Incorrect = Template.bind({});
Incorrect.args = {
  ...Default.args,
  state: 'INCORRECT',
};

export const Repeat = Template.bind({});
Repeat.args = {
  ...Default.args,
  state: 'REPEAT',
};

export const Typing = Template.bind({});
Typing.args = {
  ...Default.args,
  state: 'TYPING',
};

const StateInputStory = {
  component: StateInput,
  title: 'State Input',
};

export default StateInputStory;
