import { AuthForm } from "../features/authentication/components/AuthForm"
import { Ability } from "../types/abilityRelated"

export const mainAbilitiesList : Ability[] = [
    {
        name:"Registration",
        heading:'Register',
        description:'Try to register yourself',
        abilityCopmonent:<AuthForm type="registration"/>
    },
    {
        name:'Login',
        heading:'Login',
        abilityCopmonent:<AuthForm type="login"/>
    },
]
export const subAbilitiesList : Ability[] =[
    {
        name:'Input',
        heading:'Input',
        abilityCopmonent:null
    },
    {
        name:'Debounce',
        heading:'Input',
        abilityCopmonent:null
    },
    {
        name:'Timer',
          heading:'Timer',
        abilityCopmonent:null
    },
    {
        name:'LocalStorage',
          heading:'LocalStorage',
        abilityCopmonent:null
    },
    {
        name:'Media query',
          heading:'Media query',
        abilityCopmonent:null
    },
    {
        name:'Toast',
        heading:'Toast',
        abilityCopmonent:null
    }
]