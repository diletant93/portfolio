interface ReturnTypes<T>{
    setItem:(value:T)=>void;
    getItem: () => T | null;
    removeItem: () => void;
}
export function useLocalStorage<T>(key:string):ReturnTypes<T>{
    const setItem = (value:T) =>{ 
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) { 
            console.error(error)
        }
    }
    const getItem = ()=>{
        try {
            const item = window.localStorage.getItem(key)
            if(item) return JSON.parse(item)
        } catch (error) {
            console.error(error)
        }
    }
    const removeItem = () =>{
        try {
            window.localStorage.removeItem(key)
        } catch (error) {
            console.error(error)
        }
    }
    return {setItem, getItem, removeItem}
}