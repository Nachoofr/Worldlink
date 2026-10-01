import { CLOSE_REFERRAL_FORM, OPEN_REFERRAL_FORM, SET_FORM_DATA, SUBMIT_REFERRAL } from "./referTypes"

export type FormData = {
    fullName: string,
    phoneNumber: string,
    friendEmail: string,
    friendAddress: string
}

export type ReferState = {
    referralCount: number,
    isFormOpen: boolean,
    formData: FormData
} 

const initialState: ReferState = {
    referralCount: 0,
    isFormOpen: false,
    formData: {
        fullName: "",
        phoneNumber: "",
        friendEmail: "",
        friendAddress: ""
    }
}

type ReferAction = 
    | {
        type: "OPEN_REFERRAL_FORM"
    }
    | {
        type: "CLOSE_REFERRAL_FORM"
    }
    |{
        type: "SET_FORM_DATA",
        payload: {
            field: keyof FormData,
            value: string
        }
    }
    | {
        type: "SUBMIT_REFERRAL"
    }


const referReducer = (state:ReferState = initialState, action : ReferAction) => {
    switch (action.type){
        case OPEN_REFERRAL_FORM:
            return{
                ...state,
                isFormOpen: true
            }
        case CLOSE_REFERRAL_FORM:
            return{
                ...state,
                isFormOpen: false
            }
        case SET_FORM_DATA:
            return{
                ...state,
                formData: {
                    ...state.formData,
                    [action.payload.field]:action.payload.value
                    // dispatch(setFormData("fullName","choi beomgyu"))
                    // reducer does:
                    // formData: {...state.formData,fullName: "John Doe"}
                }
            }
        case SUBMIT_REFERRAL:
            return{
                ...state,
                referralCount: state.referralCount + 1,
                isFormOpen: false,
                formData: {
                    fullName: "",
                    phoneNumber: "",
                    friendEmail: "",
                    friendAddress: ""
                }
            }
        default: return state
    }
}

export default referReducer