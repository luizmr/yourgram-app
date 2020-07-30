import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const unsub = projectFirestore
			.collection(collection)
			.orderBy("createdAt", "desc")
			.onSnapshot((snap) => {
				// snapshot takes a look to the firestore at that moment
				let documents = [];

				// get data of each document inside the collection at the moment the snapshot is fired
				snap.forEach((doc) => {
					// get data inside of doc -> url and createdAt
					// doc.data()
					// takes all the data of all docs and for each docs, adds a doc id
					documents.push({ ...doc.data(), id: doc.id });
				});
				setDocs(documents);
			});

		return () => unsub();
	}, [collection]);

	return { docs };
};

export default useFirestore;
