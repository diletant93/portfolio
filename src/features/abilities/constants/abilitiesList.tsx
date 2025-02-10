import { AuthForm } from "../features/authentication/components/AuthForm"
import { Ability } from "../types/abilityRelated"

export const mainAbilitiesList : Ability[] = [
    {
        name:"Registration",
        abilityCopmonent:<AuthForm type="registration"/>
    },
    {
        name:'Login',
        abilityCopmonent:<AuthForm type="login"/>
    },
]
export const subAbilitiesList : Ability[] =[
    {
        name:'Input',
        abilityCopmonent:null
    },
    {
        name:'Debounce',
        abilityCopmonent:null
    },
    {
        name:'Timer',
        abilityCopmonent:null
    },
    {
        name:'LocalStorage',
        abilityCopmonent:null
    },
    {
        name:'Media query',
        abilityCopmonent:null
    },
    {
        name:'Toast',
        abilityCopmonent:null
    }
]