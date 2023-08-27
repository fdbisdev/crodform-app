import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Header } from '@organisms';
import { Title } from '@atoms';
import { UserLoginSchema } from '@schemas';
import { IUserLoginForm, NavigationProps, colors } from '@utils';
import { Button, HookFormInput, HyperLink, Subtitle } from '@atoms';
import { ToggleIcon } from '@molecules';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { EyeIcon } from '@icons';

import styles from './styles';

const Login: React.FC = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const navigation = useNavigation<NavigationProps>();

    const { control, handleSubmit } = useForm<IUserLoginForm>({
        resolver: zodResolver(UserLoginSchema),
    });

    const navigateToRegister = () => {
        navigation.navigate('Register')
    }

    const handleLogin: SubmitHandler<IUserLoginForm> = (data) => {
        console.log(data);
    };

    const changePasswordVisibility = () => {
        setPasswordVisibility(oldState => !oldState);
    };

    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>

            <Header />

            <Title>Login</Title>

            <HookFormInput
                control={control}
                name="email"
                placeholder="Insert a valid email"
                label="E-mail"
            />
            <HookFormInput
                control={control}
                name="password"
                placeholder="Minimum 8 characters"
                label="Password"
                textContentType="password"
                secureTextEntry={!passwordVisibility}
                icon={
                    <ToggleIcon
                        Icon={EyeIcon}
                        color={colors.subtitleGrey}
                        accentColor={colors.primary}
                        state={passwordVisibility}
                        onToggle={changePasswordVisibility}
                    />
                }
                style={styles.passwordInput}
            />

            <Button
                style={styles.submitButton}
                label="Login"
                onPress={handleSubmit(handleLogin)}
            />

            <Subtitle>
                Don&apos;t have an account? {' '}
                <HyperLink
                    onPress={navigateToRegister}
                >
                    Sign up here
                </HyperLink>
            </Subtitle>

        </SafeAreaView>
    )
}

export default Login;