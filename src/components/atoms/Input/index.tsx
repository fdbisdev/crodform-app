import React, { memo, useState } from 'react';
import {
    Text,
    TextInput,
    View,
} from 'react-native';

import { useController } from 'react-hook-form';

import styles from './styles';
import { colors, IHookForm, InputProps } from '@utils';

const Input: React.FC<InputProps> = (
    {
        placeholder,
        value,
        isError,
        onChangeText,
        onEdit,
        style,
        label,
        icon,
        ...props
    }: InputProps
) => {
    const [active, setActive] = useState(false);

    const handleOnFocus = () => {
        setActive(true);
    };

    const handleOnBlur = () => {
        setActive(false);
    };


    return (
        <View style={style}>
            <View style={styles.inputView}>
                {!!label && <Text style={styles.inputLabel}>{label}</Text>}
                <View style={[styles.inputBox, active && styles.activeInput]}>
                    <TextInput
                        style={[styles.input, isError && styles.errorInput]}
                        value={value}
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        onFocus={handleOnFocus}
                        onBlur={handleOnBlur}
                        onSubmitEditing={onEdit}
                        placeholderTextColor={colors.subtitleGrey}
                        {...props}
                    />
                    {!!icon && icon}
                </View>
            </View>
        </View>
    )
}

export const HookFormInput: React.FC<IHookForm> = ({
    control,
    name,
    ...props
}: IHookForm) => {
    const { field, fieldState } = useController({
        control,
        name,
        defaultValue: '',
    });

    return (
        <>
            <Input {...props} value={field.value} onChangeText={field.onChange} />
            {fieldState.error && (
                <Text style={styles.errorText}>{fieldState.error.message}</Text>
            )}
        </>
    );
}

export default memo(Input);