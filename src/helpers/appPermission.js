import { Platform } from 'react-native';
import {
    check,
    requestMultiple,
    PERMISSIONS,
    RESULTS,
} from 'react-native-permissions';

class PermissionController {
    constructor() {
        this.checkAndRequestStoragePermission = () => {
            return new Promise((resolve, reject) => {
                if (Platform.OS === 'android') {
                    check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
                        .then((result0) => {
                            if (result0 === RESULTS.DENIED) {
                                requestMultiple([
                                    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
                                    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
                                    PERMISSIONS.ANDROID.CAMERA,
                                    //PERMISSIONS.ANDROID.POST_NOTIFICATIONS
                                ])
                                    .then((results) => {
                                        // console.log(results);
                                        if (
                                            results[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
                                            PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
                                            PERMISSIONS.ANDROID.CAMERA
                                            ] ===
                                            //PERMISSIONS.ANDROID.POST_NOTIFICATIONS
                                            RESULTS.GRANTED
                                        ) {
                                            resolve(true);
                                        } else {
                                            // console.log('REJECTING...');
                                            reject('Permission Denied');
                                        }
                                    })
                                    .catch((err) => {
                                        //console.log('CATCH, Requesting Permission STORAGE');
                                        reject('Operation failed');
                                    });
                            } else {
                                console.log('CATCH, Checking Permission STORAGE');
                                //console.log('Already have permission');
                                resolve(true);
                            }
                        })
                        .catch((err) => {
                            reject('Operation failed');
                        });
                } else {
                    check(PERMISSIONS.IOS.MEDIA_LIBRARY)
                        .then((result0) => {
                            if (result0 === RESULTS.DENIED) {
                                requestMultiple([PERMISSIONS.IOS.MEDIA_LIBRARY,
                                PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL
                                ])
                                    .then((results) => {
                                        // console.log(results);
                                        if (
                                            results[PERMISSIONS.IOS.MEDIA_LIBRARY,
                                            PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL] === RESULTS.GRANTED
                                        ) {
                                            resolve(true);
                                        } else {
                                            reject('Permission Denied');
                                        }
                                    })
                                    .catch((err) => {
                                        reject('Operation failed');
                                    });
                            } else {
                                // console.log('Permission Already Granted');
                                resolve(true);
                            }
                        })
                        .catch((err) => {
                            reject('Operation failed');
                        });
                }
            });
        };
    }
}
const MyPermissionController = new PermissionController();
export default MyPermissionController;