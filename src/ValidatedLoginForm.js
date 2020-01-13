import React from "react";
import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import logo from './logo.svg';import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import { CustomSignIn } from "./CustomSignIn";
import { SignIn } from "aws-amplify-react";
import App from "./App";

import { Authenticator } from "../node_modules/aws-amplify-react";

class AppWithAuth extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Authenticator hide={[SignIn]} amplifyConfig={config}>
          <CustomSignIn />
          <App />
        </Authenticator>
      </div>
    );
  }
}

export default AppWithAuth;


const config = {
  header: 'Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '40',
  signUpFields: [
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },
    { 
      label: 'PhoneNumber',
      key: 'phone_number',
      required: false,
      displayOrder: 4,
      type: 'string'
    },
    {
      label: 'Email',
      key: 'email',
      required: false,
      displayOrder: 3,
      type: 'string'
    }
  ]
};
const usernameAttributes = 'Username';



// export default withAuthenticator(ValidatedLoginForm, {
//   signUpConfig,
//   usernameAttributes
// });

// // export default withAuthenticator(ValidatedLoginForm, true);
