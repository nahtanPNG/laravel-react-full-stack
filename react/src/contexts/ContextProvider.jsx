import { createContext, useContext, useState } from "react";

const StateContext = createContext({ // Criando um contexto para compartilhar dados
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
})

export const ContextProvider = ({children}) => { // componente que envolve a parte da aplicação que precisa acessar os valores do contexto
    const [user, setUser] = useState({
        name: 'Nathan'
    });
    const [token, _setToken] = useState(null);

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value={{ //Definindo valores para serem disponibilizados para os componentes filhos através do contexto.
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)