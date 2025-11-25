import { db } from '$lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const submitEnquiry = async (name, email, phoneNumber, trackingDetails = {}) => {
	try {
		let userIp = 'Unknown';
		try {
			const ipResponse = await fetch('https://api.ipify.org?format=json');
			const ipData = await ipResponse.json();
			userIp = ipData.ip;
		} catch (e) {
			console.warn('Could not fetch IP', e);
		}

		const enquiryData = {
			docType: 'ENQUIRY',
			name: name,
			email: email,
			phoneNumber: phoneNumber,
			ip: userIp,

			// --- Tracking Data ---
			utm_source: trackingDetails.utm_source || 'direct',
			utm_medium: trackingDetails.utm_medium || '',
			utm_campaign: trackingDetails.utm_campaign || '',
			utm_term: trackingDetails.utm_term || '',
			utm_content: trackingDetails.utm_content || '',
			gclid: trackingDetails.gclid || '',
			gad_source: trackingDetails.gad_source || '',
			gbraid: trackingDetails.gbraid || '',
			wbraid: trackingDetails.wbraid || '',
			pageUrl: window.location.href,

			createdAt: serverTimestamp()
		};
		const docRef = await addDoc(collection(db, 'godrejarden'), enquiryData);
		return { success: true, id: docRef.id };
	} catch (error) {
		console.error('Error adding enquiry: ', error);
		return { success: false, error: error.message };
	}
};
