import { Icon } from 'antd';

import * as React from 'react';

class Header extends React.Component {
    public render() {
        return (
            <nav className="navbar has-shadow"
                role="navigation"
                aria-label="main navigation">
                <div className="container">
                    <div className="navbar-menu">
                        <a href="#"
                            className="navbar-item">
                            <Icon
                                type="tool"
                                theme="twoTone" />
                            <span className="is is-primary">
                                &nbsp;Tools
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
