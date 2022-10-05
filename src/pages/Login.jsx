import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput.jsx'
import StyledText from '../components/StyledText.jsx'
import { loginValidationSchema } from '../validationSchemas/login.js'

const initValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  form: {
    margin: 12
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  }
})

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

export default function Login() {
  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik validationSchema={loginValidationSchema} initialValues={initValues} onSubmit={handleSubmit}>
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="Email" />
            <FormikInputValue name="password" placeholder="Password" secureTextEntry />
            <Button onPress={handleSubmit} title="Login" />
          </View>
        )
      }}
    </Formik>
  )
}
