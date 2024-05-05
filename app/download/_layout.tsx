import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import moment from 'moment';
import { Button, View } from 'react-native';

export default function DownloadImage() {

const imageUrl = { uri: "https://media.voguebusiness.com/photos/5ef6493adf1073db3375835d/master/pass/kanye-west-gap-news-voguebus-mert-alas-and-marcus-piggott-june-20-story.jpg" }

const handleDownload = async () => {
    let date = moment().format('YYYYMMDDhhmmss')
    let fileUri = FileSystem.documentDirectory + `${date}.jpg`;
    try {
        const res = await FileSystem.downloadAsync(imageUrl.uri, fileUri)
        saveFile(res.uri)
    } catch (err) {
        console.log("FS Err: ", err)
    }
}

const saveFile = async (fileUri: any) => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status === "granted") {
        try {
            const asset = await MediaLibrary.createAssetAsync(fileUri);
            const album = await MediaLibrary.getAlbumAsync('Download');
            if (album == null) {
                await MediaLibrary.createAlbumAsync('Download', asset, false);
            } else {
                await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
            }
        } catch (err) {
            console.log("Save err: ", err)
        }
    } else if (status === "denied") {
        alert("please allow permissions to download")
    }
}

return (
    <View>
        <Button
            title="Download"
            onPress={handleDownload}
        />
    </View>
    )
}
