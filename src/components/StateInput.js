import PropTypes from 'prop-types';
import { Input, Typography } from 'antd';
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  LoadingOutlined,
} from '@ant-design/icons';
import { red, green } from '@ant-design/colors';

const { Text } = Typography;

function getAddonAfter(state) {
  if (state === 'CORRECT') {
    return <CheckCircleTwoTone twoToneColor={green.primary} />;
  }
  if (state === 'INCORRECT' || state === 'REPEAT') {
    return <CloseCircleTwoTone twoToneColor={red.primary} />;
  }
  if (state === 'TYPING') {
    return <LoadingOutlined />;
  }
  return null;
}

function getMessage(state) {
  if (state === 'CORRECT') {
    return <Text type="success">Correct</Text>;
  }
  if (state === 'INCORRECT') {
    return <Text type="danger">Not A State</Text>;
  }
  if (state === 'REPEAT') {
    return <Text type="danger">Drink</Text>;
  }
  return null;
}

const StateInput = ({ id, value, state }) => {
  const addonAfter = getAddonAfter(state);
  const message = getMessage(state);

  return (
    <div>
      <Input value={value} addonBefore={id} addonAfter={addonAfter} />
      {message}
    </div>
  );
};

StateInput.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default StateInput;
