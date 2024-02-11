import { projectFirestore, projectStorage, timestamp } from "@/firebase/config"
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";


const useUpload = (file) => {
    console.log('useUpload')

    const fileName = "images/" + file.name;

    const pictureRef = ref(projectStorage, fileName);


    const uploadTask = uploadBytesResumable(pictureRef, file);

    uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            }
        }, 
        (error) => {
            console.log('error', error)
        }, 
        async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('File available at', downloadURL);

            await setDoc(doc(projectFirestore, "images", file.name), {
                downloadURL,
                fileName,
                createdAt: serverTimestamp()
            });
        }
    );
}

export default useUpload