/*
import { Platform } from 'react-native';
import {
  getBrand,
  getDeviceName,
  // getVersion,
  getModel,
} from 'react-native-device-info';

const isIOS = Platform.OS === 'ios';

function generateCommonHeader() {
  let header = new Map<string, any>();
  if (isIOS) {
    header.set('iOS-Version', Platform.Version);
    header.set('Device-Brand', getBrand());
    header.set('App-Version', '2.15.0');
    // header.set('App-Version', getVersion());
    header.set('Device-os', 'iOS');
    header.set('Device-PhoneModel', getModel());
    header.set('client', 'app_ios');
  }
  return header;
}

const commonHeader = generateCommonHeader();

getDeviceName().then(deviceName => {
  commonHeader.set('Device-Mode', deviceName);
});

export default commonHeader;
*/
const commonHeader = new Map<string, string>();
export default commonHeader;
