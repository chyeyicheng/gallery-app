// useCollection.js
import { projectFirestore } from "@/firebase/config";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { ref } from "vue";

const useCollection = (item) => {
    const documents = ref([]);
    const q = query(collection(projectFirestore, item), orderBy("createdAt", "desc")); 

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let results = [];
        querySnapshot.forEach((docSnapshot) => {
            results.push({ ...docSnapshot.data(), id: docSnapshot.id });
        });

        documents.value = results;
    });

    return { documents, unsubscribe };
};

export default useCollection;
