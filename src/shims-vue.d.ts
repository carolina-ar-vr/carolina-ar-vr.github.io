// Used to fix problems with "../x/x/x/" from not being recognized by IDE
declare module '*.vue' {
    import {ComponentOptions} from 'vue'
    const component: ComponentOptions
    export default component
}