import { ReactNode } from "react";
import { Control } from "react-hook-form";
import * as z from 'zod';
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { UserLoginSchema, UserSignUpSchema } from "src/schemas";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootParamList = {
    Login: undefined;
    Register: undefined;
};

export type InputProps = TextInputProps & {
    icon?: ReactNode;
    placeholder: string;
    value?: string;
    onChangeText?: (value: string) => void;
    onEdit?: () => void;
    isError?: boolean;
    style?: StyleProp<ViewStyle>;
    label?: string;
};
export interface IHookForm extends InputProps {
    name: string;
    control: Control<any>;
}

export interface IHeader {
    canGoBack?: boolean;
    title?: string;
    subtitle?: string;
}

export type IUserLoginForm = z.infer<typeof UserLoginSchema>;
  
export interface IButton {
    label: string;
    onPress: () => void;
    isDisabled?: boolean;
    style?: ViewStyle;
    color?: string;
    buttonStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
}

export interface IHyperLink {
    children: string;
    onPress?: () => void;
}

export type NavigationProps = NativeStackScreenProps<
    RootParamList,
  'Login'
>['navigation'];

export interface IIcon {
    color: string;
    accentColor?: string;
    size?: number;
 }
  
export type IFocusableIcon = IIcon & {
    focused: boolean;
};