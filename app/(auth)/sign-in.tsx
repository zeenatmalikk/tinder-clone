import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
// import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const[disabled,setDisabled]=useState(false)

  const validateForm = () => {
    let valid = true;
    let errors: { email?: string; password?: string } = {};

    if (!form.email) {
      errors.email = "Email is required";
      valid = false;
    } else {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        errors.email = "Please enter a valid email address";
        valid = false;
      }
    }
    if (!form.password) {
      errors.password = "Password is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };
  const onSignInPress = useCallback(async () => {
    setDisabled(true);
    if (!isLoaded) return;

    if (!validateForm()) {
      setDisabled(false);
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        
        console.error(JSON.stringify(signInAttempt, null, 2),'error check');
      }
    } catch (err: any) {
        Alert.alert("Error",err.errors[0].longMessage)

      console.error(JSON.stringify(err, null, 2),'error check');
    }
    setDisabled(false);
  }, [isLoaded, form]);
  return (
    // bit more height
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          {/* <Image source={images.signUpCar} className="z-0 w-full h-[250px]" /> */}
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
            error={errors.email}

          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
            error={errors.password}

          />
          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            disabled={disabled}
            className="mt-6"
          />
          {/* OAUTH */}
          {/* <OAuth /> */}
          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-4"
          >
            <Text>Dont have an account? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
          {/* Modal for verification */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
