import { db, timestamp } from "./config";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    orderBy,
} from "firebase/firestore";

class DataServices {
    addItem = (part, newItem) => {
        const createdAt = timestamp;
        return addDoc(collection(db, part), { ...newItem, createdAt });
    };

    updateItem = (part, id, updatedItem) => {
        const ItemDoc = doc(db, part, id);
        updateDoc(ItemDoc, updatedItem);
        return { ...updatedItem, id };
    };

    deleteItem = (part, id) => {
        const ItemDoc = doc(db, part, id);
        return deleteDoc(ItemDoc);
    };

    getAllItems = (part) => {
        return getDocs(collection(db, part), orderBy("createdAt", "asc"));
    };

    getItem = (id, part) => {
        const ItemDoc = doc(db, part, id);
        return getDoc(ItemDoc);
    };
}

export default new DataServices();
