import { ref } from '@vue/reactivity';

export const userId = ref('');
export const userEmail = ref('');
export const userToken = ref('');

export const updateUser = (userData) => {
	if (!userData) {
		userId.value = '';
		userEmail.value = '';
		userToken.value = '';
		localStorage.clear();
	}
	if (userData) {
		userId.value = userData.userId;
		userEmail.value = userData.email;
		userToken.value = userData.token;
		localStorage.setItem('user', JSON.stringify(userData));
	}
};
