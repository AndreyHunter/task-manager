declare module '*.module.css';
declare module '*.module.scss';
declare module '*.css';
declare module '*.scss';
declare module '*.svg?react' {
    import * as React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}
