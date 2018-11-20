import { Col, Input, Row } from 'antd'
import 'katex/dist/katex.min.css';


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
            <Row style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Col span={12}>
                    <Input.TextArea
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="HKhfk,"
                        autosize={{ minRows: 26, maxRows: 26 }} />
                </Col>
                <Col span={12}>
                    <BlockMath>
                        {this.state.value}
                    </BlockMath>
                </Col>
            </Row>
        );
    }
}

export default Content;