import React, { useState, useEffect } from 'react'
import OnboardingIncomeScreen from './onboarding/Onboarding/OnboardingIncomeScreen';
import SplashScreen from './onboarding/SplashScreen/SplashScreen';

function Index() {
    const [splash, setSplash] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
        setSplash(false)
        }, 2000);
        return () => {
        clearTimeout(timer)
        }
    }, [])
    return (
        <div>
           {
                splash? 
                <SplashScreen /> 
                :
                <OnboardingIncomeScreen />
            } 
        </div>
    )
}

export default Index
