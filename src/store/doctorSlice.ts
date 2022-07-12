import {createSlice} from "@reduxjs/toolkit";

type InitialStateTypeDoctor = {
    "id": number
    "photo": string
    "name": string
    "assessmentQuality": number
    "vocation": string
    "location": string
}

const initialState: InitialStateTypeDoctor[] = [
    {
        "id": 1,
        "photo": "./assets/images/doctor1.jpg",
        "name": "Matthew Reyes",
        "assessmentQuality": 5,
        "vocation": "Obstetrics & Gynaecology",
        "location": "Hong Kong "
    },
    {
        "id": 2,
        "photo": "./assets/images/doctor2.jpg",
        "name": "Rebecca Gilbert",
        "assessmentQuality": 5,
        "vocation": "Obstetrics & Gynaecology",
        "location": "Hong Kong "
    },
    {
        "id": 3,
        "photo": "./assets/images/doctor3.jpg",
        "name": "Bobby Stanley",
        "assessmentQuality": 4,
        "vocation": "Obstetrics & Gynaecology",
        "location": "Hong Kong "
    },
    {
        "id": 4,
        "photo": "./assets/images/doctor4.jpg",
        "name": "Kathryn Cooper",
        "assessmentQuality": 5,
        "vocation": "Obstetrics & Gynaecology",
        "location": "Hong Kong "
    },
    {
        "id": 5,
        "photo": "./assets/images/doctor5.jpg",
        "name": "Carmen Nelson",
        "assessmentQuality": 5,
        "vocation": "Obstetrics & Gynaecology",
        "location": "Hong Kong "
    },
    {
        "id": 6,
        "photo": "./assets/images/doctor6.jpg",
        "name": "Janice Hughes",
        "assessmentQuality": 4,
        "vocation": "Obstetrics & Gynaecology",
        "location": "Hong Kong "
    }
]
const slice = createSlice({
    name: "doctor",
    initialState: initialState as any,
    reducers: {}
})
export const doctorReducer = slice.reducer
export const {} = slice.actions


