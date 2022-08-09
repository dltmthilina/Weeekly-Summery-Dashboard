import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basicData:{
        leaderName:'',
        code:'',
        date:'',
       
    },
    recruitmentData:{
        existing: 0,
        registrations: 0,
        new_codes:0
    },
    quotationData:{
        target: 0,
        actual:0,
    },
    activeAdvisorsData:{
        target: 0,
        actual:0,
    },
    clearenceData:{
        proposals:0,
        suspense:0,
        renewals:0,
        revivals:0
    },
    meetingNotes:[],
    actionType:''
}

const formSlice = createSlice({
    name:'form',
    initialState: initialState,
    reducers:{
        addBasicInfor(state, {payload}){
            state.basicData = payload
        },
        addRecruData(state,{payload}){
            state.recruitmentData = payload;
        },
        addQuotationData(state,{payload}){
            state.quotationData=payload;
        },
        addAdvisorData(state,{payload}){
            state.activeAdvisorsData=payload;
        },
        addClearenceData(state, {payload}){
            state.clearenceData = payload;
        },
        addMeetingNotes(state,{payload}){
            state.meetingNotes = payload;
        },
        addStatus(state,{payload}){
            state.actionType = payload
        }
    }
})

export const addFormDataActions = formSlice.actions;
export default formSlice.reducer;
