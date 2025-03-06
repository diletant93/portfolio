import AuthComponentWrapper from "../features/authentication/components/AuthComponentWrapper"
import { AuthForm } from "../features/authentication/components/AuthForm"
import DebounceShowcase from "../features/debounce/components/DebounceShowcase"
import FilterShowcase from "../features/filter/components/FilterShowcase"
import InfiniteScrollShowcase from "../features/infiniteScroll/components/InfiniteScrollShowcase"
import PaginationShowcase from "../features/pagination/components/PaginationShowcase"
import SortShowcase from "../features/sort/components/SortShowcase"
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
        name: 'Filter',
        heading: 'Filter',
        abilityCopmonent: <FilterShowcase/>
    },
    {
        name: 'Sort',
        heading: 'Sort',
        abilityCopmonent: <SortShowcase/>
    },

    {
        name: 'Infinite Scroll',
        heading: 'Infinite Scroll',
        abilityCopmonent: <InfiniteScrollShowcase/>,
    },
    {
        name: 'Debounce',
        heading: 'Input',
        abilityCopmonent: <DebounceShowcase/>
    },
    {
        name: 'Pagination',
        heading: 'Pagination',
        abilityCopmonent: <PaginationShowcase/>
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