import { gql } from "@apollo/client"

export const SIGNUP_USER = gql`
mutation createUser($userNew:UserInput!){
 user: signupUser(userNew:$userNew){
    
    firstName
    

    
  }
}
`
export const LOGIN_USER = gql `
mutation signinUser($userSignin:UserSigninInput!){
 user: signinUser(userSignin:$userSignin){
    token
  
  }
}
`

export const CREAT_QUOTE = gql`
mutation createQuote($name:String!){
 quote: creatQuote(name:$name)
} `