import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,Alert, Text, View, Modal, ImageBackground, ScrollView, Button, ActivityIndicator } from 'react-native';


export default function App() {
  const [first, setfirst] = useState(false)
  const [toggle, setToggle] = useState(false)
  const handleClick = ()=>{
   setfirst(!first)
  }

  const handlePress = () => {
   
    setToggle(true);
    setTimeout(() => {
      setToggle(false);
      Alert.alert("invalid data");
    }, 500);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Button title='Press' onPress={handleClick}/>
      <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1709525091854-7152bddb6d9d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={{flex : 1, width: 350, }}>

     <Text  style={{padding: 30}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, velit. Explicabo facilis id nostrum autem! Doloribus nobis laboriosam illum velit sed, magnam eius unde, cilis id nostrum autem! Doloribus nobis cilis id nostrum autem! Doloribus nobis laboriosam illum velit sed, magnam eius ucilis id nostrum autem! Doloribus nobis laboriosam illum velit sed, magnam eius ucilis id nostrum autem! Doloribus nobis laboriosam illum velit sed, magnam eius ucilis id nostrum autem! Doloribus nobis laboriosam illum velit sed, magnam eius ucilis id nostrum autem! Doloribus nobis laboriosam illum velit sed, magnam eius ulaboriosam illum velit sed, magnam eius ucilis id nostrum autem! Doloribus nobis laboriosam illum velit sed,cilis id nostrum autem! Doloribus nobis laboriosam illum velit sed, magnam eius u magnam eius u consequuntur quae modi perferendis quaerat dolorem recusandae quasi? Assumenda accusamus repellat omnis! Minima adipisci quibusdam dolorem.</Text>
    
     </ImageBackground>
     <Button title='Alert' onPress={handlePress}></Button>
     <ActivityIndicator animating={toggle}/>
     <Button title='Alert 2' onPress={()=>Alert.alert("Invalid Data", "Dob incorrect", [{text: "Cancel", onPress: ()=> Alert.alert("Canceled")}, {text: "Confirm", onPress:()=> Alert.alert("Confirmed")}])}></Button>
     </ScrollView>


 
 
     <Modal visible={first} animationType="slide" >
      <View style={styles.container}>
      <Button title='Press' onPress={handleClick} />
      <Text>sdfsdfaasdasdasdasdsdfsdfsdfsdfsd</Text>
     <ImageBackground source={{uri : "https://plus.unsplash.com/premium_photo-1705091982376-d1a42ed0869c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"}} style={{ flex: 1, width: 350, height: 200,  }}>
     </ImageBackground>
     </View>
     </Modal>
     
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,

    
  },
});
