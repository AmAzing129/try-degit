import { Button, ConfigProvider } from 'antd';

export default () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: 'red',
      },
    }}
  >
    <Button>test</Button>
  </ConfigProvider>
);
