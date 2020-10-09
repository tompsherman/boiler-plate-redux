import React, {useState} from 'react'
import {connect} from "react-redux"
import {postDataInfo} from "../actions"

const BlankForm = (props) => {

    const [dataInfo, setDataInfo] = useState({
        //any key/value pairs required to post to API, ex:
        name: "",
        rank: "",
        nickname: ""
    })

    const submitHandler = (event) => {
        event.preventDefault()
        props.postDataInfo(dataInfo)
    }

    const inputHandler = (event) => {
        event.preventDefault()
        setDataInfo({...dataInfo, [event.target.name]: event.target.value})
    }
    return (
        <div>
            <h2>this is the blank form</h2>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="dataName"
                    value={props.name}
                    onChange={inputHandler}
                    placeholder="enter dataName"
                />
                <button>submit the info</button>
            </form>
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

export default connect (mapStateToProps, {postDataInfo}) (BlankForm)
