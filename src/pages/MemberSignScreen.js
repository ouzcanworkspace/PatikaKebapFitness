import React, {useState} from 'react';

import {Alert, SafeAreaView} from 'react-native';
import Input from "../components/Input/Input";
import Button from "../components/Button";

const MemberSignScreen = ({navigation}) => {
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userProfession, setUserProfession] = useState('');

    const handleSubmit = () => {
        if (!userName || !userSurname || !userAge || !userMail || !userProfession) {
            Alert.alert('Kebap Fitness Salonu', "Bilgiler boş bırakılamaz!");
            return;
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userProfession,
        };
        navigation.navigate("MemberResultScreen", {user})
    }

    return (
        <SafeAreaView>
            <Input label="Üye Adı" placeholder="Üyenin ismini giriniz..." onChangeText={setUserName}/>
            <Input label="Üye Soyadı" placeholder="Üyenin soyismini giriniz..." onChangeText={setUserSurname}/>
            <Input label="Üye Yaşı" placeholder="Üyenin yaşını giriniz..." onChangeText={setUserAge}/>
            <Input label="Üye E-posta" placeholder="Üyenin e-posta adresini giriniz..." onChangeText={setUserMail}/>
            <Input label="Üye Mesleği" placeholder="Üyenin mesleğini giriniz..." onChangeText={setUserProfession}/>
            <Button text="Kaydı Tamamla" onPress={handleSubmit}/>
        </SafeAreaView>
    );
};

export default MemberSignScreen;
