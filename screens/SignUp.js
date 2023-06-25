import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { icons, images, COLORS, SIZES } from "../constants";

function renderHeader() {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.padding * 6,
        paddingHorizontal: SIZES.padding * 2,
      }}
      onPress={() => console.log("Sign Up")}
    >
      <Image
        source={icons.back}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.white,
        }}
      />
      <Text
        style={{
          marginLeft: SIZES.padding * 1.5,
          color: COLORS.white,
          fontSize: 18,
        }}
      >
        Sign Up
      </Text>
    </TouchableOpacity>
  );
}

function renderLogo() {
  return (
    <View
      style={{
        marginTop: SIZES.padding * 5,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={images.brandLogo}
        resizeMode="contain"
        style={{
          width: "60%",
        }}
      />
    </View>
  );
}

function renderForm() {
  return (
    <View
      style={{
        marginTop: SIZES.padding * 3,
        marginHorizontal: SIZES.padding * 3,
      }}
    >
      {/* Full Name */}
      <View style={{ marginTop: SIZES.padding * 3 }}>
        <Text style={{ color: COLORS.lightGreen, fontSize: 16 }}>
          Full Name
        </Text>
        <TextInput
          style={{
            marginVertical: SIZES.padding,
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            height: 40,
            color: COLORS.white,
            fontSize: 20,
          }}
          placeholder="Enter Full Name"
          placeholderTextColor={COLORS.green}
          selectionColor={COLORS.white}
        />
      </View>

      {/* Phone Number */}
      <View style={{ marginTop: SIZES.padding * 2 }}>
        <Text style={{ color: COLORS.lightGreen }}>Phone Number</Text>

        <View style={{ flexDirection: "row" }}>
          {/* Country Code */}
          <TouchableOpacity
            style={{
              width: 100,
              height: 50,
              marginHorizontal: 5,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              flexDirection: "row",
            }}
            onPress={() => console.log("Show Modal")}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                source={icons.down}
                style={{
                  width: 10,
                  height: 10,
                  tintColor: COLORS.white,
                }}
              />
            </View>
            <View style={{ justifyContent: "center", marginLeft: 5 }}>
              <Image
                source={images.nigFlag}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          </TouchableOpacity>

          {/* Phone Number */}
          <TextInput
            style={{
              flex: 1,
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              fontSize: 20,
            }}
            placeholder="Enter Phone Number"
            placeholderTextColor={COLORS.green}
            selectionColor={COLORS.white}
          />
        </View>
      </View>
    </View>
  );
}

const SignUp = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={{ flex: 1 }}
      >
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
