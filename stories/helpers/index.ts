import BaseModal, { ModalProps as BaseModalProps } from '@restart/ui/Modal';

export const commonInputPropsArgType = (modalProps: BaseModalProps) => {
    const argTypes = Object.entries(modalProps).map(([key, value])=> {
        //@ts-ignore
        const defaultValue = value.default || null 
        const propType = checkPropType(value.type)
        const type = {name : propType}

        return {[key]: {type, defaultValue, table: {defaultValue}}}

    })
    const argTypesObj = Object.assign({}, ...argTypes)
    return argTypesObj
}

const checkPropType = (type: any) => {
    if (type === String) {
        return 'string'
    } 
    if (type === Boolean)
        return 'boolean'
    
    return 'object'
}