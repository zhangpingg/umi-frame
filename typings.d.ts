declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.js';
declare module '*.tsx';
declare module '*.ts';
declare module '*.jpg';
declare module 'react/jsx-runtime';
declare module 'less-plugin-functions';
declare module 'react-grid-layout';
declare module 'crypto-js';
declare module 'react-activation';
declare module '@lucky-canvas/react';
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
  $store?: any;
}
