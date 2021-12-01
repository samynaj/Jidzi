import ForgotPasswordScreen from "../Pages/account/ForgotPasswordScreen/ForgotPasswordScreen";
import RecoverAcountScreen from "../Pages/account/RecoverAcountScreen/RecoverAcountScreen";
import VerifyAccountScreen from "../Pages/account/VerifyAccountScreen/VerifyAccountScreen";
import OnboardingExpensesScreen from "../Pages/onboarding/Onboarding/OnboardingExpensesScreen";
import OnboardingProfitScreen from "../Pages/onboarding/Onboarding/OnboardingProfitScreen";
import SigninScreen from "../Pages/onboarding/SigninScreen/SigninScreen";
import SignupScreen from "../Pages/onboarding/SignupScreen/SignupScreen";
import WelcomeScreen from "../Pages/onboarding/WelcomeScreen/WelcomeScreen";


export const routes = [ 
        {
            path: '/onboarding2',
            component:  OnboardingExpensesScreen
        },
        {
            path: '/onboarding3',
            component:  OnboardingProfitScreen
        },
        {
            path: '/welcome',
            component:  WelcomeScreen
        },
        {
            path: '/signup',
            component:  SignupScreen
        },
        {
            path: '/signin',
            component:  SigninScreen
        },
        {
            path: '/forgot-password',
            component:  ForgotPasswordScreen
        },
        {
            path: '/verify-account',
            component:  VerifyAccountScreen
        },
        {
            path: '/recover-account',
            component:  RecoverAcountScreen
        }
]
