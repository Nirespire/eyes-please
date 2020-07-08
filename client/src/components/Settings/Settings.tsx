import React, { useState, useEffect } from 'react'
import { Col, Row, Switch } from 'antd';
import { Config } from '../../types/types'

import axios from 'axios'

function Settings() {

    const [config, setConfig] = useState<Config>({})
    const [loading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchConfig = async () => {
            setIsLoading(true)
            const result = await axios('/config',);
            console.log(result.data)
            setConfig(result.data)
            setIsLoading(false)
        };
        fetchConfig();
    }, []);

    const sendConfig = async (config: Config) => {
        setIsLoading(true)
        console.log("Sending updated config ", JSON.stringify(config))
        // const result = await axios,post('/config', config);
        // console.log(result.data)
        // setConfig(result.data)
        setIsLoading(false)
    }

    const groupByRepoChanged = (checked: boolean, event: Event) => {
        console.log("switch is ", checked)
        setConfig({...config, preferences: {...config.preferences, groupByRepo: checked}})
        sendConfig(config)
    }

    useEffect(() => {
        console.log("sending config")
        sendConfig(config)
      }, [config]);

    return (
        <Row>
            <Col span={16} offset={4}>
                <Switch checked={config.preferences?.groupByRepo} loading={loading} onChange={groupByRepoChanged}/>
            </Col>
        </Row>
    )
}

export default Settings;