import AuthComponentWrapper from "../features/authentication/components/AuthComponentWrapper"
import { AuthForm } from "../features/authentication/components/AuthForm"
import DebounceShowcase from "../features/debounce/components/DebounceShowcase"
import FilterShowcase from "../features/filter/components/FilterShowcase"
import { Ability } from "../types/abilityRelated"

export const mainAbilitiesList: Ability[] = [
    {
        name: "Registration",
        heading: 'Register',
        description: 'Try to register yourself',
        abilityCopmonent: (
            <AuthComponentWrapper>
                <AuthForm type="registration" />
            </AuthComponentWrapper>
        )
    },
    {
        name: 'Login',
        heading: 'Login',
        description: 'Try to login yourself',
        abilityCopmonent: (
            <AuthComponentWrapper>
                <AuthForm type="login" />
            </AuthComponentWrapper>
        )
    },
]
export const subAbilitiesList: Ability[] = [
    {
        name: 'Debounce',
        heading: 'Input',
        abilityCopmonent: <DebounceShowcase/>
    },
    {
        name: 'Filter',
        heading: 'Input',
        abilityCopmonent: <FilterShowcase/>
    },
    {
        name: 'Debounce',
        heading: 'Input',
        abilityCopmonent: null
    },
    {
        name: 'Timer',
        heading: 'Timer',
        abilityCopmonent: null
    },
    {
        name: 'LocalStorage',
        heading: 'LocalStorage',
        abilityCopmonent: null
    },
    {
        name: 'Media query',
        heading: 'Media query',
        abilityCopmonent: null
    },
    {
        name: 'Toast',
        heading: 'Toast',
        abilityCopmonent: null
    }
]