import React, { useState } from 'react'
import { Col, Row, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

function Settings() {

    const [configEnabled, setConfigEnabled] = useState<boolean>(Boolean(localStorage.getItem('testEnabled')) || false)

    const onChange = (e: CheckboxChangeEvent) => {
        localStorage.setItem('testEnabled', String(e.target.checked))
        setConfigEnabled(e.target.checked)
    }


    return (
        <Row>
            <Col span={16} offset={4}>
                <Checkbox onChange={onChange} checked={configEnabled}>Checkbox</Checkbox>
            </Col>
        </Row>
    )
}

export default Settings;