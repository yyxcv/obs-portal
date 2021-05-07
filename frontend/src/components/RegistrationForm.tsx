import React from 'react';
import { Form, Button } from 'semantic-ui-react';

type RegistrationFormSubmit = {
  username: string | null;
  email: string | null;
  password: string | null;
};

export default function RegistrationForm({
  onSubmit: onSubmitOuter,
}: {
  onSubmit: (data: RegistrationFormSubmit) => void;
}) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  const onChangeUsername = React.useCallback((e) => setUsername(e.target.value), []);
  const onChangeEmail = React.useCallback((e) => setEmail(e.target.value), []);
  const onChangePassword = React.useCallback((e) => setPassword(e.target.value), []);
  const onChangePassword2 = React.useCallback((e) => setPassword2(e.target.value), []);

  const onSubmit = React.useCallback(() => {
    if (username && email && password && password2 === password) {
      onSubmitOuter({ username, email, password });
    }
  }, [username, email, password, password2, onSubmitOuter]);

  return (
    <Form onSubmit={onSubmit}>
      <Form.Input label="Username" value={username} onChange={onChangeUsername} name="username" />
      <Form.Input label="e-Mail" value={email} onChange={onChangeEmail} name="email" />
      <Form.Input
        label="Password"
        type="password"
        value={password}
        onChange={onChangePassword}
        name="password"
        minLength={6}
      />
      <Form.Input
        label="Password (repeat)"
        type="password"
        value={password2}
        onChange={onChangePassword2}
        name="password2"
        error={password2 != null && password !== password2 ? 'Your passwords do not match.' : null}
        minLength={6}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
