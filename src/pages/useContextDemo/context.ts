import { createContext } from 'react';

interface IContextProps {
  count?: number;
  clear?: () => void;
}
const FatherContext = createContext<IContextProps>({});

export { FatherContext };
