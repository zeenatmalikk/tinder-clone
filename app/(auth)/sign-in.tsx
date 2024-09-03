import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { View, Text,  Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false);

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
        console.error(JSON.stringify(signInAttempt, null, 2), "error check");
      }
    } catch (err: any) {
      Alert.alert("Error", err.errors[0].longMessage);

      console.error(JSON.stringify(err, null, 2), "error check");
    }
    setDisabled(false);
  }, [isLoaded, form]);
  return (
    // bit more height
    <KeyboardAwareScrollView
      className="flex-1 bg-white"
      enableOnAndroid={true}
      extraScrollHeight={10}
      contentContainerStyle={{ flexGrow: 0 }}

      keyboardShouldPersistTaps="handled"
    >
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[200px]">
          <Text className="text-2xl text-center text-black font-JakartaBold absolute bottom-8 w-full">
            Welcome 👋
          </Text>
        </View>
        <View className="px-5">
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

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-4"
          >
            <Text>Dont have an account? </Text>
            <Text className="text-indigo-100 opacity-[0.8] underline">
              Sign Up
            </Text>
          </Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
