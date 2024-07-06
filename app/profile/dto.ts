export class User {
	id: string;
	firstName: string;
	lastName: string;
	subscriptionClassId: number;
	primaryResearchFieldId: number;
	orgId: string;
	researchFields: number[];
	email: string;
	isEmailVerified: boolean;
	isVerified: boolean;
	isNewsletterSubscribed: boolean;
	active: boolean;
}
