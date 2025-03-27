import { useState } from 'react'
import  Button  from "../../components/ui/Button"
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../components/ui/Card";

export default function AdminLogin() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePassword = (password) => {
    return password.length >= 6
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    setEmailError(validateEmail(value) ? '' : 'Invalid email address')
  }

  const handlePasswordChange = (e) => {
    const value = e.target.value
    setPassword(value)
    setPasswordError(validatePassword(value) ? '' : 'Password must be at least 6 characters')
  }

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value
    setConfirmPassword(value)
    setConfirmPasswordError(value === password ? '' : 'Passwords do not match')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      if (!emailError && !passwordError) {
        alert('Login successful')
      }
    } else {
      if (!emailError && !passwordError && !confirmPasswordError) {
        alert('Registration successful')
      }
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>{isLogin ? 'Login' : 'Register'}</CardTitle>
        <CardDescription>{isLogin ? 'Enter your credentials to log in.' : 'Create a new account.'}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={emailError ? 'border-red-500' : ''}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={passwordError ? 'border-red-500' : ''}
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className={confirmPasswordError ? 'border-red-500' : ''}
              />
              {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}
            </div>
          )}
          <Button type="submit" className="w-full">
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Register' : 'Login'}
        </Button>
      </CardFooter>
    </Card>
  )
}