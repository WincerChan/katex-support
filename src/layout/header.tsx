import { Icon } from 'antd';

import * as React from 'react';

class Header extends React.Component {
    public render() {
        return (
            <nav className="navbar has-shadow is-spaced"
                role="navigation"
                aria-label="main navigation">
                <a href="#"
                    className="navbar-brand">
                    <span className="navbar-item">
                        <Icon
                            type="tool"
                            theme="twoTone" />
                        <span className="is is-primary">
                            &nbsp;Tools
                    </span>
                    </span>
                </a>
            </nav>
        )
    }
}

export default Header;
