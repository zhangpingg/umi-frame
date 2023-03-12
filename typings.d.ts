declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.js';
declare module 'react/jsx-runtime';
declare module 'less-plugin-functions';
declare module 'react-grid-layout';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
interface Window {
  $webConfig?: any;
  $timer?: any;
}
