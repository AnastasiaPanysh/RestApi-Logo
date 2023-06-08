import { PasswordInput, Input } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';
import style from './style.module.css';

function Auth() {
    return (
        <div className={style.wrapper}>
            <h1>Login to lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <h3>Email</h3>
            <Input
                placeholder="Enter your email"
            />
            <h3>Password</h3>
            <PasswordInput
                placeholder="Enter your password"
 
                defaultValue="secret"
                visibilityToggleIcon={({ reveal, size }) =>
                    reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
                }
            />

        </div>
    )
}

export default Auth