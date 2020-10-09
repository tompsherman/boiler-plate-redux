import React, {useEffect} from 'react'

import {connect} from "react-redux"
import {fetchDataInfo} from "../actions"

import BlankCard from "./BlankCard"

const BlankList = (props) => {

    useEffect(()=> {
        props.fetchDataInfo()
    }, [])

    return (
        <div>
            <h2>this is the blank list</h2>
            {
                props.dataInfo.map(item => (
                    <BlankCard key={item.id} dataInfo={dataInfo}/> 
                ))
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        dataInfo: state.dataInfo,
        isLoading: state.isLoading,
        errors: state.errors
    }
}
export default connect(mapStateToProps, {fetchDataInfo})(BlankList)
