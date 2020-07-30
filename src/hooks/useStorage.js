import { useState, useEffect } from "react";
import {
	projectStorage,
	projectFirestore,
	timeStamp,
} from "../firebase/config";

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		// references
		const storageRef = projectStorage.ref(file.name);
		// references a collection inside firestore
		const collectionRef = projectFirestore.collection("images");

		// upload file to the reference
		storageRef.put(file).on(
			"state_changed",
			(snap) => {
				// when file is uploading, it generates a snap that be called more than one time
				// it can show the bytes transferred, that can be converted to %
				let percentage =
					(snap.bytesTransferred / snap.totalBytes) * 100;

				setProgress(percentage);
			},
			(err) => {
				// thir arg is an error, if the file cant be uploaded
				setError(err);
			},
			async () => {
				// fourth arg is fired when the upload is completed
				// get the url of img uploaded inside firebase
				const url = await storageRef.getDownloadURL();
				const createdAt = timeStamp();
				collectionRef.add({ url, createdAt });
				setUrl(url);
			}
		);
	}, [file]);

	return { progress, url, error };
};

export default useStorage;
