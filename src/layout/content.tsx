// import { Input } from 'antd'
import 'katex/dist/katex.min.css'


import * as React from 'react';
import { BlockMath } from 'react-katex';


interface IProps {
    value: string
}

class Content extends React.Component {
    public state = { value: '' }

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    public handleChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
        this.setState({ value: event.currentTarget.value })
    }

    public render() {
        return (
            <div className="section container">
                <nav className="level">
                    <div className="level-item has-text-centered content-left">
                        <textarea
                            className="textarea"
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder="在这里输入数学公式，以测试 katex 的支持" />
                    </div>
                    <div className="level-item has-text-centered content-right">
                        <BlockMath>
                            {this.state.value}
                        </BlockMath>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Content;
