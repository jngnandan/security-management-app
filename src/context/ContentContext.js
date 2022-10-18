
import { useContext } from "react";


const createContentContext = () => {
    const ContentContext = React.createContext();
    
    const ContentProvider = ({ children }) => {
        const [content, setContent] = useState({});
    
        return (
        <ContentContext.Provider value={{ content, setContent }}>
            {children}
        </ContentContext.Provider>
        );
    };
    
    return { ContentContext, ContentProvider };
    };