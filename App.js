
import React, { useState, useEffect, useRef } from "react";
import { Video, AVPlaybackStatus } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, 
  Button, SafeAreaView, TouchableOpacity, 
  ImageBackground, Modal, Pressable, Dimensions } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [dimensions, setDimensions] = useState({ window, screen });
  const [mode, setMode] = useState("portrait");

  const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape") 

    } else {
      setMode("portrait") 

    }
    console.log(mode)
   };

   const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);

    return () => {
      Dimensions.removeEventListener("change", onChange),
     modeMaker();
    };

  });

  return (
   
    <SafeAreaView style={styles.container}>

<Modal
    animationType="fade"
    transparent={false}
    visible={modalVisible}
    supportedOrientations={['landscape']} 
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
    <View style={styles.centeredView}>
      <View>
        <Video
        ref={video}
        style={{
            alignSelf: 'center',
            width: dimensions.window.width,
            height: dimensions.window.height,
        }}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        shouldPlay
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      </View>
      <View style={{position: 'absolute', top: 25}}>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
        </View>
    </View>
    </SafeAreaView>
  </Modal>

       <LinearGradient
    // Background Linear Gradient
    colors={['#093da2', '#9dc7f9']}
    style={styles.bg}
    />
    <View style={{flex: 1}}>
          <View style={styles.topContainer}>
          <ScrollView style={styles.navContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.navButton}>
              <Text style={styles.navBtnTxt}>PlayVideo</Text>
            </View>
            </TouchableOpacity>
          </ScrollView>
          </View>
          <ScrollView>
          <View style={{marginHorizontal: 16, marginBottom: 15, borderWidth: 10, borderColor: '#fff'}}>
          <TouchableOpacity onPress={() => {
            setModalVisible(true);
            
            }}>
          <ImageBackground style={styles.bgImage} resizeMode={'cover'}
                source={{uri: 'https://www.html.am/templates/downloads/bryantsmith/anoceanofsky/anoceanofsky.jpg'}}>
            <View style={{padding: 20}}>
              <Text style={styles.h1}>An Ocean of Sky</Text>
              <Text style={styles.subtitle}>An XHTML 1.0 Strict Template by Bryant Smith</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
          </View>
          <LinearGradient
            colors={['#e3eefc', '#fff']}
              style={styles.contentBorder}>
          <View style={styles.test}>
            <View style={styles.item}>
              <Text style={styles.itemTitle}>The Title of an Article</Text>
              <Text style={styles.itemDescription}>
              {`\n`}
              You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)
              {`\n`}{`\n`}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.
              {`\n`}{`\n`}
              Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
              {`\n`}
              </Text>
              <Text style={styles.itemTitle}>So Many Titles, So Little Time.</Text>
              <Text style={styles.itemDescription}>
              {`\n`}
              You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)
              {`\n`}{`\n`}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.
              {`\n`}{`\n`}
              Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
              </Text>
            </View>
          </View>
        </LinearGradient>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#034172',
    alignItems: 'center',
  },
  contentBorder: {
    marginLeft: 15,
    marginRight: 15,
    flex: 1,
    marginBottom: 15,
    borderWidth: 10,
    borderColor: '#fff'
  },
  navContainer: {
    flexDirection: "row",
  },
  navButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 18,
    paddingRight: 18
  },
  bg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "25%",
    borderBottomColor: '#fff',
    borderBottomWidth: 5
  },
  topContainer: {
   height: 80,
   justifyContent: 'center'
  },
  navBtnTxt: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 17
  },
  test: {
    padding: 16,
    flex: 1
  },
  itemTitle: {
    color: '#061C37',
    fontSize: 20, 
    fontWeight: '500'
  },
  itemDescription: {
    color: '#061C37',
    fontSize: 16, 
    fontWeight: '400'
  },
  item: {
    paddingBottom: 20
  },
  bgImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  h1: {
    fontWeight: "800",
    fontSize: 26,
    color: "#FFFFFF"
  },
  subtitle: {
    color: "#A9C8FA",
    fontWeight: "700",
    fontSize: 14
  },
  centeredView: {
    flexDirection: "column",
    flex: 1,
    width: "100%",
    backgroundColor: "black",
    marginTop: -8,
    alignItems: "center",
    height: "200%",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom:20,
  },

});
