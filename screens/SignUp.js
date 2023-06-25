import React, { useState, useEffect } from "react";
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

const SignUp = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        let areaData = data.map(item => {
            return {
                code: item.cca2,
                name: item.name,
                callingCode: `${item.idd.root + item.idd.suffixes}`,
                flag: `https://flagsapi.com/${item.cca2}/flat/64.png`
            }
        })
        setAreas(areaData)

        if(areaData.length > 0) {
          let defaultData = areaData.filter(a => a.code == 'NG')

          if(defaultData.length > 0) {
            setSelectedArea(defaultData[0])
          }
        }
    })
  },[])

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
              onPress={() => setModalVisible(true)}
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
                  source={{ uri: selectedArea?.flag }}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Text style={{ color: COLORS.white, fontSize: 16 }}>{selectedArea?.callingCode}</Text>
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
        {/* Password */}
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <Text style={{ color: COLORS.lightGreen, fontSize: 16 }}>
            Password
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              fontSize: 16,
            }}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.green}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              bottom: 10,
              height: 30,
              width: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={showPassword ? icons.disable_eye : icons.eye}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={{ margin: SIZES.padding * 3 }}>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius / 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={{ color: COLORS.white, fontSize: 20 }}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderAreaCodeModal() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >

        <TouchableWithoutFeedback
          onPress={()=> setModalVisible(false)}
        >
          <View style={{ flex : 1, alignItems: 'center', justifyContent: 'center'}}>
            <View 
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                backgroundColor: COLORS.lightGreen,
                borderRadius: SIZES.radius
              }}
            >

            </View>
          </View>
        </TouchableWithoutFeedback>

      </Modal>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
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
          {renderButton()}
        </ScrollView>
      </LinearGradient>
      {renderAreaCodeModal()}
    </KeyboardAvoidingView>
  );
};

export default SignUp;
