import { Layout } from 'antd';
import * as React from 'react';

class Footer extends React.Component {
  public render() {
    return (
      <Layout.Footer style={{ textAlign: 'center' }}>
        ©2018 Created By Wincer.
      </Layout.Footer>
    )
  }
}

export default Footer;