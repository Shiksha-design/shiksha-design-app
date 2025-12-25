import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AUTHLANGUAGE,
  AUTHUSER,
  AUTHUSERINFO,
  DEFAULTBRANCH,
  MOBILESETUPBRANCH,
  TOKEN,
} from '../context/actions/type';

// REMOTECONTROLLER USE TO AUTOCONFIG APP
export const LocalStorageService = async () => {
  var getUser = await AsyncStorage.getItem(AUTHUSER);
  var userData = JSON.parse(getUser);
  return userData;
};

//ADD LOCAL STORAGE SELECTED Branch RECORDS
export const setLocalAccessToken = (Data) =>
  AsyncStorage.setItem(TOKEN, JSON.stringify(Data));

// FOR SELECT BRANCH
export const getLocalAccessToken = async () => {
  var getToken = await AsyncStorage.getItem(TOKEN);
  var accesskey = JSON.parse(getToken);
  return accesskey;
};

//add local storage Records
export const AuthenticateMember = user =>
  AsyncStorage.setItem(AUTHUSER, JSON.stringify(user));

//add local storage Records
export const RemoveAuthenticateMember = () => (
  AsyncStorage.removeItem(AUTHUSER),
  AsyncStorage.removeItem(AUTHUSERINFO),
  AsyncStorage.removeItem(TOKEN),
  AsyncStorage.removeItem(DEFAULTBRANCH)
);

//Local Login User Infromation
export const LocalLoginStorageService = async () => {
  var getLoginUser = await AsyncStorage.getItem(AUTHUSERINFO);
  var getLoginUser = JSON.parse(getLoginUser);
  return getLoginUser;
};
